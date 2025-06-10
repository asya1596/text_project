<template>
    <div :class="['radibutton', {
        'radibutton--active': isActive,
        'radibutton--disabled': isBlocked,
    }]">
        <div class="radibutton-box"
             @click="checkbox">
            <input type="checkbox"
                   :id="radibuttonId"
                   :value="isActive" />
        </div>
        <label :for="radibuttonId">
            {{ labelText }}
            <slot></slot>
        </label>
    </div>
</template>

<script setup>
defineProps({
    isActive: {
        type: Boolean,
        required: true,
    },
    radibuttonId: {
        type: String,
        default: "radibutton-id",
    },
    labelText: {
        type: String,
        default: "",
    },
    isBlocked: {
        type: Boolean,
        default: false,
    }
})
</script>

<script>
export default {
    methods: {
        checkbox() {
            if (!this.isBlocked) {
                this.$emit("update:is-active", !this.isActive);
            }
            // с помощью конструкции if применили условие (если не isBlocked (он не true), 
            // то мы поднимаем событие update)
            //  в противном случае событие не поднимается.
        },
    },
}
</script>

<style lang="scss" scoped>
.radibutton-box {
    position: relative;
    height: 20px;
    width: 20px;
    border: 2px solid var(--thirdary);
    cursor: pointer;
    border-radius: 50px;
    min-width: max-content;

    &:hover {
        border-color: var(--secondary);
    }

    &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 12px;
        height: 12px;
        border-radius: 50px;
        background-color: var(--secondary);
        opacity: 0;
    }

    input {
        position: absolute;
        width: 0;
        height: 0;
        overflow: hidden;
    }
}

.radibutton--active {
    border-color: var(--secondary);

    .radibutton-box {
        &::before {
            opacity: 1;
        }
    }

}

.radibutton {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 5px;

    label {
        user-select: none;
    }
}

.radibutton--disabled {
    cursor: not-allowed;
    opacity: 0.5;

    label {
        cursor: not-allowed;
    }

    .radibutton-box {
        cursor: not-allowed;

        &:not(.radibutton--disabled):hover {
            border-color: var(--thirdary);
        }
    }
}
</style>
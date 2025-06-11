<template>
    <div :class="['radio-button', {
        'radio-button--active': isActive,
        'radio-button--disabled': isBlocked,
    }]">
        <div class="radio-button-box"
             @click="checkbox">
            <input type="checkbox"
                   :id="radioButtonId"
                   :value="isActive" />
        </div>
        <label :for="radioButtonId">
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
    radioButtonId: {
        type: String,
        default: "radio-button-id",
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
.radio-button-box {
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

.radio-button--active {
    border-color: var(--secondary);

    .radio-button-box {
        &::before {
            opacity: 1;
        }
    }

}

.radio-button {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 5px;

    label {
        user-select: none;
    }
}

.radio-button--disabled {
    cursor: not-allowed;
    opacity: 0.5;

    label {
        cursor: not-allowed;
    }

    .radio-button-box {
        cursor: not-allowed;

        &:not(.radio-button--disabled):hover {
            border-color: var(--thirdary);
        }
    }
}
</style>
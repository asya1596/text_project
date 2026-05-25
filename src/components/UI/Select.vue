<template>
    <div class="select">
        <div class="dropdown-list" :class="{ 'dropdown-list--active': isOpen }" @click="handelClick"
            id="dropdown-list-id">
            <p>{{ modelValue }}</p>
            <ul class="dropdown-list-element">
                <li v-for="item in items" :key="item.value" @click="handleShoose(item.name)">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        handleShoose(name) {
            this.$emit('update:modelValue', name);
            // функция $emit поднимает событие update:modelValue.
            // name -аргумент функции.
        },
        handelClick() {
            this.isOpen = !this.isOpen;
        },
    },

}


</script>

<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        default: () => [],
    },

})

</script>

<style lang="scss" scoped>
.select {
    position: relative;
    display: inline-block;
    width: 401px;
    box-sizing: border-box;
}

.dropdown-list {
    background-color: var(--select-bg-default);
    border: 2px solid var(--select-border);
    border-radius: 5px;
    padding: 3px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--select-text);

    &:hover {
        border-color: var(--select-border-hover);
    }

    p {
        user-select: none;
        margin: 0;
    }
}

.dropdown-list-element {
    background-color: var(--select-bg-list);
    position: absolute;
    top:80%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 2px;
    border: 2px solid var(--select-border);
    border-top: 0;
    border-radius: 0 0 5px 5px;
    padding: 5px 0;
    box-sizing: border-box;
    overflow-y: auto;
    max-height: 200px;
    transform-origin: top;
    transform: scaleY(0);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;

    li {
        margin: 0 5px;
        padding: 8px 15px;
        border: 1px solid var(--select-border);
        border-radius: 4px;
        box-sizing: border-box;
        list-style: none;
        cursor: pointer;

        &:hover {
            background: var(--select-bg-option-hover);
            border-color: var(--select-border-hover);
            color: var(--select-option-hover-text);
        }
    }
}

.dropdown-list--active {
    border-radius: 5px 5px 0 0;
    border-color: var(--select-border-active);
    background-color: var(--select-bg-active);

    &:hover {
        border-color: var(--select-border-active);
    }

    .dropdown-list-element {
        transform: scaleY(1);
        opacity: 1;
        border-color: var(--select-border-active);
        background-color: var(--select-bg-list);
    }
}
</style>

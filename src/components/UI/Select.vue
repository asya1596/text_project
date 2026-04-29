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
    /* Чтобы не растягивался на всю ширину */
    width: 401px;
}

.dropdown-list {
    border: 2px solid var(--thirdary);
    border-radius: 5px;
    padding: 3px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--background);

    &:hover {
        border-color: var(--secondary);
    }

    p {
        user-select: none;
        margin: 0;
    }
}

.dropdown-list-element {
    background-color: var(--backgroundwall);
    position: absolute;
    top:80%;
    /* Сразу под полем ввода */
    left: 0;
    right: 0;
    z-index: 1000;
    /* Выше всего контента */
    margin-top: 2px;
    border: 2px solid var(--thirdary);
    border-top: 0;
    border-radius: 0 0 5px 5px;
    padding: 5px 0;
    overflow-y: auto;
    /* Если список длинный */
    max-height: 200px;
    /* Ограничение высоты */
    transform-origin: top;
    transform: scaleY(0);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;

    li {
        margin: 0 5px;
        padding: 8px 15px;
        border: 1px solid var(--thirdary);
        border-radius: 4px;
        list-style: none;
        cursor: pointer;

        &:hover {
            background: var(--bary);
            border-color: var(--secondary);
            color: white;
        }
    }
}

.dropdown-list--active {
    border-radius: 5px 5px 0 0;
    border-color: var(--secondary);
    background-color: var(--background-wall);

    .dropdown-list-element {
        transform: scaleY(1);
        opacity: 1;
        border-color: var(--secondary);
        background-color: var(--background-wall);
    }
}
</style>
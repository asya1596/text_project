<template>
    <div class="select">
        <div class="dropdown-list"
             :class="{ 'dropdown-list--active': isOpen }"
             @click="handelClick"
             id="dropdown-list-id">
            <p>{{ modelValue }}</p>
            <!-- todo сделать выпадающий список больше похожий на прототип (сейчас анимация и расположение похожи на аккордеон) -->
            <ul class="dropdown-list-element">
                <li v-for="item in items"
                    :key="item.value"
                    @click="handleShoose(item.name)">
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
    
}

.dropdown-list {
    border: 2px solid var(--thirdary);
    border-radius: 5px;
    padding: 3px;
    width: 400px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    

    &:hover {
        border-color: var(--secondary);
    }

    p {
        user-select: none;
    }

}

.dropdown-list-element {
    background-color: var(--backgroundwall);
    transform: scaleY(0);
    position: absolute;
    z-index: 1;
    margin: 3px;
    left: -3px;
    border: 2px solid var(--thirdary);
    border-radius: 0px 0px 5px 5px;
    padding: 5px;
    border-top: 0px;
    width: 400px;
    transition: 0.2s ease;
    

    li {
        margin: 5px;
        padding: 5px;
        border: 1px solid var(--thirdary);
        border-radius: 5px;

    }
}

.dropdown-list--active {
    border-radius: 5px 5px 0px 0px;
    border-color: var(--secondary);
    

    .dropdown-list-element {
        transform: scaleY(1) translateY(0%);
        border-color: var(--secondary);

        li {
            &:hover {
                background: var(--bary);
                border-color: var(--secondary);
            }
        }
    }
}
</style>
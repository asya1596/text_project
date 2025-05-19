<template>
    <div class="listItem"
         :class="{ 'listItem--active': isOpen }"
         @click="handelClick">
        <p>{{ modelValue }}</p>
        <ul class="listItem_elem" v-show="isOpen">
            <li v-for="item in items"
                :key="item.value"
                @click="handleShoose(item.name)">
                {{ item.name }}
            </li>
        </ul>
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
.listItem {
    border: 2px solid var(--thirdary);
    width: max-content;
    padding: 5px;
}
</style>
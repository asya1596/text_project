<template>
    <div class="item" :class="{ 'item--active': isOpen}" @click="handlclick">
        <select class="item_list">
            <option disable
                    value=""> Выбери значение</option>
            <option class="item_list-point"
                    v-for="option in options"
                    :value="option.value"> {{ option.text }}</option>
        </select>
    </div>


</template>

<script>
export default {
    data() {
        return {
            selected: 'A',
            options: [
                { text: 'Один', value: 'A' },
                { text: 'Два', value: 'B' },
                { text: 'Три', value: 'C' },
            ],
            isOpen: false,
        }
    },
    methods: {
        handlclick() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>


<style lang="scss" scoped>
.item {
    border: 2px solid var(--thirdary);
    width: max-content;
    border-radius: 5px;
    text-align: right;
    
    
}

</style>

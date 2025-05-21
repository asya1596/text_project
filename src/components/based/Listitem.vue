<template>
    <div class="select">
        <label for="listItemId"> {{ labelText }}</label>
        <div class="listItem"
             :class="{ 'listItem--active': isOpen }"
             @click="handelClick"
             id="listItemId">
            <p>{{ modelValue }}</p>
            <ul class="listItem_elem">
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
    labelText: {
        type: String,
        default: "",
    }
})

</script>

<style lang="scss" scoped>
.select {
    position: relative;
    margin-right: 5px;
    cursor: pointer;

    label {
        position: absolute;
        left: 170px;
        padding: 5px;
    }
}

.listItem {
    border: 2px solid var(--thirdary);
    width: 170px;
    border-radius: 5px;
    text-align: center;

    .listItem_elem {
        transform: scaleY(0) translateY(-100%);
        height: 0;
        transition: all 0.2s ease;

        li {
            border: 1px solid var(--secondary);
            border-radius: 5px;
            margin: 4px;
            color: var(--background);
        }
    }

    p {
        text-align: center;
        margin: 4px;
        height: 27px;
        border: 1px solid var(--thirdary);
        border-radius: 5px;
        color: var(--background);

        &:hover {
            border-color: var(--secondary);
        }
    }

    &:hover {
        border-color: var(--secondary);
        box-shadow: 1px 1px 3px 1px var(--bary);
    }
}



.listItem--active {
    border: 2px solid var(--secondary);

    .listItem_elem {
        transform: scaleY(1) translateY(0%);
        height: 84px;
    }

}
</style>
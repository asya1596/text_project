<template>
    <nav v-if="items && items.length"
         class="bread-crumbs">
        <!--отображать если есть массив и длина массива(он не пустой) -->
        <ul>
            <li v-for="(item, itemIndex) in items"
                :key="itemIndex">
                <!-- отрисовать элементы массива по и использовать ключ, для отслеживания изменений в массиве -->
                <router-link v-if="itemIndex !== items.length"
                             to="/somepath"
                             :title="item.label"
                             class="crumb-link">
                    <!-- ссылка в крошке, в которой она отобржается,
                если эта крошка не последний элемент массива -->
                    {{ item.label }}
                </router-link>
                <span v-else>{{ item.label }}</span>
                <!-- последний элемент крошки -->
                <span v-if="items[itemIndex + 1]"
                      class="crumb-separator">/</span>
            </li>
        </ul>
    </nav>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.bread-crumbs {
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        li .crumb-link {
            color: var(--thirdary);
            margin: 5px;
            &:hover{
                color: var(--secondary);
            }

        }
        li .crumb-separator{
            color: var(--thirdary);
        }
    }
}
</style>
<template>
    <nav v-if="items && items.length"
         class="bread-crumbs">
        <!--отображать если есть массив и длина массива(он не пустой) -->
        <ul>
            <li v-for="(item, itemIndex) in items"
                :key="itemIndex">
                <!-- отрисовать элементы массива и использовать ключ, для отслеживания изменений в массиве -->
                <router-link v-if="showLink(itemIndex)"
                             to="item.url || myCrumbs.url"
                             class="crumb-link">
                    <!-- ссылка в крошке, в которой она отобржается,
                если эта крошка не последний элемент массива -->
                    {{ item.label }}
                </router-link>
                <span class="last-crumb"
                      v-else>{{ item.label }}</span>
                <!-- последний элемент крошки -->
                <circl-for-crumb v-if="showLink(itemIndex)"
                                 class="circl-for-crumb" />
            </li>

        </ul>
    </nav>
</template>

<script>

export default {
    computed: {
        showLink() {
            return (itemIndex) => itemIndex !== this.items.length - 1;
        }
    }
}
</script>

<script setup>
import CirclForCrumb from '@/assets/img/CirclForCrumb.vue';
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
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
        user-select: none;
        cursor: pointer;

        .circl-for-crumb {
            margin-left: 3px;

            &:deep path {
                fill: var(--bary);
            }
        }

        li .crumb-link {
            color: var(--bary);

            &:hover {
                color: var(--secondary);
            }
        }

        li .last-crumb {
            color: var(--background);
        }
    }
}
</style>
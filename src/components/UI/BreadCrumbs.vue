<template>
    <nav
        v-if="items && items.length"
        class="bread-crumbs"
        aria-label="Хлебные крошки"
    >
        <ul>
            <li
                v-for="(item, itemIndex) in items"
                :key="itemIndex"
            >
                <router-link
                    v-if="showLink(itemIndex)"
                    :to="item.url"
                    class="crumb-link"
                >
                    {{ item.label }}
                </router-link>

                <span
                    v-else
                    class="last-crumb"
                >
                    {{ item.label }}
                </span>

                <circl-for-crumb
                    v-if="showLink(itemIndex)"
                    class="circl-for-crumb"
                />
            </li>
        </ul>
    </nav>
</template>

<script setup>
import CirclForCrumb from '@/assets/img/CirclForCrumb.vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => [],
    },
});

function showLink(itemIndex) {
    return itemIndex !== props.items.length - 1;
}
</script>

<style lang="scss" scoped>
.bread-crumbs {
    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 6px;
        padding: 0;
        margin: 0;
        user-select: none;
    }

    li {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .crumb-link {
        color: var(--breadcrumbs-link-color);
        text-decoration: none;
        transition:
            color 0.2s ease,
            text-decoration-color 0.2s ease;

        &:hover {
            color: var(--breadcrumbs-link-hover-color);
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        &:focus-visible {
            outline: 2px solid var(--breadcrumbs-focus-color);
            outline-offset: 3px;
            border-radius: 4px;
        }
    }

    .last-crumb {
        color: var(--breadcrumbs-current-color);
        font-weight: 600;
        cursor: default;
    }

    .circl-for-crumb {
        flex-shrink: 0;

        &:deep(path) {
            fill: var(--breadcrumbs-separator-color);
            transition: fill 0.2s ease;
        }
    }

    li:hover .circl-for-crumb:deep(path) {
        fill: var(--breadcrumbs-separator-hover-color);
    }
}
</style>
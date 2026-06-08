<template>
    <ul class="pagination">
        <li>
            <button
                :class="[
                    'btn-arrow',
                    { 'btn-arrow--disabled': currentPage === 1 }
                ]"
                @click="prevPage"
            >
                <arrow-icon class="arrow-left" />
            </button>
        </li>

        <li
            v-for="(page, index) in visiblePages"
            :key="index"
            :class="[
                'page',
                { points: page === points },
                { 'page--active': currentPage === page }
            ]"
            @click="changePage(page)"
        >
            {{ page }}
        </li>

        <li>
            <button
                :class="[
                    'btn-arrow',
                    { 'btn-arrow--disabled': currentPage === totalPages }
                ]"
                @click="nextPage"
            >
                <arrow-icon class="arrow-right" />
            </button>
        </li>
    </ul>
</template>

<script setup>
import { computed } from 'vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
const props = defineProps({
    totalPages: {
        type: Number,
        required: true,
    },
    currentPage: {
        type: Number,
        default: 1,
    },
});

const emit = defineEmits(['update:current-page']);

const points = '...';

const visiblePages = computed(() => {
    const pages = [];

    pages.push(1);

    if (props.currentPage > 3) {
        pages.push(points);
    }

    const start = Math.max(2, props.currentPage - 1);
    const end = Math.min(
        props.totalPages - 1,
        props.currentPage + 1
    );

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (props.totalPages - props.currentPage > 3) {
        pages.push(points);
    }

    if (props.totalPages > 1) {
        pages.push(props.totalPages);
    }

    return pages;
});

function prevPage() {
    if (props.currentPage > 1) {
        emit(
            'update:current-page',
            props.currentPage - 1
        );
    }
}

function nextPage() {
    if (props.currentPage < props.totalPages) {
        emit(
            'update:current-page',
            props.currentPage + 1
        );
    }
}

function changePage(page) {
    if (typeof page === 'number') {
        emit('update:current-page', page);
    }
}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    gap: 5px;
    color: var(--pagination-text-color);
    justify-content: left;
    align-items: center;
    user-select: none;
    max-width: max-content;

    .page {
        border: 1px solid var(--pagination-border-color);
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;

        &:not(.page--active, .points):hover {
            border-color: var(--pagination-hover-border-color);
            color: var(--pagination-hover-text-color);
        }
    }

    .page--active {
        background-color: var(--pagination-active-background-color);
        border-color: var(--pagination-active-border-color);
        color: var(--pagination-active-text-color);
    }

    .points {
        border-width: 0;
        cursor: default;
    }

    .arrow-left {
        transform: rotate(-90deg);
    }

    .arrow-right {
        transform: rotate(90deg);
    }

    .btn-arrow {
        cursor: pointer;
        background: none;
        border: none;

        &:hover:deep(path) {
            fill: var(--pagination-arrow-hover-color);
        }
    }

    .btn-arrow--disabled {
        opacity: 0.5;
        pointer-events: none;
    }
}
</style>
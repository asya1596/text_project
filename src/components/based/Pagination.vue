<template>
    <ul class="pagination">
        <li>
            <button :class="['btn-arrow', { 'btn-arrow--disabled': currentPage === 1 }]"
                    @click="prevPage">
                <arrow-icon class="arrow-left" />
            </button>
        </li>
        <li v-for="(page, index) in visiblePages"
            :key="index"
            :class="['page', { 'points': points === page }, { 'page--active': currentPage === page }]"
            @click="changePage(page)">
            <!-- отображение всех страниц с помощью v-for, 
                 добавление обработчика события клика по странице, 
                 добавление  активного класса при клике на страницу-->
            {{ page }}
        </li>
        <li>
            <button :class="['btn-arrow', { 'btn-arrow--disabled': currentPage === totalPages }]"
                    @click="nextPage">
                <arrow-icon class="arrow-right" />
            </button>
        </li>
    </ul>



</template>

<script setup>
import ArrowIcon from '@/assets/img/ArrowIcon.vue';
defineProps({
    totalPages: {
        type: Number,
        required: true,
    },
    // всего траниц для пагинации
    currentPage: {
        type: Number,
        default: 1,
    },
    // текущая страница, по дефолту 1

})
</script>

<script>
export default {
    data() {
        return {
            points: '...',
        }
    },
    computed: {
        visiblePages() {
            const pages = [];
            // объявили константу(не изменяемую пременную, которая содержит в себе пустой массив)
            pages.push(1);
            // добавили в пустой массив первую страницу
            if (this.currentPage > 3) {

                pages.push(this.points);
            }
            // добавляем точки в массив,если есть пропуск (если текущая страница больше 3)
            const start = Math.max(2, this.currentPage - 1);
            // добавляем страницу до текущей 
            const end = Math.min(this.totalPages - 1, this.currentPage + 1);
            // добавляем страницу после  текущей 
            for (let i = start; i <= end; i++) {
                pages.push(i);
                // c помощью цикла for заполняем наш массив pages числами в диапазоне от start до end включительно
            }
            if (this.totalPages - this.currentPage > 3) {
                pages.push(this.points);
                // добавляем точки в массив,если есть пропуск(в конце)
            }
            if (this.totalPages > 1) {
                pages.push(this.totalPages);
            }
            // добавляем последнюю страницу в массив
            return pages;
        }
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.$emit('update:current-page', this.currentPage - 1);
            }
            // метод, который поднимает событие перехода на предидущую страницу(клик по кнопкам-стрелкам)
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('update:current-page', this.currentPage + 1);
            }
            // метод, который поднимает событие перехода на следующую страницу(клик по кнопкам-стрелкам)
        },
        changePage(page) {
            if (typeof page === 'number') {
                // условие -проверка на тип страницы в методе.
                this.$emit('update:current-page', page);
            }
        }
        // метод, для обработки клика по номеру страницы, ей же присваивается активный класс. 
    },
}
</script>


<style lang="scss" scoped>
.pagination {
    display: flex;
    gap: 5px;
    color: var(--thirdary);
    justify-content: left;
    align-items: center;
    user-select: none;
    max-width: max-content;
    cursor: pointer;

    .page {
        border: 1px solid var(--thirdary);
        padding: 5px;
        border-radius: 5px;

        &:not(.page--active, .points):hover {
            border-color: var(--secondary);
            color: var(--secondary);
        }
    }

    .page--active {
        background-color: var(--background);
        border-color: var(--background);
        color: var(--primary);
    }

    .points {
        border-width: 0px;
    }

    .arrow-left {
        transform: rotate(-90deg);
    }

    .arrow-right {
        transform: rotate(90deg);
    }

    .btn-arrow {

        &:hover:deep path {
            fill: var(--secondary);
        }
    }
}
</style>

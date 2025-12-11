<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="header in headers"
                    :key="header"
                    @click="sortByHeader(header)"
                    :class="{
                        'sorted-asc': sortBy === header && sortDirection === 'asc',
                        'sorted-desc': sortBy === header && sortDirection === 'desc'
                    }">
                    {{ header }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in filteredAndSortedRows"
                :key="`row-${index}`">
                <td v-for="cell in row"
                    :key="cell">{{ cell }}</td>
            </tr>
        </tbody>
    </table>
    <div class="table-controls">
        <input v-model="filterText"
               placeholder="Поиск по таблице..." />
    </div>
</template>

<script setup>
defineProps({
    headers: {
        type: Array,
        required: true,
    },
    rows: {
        type: Array,
        required: true,
    },
})
</script>

<script>
export default {

    data() {
        return {
            filterText: '',
            sortBy: null,
            sortDirection: 'asc',
        };
    },
    computed: {
        filteredAndSortedRows() {
            // Фильтрация
            let result = this.rows.filter(row =>
                row.some(cell =>
                    cell.toString().toLowerCase().includes(this.filterText.toLowerCase())
                )
            );

            // Сортировка, если задан столбец для сортировки
            if (this.sortBy) {
                const sortIndex = this.headers.indexOf(this.sortBy);
                result = result.sort((a, b) => {
                    const aValue = a[sortIndex];
                    const bValue = b[sortIndex];

                    const aValueProcessed = typeof aValue === 'number'
                        ? aValue
                        : aValue.toLowerCase();
                    const bValueProcessed = typeof bValue === 'number'
                        ? bValue
                        : bValue.toLowerCase();

                    if (aValueProcessed < bValueProcessed) {
                        return this.sortDirection === 'asc' ? -1 : 1;
                    }
                    if (aValueProcessed > bValueProcessed) {
                        return this.sortDirection === 'asc' ? 1 : -1;
                    }
                    return 0;
                });
            }

            return result;
        },
    },
    methods: {
        sortByHeader(header) {
            if (this.sortBy === header) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortBy = header;
                this.sortDirection = 'asc';
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.table-controls {
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
}

input {
    padding: 8px;
    border: 1px solid var(--thirdary);
    border-radius: 4px;
}

button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background: var(--bary);
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: var(--mono);
    }
}

.table {
    width: 30%;
    border-collapse: collapse;
    border-radius: 5px;
}

th,
td {
    border: 1px solid var(--thirdary);
    padding: 8px;
    text-align: center;
    color: var(--background);
    user-select: none;
}

th {
    border: 2px solid var(--thirdary);
    text-align: center;
    position: relative;
    padding-right: 24px;
    /* Отступ для стрелки сортировки */
    cursor: pointer;
}

/* Индикаторы сортировки */
.table th.sorted-asc,
.table th.sorted-desc {
    background-color: var(--thirdary);
}

.table th.sorted-asc::after {
    content: '▲';
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    
}

.table th.sorted-desc::after {
    content: '▼';
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: var(--background);
}

/* Эффект наведения на заголовки */
.table th:hover {
    background-color: var(--thirdary);
    border-color: var(--secondary);
}
</style>
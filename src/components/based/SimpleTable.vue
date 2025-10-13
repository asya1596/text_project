<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="header in headers"
                    :key="header">{{ header }}</th>
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
        <button v-for="header in headers"
                :key="header"
                @click="() => {
                    sortBy = header;
                    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
                }">
            {{ header }}
        </button>
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
            // 1. Применяем фильтрацию
            let result = this.rows.filter(row =>
                row.some(cell =>
                    cell.toString().toLowerCase().includes(this.filterText.toLowerCase())
                )
            );

            // 2. Получаем индекс столбца для сортировки
            const sortIndex = this.headers.indexOf(this.sortBy);

            // 3. Если столбец найден — применяем сортировку
            if (sortIndex !== -1) {
                result = result.sort((a, b) => {
                    // Получаем значения ячеек по индексу столбца
                    const aValue = a[sortIndex];
                    const bValue = b[sortIndex];

                    // Преобразуем значения для корректного сравнения
                    const aValueProcessed = typeof aValue === 'number'
                        ? aValue
                        : aValue.toLowerCase();
                    const bValueProcessed = typeof bValue === 'number'
                        ? bValue
                        : bValue.toLowerCase();

                    // Выполняем сравнение с учётом направления сортировки
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

}

th {
    border: 2px solid var(--thirdary);
    text-align: center;
}
</style>
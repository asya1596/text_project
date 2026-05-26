<template>
    <div class="simple-table">
        <div class="simple-table__controls">
            <input
                v-model="filterText"
                class="simple-table__search"
                placeholder="Поиск по таблице..."
            />
        </div>

        <div class="simple-table__wrapper">
            <table class="simple-table__table">
                <thead>
                    <tr>
                        <th
                            v-for="header in headers"
                            :key="header"
                            :class="{
                                'simple-table__header--sorted-asc': sortBy === header && sortDirection === 'asc',
                                'simple-table__header--sorted-desc': sortBy === header && sortDirection === 'desc',
                            }"
                            @click="sortByHeader(header)"
                        >
                            {{ header }}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="(row, index) in filteredAndSortedRows"
                        :key="`row-${index}`"
                    >
                        <td
                            v-for="(cell, cellIndex) in row"
                            :key="`${cell}-${cellIndex}`"
                        >
                            {{ cell }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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
});
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
            let result = this.rows.filter((row) =>
                row.some((cell) =>
                    cell.toString().toLowerCase().includes(this.filterText.toLowerCase()),
                ),
            );

            if (this.sortBy) {
                const sortIndex = this.headers.indexOf(this.sortBy);

                result = [...result].sort((a, b) => {
                    const aValue = a[sortIndex];
                    const bValue = b[sortIndex];

                    const aValueProcessed = typeof aValue === 'number'
                        ? aValue
                        : aValue.toString().toLowerCase();

                    const bValueProcessed = typeof bValue === 'number'
                        ? bValue
                        : bValue.toString().toLowerCase();

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
                return;
            }

            this.sortBy = header;
            this.sortDirection = 'asc';
        },
    },
};
</script>

<style lang="scss" scoped>
.simple-table {
    width: 100%;
    min-width: 0;
}

.simple-table__controls {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 14px;
}

.simple-table__search {
    width: min(100%, 320px);
    padding: 10px 14px;
    color: var(--table-text);
    background: var(--table-search-background);
    border: 1px solid var(--table-border);
    border-radius: 8px;
    outline: none;
    transition:
        border-color 0.2s ease-out,
        box-shadow 0.2s ease-out;
}

.simple-table__search::placeholder {
    color: var(--table-muted-text);
}

.simple-table__search:focus {
    border-color: var(--table-accent);
    box-shadow: 0 0 0 3px var(--table-focus-shadow);
}

.simple-table__wrapper {
    width: 100%;
    overflow-x: auto;
    border: 1px solid var(--table-border);
    border-radius: 8px;
}

.simple-table__table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
    background: var(--table-background);
}

th,
td {
    padding: 12px 14px;
    color: var(--table-text);
    text-align: center;
    border-bottom: 1px solid var(--table-border);
    user-select: none;
}

th {
    position: relative;
    padding-right: 28px;
    color: var(--table-header-text);
    background: var(--table-header-background);
    cursor: pointer;
    transition:
        background 0.2s ease-out,
        color 0.2s ease-out;
}

td {
    background: var(--table-row-background);
}

tbody tr:hover td {
    background: var(--table-row-hover);
}

.simple-table__header--sorted-asc,
.simple-table__header--sorted-desc,
th:hover {
    color: var(--table-active-header-text);
    background: linear-gradient(
        135deg,
        var(--table-primary),
        var(--table-accent)
    );
}

.simple-table__header--sorted-asc::after {
    content: '▲';
    position: absolute;
    top: 50%;
    right: 10px;
    font-size: 11px;
    transform: translateY(-50%);
}

.simple-table__header--sorted-desc::after {
    content: '▼';
    position: absolute;
    top: 50%;
    right: 10px;
    font-size: 11px;
    transform: translateY(-50%);
}

@media (max-width: 640px) {
    .simple-table__search {
        width: 100%;
    }

    th,
    td {
        padding: 10px 12px;
        font-size: 13px;
    }
}
</style>
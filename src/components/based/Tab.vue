<template>
    <div class="nav-tab">
        <nav>
            <ul>
                <li v-for="tab in tabs"
                    :class="['tab-element', { 'tab-element--active': tab.id === isActive }]"
                    @click="handleClick(tab.id)">
                    {{ tab.label }}
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { id: "1", label: "Таб 1" },
                { id: "2", label: "Таб 2" },
                { id: "3", label: "Таб 3" },
                { id: "4", label: "Таб 4" },
                { id: "5", label: "Таб 5" },
            ],
            isActive: "",
        }
    },
    methods: {
        handleClick(tabId) {
            this.isActive = tabId
        },
    },
}
</script>


<style lang="scss" scoped>
.nav-tab {
    display: flex;
    position: relative;
    max-width: max-content;

    .tab-element {
        display: inline-block;
        border: 2px solid var(--thirdary);
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        font-size: 16px;
        color: var(--background);
        cursor: pointer;
        user-select: none;
        &:hover{
            border-color: var(--secondary);
        }
    }
    .tab-element--active{
        background-color: var(--background);
        border-width: 0px;
        color:var(--primary);
    }

}
</style>
<template>
    <ul class="nav-tab">
        <li v-for="tab in tabs"
            :class="['tab-element', { 'tab-element--active': tab.id === tabChoose }]"
            @click="handleClick(tab.id)
                ">
            {{ tab.label }}
        </li>
    </ul>
</template>

<script>
export default {
    methods: {
        handleClick(tabId) {
            this.$emit("update:tab-choose", tabId)
        },
    },
}
</script>
<script setup>
defineProps({
    tabs: {
        type: Array,
        default: [],
    },
    tabChoose: {
        type: String,
        default: "",
    }
})

</script>


<style lang="scss" scoped>
.nav-tab {
    display: flex;
    position: relative;
    max-width: max-content;
    gap: 5px;

    .tab-element {
        display: inline-block;
        border: 2px solid var(--thirdary);
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
        color: var(--background);
        cursor: pointer;
        user-select: none;

        &:hover {
            border-color: var(--secondary);
        }
    }

    .tab-element--active {
        background-color: var(--background);
        border-width: 0px;
        color: var(--primary);
    }

}
</style>
<template>
    <div class="list" :class="{ 'list--active': isOpen }" @click="handleСlick">
        <ul class="list-elem" :class="{ 'list-elem--deactive': !isOpen }">
            <li v-for="listItem in listItems">{{ listItem.message }} </li>
            <!-- с помощью цикла v-for пройтись по массиву строк и вывести listItem.message -->
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false,
            listItems: [
                { key: "value-1", message: "Выбери вариант ответа" },
                { key: "value-2", message: "Выбери этот пункт" },
                { key: "value-3", message: "Возьми меня на работу" },
                { key: "value-4", message: "Не хочешь ну и не бери" },
                // добавлен массив объектов(строк)
            ]
        }
            
    },
    methods: {
        handleСlick() {
            this.isOpen = !this.isOpen
        }
    }
}

</script>


<style lang="scss" scoped>
.list {
    border: 2px solid (var(--thirdary));
    border-radius: 5px;
    padding: 3px;
    max-width: max-content;
    height: 31px;

    &:hover {
        box-shadow: 1px 1px 3px 1px var(--bary);
    }

    .list-elem {
        color: var(--background);
        font-size: 14px;
        cursor: pointer;

        li {
            border: 1px solid (var(--thirdary));
            margin: 4px;
            border-radius: 5px;
            padding: 5px;

            &:hover {
                background-color: var(--bary);
            }
        }
    }
}

.list--active {
    border: 2px solid (var(--thirdary));
    height: 100%;
    transform: scaleY(1) translateY(0);
}

.list-elem--deactive {
    transform: scaleY(0) translateY(-100%);
    height: 0;
    padding: 0px;
}
</style>
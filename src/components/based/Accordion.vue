<template>
    <!-- Через V-bind привязали класс к переменной, которой задали значение Boolean  -->
    <!--  :class="{ 'accordion-elem--active': isOpen }" -->
    <!-- теперь будем чере класс задавать в стилях состояие Аккордиона -->
    <div class="accordion-elem " :class="{ 'accordion-elem--active': isOpen }" @click="handleСlick" id="accordion">
        <h3 class="accordion-item-head">
            Заголовок аккордиона
        </h3>
        <div class="accordion-item-body" :class="{ 'accordion-item-body--deactive': !isOpen }">
            <p>
                1. Текст первого пунта аккордиона, здесь я вам расскжу сквзку про белого бычка и ушлого старика.
            </p>
            <p>
                2. Текст второго пунта аккордиона, здесь я вам расскжу сквзку про Царя Солтана и царевну лягушку.
            </p>
            <p>
                3. Текст третьего пунта аккордиона, а тут я вам сказку не расскажу.
            </p>
        </div>
    </div>
</template>
<!-- Объявление переменной и присваивание ей значения Boolean -->
<!--Добавление метода обработки события handleСlick(клик по аккордиону)-->
<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        handleСlick() {
            // Мы присваиваем новое значение свойству экземпляра компонента, 
            // которое отлично от изначально присвоенного значения.('Это не false').
            this.isOpen = !this.isOpen;
        },
    },
}

</script>

<style lang="scss" scoped>
.accordion-elem {
    display: block;
    border: 2px solid var(--thirdary);
    width: 400px;
    border-radius: 10px;
    &:hover {
            box-shadow: 1px 1px 3px 1px var(--bary);
        }
}

.accordion-item-head {
    color: var(--background);
    cursor: pointer;
    font-size: 18px;
    width: 100%;
    font-weight: bold;
    text-align: center;
    transition: all 0.2s ease-out;
    border-radius: 10px;
    padding: 10px;
    border-bottom: 0px solid var(--thirdary);
}

.accordion-item-body {
    font-size: 14px;
    color: var(--background);
    cursor: pointer;
    width: 100%;
    transition: all 0.2s ease;
    transform: scaleY(1) translateY(0);
    height: 210px;
    padding: 5px;

    p {
        transition: all 0.2s ease;
        margin: 10px;
    }
}
.accordion-elem--active{
    border: 2px solid var(--secondary);
    .accordion-item-head{
        border-bottom: 2px solid var(--secondary);
    }
}

.accordion-item-body--deactive {
    transform: scaleY(0) translateY(-100%);
    height: 0;
    padding: 0px;

    p {
        margin: 0;
    }

}
</style>
<template>
    <!-- Через V-bind привязали класс к переменной, которой задали значение Boolean  -->
    <!--  :class="{ 'accordion-elem--active': isOpen }" -->
    <!-- теперь будем чере класс задавать в стилях состояие Аккордиона -->
    <div class="accordion-elem " :class="{ 'accordion-elem--active': isOpen }" @click="handleСlick" id="accordion">
        <div class="accordion-item">
            <h3 class="accordion-item-head">
                Заголовок аккордиона
            </h3>
            <div class="accordion-item-body">
                <p>
                    Текст первого пунта аккордиона, здесь я вам расскжу сквзку про белого бычка и ушлого старика.
                </p>
                <p>
                    Текст второго пунта аккордиона, здесь я вам расскжу сквзку про Царя Солтана и царевну лягушку.
                </p>
                <p>
                    Текст третьего пунта аккордиона, а тут я вам сказку не расскажу.
                </p>
            </div>
        </div>
    </div>
</template>
<!-- Объявление переменной и присваивание ей значения Boolean -->
<!--Добавление метода обработки события handleСlick(клик по аккордиону)-->
<script>
export default {
    data() {
        return {
            isOpen: false
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
    background-color: var(--thirdary);
    padding: 10px;
    width: 400px;
    border-radius: 10px;
}

.accordion-item-head {
    color: var(--primary);
    padding: 5px;
    cursor: pointer;
    font-size: 18px;
    width: 100%;
    font-weight: bold;
    text-align: center;
}

.accordion-item-body {
    font-size: 14px;
    color: var(--primary);
    cursor: pointer;
    width: 100%;
    padding: 5px 5px 5px 5px;
    transform: scaleY(0);
    max-height: 0px;
    transition: all 0.2s ease-out;
}

.accordion-elem--active {
    .accordion-item-body {
        transform: scaleY(1);
        max-height: fit-content;
    }
}
</style>
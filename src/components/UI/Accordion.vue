<template>
    <!-- Через V-bind привязали класс к переменной, которой задали значение Boolean  -->
    <!--  :class="{ 'accordion-elem--active': isOpen }" -->
    <!-- теперь будем чере класс задавать в стилях состояие Аккордиона -->
    <div class="accordion-elem "
         :class="{ 'accordion-elem--active': isOpen }"
         @click="handleСlick"
         id="accordion">
        <h3 class="accordion-item-head">
            <slot name="head"></slot>
        </h3>
        <div class="accordion-item-body"
             :class="{ 'accordion-item-body--deactive': !isOpen }">
            <div class="accordion-item-content">
                <slot name="content"></slot>
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
    border: 2px solid var(--accordion-border);
    width: 400px;
    overflow: hidden;
    border-radius: 10px;
    &:hover {
            border-color: var(--accordion-border-hover);
        }
    
}

.accordion-item-head {
    color: var(--accordion-text);
    cursor: pointer;
    font-size: 18px;
    width: 100%;
    font-weight: bold;
    text-align: center;
    transition: all 0.2s ease-out;
    border-radius: 10px;
    padding: 10px;
    border-bottom: 0px solid var(--accordion-border);
    user-select: none;
    
}

.accordion-item-body {
    font-size: 14px;
    color: var(--accordion-text);
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    max-height: 500px;
    overflow: hidden;
    opacity: 1;
    visibility: visible;
    transition: max-height 0.36s ease, padding 0.36s ease, opacity 0.24s ease;
    padding: 10px;
}

.accordion-item-content {
    transform: translateY(0);
    transition: transform 0.3s ease, opacity 0.28s ease;
}

.accordion-elem--active {
    border: 2px solid var(--accordion-border-active);

    .accordion-item-head {
        border-bottom: 2px solid var(--accordion-border-active);
    }
}

.accordion-item-body--deactive {
    max-height: 0;
    padding: 0px;
    opacity: 0;
    visibility: hidden;

    .accordion-item-content {
        opacity: 0;
        transform: translateY(-8px);
    }

    p {
        margin: 0;
    }

}
</style>

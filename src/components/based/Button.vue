<template>
    <button type="button"
            @click="handleButton"
            :class="['button', getClassButtonFromType()]">
            <!-- вызвали функцию, которая перебирает нам классы кнопки -->
        {{ buttonContent }}
    </button>
</template>

<script setup>
defineProps({
    buttonContent: {
        type: String,
        default: "Глупая кнопка",
    },
    typeButton: {
        type: String,
        default: "primary",

    }

})
</script>

<script>
export default {
    methods: {
        handleButton() {
            this.$emit("click")
        },
        getClassButtonFromType() {
            switch (this.typeButton) {
                case "primary":
                    return "button--primary";
                case "secondary":
                    return "button--secondary";
                case "approval":
                    return "button--approval";
                case "removal":
                    return "button--removal";
                case "warning":
                    return "button--warning";
                default:
                    return "button--primary";
                    // с помощью конструкции switch case перебрали все классы button и добавили им разные модификаторы.
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.button {
    width: 100px;
    height: 50px;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    
}

.button--primary {
    border-color: var(--thirdary);
    &:hover {
            border-color: var(--secondary);
        }
}
.button--secondary{
    border-color: var(--secondary);
    &:hover {
            border-color: var(--thirdary);
        }
    
}
.button--approval{
    border-color: var(--approval);
    &:hover {
            border-color: var(--approval-hover);
        }
}
.button--removal{
    border-color: var(--removal);
    &:hover {
            border-color: var(--removal-hover);
        }
}
.button--warning{
    border-color: var(--warning);
    &:hover {
            border-color: var(--warning-hover);
        }
}
</style>
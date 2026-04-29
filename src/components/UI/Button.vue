<template>
    <button type="button"
            @click="handleButton"
            :class="['button', getClassButtonFromType(), {
                
                'button--disabled': isBlocked,
                'button--download': isDownload,
            }]">
        <!-- вызвали функцию, которая перебирает нам классы кнопки 
        с помощью пропсов установили условные классы-->

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
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isDownload: {
        type: Boolean,
        default: false,
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
    color: var(--background);
}

.button--primary {
    border-color: var(--thirdary);

    &:not(.button--download):not(.button--disabled):hover {
        border-color: var(--secondary);
    }
    //с помощью псевдокласса not применили условие: если нет определенного класа, будет применяться ховер состояние 
    // и его стилию

}

.button--secondary {
    border-color: var(--secondary);

    &:not(.button--download):not(.button--disabled):hover {
        border-color: var(--thirdary);
    }
}

.button--approval {
    border-color: var(--approval);

    &:not(.button--download):not(.button--disabled):hover{
        border-color: var(--approval-hover);
    }
}

.button--removal {
    border-color: var(--removal);

    &:not(.button--download):not(.button--disabled):hover{
        border-color: var(--removal-hover);
    }
}

.button--warning {
    border-color: var(--warning);

    &:not(.button--download):not(.button--disabled):hover {
        border-color: var(--warning-hover);
    }
}
.button--download {
    position: relative;
    cursor: not-allowed;
    color: var(--background-wall);
    

    &::before {
        top:-2px;
        left: -2px;
        content: "";
        position: absolute;
        width: 40px;
        height: 50px;
        border-radius: 5px;
        background-color: var(--bary);
        opacity: 0.3;
    }
}
.button--disabled{
    cursor: not-allowed;
    opacity: 0.5;
}

</style>
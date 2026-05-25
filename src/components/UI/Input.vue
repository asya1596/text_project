<template>
    <div class="input-box" :class="{ 'input-box--active': modelValue, 'input-box--disabled': disabled }">
        <!-- присвоен класс для обозначения активного состояния. -->
        <label :for="inputId">{{ labelText }}</label>
        <input :value="modelValue" @input="handleInput" type="text" placeholder="Введите текст" :id="inputId" :disabled="disabled" />
    </div>
</template>

<script>

export default {
    methods: {
        // это метод, который поднимает собитие(update:modelValue)
        handleInput(event) {
            if (!this.disabled) {
                this.$emit("update:modelValue", event.target.value)
            }
        }
    }

}
</script>

<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    inputId: {
        type: String,
        default: "",
    },
    labelText: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    }

})

</script>

<style lang="scss" scoped>
.input-box {
    position: relative;
    padding-top: 20px;
    width: min-content;
    margin-bottom: 10px;
    transition: all 0.2s ease-out;
    

    input {
        background-color: var(--input-bg-default);
        border: 2px solid var(--input-border);
        width: 400px;
        transition: all 0.2s ease-out;
        color: var(--input-text);
        border-radius: 6px;
        padding: 5px;
        &:hover {
            border-color: var(--input-border-hover);
        }
    
        &:focus{
            border: 2px solid var(--input-border-active);
        }
        &::placeholder {
            color: var(--input-placeholder);
        }
    }
    


    label {
        position: absolute;
        top: -2px;
        right: 0;
        transition: all 0.2s ease-out;
        color: var(--input-label);
        user-select: none;
    }
}
.input-box--active{
    input{
        border: 2px solid var(--input-border-active);
    }
}

.input-box--disabled {
    input {
        background-color: var(--input-bg-disabled);
        border-color: var(--input-border-disabled);
        color: var(--input-text-disabled);
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
    }

    label {
        cursor: not-allowed;
    }
}
</style>

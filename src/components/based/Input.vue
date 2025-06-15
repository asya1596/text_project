<template>
    <div class="input-box" :class="{ 'input-box--active': modelValue }">
        <!-- присвоен класс для обозначения активного состояния. -->
        <label :for="inputId">{{ labelText }}</label>
        <input :value="modelValue" @input="handlInput" type="text" placeholder="Введите текст" :id="inputId" />
    </div>
</template>

<script>

export default {
    methods: {
        // это метод, который поднимает собитие(update:modelValue)
        handlInput(event) {
            this.$emit("update:modelValue", event.target.value)
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
        border: 2px solid var(--thirdary);
        width: 400px;
        transition: all 0.2s ease-out;
        color: var(--background);
        border-radius: 6px;
        padding: 5px;
        &:hover {
            border-color: var(--secondary);
        }
    
        &:focus{
            border: 2px solid var(--secondary);
        }
        &::placeholder {
            color: var(--background);
        }
    }
    


    label {
        position: absolute;
        top: -2px;
        right: 0;
        transition: all 0.2s ease-out;
        color: var(--background);
        user-select: none;
    }
}
.input-box--active{
    input{
        border: 2px solid var(--secondary);
    }
}
</style>
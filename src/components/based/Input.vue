<template>
    <div class="input-box">
        <input v-model="message" @click="handlInput(newValue)" type="text" placeholder="Введите текст" :id="inputId" />
        <label :for="inputId">{{ ladelText }}</label>
    </div>
</template>

<script>
// это объект, внутри которого объявлена функция-свойство дата, которая возвращает нам объект, 
// свойствами которого является реактивная переменная(message, inputId).
export default {
    data() {
        return {
            message: "",
            inputId: "",
        }
    },

    methods: {
        // это метод, который поднимает собитие(update:modelValue)
        handlInput(newValue) {
            this.$emit("update:modelValue", newValue)
        }
    }

}
</script>

<script setup>
defineProps({
    modelvalue: {
        type: String,
        required: true,
    },
    inputId: {
        type: String,
        default: "input-id"
    },
    ladelText: {
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
    }
}
</style>
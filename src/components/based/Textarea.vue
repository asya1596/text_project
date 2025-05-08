<template>
    <div class="textarea-box">
        <label for="textareaId">{{ labelText }}</label>
        <textarea :value="modelValue" @input="handlInput" placeholder="Введите несколько строчек" rows="5" cols="10"
            :id="textareaId">
        </textarea>
    </div>
</template>

<script>
export default {
    methods: {
        handlInput(event) {
            this.$emit("update:modelValue", event.target.value)
        }

    },
}
</script>

<script setup>
defineProps({
    modelValue: {
        type: String,
        requierd: true,
    },
    textareaId: {
        type: String,
        default: "",
    },
    labelText: {
        type: String,
        default: "",
    },

})
</script>

<style lang="scss" scoped>
.textarea-box {
    position: relative;
    padding-top: 20px;
    width: min-content;
    margin-bottom: 10px;
    transition: all 0.2s ease-out;
    


    textarea {
        border: 2px solid var(--thirdary);
        width: 400px;
        transition: all 0.2s ease-out;
        color: var(--background);
        border-radius: 10px;
        outline: none;
        &:hover {
                box-shadow: 1px 1px 3px 1px var(--bary);
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
    }
}
</style>
<template>
    <div class="textarea-box" :class="{'textarea-box--active': modelValue}">
        <label for="textareaId">{{ labelText }}</label>
        <label>{{ labelText }}</label>
        <textarea :value="modelValue" @input="handleInput" placeholder="Введите несколько строчек" rows="5" cols="10"
            :id="textareaId">
        </textarea>
    </div>
</template>

<script>
export default {
    methods: {
        handleInput(event) {
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
        padding: 5px;
        resize:none;
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
.textarea-box--active{
    textarea{
        border: 2px solid var(--secondary);
    }
}
</style>
<template>
    <div class="textarea-box" :class="{'textarea-box--active': modelValue, 'textarea-box--disabled': disabled}">
        <label>{{ labelText }}</label>
        <textarea :value="modelValue" @input="handleInput" placeholder="Введите несколько строчек" rows="5" cols="10" :disabled="disabled">
        </textarea>
    </div>
</template>

<script>
export default {
    methods: {
        handleInput(event) {
            if (!this.disabled) {
                this.$emit("update:modelValue", event.target.value)
            }
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
    labelText: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
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
        background-color: var(--textarea-bg-default);
        border: 2px solid var(--textarea-border);
        width: 400px;
        transition: all 0.2s ease-out;
        color: var(--textarea-text);
        border-radius: 10px;
        outline: none;
        padding: 5px;
        resize:none;
        &:hover {
            border-color: var(--textarea-border-hover);
        }
    
        &:focus{
            border: 2px solid var(--textarea-border-active);
        }
        &::placeholder {
            color: var(--textarea-placeholder);
        }
    }

    label {
        position: absolute;
        top: -2px;
        right: 0;
        transition: all 0.2s ease-out;
        color: var(--textarea-label);
        user-select: none;
    }
}
.textarea-box--active{
    textarea{
        border: 2px solid var(--textarea-border-active);
    }
}

.textarea-box--disabled {
    textarea {
        background-color: var(--textarea-bg-disabled);
        border-color: var(--textarea-border-disabled);
        color: var(--textarea-text-disabled);
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
    }

    label {
        cursor: not-allowed;
    }
}
</style>

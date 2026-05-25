<template>
    <div class="input-number-box" :class="[{ 'input-number-box--disabled': isBlocked }]">
        <label> {{ labelText }}</label>
        <input :value="numberValue" type="number" @input="handlInput" />

        <button class="btn-arrow arrow-up" @click="handlClickOnIncrementButton"><arrow-icon
                class="icon-arrow" /></button>
        <button class="btn-arrow arrow-down" @click="handlClickOnDecrementButton"><arrow-icon
                class="icon-arrow" /></button>
    </div>

</template>

<script setup>
import ArrowIcon from '@/assets/img/ArrowIcon.vue';
defineProps({
    labelText: {
        type: String,
        default: "",
    },
    idInputNumber: {
        type: String,
        default: "",
    },
    numberValue: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
})
</script>

<script>

export default {
    methods: {
        handlInput(event) {
            if (!this.isBlocked) {
                event.target.value = Number(event.target.value)
                this.$emit("update:numberValue", Number(event.target.value))
            }
        },
        handlClickOnIncrementButton() {
            if (!this.isBlocked) {
                this.$emit("update:numberValue", this.numberValue + 1)
            }

        },
        handlClickOnDecrementButton() {
            if (!this.isBlocked) {
                this.$emit("update:numberValue", this.numberValue - 1)
            }
        },

    },
}
</script>

<style lang="scss" scoped>
.input-number-box {
    position: relative;
    padding-top: 20px;
    width: min-content;
    margin-bottom: 10px;

    input {
        background-color: var(--input-bg-default);
        border: 2px solid var(--input-border);
        width: 400px;
        transition: all 0.2s ease-out;
        color: var(--input-text);
        border-radius: 6px;
        padding: 5px;
        appearance: textfield;

        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            height: 0;
            opacity: 0;
        }

        &:hover {
            border-color: var(--input-border-hover);
        }

        &:focus {
            border: 2px solid var(--input-border-active);
        }

        &::placeholder {
            color: var(--input-placeholder);
        }
    }

    label {
        position: absolute;
        top: -5px;
        right: 0;
        transition: all 0.2s ease-out;
        color: var(--input-label);
        user-select: none;
    }

    .arrow-up {
        top: 20px;
        right: 5px;
    }

    .arrow-down {
        right: 5px;
        bottom: 0px;

        .icon-arrow {
            transform: rotate(-180deg);
        }
    }

    .btn-arrow {
        position: absolute;
        width: 20px;
        height: 20px;
        color: var(--input-icon);
        transition: color 0.2s ease-out;

        &:hover {
            color: var(--input-icon-hover);
        }
    }
}

.input-number-box--disabled {
    input {
        background-color: var(--input-bg-disabled);
        border-color: var(--input-border-disabled);
        color: var(--input-text-disabled);
        pointer-events: none;
        opacity: 0.5;
    }

    .btn-arrow {
        color: var(--input-icon);
        cursor: not-allowed;

        &:hover {
            color: var(--input-icon);
        }
    }
}
</style>

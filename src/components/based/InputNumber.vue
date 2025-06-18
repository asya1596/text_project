<template>
    <div class="input-number-box"
         :class="[{ 'input-number-box--disabled': isBlocked }]">
        <label> {{ labelText }}</label>
        <input :value="numberValue"
               type="number"
               @input="handlInput" />

        <button class="btn-arrow arrow-up"
                @click="handlClickOnIncrementButton"><arrow-icon
                        class="icon-arrow" /></button>
        <button class="btn-arrow arrow-down"
                @click="handlClickOnDecrementButton"><arrow-icon
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
        border: 2px solid var(--thirdary);
        width: 400px;
        transition: all 0.2s ease-out;
        color: var(--background);
        border-radius: 6px;
        padding: 5px;
        appearance: textfield;

        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            height: 0;
            opacity: 0;
        }

        &:hover {
            border-color: var(--secondary);
        }

        &:focus {
            border: 2px solid var(--secondary);
        }

        &::placeholder {
            color: var(--background);
        }
    }

    label {
        position: absolute;
        top: -5px;
        right: 0;
        transition: all 0.2s ease-out;
        color: var(--background);
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

    .icon-arrow {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        width: 20px;
        height: 20px;

        &:deep path {
            transition: fill 0.2s ease-out;
            fill: var(--thirdary);
        }
    }

    .btn-arrow {
        position: absolute;
        width: 20px;
        height: 20px;

        &:hover:deep path {
            fill: var(--secondary);
        }
    }
}
.input-number-box--disabled {
    input {
        pointer-events: none;
        opacity: 0.5;
    }

    .btn-arrow {

        &:not(input-number-box--disabled):hover:deep path {
            fill: var(--thirdary);
        }
    }
}
</style>
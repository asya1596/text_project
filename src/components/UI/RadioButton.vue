<template>
    <div
        :class="[
            'radio-button',
            {
                'radio-button--checked': isActive,
                'radio-button--unchecked': !isActive && !isDisabled,
                'radio-button--disabled': isDisabled,
            }
        ]"
        @click="toggleRadio"
    >
        <div class="radio-button-box">
            <input
                type="radio"
                :id="radioButtonId"
                :checked="isActive"
                :disabled="isDisabled"
                class="radio-button-input"
            />
        </div>
        <label :for="radioButtonId" class="radio-button-label">
            <slot>{{ labelText }}</slot>
        </label>
    </div>
</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue'

const props = defineProps({
    isActive: {
        type: Boolean,
        default: false,
    },
    radioButtonId: {
        type: String,
        default: "radio-button-id",
    },
    labelText: {
        type: String,
        default: "",
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['update:is-active'])

const isDisabled = computed(() => props.disabled || props.isBlocked)

function toggleRadio() {
    if (!isDisabled.value) {
        emit('update:is-active', !props.isActive)
    }
}
</script>

<style lang="scss" scoped>
.radio-button {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.radio-button-box {
    position: relative;
    width: 20px;
    min-width: 20px;
    height: 20px;
    border: 2px solid var(--radio-bg-gray);
    border-radius: 50%;
    transition: all 0.2s ease-out;

    &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: var(--radio-mark);
        opacity: 0;
        transition: opacity 0.2s ease-out;
    }

    input {
        position: absolute;
        width: 0;
        height: 0;
        overflow: hidden;
    }
}

.radio-button--checked {
    .radio-button-box {
        background-color: var(--radio-bg-yellow);
        border-color: var(--radio-bg-gray);

        &::before {
            opacity: 1;
        }

        &:hover {
            border-color: var(--radio-hover);
        }
    }
}

.radio-button--unchecked {
    .radio-button-box {
        background-color: transparent;
        border-color: var(--radio-mark-disabled);

        &:hover {
            border-color: var(--radio-hover);
        }
    }
}

.radio-button--disabled {
    cursor: not-allowed;

    .radio-button-box {
        background-color: var(--radio-bg-disabled);
        border-color: var(--radio-border-disabled);
        cursor: not-allowed;

        &::before {
            background-color: var(--radio-bg-disabled);
        }
    }
}

.radio-button--disabled.radio-button--checked {
    .radio-button-box {
        background-color: var(--radio-bg-disabled);
        border-color: var(--radio-border-disabled);

        &::before {
            opacity: 1;
            background-color: var(--radio-mark-disabled);
        }
    }
}

.radio-button-label {
    color: var(--slots);
    user-select: none;
    font-size: 14px;
}

.radio-button--disabled .radio-button-label {
    cursor: not-allowed;
}
</style>

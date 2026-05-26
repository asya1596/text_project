<template>
    <div :class="['custom-range', { 'custom-range--disabled': isDisabled }]">
        <label class="label-value">{{ min }}</label>

        <input
            type="range"
            :min="min"
            :max="max"
            :disabled="isDisabled"
            v-model.number="internalValue"
            :style="trackStyle"
        />

        <label class="label-value">{{ max }}</label>

        <span class="current-value">{{ internalValue }}</span>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: Number,
        default: 50,
    },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const internalValue = ref(props.modelValue);

const trackStyle = computed(() => {
    const percentage = ((internalValue.value - props.min) / (props.max - props.min)) * 100;

    return {
        background: `linear-gradient(
            to right,
            var(--range-track-filled) 0%,
            var(--range-track-filled-accent) ${percentage}%,
            var(--range-track-empty) ${percentage}%,
            var(--range-track-empty) 100%
        )`,
    };
});

watch(
    () => props.modelValue,
    (newValue) => {
        internalValue.value = newValue;
    },
);

watch(internalValue, (newValue) => {
    emit('update:modelValue', newValue);
});
</script>

<style lang="scss" scoped>
.custom-range {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 10px;
    width: 100%;
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: background 0.3s;
}

input[type="range"]::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 4px;
}

input[type="range"]::-moz-range-track {
    height: 6px;
    border-radius: 4px;
    background: transparent;
}

input[type="range"]::-moz-range-progress {
    height: 6px;
    border-radius: 4px;
    background: linear-gradient(
        to right,
        var(--range-track-filled),
        var(--range-track-filled-accent)
    );
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 20px;
    margin-top: -7px;
    background: var(--range-thumb);
    border: 1px solid var(--range-thumb-border);
    border-radius: 5px;
    cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
    width: 6px;
    height: 20px;
    background: var(--range-thumb);
    border: 1px solid var(--range-thumb-border);
    border-radius: 5px;
    cursor: pointer;
}

input[type="range"]:focus::-webkit-slider-thumb {
    border-color: var(--range-thumb-focus-border);
    background: var(--range-thumb-focus);
}

input[type="range"]:focus::-moz-range-thumb {
    border-color: var(--range-thumb-focus-border);
    background: var(--range-thumb-focus);
}

input[type="range"]::-webkit-slider-thumb:hover {
    background: var(--range-thumb-hover);
}

input[type="range"]::-moz-range-thumb:hover {
    background: var(--range-thumb-hover);
}

.label-value,
.current-value {
    text-align: center;
    color: var(--range-label-text);
    user-select: none;
}

.current-value {
    grid-column: 2;
    font-size: 14px;
}

.custom-range--disabled {
    opacity: 0.7;
}
</style>
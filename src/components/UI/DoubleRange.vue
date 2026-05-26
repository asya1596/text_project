<template>
    <div :class="['double-range-slider', { 'double-range-slider--disabled': isDisabled }]">

        <div class="double-range-slider__wrapper">
            <div class="double-range-slider__track"></div>

            <div
                class="double-range-slider__progress"
                :style="progressStyle"
            ></div>

            <input
                class="double-range-slider__input double-range-slider__input--left"
                type="range"
                :min="min"
                :max="max"
                :step="step"
                :disabled="isDisabled"
                v-model.number="leftValue"
            />

            <input
                class="double-range-slider__input double-range-slider__input--right"
                type="range"
                :min="min"
                :max="max"
                :step="step"
                :disabled="isDisabled"
                v-model.number="rightValue"
            />
        </div>

        <div class="double-range-slider__values">
            <span class="double-range-slider__current-value">{{ leftValue }}</span>
            <span class="double-range-slider__current-value">{{ rightValue }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => [20, 80],
    },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    step: {
        type: Number,
        default: 1,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const leftValue = ref(props.modelValue[0]);
const rightValue = ref(props.modelValue[1]);

const getValidValue = (value) => {
    return Math.max(
        props.min,
        Math.min(
            props.max,
            Math.round(Number(value) / props.step) * props.step,
        ),
    );
};

const leftPercent = computed(() => {
    return ((leftValue.value - props.min) / (props.max - props.min)) * 100;
});

const rightPercent = computed(() => {
    return ((rightValue.value - props.min) / (props.max - props.min)) * 100;
});

const progressStyle = computed(() => {
    return {
        left: `${leftPercent.value}%`,
        width: `${rightPercent.value - leftPercent.value}%`,
    };
});

watch(
    () => props.modelValue,
    (newValue) => {
        leftValue.value = getValidValue(newValue[0]);
        rightValue.value = getValidValue(newValue[1]);
    },
    { deep: true },
);

watch(leftValue, (newValue) => {
    let validValue = getValidValue(newValue);

    if (validValue >= rightValue.value) {
        validValue = rightValue.value;
    }

    leftValue.value = validValue;
    emit('update:modelValue', [validValue, rightValue.value]);
});

watch(rightValue, (newValue) => {
    let validValue = getValidValue(newValue);

    if (validValue <= leftValue.value) {
        validValue = leftValue.value;
    }

    rightValue.value = validValue;
    emit('update:modelValue', [leftValue.value, validValue]);
});
</script>

<style lang="scss" scoped>
.double-range-slider {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.double-range-slider__values {
    display: flex;
    justify-content: space-between;
    width: 100%;
    user-select: none;
}

.double-range-slider__label,
.double-range-slider__current-value {
    color: var(--range-label-text);
    text-align: center;
}

.double-range-slider__wrapper {
    position: relative;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
}

.double-range-slider__track,
.double-range-slider__progress {
    position: absolute;
    left: 0;
    height: 6px;
    border-radius: 4px;
}

.double-range-slider__track {
    width: 100%;
    background: var(--range-track-empty);
    z-index: 1;
}

.double-range-slider__progress {
    background: linear-gradient(
        to right,
        var(--range-track-filled),
        var(--range-track-filled-accent)
    );
    z-index: 2;
}

.double-range-slider__input {
    position: absolute;
    width: 100%;
    height: 6px;
    margin: 0;
    appearance: none;
    background: transparent;
    pointer-events: none;
    outline: none;
    z-index: 3;
}

.double-range-slider__input::-webkit-slider-runnable-track {
    height: 6px;
    background: transparent;
}

.double-range-slider__input::-moz-range-track {
    height: 6px;
    background: transparent;
}

.double-range-slider__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 20px;
    background: var(--range-thumb);
    border: 1px solid var(--range-thumb-border);
    border-radius: 5px;
    cursor: pointer;
    pointer-events: all;
    margin-top: -7px;
}

.double-range-slider__input::-moz-range-thumb {
    width: 6px;
    height: 20px;
    background: var(--range-thumb);
    border: 1px solid var(--range-thumb-border);
    border-radius: 5px;
    cursor: pointer;
    pointer-events: all;
}

.double-range-slider__input:hover::-webkit-slider-thumb {
    background: var(--range-thumb-hover);
}

.double-range-slider__input:hover::-moz-range-thumb {
    background: var(--range-thumb-hover);
}

.double-range-slider__input:focus::-webkit-slider-thumb {
    background: var(--range-thumb-focus);
    border-color: var(--range-thumb-focus-border);
}

.double-range-slider__input:focus::-moz-range-thumb {
    background: var(--range-thumb-focus);
    border-color: var(--range-thumb-focus-border);
}

.double-range-slider__input--left {
    z-index: 4;
}

.double-range-slider__input--right {
    z-index: 5;
}

.double-range-slider--disabled {
    opacity: 0.7;
    pointer-events: none;
}
</style>
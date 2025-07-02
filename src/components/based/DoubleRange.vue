<template>
    <div :class="['custom-range', { 'custom-range--disabled': isDisabled }]">
        <div class="slider-container">
            <div class="track"
                 :style="trackStyle"></div>
            <input type="range"
                   :min="min"
                   :max="max"
                   v-model="minValue"
                   :disabled="isDisabled"
                   class="slider" />
            <input type="range"
                   :min="min"
                   :max="max"
                   v-model="maxValue"
                   :disabled="isDisabled"
                   class="slider" />
        </div>
        <div class="labels">
            <span>{{ minValue }}</span>
            <span>{{ maxValue }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: Array,
        required: true,
    },
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 100
    },
    isDisabled: {
        type: Boolean,
        default: false
    }
})
</script>

<script>
export default {
    data() {
        return {
            minValue: this.modelValue[0],
            maxValue: this.modelValue[1]
        };
    },
    watch: {
        modelValue(newVal) {
            [this.minValue, this.maxValue] = newVal;
        },
        minValue(newVal) {
            if (newVal > this.maxValue) this.maxValue = newVal;
            this.emitUpdate();
        },
        maxValue(newVal) {
            if (newVal < this.minValue) this.minValue = newVal;
            this.emitUpdate();
        }
    },
    computed: {
        trackStyle() {
            const minPercent = ((this.minValue - this.min) / (this.max - this.min)) * 100;
            const maxPercent = ((this.maxValue - this.min) / (this.max - this.min)) * 100;

            return {
                background: `linear-gradient(
          to right,
          var(--bary) 0%,
          var(--bary) ${minPercent}%,
          var(--thirdary) ${minPercent}%,
          var(--thirdary) ${maxPercent}%,
          var(--bary) ${maxPercent}%,
          var(--bary) 100%
        )`
            };
        }
    },
    methods: {
        emitUpdate() {
            this.$emit('update:modelValue', [this.minValue, this.maxValue]);
        }
    }
};
</script>

<style scoped>
.slider-container {
    position: relative;
    height: 24px;
    cursor: pointer;
}

.track {
    position: absolute;
    top: 50%;
    width: 50%;
    height: 4px;
    border-radius: 2px;
    background: var(--bary);
}

.slider {
    position: absolute;
    width: 50%;
    top: 14px;
    left: 0;
    margin: 0;
    height: 0;
    pointer-events: none;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    border-width: 0px;
    width: 6px;
    height: 20px;
    background: var(--thirdary);
    border-radius: 5px;
    cursor: pointer;
    pointer-events: auto;
    margin-top: 0px;
}

.slider::-moz-range-thumb {
    appearance: none;
    width: 6px;
    height: 20px;
    border-width: 0px;
    background: var(--thirdary);
    border-radius: 5px;
    cursor: pointer;
    pointer-events: auto;
    position: absolute;
}

.slider::-moz-range-thumb:hover {
    background: var(--secondary);
}

.labels {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--thirdary);
    user-select: none;
    width: 50%;

}
.custom-range--disabled {
    pointer-events: none;
    opacity: 0.7;
}
</style>

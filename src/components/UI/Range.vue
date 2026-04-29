<template>
    <div :class="['custom-range', { 'custom-range--disabled': isDisabled}]"
     >
        <label class="label-value">{{ min }}</label>
        <input type="range"
               :min="min"
               :max="max"
               v-model="internalValue"
               @input="updateTrackStyle"
               :style="trackStyle" />
        <label class="label-value">{{ internalValue }}</label>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: Number,
        required: true,
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
        type:Boolean,
        recuired:false,
    }
})
</script>

<script>
export default {
    data() {
        return {
            internalValue: this.modelValue,
            trackStyle: {}
        };
    },
    watch: {
        // Обновляем внутреннее значение при изменении пропса
        modelValue(newVal) {
            this.internalValue = newVal;
        },
        // При изменении внутреннего значения
        internalValue(newVal) {
            this.$emit('update:modelValue', newVal);
            this.updateTrackStyle();
        }
    },
    mounted() {
        this.updateTrackStyle();
    },
    methods: {
        updateTrackStyle() {
            const percentage = ((this.internalValue - this.min) / (this.max - this.min)) * 100;
            this.trackStyle = {
                background: `linear-gradient(
          to right,
          var(--thirdary) ${percentage}%,
          var(--bary) ${percentage}%
        )`
            };
        }
    }
}
</script>



<style lang="scss" scoped>
.custom-range {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[type="range"] {
    -webkit-appearance: none;
    /* Убираем стандартный стиль для WebKit */
    height: 6px;
    /* высота трека */
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: background 0.3s;
    
}

input[type="range"]:focus::-webkit-slider-thumb{
    border:1px solid var(--bary);
    background: var(--secondary);
}
input[type="range"]:focus::-moz-range-thumb{
    border: 1px solid var(--bary);
    background: var(--secondary);
}
input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 6px;
    height: 20px;
    background: var(--thirdary);
    border-radius: 5px;
    cursor: pointer;
}

input[type='range']::-moz-range-thumb {
    width: 6px;
    height: 20px;
    background: var(--thirdary);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb:hover{
    background: var(--secondary);
}
input[type="range"]::-moz-range-thumb:hover{
    background: var(--secondary);
}

.label-value {
    text-align: center;
    color: var(--background);
    user-select: none;
}
.custom-range--disabled{
    pointer-events: none;
    opacity: 0.7;
}
</style>

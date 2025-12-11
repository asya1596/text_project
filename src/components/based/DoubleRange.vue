<template>
    <div class="range-slider">
        <div class="slider-wrapper">
            <div class="progress"
                 :style="{ left: leftProgress + '%', width: progressWidth + '%' }">
            </div>
            <input ref="range1"
                   class="range range-left"
                   type="range"
                   :min="min"
                   :max="max"
                   :step="step"
                   :value="modelValue[0]"
                   @input="updateRange1" />

            <input ref="range2"
                   class="range range-right"
                   type="range"
                   :min="min"
                   :max="max"
                   :step="step"
                   :value="modelValue[1]"
                   @input="updateRange2" />
        </div>
        <div class="values">
            <span>{{ modelValue[0] }}</span>
            <span>{{ modelValue[1] }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: Array,
        default: () => [0, 100]
    },
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 100
    },
    step: {
        type: Number,
        default: 1
    }
})
</script>

<script>
export default {
    data() {
        return {
            range1: 0,
            range2: 100,
        }
    },
    computed: {
        progressWidth() {
            return ((this.modelValue[1] - this.modelValue[0]) / (this.max - this.min)) * 100
        },
        leftProgress() {
            return ((this.modelValue[0] - this.min) / (this.max - this.min)) * 100
        },
    },
    methods: {
        validateValues(value, otherValue) {
            return Math.max(
                this.min,
                Math.min(
                    this.max,
                    Math.round(value / this.step) * this.step
                )
            )
        },
        // Проверяет, чтобы значение было в пределах min-max .Округляет до заданного шага.
        updateRange1(e) {
            let newValue = this.validateValues(e.target.value, this.modelValue[1])
            // Проверяем, чтобы левый слайдер не превышал правый
            if (newValue >= this.modelValue[1]) {
                newValue = this.modelValue[1];
            }
            this.$emit('update:modelValue', [newValue, this.modelValue[1]])
        },

        updateRange2(e) {
            let newValue = this.validateValues(e.target.value, this.modelValue[0])
            // Проверяем, чтобы правый слайдер не был меньше левого
            if (newValue <= this.modelValue[0]) {
                newValue = this.modelValue[0];
            }
            this.$emit('update:modelValue', [this.modelValue[0], newValue])
        },

        syncValues() {
            this.$refs.range1.value = this.modelValue[0]
            this.$refs.range2.value = this.modelValue[1]
        }
        // синхронизируем значение modulValue с перемещением ручек.
    },

    watch: {
        modelValue: {
            handler() {
                this.syncValues()
            },
            deep: true
        }
    },
    // Следить за изменениями modelValue и синхронизировать значения слайдеров.

    mounted() {
        this.syncValues()
    }
    // При инициализации компонента синхронизирует значения слайдеров с modelValue.
}
</script>

<style lang="scss" scoped>
.range-slider {
    position: relative;
    width: 30%;

}

.slider-wrapper {
    position: relative;
    width: 100%;
    height: 4px;
}

.progress {
    position: absolute;
    height: 4px;
    background: var(--thirdary);
    z-index: 2;
    bottom: 0px;
}

.range {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    background: transparent;
    pointer-events: all;
}

.range::-webkit-slider-runnable-track {
    height: 4px;
    background: var(--bary);
    border-radius: 2px;
}

.range::-moz-range-track {
    height: 4px;
    background: var(--bary);
    border-radius: 2px;
}

.range::-webkit-slider-thumb {
    appearance: none;
    width: 6px;
    height: 20px;
    background: var(--thirdary);
    border-radius: 10px;
    cursor: pointer;
    top: 4px;
    margin-top: calc((4px / 2) - (20px / 2));

}

.range:hover::-webkit-slider-thumb {
    border: 1px solid var(--secondary);
}

.range:focus::-webkit-slider-thumb {
    border: 1px solid var(--secondary);
}

.range::-moz-range-thumb {
    appearance: none;
    width: 6px;
    height: 20px;
    border-radius: 10px;
    background: var(--thirdary);
    cursor: pointer;
    border-width: 0px;
}

.range:hover::-moz-range-thumb {
    border: 1px solid var(--secondary);
}

.range:focus::-moz-range-thumb {
    border: 1px solid var(--secondary);
}

.values {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    user-select: none;
}
</style>
<template>
    <div class="range">
        <label>{{ label1 }}</label>
        <input type="range"
               :min="min"
               :max="max"
               :id="rangeValue"
               class="slider"
               v-model="rangeValue"
               @input="updateValue" />

        <label for="rangeValue">{{ rangeValue }}</label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rangeValue: 50,
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('update:moduleValue', Number(event.target.vakue));
        },
    }
}
</script>

<script setup>
import { onUpdated } from 'vue';

defineProps({
    moduleValue: {
        type: Number,
        required: true,
    },
    min: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
        required: true,
    },
    step: {
        type: Number,
        default: 1,
    },
    label1: {
        type: Number,
        default: 0,
    },
})
</script>

<style lang="scss" scoped>
.range {
    input {
        appearance: none;
        

        ::-webkit-slider-thumb {
            appearance: none;
        }
        ::-webkit-slider-runnable-track{
          
        }
        ::-moz-range-track{

        }

    }
}
</style>
<template>
  <div
    :class="[
      'switch',
      { 'switch--active': isActive },
      `switch--${color}`
    ]"
  >
    <div class="switch-box" @click="handleSwitch">
      <input
        type="checkbox"
        :checked="isActive"
        :id="switchId"
        class="switch-input"
      />
      <div class="switch-thumb" :style="thumbStyle"></div>
    </div>
    <label :for="switchId">
      <slot>Свитч</slot>
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  switchId: {
    type: String,
    default: 'switch-id',
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String,
    default: 'yellow', // цвет по умолчанию — жёлтый
    validator: (value) => ['yellow', 'gray', 'emerald'].includes(value)
  }
});

const emit = defineEmits(['update:isActive']);

const handleSwitch = () => {
  emit('update:isActive', !props.isActive);
};

// Вычисляемое свойство для стиля бегунка
const thumbStyle = computed(() => {
  let baseColor;
  switch (props.color) {
    case 'yellow':
      baseColor = props.isActive ?  'var(--switch-thumb-light-disable)': 'var(--switch-thumb-light)';
      break;
    case 'gray':
      baseColor = props.isActive ? 'var(--switch-bg-gray)' : 'var(--switch-bg-disable)';
      break;
    case 'emerald':
      baseColor = props.isActive ?  'var(--switch-thumb-emerald-active)':'var(--switch-thumb-emerald)';
      break;
    default:
      baseColor = '#fff';
  }
  return {
    backgroundColor: baseColor,
    boxShadow: `0 1px 3px rgba(0, 0, 0, 0.2)`
  };
});
</script>

<style lang="scss" scoped>
.switch {
  display: flex;
  align-items: center;
  gap: 8px;
}

.switch-box {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.switch-input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}

.switch-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition:  transform 0.3s ease, 
    background-color 0.3s ease;
  z-index: 2;
}

.switch--active .switch-thumb {
  transform: translateX(19px);
}

label {
  color: var(--slots);
  user-select: none;
  font-size: 14px;
}

.switch--yellow .switch-box {
  background-color: var(--switch-bg-yellow); 
}
.switch--yellow.switch--active .switch-box {
  background-color: var(--switch-bg-yellow-active); 
}

.switch--gray .switch-box {
  background-color: var(--switch-bg-gray); 
  opacity: 70%;
}

.switch--emerald .switch-box {
  background-color: var(--switch-bg-emerald); 
}
.switch--emerald.switch--active .switch-box {
  background-color: var(--switch-bg-emerald-active);
}
</style>




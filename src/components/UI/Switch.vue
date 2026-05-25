<template>
  <div
    :class="[
      'switch',
      {
        'switch--checked': isActive,
        'switch--unchecked': !isActive && !isDisabled,
        'switch--disabled': isDisabled
      },
      `switch--${color}`
    ]"
  >
    <div class="switch-box" @click="handleSwitch">
      <input
        type="checkbox"
        :checked="isActive"
        :id="switchId"
        :disabled="isDisabled"
        class="switch-input"
      />
      <div class="switch-thumb"></div>
    </div>
    <label :for="switchId" class="switch-label">
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
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: '',
  }
});

const emit = defineEmits(['update:isActive']);

const isDisabled = computed(() => props.disabled || props.type === 'disabled');

const handleSwitch = () => {
  if (isDisabled.value) {
    return;
  }

  emit('update:isActive', !props.isActive);
};
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
  box-sizing: border-box;
  border: 2px solid var(--switch-border-unchecked);
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
  background-color: var(--switch-bg-unchecked);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.switch-input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}

.switch-thumb {
  position: absolute;
  top: 2px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition:  transform 0.3s ease, 
  background-color 0.3s ease;
  z-index: 2;
  background-color: var(--switch-thumb-unchecked);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.switch--checked .switch-box {
  background-color: var(--switch-bg-checked);
  border-color: var(--switch-border-checked);
}

.switch--checked .switch-thumb {
  transform: translateX(17px);
  background-color: var(--switch-thumb-checked);
}

label {
  color: var(--slots);
  user-select: none;
  font-size: 14px;
}

.switch--disabled .switch-label {
  cursor: not-allowed;
}

.switch--disabled .switch-box {
  background-color: var(--switch-bg-disabled);
  border-color: var(--switch-border-disabled);
  cursor: not-allowed;
}

.switch--disabled .switch-thumb {
  background-color: var(--switch-thumb-disabled);
}
</style>

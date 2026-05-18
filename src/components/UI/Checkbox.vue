<template>
  <div class="checkbox-box">
    <div :class="[
      'checkbox',
      {
        'checkbox--checked': isChecked,
        'checkbox--unchecked': !isChecked && !disabled,
        'checkbox--disabled': disabled
      }
    ]" @click="toggleCheckbox">
      <input type="checkbox" :id="checkboxId" v-model="isChecked" :disabled="disabled" class="checkbox-input" />
    </div>
    <label :for="checkboxId" class="checkbox-label">
      <slot>Чекбокс</slot>
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checkboxId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const isChecked = ref(props.modelValue)

function toggleCheckbox() {
  if (!props.disabled) {
    isChecked.value = !isChecked.value
    emit('update:modelValue', isChecked.value)
  }
}
</script>

<style lang="scss" scoped>
.checkbox-box {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox {
  position: relative;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border: 2px solid var(--checkbox-bg-gray);
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 5px;
    width: 6px;
    height: 12px;
    border: 1px solid var(--checkbox-mark);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
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

.checkbox--checked {
  background-color: var(--checkbox-bg-yellow);
  border-color: var(--checkbox-bg-gray);

  &::before {
    opacity: 1;
  }

  &:hover {
    border-color: var(--checkbox-hover);
  }
}

.checkbox--unchecked {
  background-color: transparent;
  border-color: var(--checkbox-mark-disabled);

  &:hover {
    border-color: var(--checkbox-hover);
  }
}

.checkbox--disabled {
  background-color: var(--checkbox-bg-disabled);
  border-color: var(--checkbox-border-disabled);
  cursor: not-allowed;

  &::before {
    border-color: var(--checkbox-bg-disabled);
  }
}

.checkbox--disabled.checkbox--checked {
  background-color: var(--checkbox-bg-disabled);
  border-color: var(--checkbox-border-disabled);

  &::before {
    opacity: 1;
    border-color: var(--checkbox-mark-disabled);
  }
}

.checkbox-label {
  color: var(--slots);
  user-select: none;
  font-size: 14px;

  .checkbox--disabled+& {
    cursor: not-allowed;
  }
}
</style>

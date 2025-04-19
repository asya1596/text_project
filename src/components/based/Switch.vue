<template>
  <div class="switch-box">
    <div :class="['switch', { 'switch--active': isActive }]" @click="handleSwitch">
      <input type="checkbox" :checked="isActive" :id="switchId" />
    </div>
    <label :for="switchId">
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
defineProps({
  switchId: {
    type: String,
    default: "switch-id",
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<script>
export default {
  methods: {
    handleSwitch() {
      this.$emit("update:is-active", !this.isActive);
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  width: 40px;
  min-width: 40px;
  height: 12px;
  border-radius: 8px;
  border: 2px solid var(--thirdary);
  cursor: pointer;
  transition: border-color 0.2s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 6px;
    height: 6px;
    background-color: var(--thirdary);
    border-radius: 8px;
    transition: all 0.2s ease-out;
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
}

.switch--active {
  border-color: var(--secondary);

  &::before {
    left: 29px;
    background-color: var(--secondary);
  }
}

.switch-box {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>

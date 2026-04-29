<template>
  <div class="checkbox-box">
    <div :class="['checkbox', { 'checkbox--active': isChecked }]"
         @click="checkbox">
      <input type="checkbox"
             :id="checboxId"
             :value="isChecked" />
    </div>
    <label :for="checboxId">
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
defineProps({
  checboxId: {
    type: String,
    default: "checbox-id",
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
});
</script>

<script>
export default {
  methods: {
    checkbox() {
      this.$emit("update:is-checked", !this.isChecked);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border: 2px solid var(--thirdary);
  cursor: pointer;
  border-radius: 5px;
  transition: border-color 0.2s ease-out;
  &:hover {
            border-color: var(--secondary);
        }
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 2px;
    width: 12px;
    height: 10px;
    transform: rotate(-45deg);
    border-style: solid;
    border-width: 0px 0px 2px 2px;
    border-color: var(--secondary);
    transition: all 0.2s ease-out;
    opacity: 0;
    border-radius: 1px;
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
}

.checkbox--active {
  border-color: var(--secondary);

  &::before {
    opacity: 1;
  }
}

.checkbox-box {
  display: flex;
  gap: 8px;
  align-items: center;

  label {
    user-select: none;
  }
}
</style>
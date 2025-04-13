<template>
  <div>
    <input type="checkbox" id="checboxId" v-model="isChecked" />
    <label for="checkbox">{{ checked }}</label>
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

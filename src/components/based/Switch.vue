<template>
  <div :class="['switch', { 'switch--active': isActive }]">
    <div class="switch-box" @click="handleSwitch">
      <input type="checkbox" :checked="isActive" :id="switchId" />
    </div>
    <label :for="switchId">
      <slot></slot>
    </label>
  </div>
  <!-- <div class="switch-box"></div> -->
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
.switch-box {
  position: relative;
  margin: 20px 0;
  width: 80px;
  height: 17px;
  min-width: 20px;
  cursor: pointer;
  border: 2px solid var(--thirdary);
  border-radius: 25px;
  transition: border 0.4s ease-out, left 0.2s, right 0.2s 0.2s;
  &:hover {
      box-shadow: 1px 1px 3px 1px var(--bary);
    }
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 2px;
    right: 63px;
    border-radius: 25px;
    background-color: var(--thirdary);
    transition: background-color 0.4s ease-out, left 0.2s, right 0.2s 0.2s;
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    
  }


}

.switch {
  display: flex;
  align-items: center;
  gap: 5px;

  label {
    color: var(--primary);
  }
}

.switch--active {
  .switch-box {
    border: 2px solid var(--secondary);

    &::before {
      background-color: var(--secondary);
      left: 63px;
      right: 2px;
      transition: background-color 0.4s ease-out, left 0.2s 0.2s, right 0.2s;
    }
  }

}




// .switch {
//   position: relative;
//   width: 40px;
//   min-width: 40px;
//   height: 12px;
//   border-radius: 8px;
//   border: 2px solid var(--thirdary);
//   cursor: pointer;
//   transition: border-color 0.2s ease-out;
//   &::before {
//     content: "";
//     position: absolute;
//     top: 1px;
//     left: 1px;
//     width: 6px;
//     height: 6px;
//     background-color: var(--thirdary);
//     border-radius: 8px;
//     transition: all 0.2s ease-out;
//   }
//   input {
//     position: absolute;
//     width: 0;
//     height: 0;
//     overflow: hidden;
//   }
// }
// .switch--active {
//   border-color: var(--secondary);
//   &::before {
//     left: 29px;
//     background-color: var(--secondary);
//   }
// }
// .switch-box{
//   display: flex;
//   gap: 8px;
//   align-items: center;
// }</style>

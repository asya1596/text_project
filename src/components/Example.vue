<template>
  <div class="example">
    <h2>Примеры работ</h2>
    <div class="works">
      <switch-component v-model:is-active="exSwitch" switch-id="example">
        <p>Вася Не вредная</p>
      </switch-component>

      
    </div>
  </div>
  
</template>



<script setup>
import SwitchComponent from "./based/Switch.vue";
</script>
<script>
export default {
  data() {
    return {
      exSwitch: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.example {
  h2 {
    text-align: center;
    font-size: 22px;
    color: var(--primary);
    transition: color 0.2s ease-out;
    margin-bottom: 10px;
  }
}
.works {
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
    color: var(--primary);
    transition: color 0.2s ease-out;
  }
}
</style>

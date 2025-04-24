<template>
  <div class="example">
    <h2>Примеры работ</h2>
    <div class="works">
      <switch-component v-model:is-active="exSwitch" switch-id="ex-switch">
        <p>Свитч обычный</p>
      </switch-component>
      <checkbox-component v-model:is-checked="exCheckbox" checbox-id="ex-checbox">
        <p>Чекбокс обычный</p>
      </checkbox-component>
      <accordion-component/>

    </div>
  </div>
</template>



<script setup>
import SwitchComponent from "./based/Switch.vue";
import CheckboxComponent from "./based/Checkbox.vue";
import AccordionComponent from "./based/Accordion.vue";
</script>

<script>
export default {
  data() {
    return {
      exSwitch: false,
      exCheckbox: false,
      exAccordion: false
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
  gap: 10px;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  p {
    font-size: 16px;
    color: var(--primary);
    transition: color 0.2s ease-out;
  }
}
</style>

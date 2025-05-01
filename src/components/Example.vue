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
      <accordion-component />
      <input-component v-model="exInput" input-id="ex-input" label-text="Инпут простой">
        <!-- Идет привязка атрибута модульвелью к переменной, затем подпись на событие update:модульвелью-->
        <!-- добавлен атрибут лайблтекст- для помещения лайбла без слота и возможности поместить туда что угодно, 
        через пропсы -->
      </input-component>
      <textarea-component v-model="exTextarea" textarea-id="ex-textarea" label-text="Многострочный коментарий">
      </textarea-component>
    </div>
  </div>
</template>



<script setup>
import SwitchComponent from "./based/Switch.vue";
import CheckboxComponent from "./based/Checkbox.vue";
import AccordionComponent from "./based/Accordion.vue";
import InputComponent from "./based/Input.vue";
import TextareaComponent from "./based/Textarea.vue";
</script>

<script>
export default {
  data() {
    return {
      exSwitch: false,
      exCheckbox: false,
      exInput: "",
      exTextarea: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.example {
  h2 {
    text-align: center;
    font-size: 22px;
    color: var(--background);
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
  padding-left: 10px;
  margin-bottom: 10px;

  p {
    font-size: 16px;
    color: var(--background);
    transition: color 0.2s ease-out;
  }
}
</style>

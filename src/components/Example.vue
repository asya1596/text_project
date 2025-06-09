<template>
  <div class="example">
    <h2>Примеры работ</h2>
    <div class="works">
      <switch-component v-model:is-active="exSwitch"
                        switch-id="ex-switch">
        <p>Свитч обычный</p>
      </switch-component>
      <checkbox-component v-model:is-checked="exCheckbox"
                          checbox-id="ex-checbox">
        <p>Чекбокс обычный</p>
      </checkbox-component>
      <select-component v-model="selectedSort"
                        :items="sortList"> </select-component>
      <!-- через директиву мы привязываем переменную к modulValue атрибуту
        и подписываемся а собитие(называется update:modelValue). 
        При поднятии события переменной присваивается новое значение. -->
      <accordion-component>
        <template v-slot:head>
          <h3> Заголовок аккордиона</h3>
        </template>
        <template v-slot:content>
          <p class="content-accordion">
            1. Текст первого пунта аккордиона, здесь я вам расскжу сквзку
            про белого бычка и ушлого старика.
          </p>
          <p class="content-accordion">
            2. Текст второго пунта аккордиона, здесь
            я вам расскжу сквзку
            про Царя Солтана и царевну лягушку.
          </p>
          <p class="content-accordion">
            3. Текст третьего пунта аккордиона, а тут
            я вам сказку не
            расскажу.
          </p>
        </template>
      </accordion-component>
      <input-component v-model="exInput"
                       input-id="ex-input"
                       label-text="Инпут простой">
        <!-- добавлен атрибут лейблтекст- для помещения лейбла без слота и возможности поместить туда что угодно, 
        через пропсы -->
      </input-component>
      <textarea-component v-model="exTextarea"
                          textarea-id="ex-textarea"
                          label-text="Многострочный коментарий">
      </textarea-component>
      <div class="button"> 
        <button-component type-button="primari" />
        <button-component type-button="secondary" />
        <button-component type-button="approval" />
        <button-component type-button="removal" />
        <button-component type-button="warning" />
      </div>

    </div>
  </div>
</template>



<script setup>
import SwitchComponent from "./based/Switch.vue";
import CheckboxComponent from "./based/Checkbox.vue";
import AccordionComponent from "./based/Accordion.vue";
import InputComponent from "./based/Input.vue";
import TextareaComponent from "./based/Textarea.vue";
import SelectComponent from "./based/Select.vue";
import ButtonComponent from "./based/Button.vue";
</script>

<script>
export default {
  data() {
    return {
      exSwitch: false,
      exCheckbox: false,
      exInput: "",
      exTextarea: "",
      selectedSort: "Выбери вариант",
      sortList: [
        { value: '1', name: "Выбери 1 вариант" },
        { value: '2', name: "Выбери 2 вариант" },
        { value: '3', name: "Выбери 3 вариант" },
      ]
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
  gap: 20px;
  flex-direction: column;
  justify-content: left;
  padding-left: 10px;
  margin-bottom: 10px;

  p {
    font-size: 16px;
    color: var(--background);
    transition: color 0.2s ease-out;
  }

  .content-accordion {
    margin: 3px;
    padding: 1px 3px 3px 3px;
    text-align: left;
  }

  .button {
    display: flex;
    margin: 5px;
  }
}
</style>

<template>
  <div class="about-self">
    <img src="@/assets/img/мое_фото.jpg"
         alt="Мое фото" />
    <div>
      <h2>О себе</h2>
      <p>
        <!-- todo убрать лишние переносы строк для лучшей читаемости -->
        Меня зовут Ася, я учусь и совершенствуюсь в web-разработке.<br />
        Решила начать с frontend-разработки, но не собираюсь останавливаться на
        одной сфере. <br />
        Хочу стать fullstack разработчиком.<br />
        В планах создать свой сайт для обучения и развития медицинских работников
        и студетов, <br />
        по мотивам сайта "up-to date", только круче.<br />
        Сейчас могу сказать что освоила такие навыки как: <br />
        Python-базовый курс <br />
        HTML 4 и 5-базовый курс<br />
        Изучаю и придерживаюсь технологии BEM<br />
        Семантическая верстка<br />
        CSS базовый курс <br />
        JS-базовый курс<br />
        VUE3-общие принципы<br />
        Принципы работы в Git- репозиторий<br />
        Английский язык- уровень B1.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-self {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 10px 30px;
  img {
    display: flex;
    width: 250px;
    height: fit-content;
    border-radius: 8px;
  }
  h2 {
    font-size: 22px;
    color: var(--background);
    transition: color 0.2s ease-out;
    margin-bottom: 10px;
  }
  p{
    font-size: 16px;
    color: var(--background);
    transition: color 0.2s ease-out;
  }
}
</style>

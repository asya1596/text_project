<template>
  <div class="about-self">
    <img src="@/assets/img/мое_фото.jpg"
         alt="Мое фото" />
    <div>
      <h2>О себе</h2>
      <p>
        Меня зовут Ася, я учусь и совершенствуюсь в web-разработке.
        Решила начать с frontend-разработки, но не собираюсь останавливаться на
        одной сфере.
        Хочу стать fullstack разработчиком.
        В планах создать свой сайт для обучения и развития медицинских
        работников
        и студетов, по мотивам сайта "up-to date", только круче.
      </p>
      <ul>
        <p class="listHead">Сейчас могу сказать что освоила такие навыки как:
        </p>
        <li>Python базовый курс</li>
        <li>HTML 4 и 5 базовый курс</li>
        <li>Изучаю и придерживаюсь технологии BEM</li>
        <li>Семантическая верстка</li>
        <li>CSS базовый курс</li>
        <li>JS базовый курс</li>
        <li> VUE3 общие принципы</li>
        <li>Принципы работы в Git- репозиторий</li>
        <li>Английский язык- уровень B1</li>
      </ul>
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

  p {
    font-size: 16px;
    color: var(--background);
    transition: color 0.2s ease-out;
  }

  ul {
    position: relative;
    left: 10%;
    padding: 5px;
    box-sizing: border-box;
    max-width: max-content;

    .listHead {
      margin: 5px;
    }

    li {

      padding: 2px 2px 2px 10px;
      list-style-type: disc;
    }

  }

}
</style>

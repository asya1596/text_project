<template>
  <div class="about-self-card">
    <div class="photo-container">
      <img src="@/assets/img/мое_фото.jpg" alt="Моё фото" class="profile-photo" />
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">О себе</h2>
      <p class="self-description">
        Меня зовут Ася, я frontend‑разработчик. Создаю интерактивные сайты с продуманным пользовательским опытом:
        внедряю анимации, графику и плавные переходы.
        Постоянно совершенствую навыки в современных технологиях фронтенда.
      </p>

      <div class="project-goal-card">
        <div class="goal-content">
          <h3 class="goal-title">Планы на будущее</h3>
          <p class="goal-text">
            Создать свой сайт для обучения, развития и общения медицинских
            работников и студентов, по мотивам сайта «up‑to‑date».
          </p>
        </div>
      </div>

      <div class="skills-section">
        <div class="skill-category" v-for="(category, index) in skillCategories" :key="index">
          <h4 class="category-title">{{ category.title }}</h4>
          <ul class="skills-list">
            <li class="skill-item" v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
              <span class="skill-icon">✓</span>
              <span class="skill-name">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSelf',
  data() {
    return {
      skillCategories: [
        {
          title: 'Технологии разработки',
          skills: [
            'Vue 3',
            'HTML5',
            'JavaScript',
            'Git',
            'Figma/Pixso',
            'Яндекс Трекер',
            'Tilda',
            'Sass',
            'CSS'
          ]
        }
      ]
    };
  }
};
</script>



<style lang="scss" scoped>
.about-self-card {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  padding: 25px;
  max-width: 900px;
  font-family: 'Inter', sans-serif;
}

.photo-container {
  position: relative;
  flex-shrink: 0;
  width: 180px;
  height: 180px;

  .profile-photo {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    object-fit: cover;
    transition: all 0.4s ease;
    position: relative;
    z-index: 2;
  }
}

.content-wrapper {
  flex: 1;
}

.section-title {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #667eea;
    border-radius: 2px;
  }
}

.self-description {
  font-size: 15px;
  line-height: 1.6;
  color: #495057;
  margin-bottom: 20px;
}

// Стили для блока проекта
.project-goal-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(135deg, #b8c7ee 0%, #e6f0ff 100%);
  padding: 16px 20px;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.goal-icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.goal-content {
  flex: 1;
}

.goal-title {
  font-size: 16px;
  color: #34495e;
  margin-bottom: 4px;
  font-weight: 500;
}

.goal-text {
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  margin: 0;
}

.skills-section {
  margin-top: 10px;
}

.category-title {
  font-size: 18px;
  color: #34495e;
  margin-bottom: 12px;
  font-weight: 500;
  padding: 10px;
  border-bottom: 2px solid #b4cce5;
  border-radius: 10px;
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.skill-item {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: default;
  font-size: 14px;
  color: #495057;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: #e3e7ff;
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .skill-icon {
    margin-right: 8px;
    font-weight: bold;
    color: #667eea;
  }
}

// Адаптивность
@media (max-width: 768px) {
  .about-self-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
  }

  .photo-container {
    width: 140px;
    height: 140px;
  }

  .content-wrapper {
    text-align: center;
  }

  .project-goal-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 14px 18px;
  }

  .goal-icon {
    font-size: 18px;
    margin-top: 0;
  }

  .self-description,
  .goal-text {
    font-size: 14px;
  }

  .section-title {
    font-size: 22px;
  }

  .category-title {
    font-size: 17px;
  }

  .skills-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .about-self-card {
    padding: 15px;
    gap: 15px;
  }

  .photo-container {
    width: 120px;
    height: 120px;
  }

  .project-goal-card {
    padding: 12px 16px;
  }

  .self-description,
  .goal-text,
  .skill-name {
    font-size: 13px;
  }

  .skill-item {
    padding: 8px 12px;
  }

  .goal-title {
    font-size: 15px;
  }
}

// Дополнительные микроанимации для интерактивности
.about-self-card {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Плавное появление элементов при загрузке
.skill-item,
.project-goal-card,
.photo-container {
  opacity: 0;
  animation: fadeInElement 0.5s ease forwards;
}

.skill-item:nth-child(2) {
  animation-delay: 0.1s;
}

.skill-item:nth-child(3) {
  animation-delay: 0.2s;
}

.skill-item:nth-child(4) {
  animation-delay: 0.3s;
}

.skill-item:nth-child(5) {
  animation-delay: 0.4s;
}

.skill-item:nth-child(6) {
  animation-delay: 0.5s;
}

@keyframes fadeInElement {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// // Стили для тёмного режима (опционально)
// @media (prefers-color-scheme: dark) {
//   .about-self-card {
//     background: #8d96a5;
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
//   }

//   .self-description,
//   .goal-text,
//   .skill-name,
//   .goal-title,
//   .section-title,
//   .category-title {
//     color: #e2e8f0;
//   }

//   .project-goal-card {
//     background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
//     border-left-color: #9f7aea;
//   }

//   .skill-item {
//     background: #4a5568;
//     border-color: #718096;
//     color: #e2e8f0;
//   }

//   .skill-item:hover {
//     background: #6b7280;
//     border-color: #9f7aea;
//   }
// }
</style>

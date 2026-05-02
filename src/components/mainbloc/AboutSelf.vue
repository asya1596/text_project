<template>
  <div class="about-me-container">
    <h1 class="title">Обомне</h1>
    <p class="description">
      Я увлечённый веб-разработчик, специализирующийся на создании современных интерфейсов.
      Моя цель — разрабатывать красивые, функциональные сайты и воплощать в жизнь смелые дизайн-идеи,
      обеспечивая отличный пользовательский опыт.
    </p>
    <div class="stack-and-grid">
      <div class="tech-stack">
        <h2 class="tech-stack-title">Технологический стек</h2>
        <div v-for="tech in techStack" :key="tech.name" class="tech-item">
          <h3 class="tech-name">{{ tech.name }}</h3>
          <div class="progress-bar" :style="getGradientStyle(tech.level)">
            <div class="progress-fill" :style="{ width: tech.level + '%' }"></div>
          </div>
        </div>
      </div>

      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.title" class="skill-card">
          <component :is="skill.icon" class="skill-icon" />
          <div class="skill-title">{{ skill.title }}</div>
          <div class="skill-description">{{ skill.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PenIcon from '../icons/PenIcon.vue';
import StarIcon from '../icons/StarIcon.vue';
import GridIcon from '../icons/GridIcon.vue';
import ArrowsIcon from '../icons/ArrowsIcon.vue';



const techStack = [
  { name: 'Vue 3', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Tilda', level: 90 }
];

const skills = [
  {
    icon: ArrowsIcon,
    title: 'Frontend',
    description: 'Разработка на Vue 3 и чистом JavaScript'
  },
  {
    icon: GridIcon,
    title: 'Дизайн-макеты',
    description: 'Уверенная работа с Pixso и Figma'
  },
  {
    icon: PenIcon,
    title: 'Вёрстка',
    description: 'Чистый HTML, CSS'
  },
  {
    icon: StarIcon,
    title: 'Платформы',
    description: 'Создание эффективных сайтов на Tilda'
  }
];

function getGradientStyle(level) {
  if (level >= 90) {
    return { background: 'var(--progress-bar-bg)' };
  } else if (level >= 75) {
    return { background: 'var(--progress-bar-bg)' };
  } else {
    return { background: 'var(--progress-bar-bg)' };
  }
}
</script>


<style lang="scss" scoped>
.about-me-container {
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  gap: 30px;
  background-color: var(--body-background);
}

.stack-and-grid {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  gap: 20px;
}

.title {
  text-align: center;
  color: var(--text-h1-green);
  margin-top: 0;
  font-size: 36px;
  font-weight: 700;
}

.description {
  text-align: center;
  width: 90%;
  margin: 20px auto 40px;
  line-height: 1.6;
  font-size: 18px;
  color: var(--text-description);
  max-width: 60%;
}

.tech-stack {
  width: 48%;
  background-color: var(--card-block);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.tech-stack-title {
  color: var(--text-h2);
  font-size: 24px;
  margin-bottom: 30px;
  border-bottom: 2px solid var(--underscore-text);
  padding-bottom: 10px;
  text-align: left;
}

.tech-item {
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.tech-name {
  color: var(--text-h2);
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
}

.progress-bar {
  height: 10px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 8px;
  transition: width 0.5s ease;
  background: linear-gradient(90deg, #4CAF50, #FFA500);
}

.skills-grid {
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.skill-card {
  background-color: var(--card-block);
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.skill-icon {
  margin-top: 20px;
  font-size: 36px;
  margin-bottom: 20px;
  display: inline-block;
}

.skill-title {
  font-size: 18px;
  color: var(--text-h2);
  margin-bottom: 5px;
  font-weight: 600;
  text-transform: uppercase;
}

.skill-description {
  color: var(--text-h2);
  line-height: 1.6;
  max-width: 250px;
  margin: 0 auto;
}

@media (min-width: 1025px) {
  .stack-and-grid {
    max-width: 1360px;
    justify-content: center;
  }

  .description {
    max-width: 70%;
  }
}

@media (max-width: 1024px) {
  .stack-and-grid {
    display: block;
    padding: 20px 0;
  }

  .tech-stack {
    width: 100%;
    margin-bottom: 20px;
  }

  .skills-grid {
    width: 100%;
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .skill-card {
    padding: 15px;
    margin: 5px 0;
  }

  .description {
    max-width: 90%;
  }
}
</style>

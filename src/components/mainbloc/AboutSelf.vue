<template>
  <section id="about" class="about-me-container">
    <div class="about-content">
      <h1 class="title">Обо <span>мне</span></h1>

      <p class="description">
        Я веб-разработчик, который помогает запускать понятные,
        аккуратные и удобные цифровые продукты. Работаю с кодом,
        интерфейсами и low-code решениями, подбирая формат под задачу
        клиента.
      </p>

      <div class="stack-and-grid">
        <div class="tech-stack">
          <h2 class="tech-stack-title">Технологический стек</h2>

          <div v-for="tech in techStack" :key="tech.name" class="tech-item">
            <h3 class="tech-name">
              {{ tech.name }}
            </h3>

            <div class="progress-bar" :style="getGradientStyle()">
              <div class="progress-fill" :style="{ width: tech.level + '%' }"></div>
            </div>
          </div>
        </div>

        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.title" class="skill-card">
            <component :is="skill.icon" class="skill-icon" />

            <h3 class="skill-title">
              {{ skill.title }}
            </h3>

            <p class="skill-description">
              {{ skill.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  { name: 'Tilda', level: 90 },
];

const skills = [
  {
    icon: ArrowsIcon,
    title: 'Frontend',
    description: 'Разработка интерфейсов на Vue 3 и JavaScript',
  },
  {
    icon: GridIcon,
    title: 'UI-макеты',
    description: 'Работа с макетами в Figma и Pixso',
  },
  {
    icon: PenIcon,
    title: 'Вёрстка',
    description: 'Адаптивная HTML/CSS-вёрстка под разные устройства',
  },
  {
    icon: StarIcon,
    title: 'Low-code',
    description: 'Создание сайтов на Tilda и похожих платформах',
  },
];

function getGradientStyle() {
  return {
    background: 'var(--progress-bar-bg)',
  };
}
</script>

<style lang="scss" scoped>
.about-me-container {
  width: 100%;
  padding: clamp(50px, 7vw, 90px) 20px;
  background-color: var(--body-background);
  overflow: hidden;
}

.about-content {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
}

.title {
  margin: 0;
  text-align: center;
  color: var(--title-h1);
  font-family: var(--font-heading);
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 700;
  line-height: 1.2;
}

.title span {
  color: var(--title-h1-accent);
}

.description {
  width: 100%;
  max-width: 860px;
  margin: 20px auto 45px;
  color: var(--text-description);
  font-family: var(--font-main);
  font-size: clamp(15px, 1.7vw, 19px);
  line-height: 1.65;
  text-align: center;
  overflow-wrap: break-word;
}

.stack-and-grid {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.tech-stack,
.skills-grid {
  flex: 1;
  min-width: 0;
}

.tech-stack {
  padding: clamp(22px, 3vw, 32px);
  border-radius: 16px;
  background-color: var(--card-block);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.3s ease;
}

.tech-stack-title {
  margin: 0 0 28px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--underscore-text);
  color: var(--text-h2);
  font-family: var(--font-heading);
  font-size: clamp(22px, 2.2vw, 26px);
  font-weight: 700;
  text-align: left;
}

.tech-item {
  margin-bottom: 24px;
  padding: 5px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tech-item:last-child {
  margin-bottom: 0;
}

.tech-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.tech-name {
  margin: 0 0 10px;
  color: var(--text-h2);
  font-family: var(--font-ui);
  font-size: clamp(15px, 1.4vw, 18px);
  font-weight: 500;
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
  background: linear-gradient(90deg, #4caf50, #ffa500);
  transition: width 0.5s ease;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.skill-card {
  padding: clamp(16px, 2vw, 24px);
  border-radius: 16px;
  background-color: var(--card-block);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.skill-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 18px;
  display: inline-block;
}

.skill-title {
  margin: 0 0 8px;
  color: var(--text-h2);
  font-family: var(--font-ui);
  font-size: clamp(15px, 1.4vw, 18px);
  font-weight: 600;
  text-transform: uppercase;
}

.skill-description {
  max-width: 250px;
  margin: 0 auto;
  color: var(--text-h2);
  font-family: var(--font-main);
  font-size: clamp(14px, 1.2vw, 16px);
  line-height: 1.55;
}

@media (min-width: 1440px) {
  .about-content {
    max-width: 1360px;
  }

  .description {
    max-width: 860px;
  }

  .stack-and-grid {
    gap: 30px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .about-content {
    max-width: 860px;
  }

  .stack-and-grid {
    flex-direction: column;
  }

  .tech-stack,
  .skills-grid {
    width: 100%;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .about-me-container {
    padding: 55px 30px;
  }

  .stack-and-grid {
    flex-direction: column;
    gap: 18px;
  }

  .tech-stack,
  .skills-grid {
    width: 100%;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .about-me-container {
    padding: 45px 18px;
  }

  .description {
    margin: 16px auto 32px;
    max-width: 100%;
    line-height: 1.55;
  }

  .stack-and-grid {
    flex-direction: column;
    gap: 16px;
  }

  .tech-stack,
  .skills-grid {
    width: 100%;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .skill-card {
    padding: 16px;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
  }
}
</style>
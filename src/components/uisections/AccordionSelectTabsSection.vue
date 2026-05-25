<template>
	<div class="example">
		<h1>Аккордион - Выпадающий список - Табы</h1>
		<div class="controls-panel">
			<div class="section">
				<h2>Аккордион</h2>
				<div class="demo-group">
					<Accordion>
						<template #head>
							Секретный ящик интерфейса
						</template>
						<template #content>
							<p class="accordion-text">
								Здесь живут детали, которые появляются ровно в тот момент, когда пользователь готов к маленькому открытию.
							</p>
						</template>
					</Accordion>
				</div>
			</div>

			<div class="section">
				<h2>Выпадающий список</h2>
				<div class="demo-group">
					<Select v-model="selectedOption" :items="selectItems" />
				</div>
			</div>

			<div class="section">
				<h2>Табы</h2>
				<div class="demo-group">
					<Tabs v-model:tab-choose="selectedTab" :tabs="tabs" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from '../UI/Accordion.vue'
import Select from '../UI/Select.vue'
import Tabs from '../UI/Tabs.vue'

const selectedOption = ref('Выбери вариант')
const selectedTab = ref('tab-1')

const selectItems = [
	{ value: 'layout', name: 'Верстка' },
	{ value: 'design', name: 'Дизайн' },
	{ value: 'frontend', name: 'Frontend' },
]

const tabs = [
	{ id: 'tab-1', label: 'Таб 1' },
	{ id: 'tab-2', label: 'Таб 2' },
	{ id: 'tab-3', label: 'Таб 3' },
	{ id: 'tab-4', label: 'Таб 4' },
	{ id: 'tab-5', label: 'Таб 5' },
]
</script>

<style lang="scss" scoped>
.example {
	width: 100%;

	h1 {
		text-align: center;
		color: var(--text-h1);
		font-weight: 600;
		font-size: clamp(18px, 1.8vw, 24px);
		padding: 0 clamp(12px, 4vw, 48px);
		transition: color 0.2s ease-out;
		margin: clamp(10px, 2vw, 20px) 0;
	}
}

.controls-panel {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: clamp(12px, 2vw, 28px);
	width: min(100%, 1440px);
	margin: 0 auto;
	padding: clamp(12px, 3vw, 32px);
	box-sizing: border-box;
}

.section {
	background-color: var(--card-block);
	border-radius: 8px;
	padding: clamp(14px, 2vw, 24px);
	box-sizing: border-box;
	min-width: 0;
	min-height: clamp(220px, 20vw, 280px);
}

h2 {
	color: var(--text-h2);
	font-size: clamp(16px, 1.5vw, 20px);
	margin: 0 0 clamp(12px, 1.5vw, 18px);
}

.demo-group {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.accordion-text {
	margin: 0;
	line-height: 1.5;
}

.demo-group :deep(.accordion-elem),
.demo-group :deep(.select) {
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
}

.demo-group :deep(.tab) {
	flex-wrap: wrap;
	max-width: 100%;
	padding: 0;
	margin: 0;
}

.demo-group :deep(.tab-element) {
	white-space: nowrap;
}

@media (max-width: 1024px) {
	.controls-panel {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@media (max-width: 640px) {
	.controls-panel {
		grid-template-columns: 1fr;
	}
}

@media (min-width: 1600px) {
	.controls-panel {
		width: min(100%, 1600px);
	}
}
</style>

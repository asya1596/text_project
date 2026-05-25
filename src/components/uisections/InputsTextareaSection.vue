<template>
	<div class="example">
		<h1>Инпуты - Текстария</h1>
		<div class="controls-panel">
			<div class="section">
				<h2>Текстовый инпут</h2>
				<div class="input-group">
					<Input v-model="textValue" input-id="text-input" label-text="Текст" />

					<Input v-model="disabledTextValue" input-id="disabled-text-input" label-text="Неактивен" disabled />
				</div>
			</div>

			<div class="section">
				<h2>Числовой инпут</h2>
				<div class="input-group">
					<InputNumber v-model:number-value="numberValue" label-text="Число" />

					<InputNumber v-model:number-value="disabledNumberValue" label-text="Неактивен" is-blocked />
				</div>
			</div>

			<div class="section">
				<h2>Текстария</h2>
				<div class="input-group">
					<Textarea v-model="textareaValue" label-text="Комментарий" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../UI/Input.vue'
import InputNumber from '../UI/InputNumber.vue'
import Textarea from '../UI/Textarea.vue'

const textValue = ref('')
const disabledTextValue = ref('Неактивный инпут')
const numberValue = ref(10)
const disabledNumberValue = ref(0)
const textareaValue = ref('')
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

.input-group {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.input-group :deep(.input-box),
.input-group :deep(.input-number-box),
.input-group :deep(.textarea-box) {
	width: 100%;
}

.input-group :deep(input),
.input-group :deep(textarea) {
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
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

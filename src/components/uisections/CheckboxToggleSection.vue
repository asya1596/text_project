<template>
	<div class="example">
		<h1>Радиокнопки - Чекбоксы - Свитчи</h1>
		<div class="controls-panel">
			<div class="section">
				<h2>Радиокнопки</h2>
				<div class="radio-group">
					<RadioButton
						:is-active="isRadioActive"
						radio-button-id="radio-button-active"
						@update:is-active="isRadioActive = $event"
					>
						Включена
					</RadioButton>

					<RadioButton
						:is-active="isRadioInactive"
						radio-button-id="radio-button-inactive"
						@update:is-active="isRadioInactive = $event"
					>
						Выключена
					</RadioButton>

					<RadioButton
						:is-active="isRadioDisabled"
						radio-button-id="radio-button-disabled"
						disabled
					>
						Неактивна
					</RadioButton>
				</div>
			</div>

			<div class="section">
				<h2>Чекбоксы</h2>
				<div class="checkbox-group">
					<Checkbox v-model="isChecked1" checkbox-id="checkbox1">
						Включен
					</Checkbox>

					<Checkbox v-model="isChecked2" checkbox-id="checkbox2">
						Выключен
					</Checkbox>

					<Checkbox v-model="isChecked3" disabled checkbox-id="checkbox3">
						Неактивен
					</Checkbox>
				</div>
			</div>

			<div class="section">
				<h2>Свитчи</h2>
				<div class="switch-group">
					<Switch :isActive="isSwitchActive" @update:isActive="isSwitchActive = $event">
						Включен
					</Switch>

					<Switch :isActive="isSwitchInactive" @update:isActive="isSwitchInactive = $event">
						Выключен
					</Switch>

					<Switch :isActive="isSwitchDisabled" disabled>
						Неактивен
					</Switch>

				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Switch from '../UI/Switch.vue'
import Checkbox from '../UI/Checkbox.vue'
import RadioButton from '../UI/RadioButton.vue'
import { ref } from 'vue'

const isSwitchActive = ref(true)
const isSwitchInactive = ref(false)
const isSwitchDisabled = ref(false)

const isRadioActive = ref(true)
const isRadioInactive = ref(false)
const isRadioDisabled = ref(false)

const isChecked1 = ref(true)   
const isChecked2 = ref(false)  
const isChecked3 = ref(true) 
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
	min-height: clamp(150px, 16vw, 200px);
}

h2 {
	color: var(--text-h2);
	font-size: clamp(16px, 1.5vw, 20px);
	margin: 0 0 clamp(12px, 1.5vw, 18px);
}

.switch-group {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.checkbox-group {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.radio-group {
	display: flex;
	flex-direction: column;
	gap: 10px;
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

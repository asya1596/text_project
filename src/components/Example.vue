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
						1. Текст первого пунта аккордиона, здесь я вам расскжу
						сквзку
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
							 label-text="Инпут простой" />
			<!-- добавлен атрибут лейблтекст- для помещения лейбла без слота и возможности 
				 поместить туда что угодно, через пропсы -->
			<textarea-component v-model="exTextarea"
								label-text="Многострочный коментарий" />
			<div class="button">
				<button-component v-for="typeButton in typesButton"
								  :type-button="typeButton" />
				<!-- черзез цикл перебрали массив классов и отобразили кнопки с разными стилями -->
			</div>
			<div class="button">
				<button-component v-for="typeButton in typesButton"
								  :type-button="typeButton"
								  :is-download="true" />
				<!-- изменили с-во пропса с false на true, чтобы применить с-во isDownload  -->
			</div>
			<div class="button">
				<button-component v-for="typeButton in typesButton"
								  :type-button="typeButton"
								  :is-blocked="true" />
				<!-- изменили с-во пропса с false на true, чтобы применить с-во isBlocked -->
			</div>
			<div class="radio-button">
				<radio-button-component v-model:is-active="exRadioButton1"
										radiButton-id="radio-butto1"
										label-text="Радиокнопка" />
				<radio-button-component v-model:is-active="exRadioButton2"
										radioButton-id="radio-butto2"
										:is-blocked="true"
										label-text="Радиокнопка" />
			</div>
			<hint-component hint-text="Подсказка" />
			<pagination-component v-model:current-page="currentPage"
								  :total-pages="16" />
			<tabs-component v-model:tab-choose="exTab"
							:tabs="tabs" />
			<input-number-component v-model:number-value="exInputNumber1"
									input-number-id="ex-input-number1"
									label-text="Инпут номерной" />
			<input-number-component v-model:number-value="exInputNumber2"
									:is-blocked="true"
									input-number-id="ex-input-number2"
									label-text="Инпут номерной" />
			<input-number-component v-model:number-value="exInputNumber3"
									:is-blocked="true"
									input-number-id="ex-input-number3"
									label-text="Инпут номерной" />
			<range-component v-model.number="valueRange"
							 :min="0"
							 :max="200" />
			<range-component v-model.number="valueRange1"
							 :min="0"
							 :max="200"
							 :is-disabled="true" />
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
import RadioButtonComponent from "./based/RadioButton.vue";
import InputNumberComponent from "./based/InputNumber.vue";
import HintComponent from "./based/Hint.vue"
import TabsComponent from "./based/Tabs.vue";
import RangeComponent from "./based/Range.vue";
import PaginationComponent from "./based/Pagination.vue";


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
			],
			typesButton: [
				'primary',
				'secondary',
				'approval',
				'removal',
				'warning',
			],
			exRadioButton1: false,
			exRadioButton2: false,
			// добавила вторую переменную, для того чтобы привязать их к разным компонентам через v-model
			// (чтобы задать разный функционал)
			exTab: "",
			tabs: [
				{ id: "1", label: "Таб 1" },
				{ id: "2", label: "Таб 2" },
				{ id: "3", label: "Таб 3" },
				{ id: "4", label: "Таб 4" },
				{ id: "5", label: "Таб 5" },
			],
			exInputNumber1: 0,
			exInputNumber2: 767763746,
			exInputNumber3: 0,

			valueRange: 0,
			valueRange1: 50,
			currentPage: 1,
		}
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

	.radio-button {
		display: flex;

	}
}
</style>

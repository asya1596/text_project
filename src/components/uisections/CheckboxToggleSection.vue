<template>
    <div class="example">
        <h1>Радиокнопки · Чекбоксы · Свитчи</h1>
        <div class="controls-panel">
            <div class="section">
                <h2>Радиокнопки</h2>
                <div class="radio-group"></div>
            </div>

            <div class="section">
                <h2>Чекбоксы</h2>
                <div class="checkbox-group"></div>
            </div>

            <div class="section">
                <h2>Свитчи</h2>
                <div class="switch-group">
                    <Switch :isActive="isYellowActive" color="yellow" @update:isActive="isYellowActive = $event">
                        Включен 
                    </Switch>

                    <Switch :isActive="isGrayActive" color="gray"  type="disablet">
                        Выключен 
                    </Switch>

                    <Switch :isActive="isEmeraldActive" color="emerald" @update:isActive="isEmeraldActive = $event">
                        Изумрудный
                    </Switch>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Switch from '../UI/Switch.vue';
import { ref } from 'vue';

const isYellowActive = ref(true);
const isGrayActive = ref(false);
const isEmeraldActive = ref(true);

const exSwitch = ref(false);
</script>

<style lang="scss" scoped>
.example {
    h1 {
        text-align: center;
        color: var(--text-h1);
        font-weight: 600;
        font-size: 20px;
        padding-left: 5%;
        transition: color 0.2s ease-out;
        margin-bottom: 10px;
        margin-top: 10px;
    }
}

.controls-panel {
    display: flex;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.section {
    background-color: var(--section-bg);
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
    width: 30%;
    height: 180px;
}

h2 {
    color: var(--text-h2);
    font-size: 18px;
    margin-bottom: 15px;

}

.switch-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>


<!-- 

			<checkbox-component v-model:is-checked="exCheckbox" checbox-id="ex-checbox">
				<p>Чекбокс обычный</p>
			</checkbox-component>
			<select-component v-model="selectedSort" :items="sortList"> </select-component>
		
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
			<input-component v-model="exInput" input-id="ex-input" label-text="Инпут простой" />
			
			<textarea-component v-model="exTextarea" label-text="Многострочный коментарий" />
			<div class="button">
				<button-component v-for="typeButton in typesButton" :type-button="typeButton" />
				
			<div class="button">
				<button-component v-for="typeButton in typesButton" :type-button="typeButton" :is-download="true" />
			</div>
			<div class="button">
				<button-component v-for="typeButton in typesButton" :type-button="typeButton" :is-blocked="true" />
			</div>
			<div class="radio-button">
				<radio-button-component v-model:is-active="exRadioButton1" radiButton-id="radio-butto1"
					label-text="Радиокнопка" />
				<radio-button-component v-model:is-active="exRadioButton2" radioButton-id="radio-butto2"
					:is-blocked="true" label-text="Радиокнопка" />
			</div>
			<hint-component hint-text="Подсказка" />
			<pagination-component v-model:current-page="currentPage" :total-pages="16" />
			<tabs-component v-model:tab-choose="exTab" :tabs="tabs" />
			<input-number-component v-model:number-value="exInputNumber1" input-number-id="ex-input-number1"
				label-text="Инпут номерной" />
			<input-number-component v-model:number-value="exInputNumber2" :is-blocked="true"
				input-number-id="ex-input-number2" label-text="Инпут номерной" />
			<input-number-component v-model:number-value="exInputNumber3" :is-blocked="true"
				input-number-id="ex-input-number3" label-text="Инпут номерной" />
			<bread-crumbs-component v-model:items="myCrumbs" />
			<range-component v-model.number="valueRange" :min="0" :max="200" />
			<range-component v-model.number="valueRange1" :min="0" :max="200" :is-disabled="true" />
			<double-range-component v-model="doubleRangeValue" :min="0" :max="100" :step="1" />
			<div>
				<toast-component ref="toast" />
				<button class="toast-button" @click="showSuccess">Показать успех</button>
				<button class="toast-button" @click="showError">Показать ошибку</button>
				<button class="toast-button" @click="showWarning">Показать предупреждение</button>
				<button class="toast-button" @click="showInfo">Информационное уведомление</button>
			</div>
			<chart-component />
			<simple-table-component :headers="headerTable" :rows="rowsTable" />
		</div>
	</div>
</template>


<script>
export default {
	data() {
		return {
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

			myCrumbs: [
				{ label: 'крошка 1', url: '' },
				{ label: 'крошка 2', url: '' },
				{ label: 'крошка 3', url: '' },
				{ label: 'крошка 4', url: '' },
				{ label: 'крошка 5', url: '' },
				{ label: 'крошка 6', url: '' },
				{ label: 'крошка 7', url: '' },
			],
			valueRange: 0,
			valueRange1: 50,
			currentPage: 1,
			doubleRangeValue: [0, 100],
			rowsTable: [
				['Иван', 25, 'Москва'],
				['Анна', 30, 'Санкт-Петербург'],
				['Сергей', 22, 'Казань'],
			],
			headerTable: ['Имя', 'Возраст', 'Город'],
		}
	},
	methods: {
		showInfo() {
			this.$refs.toast.show('Это информационное сообщение', 'info');
		},
		showSuccess() {
			this.$refs.toast.show('Операция выполнена успешно!', 'success');
		},
		showWarning() {
			this.$refs.toast.show('Будьте осторожны!', 'warning');
		},
		showError() {
			this.$refs.toast.show('Произошла ошибка.', 'error');
		}
	}
};
</script> -->
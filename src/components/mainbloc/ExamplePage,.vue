<template>
	<div class="example-page">
		<CheckboxToggleSection/>
		<InputsTextareaSection/>
		<AccordionSelectTabsSection/>
		<HintMessageCrumbSection/>
		<RangeSliderSection/>
		<ChartsSection/>
		<ToastsSection/>
	</div>
</template>

<script setup>
import CheckboxToggleSection from '../uisections/CheckboxToggleSection.vue';
import InputsTextareaSection from '../uisections/InputsTextareaSection.vue';
import AccordionSelectTabsSection from '../uisections/AccordionSelectTabsSection.vue';
import HintMessageCrumbSection from '../uisections/HintMessageCrumbSection.vue';
import RangeSliderSection from '../uisections/RangeSliderSection.vue';
import ChartsSection from '../uisections/ChartsSection.vue';
import ToastsSection from '../uisections/ToasSection.vue';
</script>

<style lang="scss" scoped>
.example-page {
	width: 100%;
	min-height: 100%;
	background-color: var(--body-background);
	padding: clamp(12px, 2vw, 28px) 0 clamp(28px, 4vw, 56px);
	box-sizing: border-box;
	overflow-x: hidden;
}
</style>

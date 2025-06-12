<template>
    <div class="hint-box">
        <div class="hint-content">
            <span>{{ hintText }}</span>
        </div>
        <div class="hint-icon">
            <slot>
                <svg-icon class="hint-default" />
            </slot>
        </div>
    </div>
</template>

<script setup>
import SvgIcon from '@/assets/img/SvgIcon.vue';
defineProps({
    hintText: {
        type: String,
        default: "",
    }
})
</script>

<style lang="scss" scoped>
.hint-box {
    position: relative;
    display: inline-block;
    width: max-content;
    margin: 10px 0px 10px 0px;

    .hint-content {
        position: absolute;
        display: none;
        top: -20px;
        left: 40px;
        border: 2px solid var(--hintborder);
        border-radius: 5px;
        background-color: var(--bary);
        padding: 0px 5px;
        color: var(--background);
    }

    .hint-icon {
        width: 30px;
        height: 30px;
    }


    &:hover .hint-content {
        display: inline-block;
    }

    .hint-default {
        ::v-deep path {
            fill: var(--hintborder);
        }
    }
}
</style>
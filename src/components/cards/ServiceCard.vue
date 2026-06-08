<template>
    <component :is="to ? RouterLink : 'div'" :to="to" class="serves-card" :class="cardClass">
        <component :is="icon" class="serves-icon" />

        <div class="serves-title">
            {{ title }}
        </div>

        <div class="serves-description">
            {{ description }}
        </div>
    </component>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    icon: {
        type: [Object, Function],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        default: '',
    },
    cardClass: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss" scoped>
.serves-card {
    display: block;
    background-color: var(--card-block);
    padding: 10px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: all 0.3s ease;
    color: inherit;
}

.serves-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.serves-icon {
    margin-top: 20px;
    font-size: 36px;
    margin-bottom: 20px;
    display: inline-block;
}

.serves-title {
    font-size: 18px;
    color: var(--text-h2);
    margin-bottom: 5px;
    font-weight: 600;
    text-transform: uppercase;
}

.serves-description {
    color: var(--text-h2);
    line-height: 1.6;
    max-width: 250px;
    margin: 0 auto;
    padding-top: 10px;
}

@media (min-width: 1440px) {
    .serves-card {
        padding: 25px;
    }
}

@media (min-width: 1025px) and (max-width: 1439px) {
    .serves-card {
        padding: 22px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .serves-card {
        padding: 18px;
    }

    .serves-icon {
        width: 56px;
        height: 56px;
    }

    .serves-title {
        font-size: 17px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .serves-card {
        padding: 15px;
    }

    .serves-icon {
        width: 48px;
        height: 48px;
    }

    .serves-title {
        font-size: 16px;
    }

    .serves-description {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .serves-card {
        padding: 12px;
    }

    .serves-icon {
        width: 40px;
        height: 40px;
    }

    .serves-title {
        font-size: 15px;
        margin-bottom: 8px;
    }

    .serves-description {
        font-size: 13px;
        max-width: 220px;
    }
}
</style>
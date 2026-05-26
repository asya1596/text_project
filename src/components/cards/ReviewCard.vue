<template>
    <div class="review-card">
        <div class="review-card__header">
            <div class="review-card__avatar">
                {{ initials }}
            </div>

            <div>
                <h3 class="review-card__name">
                    {{ review.name }}
                </h3>
                <p class="review-card__service">
                    {{ review.service }}
                </p>
            </div>
        </div>

        <div class="review-card__rating">
            <span
                v-for="star in 5"
                :key="star"
                class="review-card__star"
                :class="{ 'review-card__star--active': star <= review.rating }"
            >
                ★
            </span>
        </div>

        <p class="review-card__text">
            {{ review.text }}
        </p>

        <p class="review-card__date">
            {{ review.date }}
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    review: {
        type: Object,
        required: true
    }
});

const initials = computed(() => {
    return props.review.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
});
</script>

<style lang="scss" scoped>
.review-card {
    background-color: var(--card-block);
    padding: 22px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.review-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.review-card__header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 16px;
}

.review-card__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--title-h1-accent);
    color: var(--text-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    flex-shrink: 0;
}

.review-card__name {
    margin: 0;
    color: var(--text-h2);
    font-size: 18px;
    font-weight: 600;
}

.review-card__service {
    margin: 4px 0 0;
    color: var(--text-description);
    font-size: 14px;
}

.review-card__rating {
    margin-bottom: 14px;
}

.review-card__star {
    color: var(--review-star-empty, #777);
    font-size: 20px;
}

.review-card__star--active {
    color: var(--review-star-active, #f7b731);
}

.review-card__text {
    color: var(--text-h2);
    line-height: 1.6;
    font-size: 15px;
    margin: 0 0 16px;
}

.review-card__date {
    color: var(--text-description);
    font-size: 13px;
    margin: 0;
}
</style>
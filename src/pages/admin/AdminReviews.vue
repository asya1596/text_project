<template>
    <section class="admin-reviews">
        <h1 class="admin-reviews__title">
            Модерация отзывов
        </h1>

        <div class="admin-reviews__filters">
            <button @click="activeFilter = 'all'">Все</button>
            <button @click="activeFilter = 'pending'">На модерации</button>
            <button @click="activeFilter = 'published'">Опубликованные</button>
            <button @click="activeFilter = 'rejected'">Отклонённые</button>
        </div>

        <p v-if="errorMessage" class="admin-reviews__error">
            {{ errorMessage }}
        </p>

        <div class="admin-reviews__grid">
            <article
                v-for="review in filteredReviews"
                :key="review.id"
                class="admin-review-card"
            >
                <div class="admin-review-card__top">
                    <div>
                        <h3>{{ review.name }}</h3>
                        <p>{{ review.service }}</p>
                    </div>

                    <span :class="['admin-review-card__status', `status-${review.status}`]">
                        {{ getStatusText(review.status) }}
                    </span>
                </div>

                <div class="admin-review-card__rating">
                    {{ '★'.repeat(review.rating) }}
                </div>

                <p class="admin-review-card__text">
                    {{ review.text }}
                </p>

                <div class="admin-review-card__actions">
                    <button
                        v-if="review.status !== 'published'"
                        @click="updateStatus(review.id, 'published')"
                    >
                        Опубликовать
                    </button>

                    <button
                        v-if="review.status !== 'rejected'"
                        @click="updateStatus(review.id, 'rejected')"
                    >
                        Отклонить
                    </button>

                    <button
                        v-if="review.status === 'published'"
                        @click="updateStatus(review.id, 'pending')"
                    >
                        Снять с публикации
                    </button>

                    <button
                        class="delete-btn"
                        @click="deleteReview(review.id)"
                    >
                        Удалить
                    </button>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const API_URL = 'http://localhost:3000';


const router = useRouter();

const reviews = ref([]);
const activeFilter = ref('all');
const errorMessage = ref('');

const filteredReviews = computed(() => {
    if (activeFilter.value === 'all') {
        return reviews.value;
    }

    return reviews.value.filter(
        review => review.status === activeFilter.value
    );
});

const loadReviews = async () => {
    errorMessage.value = '';

    const response = await fetch(`${API_URL}/api/admin/reviews`, {
        credentials: 'include'
    });

    if (response.status === 401) {
        router.push('/admin-login');
        return;
    }

    if (!response.ok) {
        errorMessage.value = 'Не удалось загрузить отзывы';
        return;
    }

    reviews.value = await response.json();
};

const updateStatus = async (id, status) => {
    const response = await fetch(`${API_URL}/api/admin/reviews/${id}/status`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
    });

    if (response.status === 401) {
        router.push('/admin-login');
        return;
    }

    await loadReviews();
};

const deleteReview = async (id) => {
    const isConfirmed = confirm('Удалить отзыв? Это действие нельзя отменить.');

    if (!isConfirmed) return;

    const response = await fetch(`${API_URL}/api/admin/reviews/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    });

    if (response.status === 401) {
        router.push('/admin-login');
        return;
    }

    await loadReviews();
};

const getStatusText = (status) => {
    const statuses = {
        pending: 'На модерации',
        published: 'Опубликован',
        rejected: 'Отклонён'
    };

    return statuses[status] || status;
};

onMounted(() => {
    loadReviews();
});
</script>

<style scoped>
.admin-reviews {
    min-height: 100vh;
    padding: 48px 32px;
    background: var(--color-admin-reviews-bg);
}

.admin-reviews__title {
    margin: 0 0 28px;
    color: var(--color-admin-reviews-text);
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
}

.admin-reviews__filters {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 28px;
}

.admin-reviews__filters button {
    padding: 10px 16px;
    border: 1px solid var(--color-admin-reviews-border);
    border-radius: var(--radius-admin-reviews-field);
    background: var(--color-admin-reviews-card-bg);
    color: var(--color-admin-reviews-text);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background .2s ease, border-color .2s ease, transform .15s ease;
}

.admin-reviews__filters button:hover {
    border-color: var(--color-admin-reviews-accent);
    background: var(--color-admin-reviews-accent);
}

.admin-reviews__filters button:active {
    transform: translateY(1px);
}

.admin-reviews__error {
    margin: 0 0 24px;
    color: var(--color-admin-reviews-error);
    font-size: 14px;
}

.admin-reviews__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 22px;
}

.admin-review-card {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 24px;
    border: 1px solid var(--color-admin-reviews-border);
    border-radius: var(--radius-admin-reviews-card);
    background: var(--color-admin-reviews-card-bg);
    box-shadow: var(--shadow-admin-reviews-card);
}

.admin-review-card__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
}

.admin-review-card__top h3 {
    margin: 0 0 6px;
    color: var(--color-admin-reviews-text);
    font-size: 18px;
    font-weight: 700;
}

.admin-review-card__top p {
    margin: 0;
    color: var(--color-admin-reviews-muted);
    font-size: 14px;
}

.admin-review-card__status {
    flex-shrink: 0;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
}

.status-pending {
    background: var(--color-admin-reviews-accent);
    color: var(--color-admin-reviews-dark);
}

.status-published {
    background: var(--color-admin-reviews-success);
    color: var(--white);
}

.status-rejected {
    background: var(--color-admin-reviews-dark);
    color: var(--white);
}

.admin-review-card__rating {
    color: var(--color-admin-reviews-accent);
    font-size: 20px;
    letter-spacing: 2px;
}

.admin-review-card__text {
    margin: 0;
    color: var(--color-admin-reviews-text);
    font-size: 15px;
    line-height: 1.6;
}

.admin-review-card__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: auto;
}

.admin-review-card__actions button {
    padding: 10px 14px;
    border: 1px solid var(--color-admin-reviews-border);
    border-radius: var(--radius-admin-reviews-field);
    background: var(--color-admin-reviews-dark);
    color: var(--white);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background .2s ease, border-color .2s ease, transform .15s ease;
}

.admin-review-card__actions button:hover {
    border-color: var(--color-admin-reviews-accent);
    background: var(--color-admin-reviews-accent);
    color: var(--color-admin-reviews-dark);
}

.admin-review-card__actions button:active {
    transform: translateY(1px);
}

.admin-review-card__actions .delete-btn {
    background: transparent;
    color: var(--white);
    border-color: var(--color-admin-reviews-error);
}

.admin-review-card__actions .delete-btn:hover {
    background: var(--color-admin-reviews-error);
    color: var(--white);
    border-color: var(--color-admin-reviews-error);
}

@media (max-width: 600px) {
    .admin-reviews {
        padding: 32px 16px;
    }

    .admin-reviews__title {
        font-size: 26px;
    }

    .admin-review-card {
        padding: 20px;
    }

    .admin-review-card__top {
        flex-direction: column;
    }
}
</style>
<template>
    <div class="toast-demo">
        <div class="toast-actions">
            <button
                class="toast-action toast-action--info"
                type="button"
                @click="show('Информационное уведомление', 'info')"
            >
                Показать info
            </button>

            <button
                class="toast-action toast-action--success"
                type="button"
                @click="show('Операция выполнена успешно', 'success')"
            >
                Показать success
            </button>

            <button
                class="toast-action toast-action--warning"
                type="button"
                @click="show('Обратите внимание на предупреждение', 'warning')"
            >
                Показать warning
            </button>

            <button
                class="toast-action toast-action--error"
                type="button"
                @click="show('Произошла ошибка', 'error')"
            >
                Показать error
            </button>
        </div>

        <TransitionGroup
            name="toast-fade"
            tag="div"
            class="toast-list"
        >
            <div
                v-for="toast in toasts"
                :key="toast.id"
                :class="['toast-message', `toast-message--${toast.type}`]"
            >
                {{ toast.message }}
            </div>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toasts: [],
        };
    },

    methods: {
        show(message, type = 'info', duration = 3000) {
            const id = Date.now() + Math.random();

            this.toasts.push({
                id,
                type,
                message,
            });

            setTimeout(() => {
                this.hide(id);
            }, duration);
        },

        hide(id) {
            this.toasts = this.toasts.filter(
                (toast) => toast.id !== id
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.toast-demo {
    position: relative;
    display: flex;
    width: 100%;
    min-height: clamp(180px, 18vw, 260px);
}

.toast-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: calc(100% - 400px);
}

.toast-action {
    padding: 10px 16px;
    color: var(--toast-button-text);
    border: 1px solid var(--toast-button-border);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform 0.2s ease-out,
        box-shadow 0.2s ease-out;
}

.toast-action:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px var(--toast-shadow);
}

.toast-action--info {
    background: linear-gradient(
        135deg,
        var(--toast-info-background-start),
        var(--toast-info-background-end)
    );
}

.toast-action--success {
    background: linear-gradient(
        135deg,
        var(--toast-success-background-start),
        var(--toast-success-background-end)
    );
}

.toast-action--warning {
    background: linear-gradient(
        135deg,
        var(--toast-warning-background-start),
        var(--toast-warning-background-end)
    );
}

.toast-action--error {
    background: linear-gradient(
        135deg,
        var(--toast-error-background-start),
        var(--toast-error-background-end)
    );
}

.toast-list {
    position: absolute;
    right: clamp(16px, 2vw, 36px);
    bottom: clamp(16px, 2vw, 28px);
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    width: min(360px, 100%);
    z-index: 10;
}

.toast-message {
    padding: 12px 16px;
    color: var(--toast-text);
    border: 1px solid var(--toast-border);
    border-radius: 8px;
    box-shadow: 0 8px 24px var(--toast-shadow);
    font-size: 14px;
    font-weight: 500;
    word-break: break-word;
}

.toast-message--info {
    background: linear-gradient(
        135deg,
        var(--toast-info-background-start),
        var(--toast-info-background-end)
    );
}

.toast-message--success {
    background: linear-gradient(
        135deg,
        var(--toast-success-background-start),
        var(--toast-success-background-end)
    );
}

.toast-message--warning {
    background: linear-gradient(
        135deg,
        var(--toast-warning-background-start),
        var(--toast-warning-background-end)
    );
}

.toast-message--error {
    background: linear-gradient(
        135deg,
        var(--toast-error-background-start),
        var(--toast-error-background-end)
    );
}

.toast-fade-enter-active,
.toast-fade-leave-active {
    transition:
        opacity 0.3s ease-out,
        transform 0.3s ease-out;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
    opacity: 0;
    transform: translateX(16px);
}

.toast-fade-enter-to,
.toast-fade-leave-from {
    opacity: 1;
    transform: translateX(0);
}

/* TABLET */
@media (max-width: 1023px) {
    .toast-demo {
        min-height: 260px;
    }

    .toast-actions {
        max-width: calc(100% - 320px);
        gap: 8px;
    }

    .toast-list {
        width: min(300px, 42vw);
        right: 16px;
        bottom: 16px;
    }

    .toast-message {
        font-size: 13px;
    }
}

/* MOBILE */
@media (max-width: 640px) {
    .toast-demo {
        flex-direction: column;
        min-height: 380px;
    }

    .toast-actions {
        flex-direction: column;
        width: 100%;
        max-width: 100%;
    }

    .toast-action {
        width: 100%;
    }

    .toast-list {
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
    }

    .toast-message {
        width: 100%;
        font-size: 13px;
    }
}
</style>
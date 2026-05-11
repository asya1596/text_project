<template>
    <div v-if="showBanner" class="cookie-banner">
        <div class="cookie-content">
            <p>
                Мы используем куки для улучшения работы сайта. Продолжая использовать сайт,
                вы соглашаетесь с использованием куки.
            </p>

            <div class="cookie-actions">
                <button @click="acceptCookies" class="btn btn-accept">
                    Принять все
                </button>
                <button @click="showSettings = true" class="btn btn-settings">
                    Настройки
                </button>
                <button @click="rejectCookies" class="btn btn-cansel">
                    Отказаться
                </button>
            </div>
        </div>

        <div v-if="showSettings" class="cookie-settings-modal">
            <div class="modal-content">
                <h4>Настройки куки</h4>

                <div class="setting-group">
                    <label>
                        <input type="checkbox" v-model="cookieSettings.essential" disabled />
                        Обязательные (необходимы для работы сайта)
                    </label>
                </div>

                <div class="setting-group">
                    <label>
                        <input type="checkbox" v-model="cookieSettings.analytics" />
                        Аналитические (помогают улучшить сайт)
                    </label>
                </div>

                <div class="setting-group">
                    <label>
                        <input type="checkbox" v-model="cookieSettings.marketing" />
                        Маркетинговые (для персонализированной рекламы)
                    </label>
                </div>

                <div class="modal-actions">
                    <button @click="saveSettings" class="btn btn-primary">
                        Сохранить настройки
                    </button>
                    <button @click="closeSettings" class="btn btn-primary">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Реактивные переменные
const showBanner = ref(true);
const showSettings = ref(false);

const cookieSettings = ref({
    essential: true,
    analytics: false,
    marketing: false
});

// Проверка, было ли уже дано согласие
const checkCookieConsent = () => {
    const consent = getCookie('cookie_consent');
    if (consent) {
        showBanner.value = false;
        try {
            const savedSettings = JSON.parse(consent);
            cookieSettings.value = { ...savedSettings };
        } catch (e) {
            console.warn('Не удалось распарсить настройки куки');
        }
    }
};

// Получение куки
const getCookie = (name) => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

// Установка куки
const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
};

// Принятие всех куки
const acceptCookies = () => {
    cookieSettings.value = {
        essential: true,
        analytics: true,
        marketing: true
    };
    saveCookieConsent();
};

// Отказ от сбора куки
const rejectCookies = () => {
    cookieSettings.value = {
        essential: true,
        analytics: false,
        marketing: false
    };
    saveCookieConsent(false);
};

// Сохранение настроек куки
const saveSettings = () => {
    saveCookieConsent(true);
    showSettings.value = false;
};

// Закрытие настроек
const closeSettings = () => {
    showSettings.value = false;
};

// Сохранение согласия/отказа в куки
const saveCookieConsent = (isConsentGiven = true) => {
    const consentData = {
        ...cookieSettings.value,
        consentGiven: isConsentGiven,
        timestamp: new Date().toISOString()
    };

    setCookie(
        'cookie_consent',
        JSON.stringify(consentData),
        365 // срок действия — 1 год
    );
    showBanner.value = false;

    if (isConsentGiven) {
        console.log('Пользователь дал согласие на куки:', cookieSettings.value);
    } else {
        console.log('Пользователь отказался от необязательных куки');
    }
    handleCookieConsent(consentData);
};

const handleCookieConsent = (consentData) => {
    if (!consentData.analytics) {
        disableAnalytics();
    }
};

const disableAnalytics = () => {
    console.log('Аналитика отключена по выбору пользователя');
};

onMounted(() => {
    checkCookieConsent();
});
</script>

<style scoped>
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--card-block);
    color: var(--text-description);
    padding: 20px;
    z-index: 1000;
    box-shadow: 0 -4px 12px rgba(75, 65, 65, 0.3);
}

.cookie-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.cookie-actions {
    display: flex;
    gap: 10px;
}

.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.btn-accept {
    background: var(--btn-accept);
    color: var(--text-bg);
}

.btn-settings {
    background: var(--btn-settings);
    color: var(--text-bg);
}

.btn-cansel {
    background: var(--btn-cansel);
    color: var(--text-bg);
}

.cookie-settings-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
}

.modal-content {
    background: var(--modal-bg);
    padding: 25px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    color: var(--text-modal);
}

.btn-primary {
    background: var(--btn-primary-bg);
    color: var(--text-gray-btn);

}

.setting-group {
    margin: 15px 0;
}

.setting-group label {
    display: block;
    margin-bottom: 8px;
}

.modal-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .cookie-content {
        flex-direction: column;
        text-align: center;
    }
}
</style>

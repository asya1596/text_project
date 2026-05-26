<template>
    <div v-if="showBanner" class="cookie-banner">
        <div class="cookie-content">
            <p>
                Мы используем куки для улучшения работы сайта. Вы можете принять все,
                отказаться от необязательных или настроить категории.
            </p>

            <div class="cookie-actions">
                <button @click="acceptCookies" class="btn btn-accept">
                    Принять все
                </button>

                <button @click="openSettings" class="btn btn-settings">
                    Настройки
                </button>

                <button @click="rejectCookies" class="btn btn-cansel">
                    Отказаться
                </button>
            </div>
        </div>
    </div>

    <div v-if="showSettings" class="cookie-settings-modal">
        <div class="modal-content">
            <h4>Настройки куки</h4>

            <div class="setting-group">
                <label>
                    <input type="checkbox" v-model="cookieSettings.essential" disabled />
                    Обязательные
                </label>
            </div>

            <div class="setting-group">
                <label>
                    <input type="checkbox" v-model="cookieSettings.analytics" />
                    Аналитические
                </label>
            </div>

            <div class="setting-group">
                <label>
                    <input type="checkbox" v-model="cookieSettings.marketing" />
                    Маркетинговые
                </label>
            </div>

            <div class="modal-actions">
                <button @click="saveSettings" class="btn btn-primary">
                    Сохранить
                </button>

                <button @click="deleteCookieConsent" class="btn btn-cansel">
                    Удалить cookie
                </button>

                <button @click="closeSettings" class="btn btn-primary">
                    Отмена
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, defineExpose } from 'vue';

const showBanner = ref(true);
const showSettings = ref(false);

const cookieSettings = ref({
    essential: true,
    analytics: false,
    marketing: false
});

const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(
                cookie.substring(nameEQ.length)
            );
        }
    }

    return null;
};

const setCookie = (name, value, days) => {
    const date = new Date();

    date.setTime(
        date.getTime() + days * 24 * 60 * 60 * 1000
    );

    document.cookie = [
        `${name}=${encodeURIComponent(value)}`,
        `expires=${date.toUTCString()}`,
        'path=/',
        'SameSite=Lax',
        location.protocol === 'https:' ? 'Secure' : ''
    ]
        .filter(Boolean)
        .join('; ');
};

const deleteCookie = (name) => {
    document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

const checkCookieConsent = () => {
    const consent = getCookie('cookie_consent');

    if (!consent) {
        showBanner.value = true;
        return;
    }

    try {
        const savedSettings = JSON.parse(consent);

        cookieSettings.value = {
            essential: true,
            analytics: Boolean(savedSettings.analytics),
            marketing: Boolean(savedSettings.marketing)
        };

        showBanner.value = false;
    } catch {
        deleteCookie('cookie_consent');
        showBanner.value = true;
    }
};

const saveCookieConsent = (decision = 'custom') => {
    const consentData = {
        ...cookieSettings.value,
        decision,
        version: '1.0',
        timestamp: new Date().toISOString()
    };

    setCookie(
        'cookie_consent',
        JSON.stringify(consentData),
        365
    );

    showBanner.value = false;
    showSettings.value = false;
};

const acceptCookies = () => {
    cookieSettings.value = {
        essential: true,
        analytics: true,
        marketing: true
    };

    saveCookieConsent('accepted_all');
};

const rejectCookies = () => {
    cookieSettings.value = {
        essential: true,
        analytics: false,
        marketing: false
    };

    saveCookieConsent('rejected_all');
};

const saveSettings = () => {
    saveCookieConsent('custom');
};

const openSettings = () => {
    showSettings.value = true;
};

const closeSettings = () => {
    showSettings.value = false;
};

const deleteCookieConsent = () => {
    deleteCookie('cookie_consent');

    cookieSettings.value = {
        essential: true,
        analytics: false,
        marketing: false
    };

    showBanner.value = true;
    showSettings.value = false;
};

defineExpose({
    openSettings,
    deleteCookieConsent
});

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

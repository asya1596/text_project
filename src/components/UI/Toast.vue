<template>
    <div v-if="visible"
         :class="['toast', type]">
        {{ message }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            type: '',
            message: '',
            timeout: null
        };
    },
    methods: {
        show(msg, type = 'info', duration = 3000) {
            this.message = msg;
            this.type = type;
            this.visible = true;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.hide();
            }, duration);
        },
        hide() {
            this.visible = false;
            this.type = '';
        },
    }
};
</script>
<style lang="scss" scoped>
.toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}
.info {
    background-color: var(--thirdary);
    
}

.success {
    background-color: var(--approval);
}

.warning {
    background-color: var(--removal);
}

.error {
    background-color: var(--warning);
}
</style>
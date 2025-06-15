<template>
    <div class="nav-tab">
        <nav>
            <ul>
                <li :class="['tab-element','tab-element1']">
                    Таб1
                </li>
                <li :class="['tab-element', 'tab-element2']">
                    Таб2
                </li>
                <li :class="['tab-element', 'tab-element3']">
                    Таб3
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.nav-tab {
    display: flex;
    position: relative;
        .tab-element{
            display: inline-block;
            border: 2px solid var(--thirdary);
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
        }
    
}
</style>
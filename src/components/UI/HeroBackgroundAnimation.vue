<template>
    <div class="hero-bg-animation" aria-hidden="true">
        <span class="shape shape-circle"></span>
        <span class="shape shape-square"></span>
        <span class="shape shape-ring"></span>

        <span class="line line-one"></span>
        <span class="line line-two"></span>
    </div>
</template>

<script setup></script>

<style scoped>
.hero-bg-animation {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
    animation: heroFadeIn 1.5s ease-out;
}

.shape,
.line {
    position: absolute;
    z-index: 0;
    display: block;
}

.shape-circle {
    width: 180px;
    height: 180px;
    top: 8%;
    left: -5%;
    border-radius: 50%;
    border: 1px solid var(--hero-animation-primary);
    box-shadow: 0 0 40px var(--hero-animation-glow);
    animation: travelCircle 18s linear infinite alternate;
}

.shape-square {
    width: 130px;
    height: 130px;
    top: 18%;
    left: calc(100% - 130px);
    border: 1px solid var(--hero-animation-secondary);
    animation: travelSquare 22s linear infinite alternate;
}

.shape-ring {
    width: 240px;
    height: 240px;
    top: 70%;
    left: calc(100% - 240px);
    border-radius: 50%;
    border: 1px solid var(--hero-animation-tertiary);
    opacity: 0.2;
    animation: travelRing 20s linear infinite alternate;
}

.line {
    height: 4px;
    border-radius: 10px;
}

.line-one {
    width: 280px;
    top: 75%;
    left: -15%;
    background-color: var(--hero-animation-primary);
    opacity: 0.3;
    animation: travelLineOne 24s linear infinite alternate;
}

.line-two {
    width: 220px;
    top: 20%;
    left: calc(100% - 220px);
    background-color: var(--hero-animation-secondary);
    opacity: 0.25;
    animation: travelLineTwo 19s linear infinite alternate;
}

@keyframes travelCircle {
    0% {
        top: 8%;
        left: -5%;
        transform: scale(1);
    }

    25% {
        top: 25%;
        left: 30%;
        transform: scale(1.06);
    }

    50% {
        top: 62%;
        left: 78%;
        transform: scale(0.96);
    }

    75% {
        top: 38%;
        left: 45%;
        transform: scale(1.04);
    }

    100% {
        top: 12%;
        left: calc(100% - 180px);
        transform: scale(1);
    }
}

@keyframes travelSquare {
    0% {
        top: 18%;
        left: calc(100% - 130px);
        transform: rotate(18deg);
    }

    30% {
        top: 68%;
        left: 60%;
        transform: rotate(60deg);
    }

    60% {
        top: 35%;
        left: 15%;
        transform: rotate(120deg);
    }

    100% {
        top: 8%;
        left: -5%;
        transform: rotate(180deg);
    }
}

@keyframes travelRing {
    0% {
        top: 70%;
        left: calc(100% - 240px);
        transform: scale(1);
        opacity: 0.14;
    }

    30% {
        top: 15%;
        left: 55%;
        transform: scale(1.08);
        opacity: 0.22;
    }

    60% {
        top: 48%;
        left: 20%;
        transform: scale(0.96);
        opacity: 0.16;
    }

    100% {
        top: 10%;
        left: -10%;
        transform: scale(1.05);
        opacity: 0.2;
    }
}

@keyframes travelLineOne {
    0% {
        top: 75%;
        left: -15%;
        transform: rotate(-18deg);
    }

    50% {
        top: 30%;
        left: 40%;
        transform: rotate(12deg);
    }

    100% {
        top: 15%;
        left: calc(100% - 280px);
        transform: rotate(-30deg);
    }
}

@keyframes travelLineTwo {
    0% {
        top: 20%;
        left: calc(100% - 220px);
        transform: rotate(24deg);
    }

    50% {
        top: 65%;
        left: 35%;
        transform: rotate(-10deg);
    }

    100% {
        top: 80%;
        left: -10%;
        transform: rotate(45deg);
    }
}

@keyframes heroFadeIn {
    from {
        opacity: 0;
        transform: scale(0.96);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@media (max-width: 768px) {
    .shape-circle {
        width: 120px;
        height: 120px;
        animation-duration: 24s;
    }

    .shape-square {
        width: 90px;
        height: 90px;
        left: calc(100% - 90px);
        animation-duration: 26s;
    }

    .shape-ring {
        width: 160px;
        height: 160px;
        left: calc(100% - 160px);
        animation-duration: 25s;
    }

    .line-one {
        width: 180px;
        animation-duration: 28s;
    }

    .line-two {
        width: 150px;
        left: calc(100% - 150px);
        animation-duration: 23s;
    }
}

@media (max-width: 480px) {
    .shape-circle {
        width: 90px;
        height: 90px;
    }

    .shape-square {
        width: 70px;
        height: 70px;
        left: calc(100% - 70px);
    }

    .shape-ring {
        width: 120px;
        height: 120px;
        left: calc(100% - 120px);
    }

    .line-one {
        width: 120px;
    }

    .line-two {
        width: 110px;
        left: calc(100% - 110px);
    }
}

@media (prefers-reduced-motion: reduce) {

    .shape,
    .line,
    .hero-bg-animation {
        animation: none;
    }
}
</style>

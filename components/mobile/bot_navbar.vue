<template>
    <div class="bot_navbar">
        <button class="btn_navbar" @click.prevent="$system.to('/')">
            <i class="bi bi-house-door-fill"></i>
            <span>Home</span>
        </button>
        <button class="btn_navbar" @click.prevent="$system.to('/profile')">
            <i class="bi bi-person-fill"></i>
            <span>Profil</span>
        </button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.bot_navbar {
    justify-content: space-between;
    padding: 5px 24px 5px 20px;
    background-color: #fff;
    gap: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.2);

    .btn_navbar {
        flex-direction: column;
        height: 100%;
        flex: 1;
        font-weight: bold;
        color: #404040;
    }
}
</style>
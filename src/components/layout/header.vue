<template>
    <header class="header">
        <h1>TodoList</h1>
        <div id="nav">
            <router-link to="/"><img src="../../assets/social_media_icons/png/001-home.png" width="20" height="20"/> </router-link> | 
            <router-link to="/about"><img src="../../assets/social_media_icons/png/003-person.png" width="20" height="20"/> </router-link> |
            <router-link to="/tetris"> Tetris </router-link>
        </div>
        <div class="footer">
            <h6>Date accessed: {{ today }}</h6>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data()
    {
        return {
            today: new Date().toLocaleString()
        }
    }
}
</script>

<style>
    .header{
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }

    .header a{
        color: #fff;
        padding-right: right;
        text-decoration: none;
    }
</style>

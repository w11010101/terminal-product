<template>
    <div id="app" v-cloak>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
@import url(./css/my-theme.css);
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

</style>

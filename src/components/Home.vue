<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        },
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            }
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')
                    })
            }
        },
    }
</script>

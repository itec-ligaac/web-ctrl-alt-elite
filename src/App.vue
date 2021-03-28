<template>
    <v-app>
        <div id="app">
            <div class="nav">
                <router-link to="/"></router-link>
            </div>
            <router-view/>
        </div>
        <v-flex>
        </v-flex>
        <Footer />
    </v-app>
</template>

<script>
    import Footer from "./components/Footer";
    export default {
        name: 'App',

        components: {
            Footer
        },

        data: () => ({
            //
        }),
    };
</script>


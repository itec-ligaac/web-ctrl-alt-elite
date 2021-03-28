<template>
    <div class="background">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet">
        <v-parallax style="border: 0px" src="../../public/bora-bora-island.jpg">
            <div>
                <v-row align="center"
                       justify="center">
                    <img src="../../public/logo_site.png" class="logo">
                </v-row>
                <h1 style="font-family: 'Arvo', serif; align-content: center; justify-content: center; color: #030d1c; background-color:floralwhite; margin-left:400px; margin-right:400px; display: flex">Find the best and safest locations for your vacation!</h1>
                <br />
                <v-row
                        align="center"
                        justify="center"
                        text="bold"  >
                    <Signup />
                    <Login />
                </v-row></div>
        </v-parallax>
        <br />
        <br />
        <h1 style="font-family: 'Arvo', serif; align-content: center; justify-content: center; color: black; display: flex">
            Find the best places to visit without getting ill
        </h1>
        <br />
        <div style="padding:20px" class="separator text"><v-icon>mdi-tree</v-icon></div>
        <br />
        <p class="text" style="padding:20px">Our website provides you with the best tools to help you find the most beautiful and safe places to visit. During these times, it is hard for everyone to choose a location to visit, due to the circumstances. While we do not guarantee an 100% safe trip, we hope that our website will help you travel with less worries and stress. Happy vacationing!</p>
        <br />
        <br />
    </div>
</template>

<script>
    import Signup from "../components/Signup";
    import Login from "../components/Login"
    import CardData from "../components/CardData"
    export default {
        name: "Home",
        components: {
            CardData,
            Signup,
            Login,
        },
    }
</script>

<style scoped>

    .background{
        height:800px;
        width: 100%;
        justify-content: center;
        background-size:cover;
        background-color:floralwhite
    }

    .logo {
        align-content: center;
        height: 300px;
        width: 300px;
        margin: 0;
        padding: 0;
    }

    .text {
        font-family: 'Arvo', serif;
        align-content: center;
        justify-content: center;
        color: black;
        display: flex
    }

    .separator {
        display: flex;
        align-items: center;
        text-align: center;
        font-family: 'Arvo', serif;
    }
    .separator::before,
    .separator::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid gray;
    }
    .separator:not(:empty)::before {
        margin-right: .25em;
    }
    .separator:not(:empty)::after {
        margin-left: .25em;
    }

</style>
<template>
    <div class="content">
        <div class="logo-site">
            <v-img src="../../public/logo-site.png"
                   max-height="150" max-width="250"

                    />
        </div>

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
        data: () => ({
            isLoading: false,
            items: [],
            model: null,
            search: null,
            tab: null,
            country:'Qatar',
            global_cases: 0
        }),
        mounted () {
            fetch('https://api.covid19api.com/total/country/'+ this.country +'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
            .then((response => response.json()))
            .then(data => {
                console.log(data)
            })


            fetch('https://api.covid19api.com/').then(response => response.json()).then(data => {
                console.log('Success:', data);
            })
        },
    }
</script>

<style scoped>

    .logo-site {
        align-items: center;
        position: center;
    }

    .content {
        display: flex;

    }

</style>
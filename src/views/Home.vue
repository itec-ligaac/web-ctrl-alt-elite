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
    <h1 style="font-family: 'Arvo', serif; align-content: center; justify-content: center; color: floralwhite; display: flex">Find the best and safest locations for your vacation!</h1>
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
    <hr />
    <p class="text">Our website provides you with the best tools to help you find the most beautiful and safe places to visit. During these times, it is hard for everyone to choose a location to visit, due to the circumstances. While we do not guarantee an 100% safe trip, we hope that our website will help you travel with less worries and stress. Happy vacationing!</p>
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
        // data: () => ({
        //     isLoading: false,
        //     items: [],
        //     model: null,
        //     search: null,
        //     tab: null,
        //     country:'Qatar',
        //     global_cases: 0
        // }),
        // mounted () {
        //     fetch('https://api.covid19api.com/total/country/'+ this.country +'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
        //     .then((response => response.json()))
        //     .then(data => {
        //         console.log(data)
        //     })
        //
        //
        //     fetch('https://api.covid19api.com/').then(response => response.json()).then(data => {
        //         console.log('Success:', data);
        //     })
        // },
    }
</script>

<style scoped>

.background{
  /*clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 77% 84%, 50% 100%, 22% 84%, 0 70%, 0% 35%, 0 0);*/
  height:800px;
  width: 100%;
  justify-content: center;
  background-size:cover;
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

</style>
<template>
  <v-main>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet">
    <v-app-bar dark class="text">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <br />
    <h1 align="center" class="text">Find suitable locations!</h1>
    <br />
    <div class="container" align="center">
      <div><v-toolbar text elevation="0">
        <v-text-field
            class="text"
            label="search by country or city"
            v-model="search"
            hide-details
            prepend-icon="mdi-magnify"
            single-line
        ></v-text-field>
      </v-toolbar></div>
<!--      <div><v-menu max-width="290" >-->
<!--        <template v-slot:activator="{ on }">-->
<!--          <v-text-field :value="formattedDate" class="text" clearable temporary label="Choose a date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>-->
<!--        </template>-->
<!--        <v-date-picker clearable v-model="due" @change="menu = false"></v-date-picker>-->
<!--      </v-menu></div>-->
      <div>
        <v-select
            class="text"
            v-model="select"
            :hint="`${select.state}, ${select.abbr}`"
            :items="items"
            item-text="state"
            item-value="abbr"
            label="Select"
            persistent-hint
            return-object
            single-line
        ></v-select>
      </div>
      <div>
        <v-btn text class="text button" @click="submit">search</v-btn>
      </div>
    </div>
    <h1>{{nrcazuri}}</h1>
    <ul>
      <v-list-item-content class="list text" v-for="hotel in hotels" :key="hotel">{{hotel.fullName}}
        <li v-model="selected" active-class="pink--text" multiple>
         <!-- <v-icon
              v-if="!active"
              color="grey lighten-1"
          >
            mdi-star-outline
          </v-icon>

          <v-icon
              v-else
              color="yellow darken-3"
          >
            mdi-star
          </v-icon> -->
        </li>
      </v-list-item-content>
    </ul>
  </v-main>
</template>

<script>

export default {
  data () {
    return {
      selected: [],
      select: { state: 'Florida', abbr: 'FL' },
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },
      ],
      due:null,
      menu:false,
      cities:[],
      search:'',
      hotels:[],
      locations:[],
      nrcazuri:0
    }
    var ok;
  },
  methods:{
    submit(){
      fetch('http://engine.hotellook.com/api/v2/lookup.json?query=%27'+this.search+'&lang=en&lookFor=both&limit=100&token=PasteYourTokenHere')
      .then((response => response.json()))
      .then(data => {
        this.hotels= data.results.hotels;
        ok:true;
      });
    },
  },
  mounted() {
    fetch('https://api.covid19api.com/countries').then(response => response.json()).then(result => { this.cities = result });
    fetch('https://www.trackcorona.live/api/countries').then(response => response.json()).then(result => {
      this.locations=result.data;
      console.log(locations.dead);
    });

},
  computed: {
    filter:function(){
       this.cities.filter((city)=>{
             city.Country.match(this.search);
          }
      ),
           this.locations.filter((city)=>{
                 // this.nrcazuri=city.confirmed.toNumber-city.dead.toNumber-city.recovered.toNumber;
             console.log(city.dead);
               }
           );
    }
  }

}
</script>

<style scoped>
.text {
  font-family: 'Arvo', serif;
  align: center;
}

.button {
  padding-left: 6px;
  margin-left: 6px;
}

.container {
  align-content: center;
  display: inline-flex;
  text-align: center;
}

.list{
}
</style>
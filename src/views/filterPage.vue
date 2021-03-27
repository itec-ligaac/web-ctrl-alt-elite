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

    <ul>
      <v-list-item-content class="list text" v-for="hotel in filterHotels" :key="hotel.fullName">
        <li>
    <v-card
            class="mx-auto my-12"
            max-width="374"

    >
      <template slot="progress">
        <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>{{ hotel.label }}</v-card-title>

      <v-card-text>
        <v-row
                align="center"
                class="mx-0"
        >
          <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
          ></v-rating>

          <div class="grey--text ml-4">
            {{ (((Math.random().toPrecision(2))/2))*10 }} ({{ hotel._score }})
          </div>
        </v-row>

        <div class="my-4 subtitle-1">
          $ • {{ hotel.locationName }}
        </div>

        <div>{{ hotel.fullName }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-actions>
        <v-btn
                color="deep-purple lighten-2"
                text
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
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
      nrcazuri: 0
    }
  },
  methods:{
    submit(){
      fetch('http://engine.hotellook.com/api/v2/lookup.json?query=%27'+this.search+'&lang=en&lookFor=both&limit=100&token=PasteYourTokenHere')
      .then((response => response.json()))
      .then(data => {
        this.hotels= data.results.hotels;
        console.log(data.results.hotels)
      });
    },
  },
  mounted() {
    // fetch('https://api.covid19api.com/countries').then(response => response.json()).then(result => { this.cities = result, console.log(result) });
    fetch('https://www.trackcorona.live/api/countries').then(response => response.json()).then(result => {
      this.locations = result.data;
    });

},
  computed: {
    filter: function() {
      return this.locations.filter((loc) => {
        return loc.location.match(this.search)
      })
    },
    filterHotels: function () {
      return this.hotels.filter((hotel) => {
        return hotel.fullName.match(this.search)
      })
    }
}

}

</script>

<style scoped>
.text {
  font-family: 'Arvo', serif;
  align: center;
  width: 100%;
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
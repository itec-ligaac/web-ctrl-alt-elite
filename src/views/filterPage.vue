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
            label="search for a location"
            hide-details
            prepend-icon="mdi-magnify"
            single-line
        ></v-text-field>
      </v-toolbar></div>
      <div><v-menu max-width="290" >
        <template v-slot:activator="{ on }">
          <v-text-field :value="formattedDate" class="text" clearable temporary label="Choose a date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
        </template>
        <v-date-picker clearable v-model="due" @change="menu = false"></v-date-picker>
      </v-menu></div>
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
        <v-btn text class="text button">search</v-btn>
      </div>
    </div>
  </v-main>
</template>

<script>

export default {
  data () {
    return {
      select: { state: 'Florida', abbr: 'FL' },
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },
      ],
    }
  },
  computed: {
    formattedDate() {
      console.log(this.due)
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
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
</style>
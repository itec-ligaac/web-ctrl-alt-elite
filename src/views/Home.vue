<template>
    <div>
        <v-app-bar
                dense
                dark
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Page title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-autocomplete
                    v-model="model"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    chips
                    clearable
                    hide-details
                    hide-selected
                    item-text="name"
                    item-value="symbol"
                    label="Search for a place"
                    solo
            >
                <template v-slot:no-data>
                    <v-list-item>
                        <v-list-item-title>
                            Search for your favorite
                            <strong>city</strong>
                        </v-list-item-title>
                    </v-list-item>
                </template>
                <template v-slot:selection="{ attr, on, item, selected }">
                    <v-chip
                            v-bind="attr"
                            :input-value="selected"
                            color="blue-grey"
                            class="white--text"
                            v-on="on"
                    >
                        <v-icon left>mdi-coin</v-icon>
                        <span v-text="item.name"></span>
                    </v-chip>
                </template>
                <template v-slot:item="{ item }">
                    <v-list-item-avatar
                            color="indigo"
                            class="headline font-weight-light white--text"
                    >
                        {{ item.name.charAt(0) }}
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-icon>mdi-coin</v-icon>
                    </v-list-item-action>
                </template>
            </v-autocomplete>
            <v-spacer></v-spacer>
            <div>
                <Signup />
            </div>
            <div>
                <Login />
            </div>
        </v-app-bar>
      <v-main>
        <v-container fluid>
      <div align="center">
        <v-container>
          Global new covid cases: {{global_cases}}
        </v-container>
        <v-row>
            <v-col>
                <v-card class="ml-15">
                    <CardData/>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-card>
                  <CardData/>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col >
                <v-card class="mr-15">
                  <CardData/>
                </v-card>
            </v-col>
        </v-row>
      </div>
          </v-container>
      </v-main>
    </div>
</template>

<script>
    import Signup from "../components/Signup";
    import Login from "../components/Login"
    import CardData from "../components/CardData"
    import axios from "axios";
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
main{
  background-image: url('https://cdn.discordapp.com/attachments/825124604489891870/825377933555662858/bora-bora-island.jpg');
  background-size:cover;
}
</style>
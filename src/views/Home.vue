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
        <br><br><br>
        <v-spacer></v-spacer>
        <v-row>
            <v-col>
                <v-card>
                    <h1>Card!</h1>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-card>
                    <h1>Card!</h1>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-card>
                    <h1>Card!</h1>
                </v-card>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
    </div>
</template>

<script>
    import Signup from "../components/Signup";
    import Login from "../components/Login";
    export default {
        name: "Home",
        components: {
            Signup,
            Login
        },
        data: () => ({
            isLoading: false,
            items: [],
            model: null,
            search: null,
            tab: null,
        }),

        watch: {
            model (val) {
                if (val != null) this.tab = 0
                else this.tab = null
            },
            search (val) {
                if (this.items.length > 0) return

                this.isLoading = true
                fetch('https://api.coingecko.com/api/v3/coins/list')
                    .then(res => res.clone().json())
                    .then(res => {
                        this.items = res
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (this.isLoading = false))
            },
        },
    }
</script>

<style scoped>

</style>
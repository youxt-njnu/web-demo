<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar color="surface-variant" title="">
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>{{ $t("$vuetify.homePage.title") }}</v-app-bar-title>

            <template v-slot:append>
                <v-btn icon="psychology_alt"></v-btn>

                <v-btn icon="settings"></v-btn>


                <v-menu>
                    <template v-slot:activator="{ props }">

                        <v-btn v-bind="props" icon="more_vert"></v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>

        </v-app-bar>

        <v-navigation-drawer expand-on-hover rail>
            <v-list>
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                    subtitle="sandra_a88@gmailcom" title="Sandra Adams"></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="folder" title="My Files" value="myfiles"></v-list-item>
                <v-list-item prepend-icon="radio_button_checked" title="Shared with me" value="shared"></v-list-item>
                <v-list-item prepend-icon="star" title="Starred" value="starred"></v-list-item>
            </v-list>
        </v-navigation-drawer>



        <v-main class="d-flex align-center justify-center ">
            <v-container class="custom_vmain">


                <!-- <v-breadcrumbs :items="items">
                    <template v-slot:prepend>
                        <v-btn icon="arrow_back" size="small" style="margin-right: 1rem;"></v-btn>
                    </template>
                    <template v-slot:divider>
                        <v-icon icon="arrow_right"></v-icon>
                    </template>
                </v-breadcrumbs> -->
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>


import { SETTING } from "../common/js/menu"

export default {
    data() {
        return {
            items: SETTING,
        }
    },
}



</script>

<style lang="scss" scoped>
.custom_vmain {



    background-color: blueviolet;
    box-sizing: border-box;
    padding: 20px;


    overflow-y: auto;
    height: calc(100vh - 64px);

}
</style>
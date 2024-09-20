<template>
  <v-app>
    <!-- Global Navigation Bar (GNB) -->
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Layout with LNB and Page Content -->
    <v-main>
      <v-container>
        <v-row>
          <!-- Local Navigation Bar (LNB) -->
          <v-col cols="3">
            <v-navigation-drawer app permanent>
              <v-list>
                <v-list-item-group>
                  <v-list-item to="/">
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-col>

          <!-- Page Screen Content -->
          <v-col cols="9">
            <v-card class="pa-3" width="1200" height="800">
              <router-view></router-view>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style>
.v-application {
  background-color: #f5f5f5;
}
</style>
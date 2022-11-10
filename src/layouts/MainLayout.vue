<template>
  <q-layout class="bg-grey-1">
    <q-header
      elevated
      class="text-white"
      style="background: #24292e"
      height-hint="61.59"
    >
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn
          round
          dense
          flat
          :ripple="false"
          :icon="fabGithub"
          size="19px"
          color="white"
          class="q-mr-sm"
          no-caps
        />
        <div class="YL__toolbar-input-container row no-wrap">
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Pesquisar Produto"
            class="bg-white col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
            @click="getSearchResult"
          />
        </div>
      </q-toolbar>
      <!-- <div>versão 1.0.0</div> -->
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { defineComponent } from "vue";
import { fabGithub } from "@quasar/extras/fontawesome-v6";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "AMAZON",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "MERCADO LIVRE",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "ALI EXPRESS",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "SUBMARINO",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "NET SHOES",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "KABUM",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "AMERICANAS",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: { EssentialLink },
  props: {},

  setup() {

    let search = ref('')

    function getSearchResult () {
      console.log(search)
    }

    return {
      fabGithub,getSearchResult,search,
      essentialLinks: linksList
    };

  },

  // data() {
  //   return {
  //     search:""
  //   }
  // },

  mounted(){
    console.log("jjjjj")
  }

});
</script>

<style lang="sass">
.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden
    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible
  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7
  &__menu-link:hover
    background: #0366d6
    color: white
  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important
  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9
  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none

.YL
  &__toolbar-input-container
    min-width: 100px
    width: 25%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>

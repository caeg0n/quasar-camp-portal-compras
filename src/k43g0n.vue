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
         <q-toolbar-title>
          Campinápolis - Compras
        </q-toolbar-title>
         <q-select
          ref="search"
          dark
          dense
          standout
          use-input
          hide-selected
          class="GL__toolbar-select"
          color="black"
          :stack-label="false"
          label="Pesquisar produto"
          v-model="text"
          :options="filteredOptions"
          @filter="filter"
          style="width: 300px"
        >
          <template v-slot:append>
            <img
              src="https://cdn.quasar.dev/img/layout-gallery/img-github-search-key-slash.svg"
            />
          </template>

          <template v-slot:no-option>
            <q-item>
              <q-item-section>
                <div class="text-center">
                  <q-spinner-pie color="grey-5" size="24px" />
                </div>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps" class="GL__select-GL__menu-link">
              <q-item-section side>
                <q-icon name="collections_bookmark" />
              </q-item-section>
              <q-item-section>
                <q-item-label v-html="scope.opt.label" />
              </q-item-section>
              <q-item-section side :class="{ 'default-type': !scope.opt.type }">
                <q-btn
                  outline
                  dense
                  no-caps
                  text-color="blue-grey-5"
                  size="12px"
                  class="bg-grey-1 q-px-sm"
                >
                  {{ scope.opt.type || "Jump to" }}
                  <q-icon name="subdirectory_arrow_left" size="14px" />
                </q-btn>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a href="javascript:void(0)" class="text-white">
            Pull requests
          </a>
          <a href="javascript:void(0)" class="text-white">
            Issues
          </a>
          <a href="javascript:void(0)" class="text-white">
            Marketplace
          </a>
          <a href="javascript:void(0)" class="text-white">
            Explore
          </a>
        </div>

        <!-- <div>versão 1.0.0</div> -->
      </q-toolbar>
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

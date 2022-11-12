<template>
  <q-page class="q-pa-sm bg-white">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card class="bg-grey-2">
          <q-card-section class="text-center text-h6 text-black">
            <q-icon name="shopping_cart" class="q-mr-sm" />
            Produtos
          </q-card-section>
          <q-separator />
          <q-card-section class="row">
            <div class="col-12 text-h6 full-width">
              <div class="float-right q-mr-md">
                Resultados : <span class="text-blue">{{products.length}}</span>
              </div>
            </div>
          </q-card-section>
        </q-card>

          <div v-for="(product, index) in products" :key="index">
          <q-card-section horizontal class="q-pa-none">
            <q-card-section class="col-5 flex flex-center">
              <q-img
                width="50%"
                class="rounded-borders"
                :src="product[product.length-2]"
              />
            </q-card-section>
            <q-card-section class="">
              <div class="text-subtitle2 q-mt-md">{{cProduct(product)}}</div>
              <div class="text-subtitle2 q-mb-xs">R${{product[product.length-3]}}</div>
            </q-card-section>
            <q-separator />
          </q-card-section>
          <q-separator></q-separator>
          </div>

          <q-separator></q-separator>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { api } from "boot/axios";

export default defineComponent({
  name: "IndexPage",

  setup() {
    return {}
  },

  data() {
    return {}
  },

  mounted() {
    this.getProducts()
  },

  computed: {
    ...mapGetters("amazon", ["products"]),
  },

  methods: {
    ...mapActions("amazon", ["updateProducts"]),

    cProduct(product){
      let a = [...product];
      a.pop()
      a.pop()
      a.pop()
      return a.join(' ')
    },

    getProducts() {
      var t = this;
      api
        .post("/get_amazon", {})
        .then(function (response) {
          if (response.status == 200 && response.statusText == "OK") {
            t.updateProducts(response.data);
          }
        })
        .catch(function (error) {
          if (error.toJSON().message == "Network Error") {
          }
          if (error.toJSON().message == "Request failed with status code 401") {
          }
        });
    },
  },
});
</script>

<style scoped>
.my-card {
  width: 800px;
}
</style>

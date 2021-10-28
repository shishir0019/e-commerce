<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
    <ProductItem v-for="(product, index) in productList" :product="product" :key="`product-${index}`" />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  props: {
    productList: {
      type: Array,
      require: true,
    },
  },
  components: { ProductItem },
};
</script>

<style>
</style>
<template>
  <div class="h-screen flex flex-col gap-3 p-3">
    <Search />
    <div class="flex-1 overflow-y-scroll">
      <ProductGridView :productList="productList" />
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import ProductGridView from "@/components/ProductGridView";
export default {
  props: {
    productList: {
      require: true,
      type: Array,
    },
  },
  components: { Search, ProductGridView },
};
</script>

<style>
</style>
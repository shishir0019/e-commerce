<template>
  <div>
    <form class="p-2 mx-3 rounded-lg bg-white">
      <div class="flex items-center">
        <img class="w-10 h-9 p-2 bg-gray-200 rounded-l-lg" :src="icons.search" alt="icon">
        <input class="w-full h-9 focus:outline-none px-4 py-1 border rounded-r-lg" type="search" placeholder="Search product" @keyup="filter">
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      icons: {
        search: require('@/assets/logo/search.svg')
      }
    }
  },
  methods: {
    ...mapActions({
      filterProduct: 'product/getFilteredProducts'
    }),
    filter(query){
      this.filterProduct(query.target.value);
    }
  }
};
</script>

<style>
</style>
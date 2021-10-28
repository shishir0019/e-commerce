<template>
  <div>
    <form class="pl-3 pr-7">
      <input class="w-full px-5 py-2 rounded-lg" type="search" placeholder="Search product" @keyup="filter" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
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
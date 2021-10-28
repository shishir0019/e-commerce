<template>
  <div @click="add" class="p-2 bg-white shadow-md rounded-md hover:shadow-lg ring-1 ring-gray-300 cursor-pointer">
    <div class="p-2 relative">
      <img class="w-full" :src="product.image" alt="img">
      <div v-if="product.isStock === 0" class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full text-center">
        <span class="bg-yellow-300 p-3 text-sm font-medium text-white rounded-md shadow-md"> Out of stock </span>
      </div>
    </div>
    <div class="p-2 rounded-md bg-gray-100 text-center font-medium text-base ring-1 ring-gray-300">{{ product.name }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
  methods: {
    ...mapActions({
      addToCarts: 'cart/addToCarts'
    }),
    add(){
      this.addToCarts({ ...this.product, quantity: 1 });
    }
  }
};
</script>

<style>
</style>
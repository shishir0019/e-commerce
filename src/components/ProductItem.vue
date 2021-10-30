<template>
  <div @click="add" class="p-2 flex flex-col gap-2 justify-center items-center bg-white shadow-md rounded-md hover:shadow-lg ring-1 ring-gray-300 cursor-pointer">
    <div class="w-full h-72 relative flex justify-center items-center overflow-hidden">
      <img class="min-w-full object-cover min-h-full" :src="product.image" alt="img">
      <div v-if="product.isStock === 0" class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full text-center">
        <span class="bg-yellow-300 p-3 text-sm font-medium text-white rounded-md shadow-md"> Out of stock </span>
      </div>
      <div class="absolute p-2 bottom-0 left-0 flex justify-start items-center w-full text-center">
        <span class="bg-gray-500 px-3 py-1 text-sm font-medium text-white rounded-md shadow-md"> {{ currency + product.price }}</span>
      </div>
    </div>
    <div class="w-full p-2 rounded-md bg-gray-100 text-center font-medium text-base ring-1 ring-gray-300 truncate">{{ product.name }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
  computed: { ...mapGetters({ currency: 'currency' }) },
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
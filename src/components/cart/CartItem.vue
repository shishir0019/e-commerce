<template>
  <div class="root">
    <div class="w-8 h-8 rounded-full flex justify-center items-center border"><img :src="icons.chevron" alt=""></div>
    <div class="px-1 flex-grow text-sm">{{ item.name }}</div>
    <div class="flex items-center">
      <button class="fab" @click="decrease(item.id)">-</button>
      <span class="px-1 w-10 text-right text-sm">{{ item.quantity }}</span>
      <button class="fab" @click="increase(item.id)">+</button>
    </div>
    <div class="text-right w-20">{{ currency }}{{ item.price * item.quantity }}</div>
    <button @click="remove(item)" class="hover:opacity-50"><img :src="icons.delete" alt=""></button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  data() {
    return{
      icons: {
        chevron: require('@/assets/logo/chevron.svg'),
        delete: require('@/assets/logo/delete.svg'),
      }
    }
  },
  methods: {
      ...mapActions({
          increase: 'cart/incriseProducts',
          decrease: 'cart/decriseProducts',
          remove: 'cart/removeFromCarts',
      })
  },
  computed: { ...mapGetters({ currency: 'currency' }) }
};
</script>

<style scoped>
.root{
  @apply flex items-center gap-x-2 px-3 py-1 text-gray-600 text-sm border-b;
}
.fab {
    @apply w-6 h-6 flex justify-center items-center border rounded-full hover:bg-gray-200 cursor-pointer;
}
</style>
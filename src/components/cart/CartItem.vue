<template>
  <div class="root">
    <div class="flex items-start">
      <div class="w-4 h-4 rounded-full flex justify-center items-center border"><img :src="icons.chevron" alt=""></div>
    </div>
    <div class="px-1 flex-grow text-xs">{{ item.name }}</div>
    <div class="flex self-center gap-1">
      <div class="self-center bg-gray-200 rounded-full flex items-center">
        <button class="fab" @click="decrease(item.id)">-</button>
        <span class="px-1 w-8 text-right text-xs">{{ item.quantity }}</span>
        <button class="fab" @click="increase(item.id)">+</button>
      </div>
      <div class="self-center w-14 text-xs text-right">{{ currency }}{{ item.price * item.quantity }}</div>
      <button @click="remove(item)" class="w-4 self-center hover:opacity-50"><img :src="icons.delete" alt=""></button>
    </div>
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
  @apply flex gap-x-2 px-2 py-1 text-gray-600 text-sm border-b;
}
.fab {
    @apply w-6 h-6 flex justify-center items-center border rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer;
}
</style>
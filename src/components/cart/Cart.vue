<template>
  <div class="p-3 h-full">
    <div class="bg-white rounded-md h-full flex flex-col">
      <div class="m-3 flex items-center">
        <img class="w-10 h-9 p-2 bg-gray-200 rounded-l-lg" :src="icons.person" alt="icon">
        <input class="w-full h-9 focus:outline-none px-4 py-1 border rounded-r-lg" type="search" placeholder="Search Customers">
      </div>
      <hr>
      <CartListView class="flex-grow" :items="cartList" />
      <div class="account">
        <div class="account__item"><div>Sub Total</div><div>{{ currency }}{{ subtotal }}</div></div>
        <div class="account__item"><div>Tax</div><div>{{ currency }}{{ tax }}</div></div>
        <div class="account__item"><div>Discout on all Items</div><div>{{ currency }}{{ discountOnItems }}</div></div>
        <div class="account__item"><div>Discout on subtotal</div><div>{{ currency }}{{ discountOnSubTotal }}</div></div>
        <div class="account__item"><div>Total (Tax Excluded)</div><div>{{ currency }}{{ total }}</div></div>
      </div>
      <div class="p-2">
        <button class="w-full rounded-md bg-gray-600 hover:bg-gray-800 text-white py-2 font-medium text-lg">Pay</button>
      </div>
      <div class="flex border-t p-1">
        <div class="flex-grow flex justify-center items-center"><img class="w-6 h-6" :src="icons.recycling" alt="img"></div>
        <div class="flex-grow flex justify-center items-center"><img class="w-6 h-6" :src="icons.pause" alt="img"></div>
        <div class="flex-grow flex justify-center items-center"><img class="w-6 h-6" :src="icons.highlight" alt="img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CartListView from "@/components/cart/CartListView";
import { mapGetters } from "vuex";
export default {
  props: {
    cartList: {
      type: Array,
      require: true,
    },
  },
  components: { CartListView },
  data() {
    return {
      icons: {
        pause: require('@/assets/logo/pause.svg'),
        highlight: require('@/assets/logo/highlight.svg'),
        recycling: require('@/assets/logo/recycling.svg'),
        person: require('@/assets/logo/person.svg'),
      }
    }
  },
  computed: { 
    ...mapGetters({
      total: "cart/total",
      tax: "tax",
      discountOnItems: "discountOnItems",
      discountOnSubTotal: "discountOnSubTotal",
      currency: 'currency'
    }),
    subtotal(){
      return (this.total + this.tax) - (this.discountOnItems + this.discountOnSubTotal)
    }
  },
};
</script>

<style scoped>
.account{
  @apply flex flex-col gap-y-2;
}
.account__item{
  @apply flex justify-between items-center border-b px-3;
}
.account__item:first-child{
  @apply border-t;
}
</style>
<template>
  <div class="p-3 h-full">
    <div class="bg-white rounded-md h-full flex flex-col">
      <div class="p-3">
        <input class="w-full px-5 py-2 rounded-lg border" type="search" placeholder="Search Customers">
      </div>
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
      <div class="flex">
        <div class="flex-grow flex justify-center items-center"><img class="w-6 h-6" src="" alt="img"></div>
        <div class="flex-grow flex justify-center items-center"><img class="w-6 h-6" src="" alt="img"></div>
        <div class="flex-grow flex justify-center items-center"><img class="w-6 h-6" src="" alt="img"></div>
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
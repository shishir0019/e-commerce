<template>
  <div>
      <CartItem v-for="(item, index) in items" :item="item" :key="`cart-item-${index}`"/>
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem'
export default {
    props: {
        items: {
            type: Array,
            require: true
        }
    },
    components: { CartItem }
}
</script>

<style>

</style>
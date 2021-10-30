<template>
  <div class="h-screen bg-gray-200 flex">
    <div class="flex-1 col-span-3">
      <ProductGallery :productList="productList" />
    </div>
    <div style="width: 400px">
      <Cart :cartList="carts"/>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import ProductGallery from "@/components/product/ProductGallery";
import Cart from "@/components/cart/Cart";
import { mapGetters } from "vuex";
export default {
  components: { Search, ProductGallery, Cart },
  computed: {
    ...mapGetters({
      productList: 'product/getFilteredProducts',
      carts: 'cart/carts',
    })
  }
};
</script>

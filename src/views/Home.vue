<template>
  <div class="h-screen bg-gray-200 flex">
    <div class="flex-1 col-span-3">
      <ProductGallery :productList="productList" />
    </div>
    <div class="t" style="width: 400px">
      <Cart :cartList="carts"/>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import ProductGallery from "@/components/ProductGallery";
import Cart from "@/components/Cart";
import { mapGetters } from "vuex";
export default {
  components: { Search, ProductGallery, Cart },
  computed: {
    ...mapGetters({
      productList: 'product/products',
      carts: 'cart/carts',
    })
  }
};
</script>

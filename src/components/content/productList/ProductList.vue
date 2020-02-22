<template>
  <div class="product-list-box" id="product-list-box">
    <div class="product-list-cont w1200">
      <h4>更多推荐</h4>
      <div class="product-item-box layui-clear">
        <G_ProductItem />
      </div>
    </div>
  </div>
</template>

<script>
  import G_ProductItem from "@/components/content/productList/productItem/ProductItem";
    export default {
        name: "ProductList",
      components:{
        G_ProductItem
      }
    }
</script>

<style scoped>

</style>

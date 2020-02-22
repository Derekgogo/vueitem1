<template>
  <div class="content">
    <!--    轮播图-->
    <G_swiper />
    <!--必抢-->
    <G_MustRob />
    <!--    热销-->
    <Hot />
    <!--楼梯-->
    <G_Floor />
    <!--产品列表-->
    <G_ProductList />
  </div>
</template>

<script>
  import G_swiper from "@/components/common/swiper/swiper";
  import G_MustRob from "@/components/content/mustRob/MustRob";
  import G_Hot from "@/components/content/hot/Hot";
  import G_Floor from "@/components/content/floor/Floor";
  import G_ProductList from "@/components/content/productList/ProductList";
  export default {
    name: "Home",
    components:{
      G_swiper,
      G_MustRob,
      G_Hot,
      G_Floor,
      G_ProductList
    },
    methods:{
      aaa(){
        layui.config({
          base: '@/assets/js/util/' //你存放新模块的目录，注意，不是layui的模块目录
        }).use(['mm','carousel'],function(){
          var carousel = layui.carousel,
            mm = layui.mm;
          var option = {
            elem: '#test1'
            ,width: '100%' //设置容器宽度
            ,arrow: 'always'
            ,height:'298'
            ,indicator:'none'
          }
          carousel.render(option);
          // 模版引擎导入
          // var ins = carousel.render(option);
          // var html = demo.innerHTML;
          // var listCont = document.getElementById('list-cont');
          // // console.log(layui.router("#/about.html"))
          //  mm.request({
          //    url: '../json/index.json',
          //    success : function(res){
          //      console.log(res)
          //      listCont.innerHTML = mm.renderHtml(html,res)
          //      ins.reload(option);
          //    },
          //    error: function(res){
          //      console.log(res);
          //    }
          //  })


        });
      }
    }
  }
</script>

<style scoped>

</style>

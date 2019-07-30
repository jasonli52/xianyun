<template>
  <div>
    <Header />
     <nuxt />
    <Footer/>
   
  </div>
</template>

<script>
//导入头部组件.vue文件扩展名可以省略
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
em,
i {
  font-size: normal;
}
</style>

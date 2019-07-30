<template>
  <div class="header">
    <div class="main">
      <!-- logo -->
      <el-row type="flex" justify="space-between" >
        <div class="logo">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </div>
        <!-- 菜单 -->
        <el-row class="menu" type="flex">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">机票</nuxt-link>
        </el-row>
        <!-- 登录失败 -->
        <div v-if="false">
          <nuxt-link to="/user/login">登录 注册</nuxt-link>
        </div>
        <!-- 登录成功 -->
        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
              快到碗里来
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 3px 3px #eee;
  background: #fff;
}
.main {
  width: 1000px;
  margin: 0 auto;
}
.logo {
  margin-top: 9px;
  img {
    width: 156px;
    height: 42px;
    display: block;
  }
}
.menu {
  flex: 1;
  margin-left: 20px;
  a {
    display: block;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    
    &:hover {
      color: #409eff;
      border-bottom: 5px #409eff solid;
    }
    
  }
  .nuxt-link-exact-active {
    background: #409eff;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  
}

  .el-dropdown-link {
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%s;
      vertical-align: middle;
      border: 2px #fff solid;
    }
  }
</style>


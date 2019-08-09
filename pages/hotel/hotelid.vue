<template>
  <div class="container">
    <!-- 面包屑 -->
    <el-row class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="padding-bottom:20pxs">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>

    <!-- 宾馆名称 -->
    <el-row class="hotel">
      <h2>好来阁商务宾馆</h2>
      <span class="synopsis">hao lai ge shang wu hotel</span>
      <p class="coordinate">
        <i class="el-icon-map-location"></i>
        高淳县淳溪镇镇兴路118号(高淳县委党校对面)
      </p>
    </el-row>

    <!-- 房间照片 -->
    <el-row>
      <el-col :span="16">
        <img :src="img" alt width="640px" height="360px" />
      </el-col>
      <!-- 右图 -->
      <el-col :span="8">
        <el-row type="flex" justify="space-between" class="banner">
          <img
            v-for="(item, key) in banner"
            :key="key"
            :src="item.url"
            width="160px"
            height="110px"
            @click="handleClick(item.url)"
          />
        </el-row>
      </el-col>
    </el-row>

    <!-- 价格 -->
    <el-table
      style="width: 100%;margin:30px 0 50px"
    >
      <el-table-column prop="name" label="价格来源"></el-table-column>
      <el-table-column prop="bestType" label="低价房型"></el-table-column>
      <el-table-column label="最低价格/每晚" width="180px">
      </el-table-column>
    </el-table>

    <!-- 地图 -->
    <Map />
    <!-- <div class="map">地图</div> -->

    <!-- 基本信息 -->
    <div class="info">
      <el-row>
        <el-col :span="4" class="info-title">基本信息</el-col>
        <el-col :span="5">入住时间: 14:00之后</el-col>
        <el-col :span="5">离店时间: 12:00之前</el-col>
        <el-col :span="5">2010年开业 / 2015年装修</el-col>
        <el-col :span="5">酒店规模: 148间客房</el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="4" class="info-title">主要设施</el-col>
        <el-col :span="20">
          <el-tag v-for="(item, key) in data.hotelassets" :key="key" type="info">{{ item.name }}</el-tag>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="4" class="info-title">停车服务</el-col>
        <el-col :span="20">-</el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="4" class="info-title">品牌信息</el-col>
        <el-col :span="20">-</el-col>
      </el-row>
      <el-divider></el-divider>
    </div>

    <!-- 评论 -->
    <div class="comments-head">
      <h4>条真实用户评论</h4>
      <el-row>
        <el-col :span="4" class="head-title">
          <p>总评数：</p>
          <p>好评数：</p>
          <p>差评数：</p>
        </el-col>
        <el-col :span="20">
          <el-row type="flex" align="middle" class="comments-top">
            <div class="recommend">推荐</div>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Map from "@/components/hotel/map.vue";
export default {
  name: "",
  data() {
    return {
      data: {},
      banner: [
        {
          url: "/img/1.jpeg"
        },
        {
          url: "/img/2.jpeg"
        },
        {
          url: "/img/3.jpeg"
        },
        {
          url: "/img/4.jpeg"
        },
        {
          url: "/img/5.jpeg"
        },
        {
          url: "/img/6.jpeg"
        }
      ],
      img: "/img/1.jpeg"
    };
  },
  components: {
    Map
  },
  methods: {
    handleClick(url) {
      this.img = url;
    }
  }
};
</script>

<style lang="less" scoped>
.bread {
  margin: 25px 0;
}
h2 {
  color: #333;
  font-weight: 400;
  font-size: x-large;
}
p {
  font-size: 16px;
  margin-bottom: 20px;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
.banner {
  flex-wrap: wrap;
  img {
    margin-bottom: 15px;
    cursor: pointer;
  }
}
.synopsis {
  font-size: 14px;
  color: #aaa;
  line-height: 2;
}
.coordinate {
  font-size: 16px;
  margin-bottom: 20px;
}
.info {
  margin-top: 40px;
}
.info-title {
  font-size: 16px;
  color: #333;
}
.comments-head {
  padding: 15px 0px;
  h4 {
    padding-bottom: 15px;
  }
  .recommend {
    position: absolute;
    width: 75px;
    height: 75px;
    top: 0;
    left: 25px;
    border: 2px solid rgba(251, 165, 4, 0.3);
    color: rgba(251, 165, 4, 0.3);
    line-height: 75px;
    text-align: center;
    border-radius: 50%;
    font-size: 24px;
    transform: rotate(-50deg);
  }
}
</style>

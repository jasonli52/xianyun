<template>
  <div>
    <el-row>
      <!-- 地图 -->
      <el-col :span="16">
        <div id="container"></div>
      </el-col>
      <!-- 风景交通 -->
      <el-col :span="8">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="风景" name="first" class="list">
            <div @mouseenter="handleOver">
              <el-row type="flex" justify="space-between" class="item">
                <div>
                  <ul>
                    <li>吉山幼儿园</li>
                    <li>津安创意园</li>
                    <li>黑马程序员</li>
                    <li>跬步居</li>
                    <li>凤岭公园</li>
                    <li>高淳老街</li>
                    <li>红太阳广场</li>
                    <li>甘霖广场</li>
                    <li>跬步居</li>
                  </ul>
                </div>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="交通" name="second" class="list">
            <div @mouseenter="handleOver">
              <el-row type="flex" justify="space-between" class="item">
                <div>
                  <ul>
                    <li>甘霖路口(公交站)</li>
                    <li>凤岭公园(公交站)</li>
                    <li>停车场(镇兴大厦西南)</li>
                    <li>镇兴大厦停车场</li>
                    <li>高淳(地铁站)</li>
                    <li>停车场(镇兴大厦西)</li>
                    <li>怡城花园(公交站)</li>
                    <li>停车场(甘霖路)</li>
                    <li>停车场(牡丹路)</li>
                  </ul>
                </div>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      scenery: [],
      center: ""
    };
  },
  methods: {
    handleClick() {},
    handleOver() {}
  },
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        center: [113.433641, 23.139846], //中心点坐标
        viewMode: "3D" //使用3D视图
      });

      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        position: new AMap.LngLat(113.433641, 23.139846), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京"
      });

      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=	738d8cda011b463053d755879c5d5422&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style lang="less" scoped>
#container {
  width: 650px;
  height: 360px;
}
.list {
  padding: 0 15px 15px 15px;
  height: 306px;
  box-sizing: border-box;
  overflow-y: scroll;
  .item {
    font-size: 14px;
    color: #666;
    padding-bottom: 20px;
    cursor: pointer;
    li {
      font-size: 16px;
      padding-top: 14px;
    }
  }
}
</style>

 


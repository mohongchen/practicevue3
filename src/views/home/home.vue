<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">深圳</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    font-size: 12px;
  }
  .position {
    width: 74px;
    .text {
      font-size: 12px;
      line-height: 18px;
    }
    img {
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }
}
</style>

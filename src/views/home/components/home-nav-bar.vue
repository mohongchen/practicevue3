<template>
  <div class="home">
    <div class="nav-bar">
      <div class="title">鸿远旅途</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.home {
  .nav-bar {
    /*父元素常见属性*/
    /*设置主轴的方向*/
    /*flex-direction：  row行,column列*/
    /*设置主轴上的子元素排列方式*/
    /*justify-content： space-around平分,space-between两边贴中间平分,space-evenly每个间距相同*/
    /*设置子元素是否换行*/
    /*flex-wrap：wrap/nowrap*/
    /*设置侧轴上的子元素排列方式（单行）*/
    /*align-items：stretch 拉伸*/
    /*设置侧轴上的子元素的排列方式（多行）*/
    /*align-content：stretch 子元素高度平分父元素高度*/
    /*flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap*/
    /*子元素常见属性*/
    /*align-self 子元素自己在侧轴的排列方式*/
    /*order 属性定义子项的排列顺序(前后顺序) */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    border-bottom: 1px solid #f2f2f2;
    .title {
      font-size: 16px;
      color: var(--primary-color);
    }
  }
}
</style>

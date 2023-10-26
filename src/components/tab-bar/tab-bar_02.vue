<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tab-bar-item" :class="{ active: currentIndex === index }" @click="itemClick(index, item)">
        <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="" srcset="" />
        <img v-else :src="getAssetUrl(item.active)" alt="" srcset="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar'
import router from '@/router'
import { getAssetUrl } from '@/utils/load_assets'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const currentIndex = ref(0)
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    align-items: center;
    &.active {
      color: var(--primary-color);
    }

    img {
      width: 32px;
    }
    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>

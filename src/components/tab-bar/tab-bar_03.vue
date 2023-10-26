<template>
  <div class="tab-bar">
    <!-- <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tab-bar-item" :class="{ active: currentIndex === index }" @click="itemClick(index, item)">
        <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="" srcset="" />
        <img v-else :src="getAssetUrl(item.active)" alt="" srcset="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
    <van-tabbar v-model="active" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span class="text">{{ item.text }}</span>
          <template #icon="props">
            <img v-if="active !== index" :src="getAssetUrl(item.image)" alt="" srcset="" />
            <img v-else :src="getAssetUrl(item.active)" alt="" srcset="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar'
import router from '@/router'
import { getAssetUrl } from '@/utils/load_assets'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const active = ref(0)
</script>

<style lang="less" scoped>
.tab-bar {
  // --van-tabbar-item-font-size:30px !important;
  :deep(.van-tabbar-item__icon) {
    img {
      height: 28px;
    }
  }
}
</style>

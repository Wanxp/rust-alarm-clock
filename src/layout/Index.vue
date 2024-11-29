<script setup lang="ts">
import Sidebar from './sideBar/Index.vue';
import NavHeaderVue from "./basic/NavHeader.vue";
</script>

<template>
  <!-- 容器 -->
  <div class="root-container">
    <!-- 左半边 -->
    <div class="left">
      <!-- LOGO区 -->
      <!--      <div class="left-logo"></div>-->
      <!-- 菜单区 -->
      <div class="left-menu">
        <Sidebar class="sidebar-container" />
      </div>
    </div>
    <!-- 右半边 -->
    <div class="right">
      <!-- 页头区 -->
      <div class="right-header">
        <NavHeaderVue></NavHeaderVue>
      </div>
      <!-- Tab区 -->
      <div class="right-tab">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 容器满屏 */
.root-container {
  background-color: white;
  height: 100%;
  width: 100%;
  // 弹性盒子模型
  display: flex;
  // 盒子左右排列
  flex-direction: row;
  // 水平对齐
  justify-content: start;
  // 垂直对齐
  //align-items: center;
}

.left {
  height: 100%;

  .left-logo {
    //background-color: #6d6b6b;
    width: 100%;
    height: 56px;
  }

  .left-menu {
    width: 100%;
    height: calc(100% - 56px);
  }
}

.right {
  //background-color: rgb(209, 205, 205);
  // 使用计算占满剩余宽度
  width: calc(100% - 63px);
  height: 100%;
  margin: 0;
  padding: 10px;

  .right-header {
    //background-color: #f5f4f4;
    width: 100%;
    height: 25px;
    margin: 0;
    text-align:center;

  }

  .right-tab {
    //background-color: #e0dcdc;
    width: 100%;
    height: 35px;
  }

  .right-main {
    background-color: white;
    width: 100%;
    // 使用计算占满剩余高度
    height: calc(100% - 58px - 35px);
  }
}
</style>
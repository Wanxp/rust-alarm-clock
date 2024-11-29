<template>
  <div
    :class="{'has-logo': showLogo}"
    class="sideWrap"
  >
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="!isCollapse"
        :unique-opened="false"
        :default-active="activeMenu"
        background-color="#fff"
        text-color="#000"
        :active-text-color="menuActiveTextColor"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
          :isFirstLevel="false"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { useRoute } from 'vue-router'
import {useStore} from "../../store";

export default defineComponent({
  components: {
    SidebarItem
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const sidebar = computed(() => {
      return store.state.app.sidebar
    })
    const routes = computed(() => {
      //@ts-ignore
      return store.state.permission.routes
    })
    console.log(routes)
    const showLogo = computed(() => {
      return false
    })

    const menuActiveTextColor = computed(() => {
      return '#57CAEB'
    })

    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta !== null || meta !== undefined) {
        if (meta.activeMenu) {
          return meta.activeMenu
        }
      }
      return path
    })

    const isCollapse = computed(() => {
      return sidebar.value.opened
    })

    return {
      sidebar,
      routes,
      showLogo,
      menuActiveTextColor,
      activeMenu,
      isCollapse
    }
  }
})
</script>

<style lang="scss">
.sidebar-container {
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}

.has-logo {
  .el-scrollbar {
    height: calc(100vh - 100px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>

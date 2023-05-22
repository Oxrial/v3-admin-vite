<script setup lang="ts">
import { camelCase, upperFirst } from "lodash-es"
import SuspensionBall from "./components/SuspensionBall.vue"
import Storage from "@/hooks/useStorage"
interface CacheComponent {
  [componentName: string]: any
}
function importAll(r: any) {
  const cache: CacheComponent = {}
  Object.keys(r).forEach((key) => (cache[upperFirst(camelCase(key.replace(/(.*\/)*([^.]+).*/gi, "$2")))] = r[key]))
  return cache
}
const loadComponents = importAll(import.meta.glob("./modules/*.{vue,md}", { eager: true, import: "default" }))
const drawer = ref(false)
const renderComponentKey = Storage.get("test_render_component") || Object.keys(loadComponents)[0]
const change = (v: string) => {
  Storage.set("test_render_component", v)
  drawer.value = false
}
</script>
<template>
  <div>
    <SuspensionBall @ball-click="drawer = true" />
    <component :is="loadComponents[renderComponentKey]" />
    <el-drawer
      v-model="drawer"
      title="SELECT MODULE"
      class="render-drawer"
      :show-close="false"
      direction="ttb"
      size="20%"
    >
      <el-radio-group v-model="renderComponentKey" style="display: inline-flex; flex-direction: column" @input="change">
        <el-radio
          v-for="(value, key) in loadComponents"
          :key="'radio_' + key"
          :label="key"
          border
          :style="{
            margin: '20px 20px 0',
            'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.12),0 0 6px 0 rgba(0,0,0,0.04)'
          }"
        >
          {{ key }}
        </el-radio>
      </el-radio-group>
    </el-drawer>
  </div>
</template>

<style scoped lang="scss">
:deep(.render-drawer) {
  background-color: #ffffffe3 !important;
  .el-drawer__header {
    margin-bottom: unset;
    text-align: center;
  }
  .el-drawer__body {
    text-align: center;
    .el-radio {
      background-color: #fff;
    }
  }
}
:deep(pre) {
  background-color: rgb(125 125 125 / 4%);
  padding: 4rem;
  border-radius: 2rem;
}
</style>

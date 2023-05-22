<template>
  <div class="suspension-ball">
    <el-button
      id="draggable"
      icon="el-icon-files"
      :draggable="true"
      class="callback"
      circle
      @click="emits('ball-click')"
    />
  </div>
</template>

<script setup lang="ts" name="SuspensionBall">
const emits = defineEmits(["ball-click"])
onMounted(() => {
  const obj: HTMLElement = document.querySelector("#draggable")!
  obj.addEventListener("dragend", (event) => {
    obj.style.left = event.x - 40 + "px"
    obj.style.top = event.y - 40 + "px"
    if (event.y < 0) {
      obj.style.top = 0 + "px"
    }
  })
})
</script>
<style lang="scss" scoped>
.callback {
  position: fixed;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 100%100%;
  top: 0.5%;
  right: 50%;
  z-index: 999;
}
.suspension-ball {
  position: relative;
  background-color: #000;
  right: 0;
  z-index: 999;
}
</style>

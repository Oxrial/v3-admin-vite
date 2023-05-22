<script setup lang="ts" name="Show">
import { reactify, onClickOutside } from "@vueuse/core"
import { OnClickOutside } from "@vueuse/components"
import { marked } from "marked"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import plaintext from "highlight.js/lib/languages/plaintext"
hljs.registerLanguage("typescript", typescript)
hljs.registerLanguage("plaintext", plaintext)
marked.setOptions({
  highlight: (code, lang) => hljs.highlight(code, { language: hljs.getLanguage(lang) ? lang : "plaintext" }).value
})
const add = (v: any) => "concat-str_" + v
const useAdd = reactify(add)
const count = ref(0)
const reactifyCount = useAdd(count)
const clickRef = ref()
const coreStr = '<div ref="clickRef" p-12 border="1 solid gray">Click outside of me</div>'
const logMsgCore = () => console.log("core click out side")
onClickOutside(clickRef, logMsgCore)
const logMsgComponent = () => console.log("component click out side")
</script>
<template>
  <div m-20 p-20 border="1 #e4e7ed solid" b-rd-5 bg-white>
    <div v-html="marked('# VueUse')" />
    <el-card>
      <template #header>reactify() 将普通函数转换为响应式函数。例：addCount为普通函数 => 响应式的</template>
      reactifyCount:[ {{ reactifyCount }} ] <el-button @click="count++">Change</el-button>
      <div
        v-html="
          marked(
            '```typescript\n' +
              'const add = (v: any) => \'concat-str_\' + v \n' +
              'const useAdd = reactify(add)\n\n' +
              'const count = ref(0)\n' +
              'const reactifyCount = useAdd(count)\n' +
              '```'
          )
        "
      />
    </el-card>
    <el-card>
      <template #header>components, @vueuse/components</template>
      <span>core: onClickOutside</span>
      <div ref="clickRef" p-12 border="1 solid gray">Click outside of me</div>
      <div v-html="marked('```html\n' + coreStr + '\n```')" />
      <div
        v-html="
          marked(
            '```typescript\n' +
              'const clickRef = ref()\n' +
              'const logMsgCore = () => console.log(\'core click out side\')\n' +
              'onClickOutside(clickRef, logMsgCore)\n' +
              '```'
          )
        "
      />
      <span>components: OnClickOutside </span>
      <OnClickOutside @trigger="logMsgComponent">
        <div p-12 border="1 solid gray">Click outside of me</div>
      </OnClickOutside>
      <div
        v-html="
          marked(
            '```typescript\n' +
              'const clickRef = ref()\n' +
              'const logMsgCore = () => console.log(\'core click out side\')\n' +
              'onClickOutside(clickRef, logMsgCore)\n' +
              '```'
          )
        "
      />
    </el-card>
  </div>
</template>
<style scoped lang="scss"></style>

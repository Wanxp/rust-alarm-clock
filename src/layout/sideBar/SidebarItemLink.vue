<template>
  <a
    v-if="isExternal(to)"
    :href="to"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
  <div
    v-else
    @click="push"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import {isExternal} from "../../utils/validate.ts";
export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const push = () => {
      console.log(props.to)
      router.push(props.to).catch((err) => {
        console.log(err)
      })
    }
    return {
      push,
      isExternal
    }
  }
})
</script>

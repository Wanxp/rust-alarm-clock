

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {invoke} from "@tauri-apps/api/core";
const values = ref([''])
const result = ref()

function addTime() {
  values.value.push('')
}

function removeTime(index: number) {
  values.value.splice(index, 1)
}

function updateValue(index: number, newValue: string) {
  values.value[index] = newValue
}


async function submit() {
  result.value = await invoke("save_clock", { times: values.value });
}


async function load_clock() {
  result.value = await invoke("load_clock");
}

onMounted(async () => {
  result.value = await load_clock();
});

</script>

<template>
    <el-row v-for="(item, index) in values" :key="index" :span="4" style="margin: 0 auto">
      <el-col :span="4"><el-time-picker :model-value="item" @update:model-value="newValue => updateValue(index, newValue)" style="width: 240px" placeholder="Please input" /></el-col>
      <el-button  circle @click="removeTime(index)" style="margin: 0 auto " >-</el-button>
    </el-row>
    <el-button  circle @click="addTime" style="margin: 0 auto ">+</el-button>
    <el-button type="primary" style="width: 50px; margin: 0 auto;" @click="submit">确认</el-button>
  <p>{{result}}</p>

</template>

<style lang="scss">

</style>
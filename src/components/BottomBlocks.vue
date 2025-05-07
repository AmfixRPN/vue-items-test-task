<script setup>
const { items, store, user } = defineProps(['items', 'store', 'user'])
</script>

<template>
  <div class="btm-block">
    <div v-for="item in items" :key="item.id" class="btm-item" @click="item.checked = true">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>
.btm-block {
  border: black solid;
  width: 50vw;
  height: 40vh;
  position: relative;
  margin: 2%;
  padding: 2%;
  background-color: greenyellow;
  display: flex;
  flex-wrap: wrap;
}
.btm-item {
  border: black solid;
  margin: 5%;
  padding: 3%;
  background-color: aqua;
  height: 5%;
  width: 5%;
}
</style>
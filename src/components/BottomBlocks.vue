<script setup>
import {ref} from "vue";

const { items, state, checkedItems } = defineProps(['items', 'state', 'checkedItems'])
// function handleClick() {
//   if (state === 'user') {
//     console.log(event.currentTarget)
//   }
// }
import { useItemsStore } from "../stores/ItemsStore.js";
const store = useItemsStore()
//import { computedCheckedUserItems } from "../App.vue";
</script>

<template>
  <div class="btm-block">
    <div v-for="item in items" :key="item.id" class="btm-item" @click="function handleClick(){
      if (state === 'user') {
        if (checkedItems.length >= store.maxCheckedUserItemsLength) {
          item.checked = false
        } else {
          item.checked = !item.checked
        }
        // store.checkedUserItems.push(item)
      } else {
        if (!store.checkedStoreItem) {
          store.checkedStoreItem = item
        } else {
          if (store.checkedStoreItem.id === item.id) {
            store.checkedStoreItem = ref(null)
          } else {
            store.checkedStoreItem = item
          }
        }
      }
    }">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>
.btm-block {
  border: black solid;
  width: 40vw;
  height: 40vh;
  position: relative;
  margin: 3%;
  padding: 2%;
  background-color: greenyellow;
  display: flex;
  flex-wrap: wrap;
}
.btm-item {
  border: black solid;
  margin: 5%;
  padding: 4%;
  background-color: aqua;
  height: 10%;
  width: 6%;
  cursor: pointer;
}
</style>
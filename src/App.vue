<script setup>
import BottomBlocks from "./components/BottomBlocks.vue"
import { useItemsStore } from "./stores/ItemsStore.js"
import {computed} from "vue";
const store = useItemsStore()
const computedCheckedUserItems = computed(() => store.checkableUserItems.filter((item) => item.checked === true))
</script>

<template>
  <div class="top-blocks">
    <div class="top-user-items">
      <!--    <div class="top-items" v-for="item in store.checkedUserItems">-->
      <!--      {{ item.name }}-->
      <!--    </div>-->
      <!--    <span>{{ store.checkedUserItems.length }} / {{ store.maxCheckedUserItemsLength }}</span>-->
      <!--  </div>-->
      <!--  <div>-->
      <!--    {{ store.checkedStoreItem }}-->
      <div class="top-items" v-for="computedItem in computedCheckedUserItems" :key="computedItem.id">
        {{ computedItem.name }}
      </div>
    </div>
    <div class="top-store-item-block">
      <div class="top-store-item" v-if="store.checkedStoreItem">
        {{ store.checkedStoreItem.name }}
      </div>
    </div>
  </div>
  <div class="btm-blocks">
    <BottomBlocks :items="store.checkableUserItems" :state="'user'" :checkedItems="computedCheckedUserItems"/>
    <BottomBlocks :items="store.checkableStoreItems" :state="'store'"/>
  </div>
</template>

<style scoped>
.btm-blocks {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
}
.top-user-items {
  border: black solid;
  width: 30vw;
  height: 5vh;
  position: relative;
  margin: 3%;
  padding: 2%;
  background-color: greenyellow;
  display: flex;
  align-items: center;
}
.top-items {
  border: black solid;
  position: relative;
  margin: 2%;
  padding: 2%;
  background-color: aqua;
}
.top-store-item {
  border: black solid;
  position: relative;
  background-color: aqua;
}
.top-store-item-block {
  border: black solid;
  width: 5vw;
  height: 5vh;
  position: relative;
  margin: 3%;
  padding: 2%;
  background-color: greenyellow;
  display: flex;
  align-items: center;
  left: 44%;
}
.top-blocks {
  display: flex;
  position: relative;
}
</style>

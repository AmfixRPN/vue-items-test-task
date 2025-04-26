<script setup>
import BottomBlocks from "./components/BottomBlocks.vue"
import { useItemsStore } from "./stores/ItemsStore.js"
const store = useItemsStore()
</script>

<template>
  <div>
    <div v-for="item in store.checkedUserItems">
      {{ item.name }}
    </div>
    <span>{{ store.checkableUserItems.length }} / {{ store.maxLength }}</span>
  </div>
  <div>
    {{ store.checkedStoreItem }}
  </div>
  <div>
    <BottomBlocks :items="store.checkableUserItems" :state="'user'"/>
    <BottomBlocks :items="store.checkableStoreItems" :state="'store'"/>
  </div>
</template>

<style scoped>

</style>

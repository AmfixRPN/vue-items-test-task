import {defineStore} from "pinia"
import { ref } from 'vue'

const userItems = [
    {
        "id": 1,
        "name": "Shoes 1"
    },
    {
        "id": 2,
        "name": "Shoes 2"
    },
    {
        "id": 3,
        "name": "Shoes 3"
    },
    {
        "id": 4,
        "name": "Shoes 4"
    },
    {
        "id": 5,
        "name": "T-shirt 1"
    },
    {
        "id": 6,
        "name": "T-shirt 2"
    },
    {
        "id": 7,
        "name": "T-shirt 3"
    },
    {
        "id": 8,
        "name": "T-shirt 4"
    }
]
const storeItems = [
    {
        "id": 11,
        "name": "Jacket 1"
    },
    {
        "id": 12,
        "name": "Jacket 2"
    },
    {
        "id": 13,
        "name": "Jacket 3"
    },
    {
        "id": 14,
        "name": "Jacket 4"
    },
    {
        "id": 15,
        "name": "Hoodie 1"
    },
    {
        "id": 16,
        "name": "Hoodie 2"
    },
    {
        "id": 17,
        "name": "Hoodie 3"
    },
    {
        "id": 18,
        "name": "Hoodie 4"
    }
]

export const useItemsStore = defineStore('items', () => {
    //const checkableChooseableItems = ref([{...chooseableItems, "checked": false}])
    //const checkableUserItems = ref([{...userItems, "checked": false}])
    const checkableStoreItems = ref(storeItems.map(item => ({ ...item, checked: false })))
    const checkableUserItems = ref(userItems.map(item => ({ ...item, checked: false })))
    const checkedUserItems = ref([])
    let maxLength = 6
    const checkedStoreItem = ref()

    return { checkableStoreItems, checkableUserItems, checkedUserItems, maxLength, checkedStoreItem }
})
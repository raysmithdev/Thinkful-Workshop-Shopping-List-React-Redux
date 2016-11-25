let id = 1

export const addItem = (item) => {
  return {
    type:'ADD_ITEM',
    item,
    id: id++
  }
}

export const deleteItem = (id) => {
  return {
    type:'DELETE_ITEM',
    id
  }
}

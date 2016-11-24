let id = 1

export const addItem = (item) => {
  return {
    type:'ADD_ITEM',
    item,
    id: id++
  }
}

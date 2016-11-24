const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.item,
        createdAt: Date.now()
      }
    default:
      return state
  }
}

export default items

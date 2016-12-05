const items = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return [
        ...state,
        action.items
      ]
    case 'DELETE_ITEM':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    default:
      return state
  }
}

export default items

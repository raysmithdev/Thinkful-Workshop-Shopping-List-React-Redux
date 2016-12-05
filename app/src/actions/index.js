import fetch from 'isomorphic-fetch'

const receiveData = (items) => {
  return {
    type: 'RECEIVE_DATA',
    items
  }
}

export const addItem = (item) =>  {
  return dispatch => {
    return fetch('http://localhost:8080/create-item', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: item
              })
            })
            .then(response => response.json())
            .then(items => dispatch(receiveData(items)) )
  }
}

// export const addItem = (item) => {
//   return {
//     type:'ADD_ITEM',
//     item,
//     id: id++
//   }
// }

export const deleteItem = (id) => {
  return {
    type:'DELETE_ITEM',
    id
  }
}

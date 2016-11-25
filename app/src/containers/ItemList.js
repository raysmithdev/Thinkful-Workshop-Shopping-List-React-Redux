import { connect } from 'react-redux'
import ItemListView from '../components/ItemListView'
import { deleteItem } from '../actions'

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListView)

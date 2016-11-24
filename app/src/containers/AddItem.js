import { connect } from 'react-redux'
import AddItemView from '../components/AddItemView'
import { addItem } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => (
      dispatch(addItem(item))
    )
  }
}

export default connect(null, mapDispatchToProps)(AddItemView)

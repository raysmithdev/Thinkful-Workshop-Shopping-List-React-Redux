import { connect } from 'react-redux'
import ItemListInfoView from '../components/ItemListInfoView'

const mapStateToProps = (state) => {
  return {
    count: state.items.length
  }
}

export default connect(mapStateToProps, null)(ItemListInfoView)

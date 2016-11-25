import React from 'react'
import { PageHeader } from 'react-bootstrap'

const ItemListInfoView = ({ count }) => {
  return (
    <div>
      {count < 1 ? <PageHeader>No items in basket!</PageHeader> : <PageHeader>Total items: { count }</PageHeader> }
    </div>
  )
}

export default ItemListInfoView

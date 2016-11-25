import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import FaTrash from 'react-icons/lib/fa/trash'
import moment from 'moment'

const ItemListView = ({ items, deleteItem }) => (
  <ListGroup>
    {items.map((item, index) => (
      <ListGroupItem key={index}>
        {item.text} <em>added: { moment(item.createdAt).fromNow() }</em>
        <FaTrash onClick={() => deleteItem(index)} className="TrashIcon" />
      </ListGroupItem>
    ))}
  </ListGroup>
)

export default ItemListView

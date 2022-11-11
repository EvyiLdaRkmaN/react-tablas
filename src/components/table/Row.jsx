import React from 'react'

const Row = (props) => {
  return (
    <tr >
      <td>{props.position}</td>
      <td>x</td>
      <td>{props.number}</td>
      <td>=</td>
      <td>{props.position * props.number}</td>
    </tr>
  )
}

export default Row;

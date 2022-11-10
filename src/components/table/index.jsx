import React from 'react'

const Table = (props) => {
  return (
    <table style={{border:'1px', width: '50%'}}>
      {props.children}
    </table>
  )
}

export default Table;

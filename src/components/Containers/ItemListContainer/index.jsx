import React from 'react'

function ItemListContainer({greeting}) {
  return (
    <div>
        <p>{greeting}</p>
    </div>  //este componente se debe importar a la App de src para poder llamarlo.
  )
}

export default ItemListContainer
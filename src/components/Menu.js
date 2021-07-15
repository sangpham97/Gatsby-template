import React from "react"
import Item from "../components/contrast/item"

export default function Menu({ items }) {
  return (
    <div className="container">
      <div className="row ">
        {items.map((menuItem, index) => {
          return <Item menuItem={menuItem} index={index} />
        })}
      </div>
    </div>
  )
}

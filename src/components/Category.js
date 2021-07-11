import React from "react"
import Title from "./Title"

export default function Category({ categories, filterItems }) {
  return (
    <section className="py-5 text-center">
      <Title title="Our category" />
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="btn btn-outline-warning m-2"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </section>
  )
}

import React from "react"

const SearchBar = ({
  products,
  setFilteredData,
  wordEntered,
  setWordEntered,
}) => {
  const handleFilter = event => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = products.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === "") {
      setFilteredData(products)
    } else {
      setFilteredData(newFilter)
    }
  }

  return (
    <div className="row my-4">
      <div className="col-10 col-md-8 col-lg-6 mx-auto">
        <form className="d-flex">
          <input
            className="form-control me-2 border-secondary"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={wordEntered}
            onChange={handleFilter}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchBar

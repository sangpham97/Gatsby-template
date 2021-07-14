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
  )
}

export default SearchBar

import React from "react"
const PageMark = ({ markDown }) => {
  const [index, setIndex] = React.useState(0)
  let data = markDown[index]

  const checkNumber = number => {
    if (number > markDown.length - 1) {
      return 0
    }
    if (number < 0) {
      return markDown.length - 1
    }
    return number
  }
  const handleNext = () => {
    setIndex(index => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const handlePrev = () => {
    setIndex(index => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-7 mx-auto">
            <h1 className="text-center display-3" id="title">
              {data.frontmatter.title}
            </h1>
            <div>
              <h3 className="text-center text-capitalize  text-muted">
                Author:{data.frontmatter.author}
              </h3>
              <p className="text-end">{data.frontmatter.date}</p>
              <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a href="#title">
                <button
                  className="btn btn-primary text-light"
                  onClick={() => handlePrev(index)}
                >
                  Prev
                </button>
              </a>
              <a href="#title">
                <button
                  className="btn btn-primary text-light"
                  onClick={() => handleNext(index)}
                >
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageMark

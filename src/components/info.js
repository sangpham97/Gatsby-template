import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto text-center ">
            <Title title="our story"></Title>
            <p>
              I'm baby polaroid four loko lyft humblebrag narwhal, food truck
              helvetica chambray organic succulents locavore hell of. 8-bit
              selvage typewriter 3 wolf moon keffiyeh iceland. Vinyl actually
              flexitarian, you probably haven't heard of them pabst unicorn
              locavore twee brooklyn taxidermy pickled woke blue bottle.
              Kombucha polaroid gentrify asymmetrical mixtape twee copper mug,
              franzen wolf meditation meh you probably haven't heard of them
              banh mi. Try-hard celiac chicharrones mumblecore affogato XOXO
              hell of. Occupy banh mi williamsburg leggings, brunch hella copper
              mug hexagon direct trade enamel pin XOXO meditation affogato
              vaporware photo booth. Keytar street art poutine readymade PBR&B
              cloud bread. Selfies franzen dreamcatcher cold-pressed pickled,
              twee gentrify fam air plant marfa kitsch truffaut. Bitters
              authentic tumeric humblebrag.
            </p>
            <Link
              to="/about"
              className="btn btn-outline-warning text-uppercase "
            >
              About Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info

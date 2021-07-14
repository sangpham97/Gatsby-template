import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/Title"

export default function Contact() {
  return (
    <Layout>
      <Seo title="Contact" />
      <div className="my-5"></div>
      <Title title="contact us " />
      <div className="container ">
        <div className="row">
          <div className="col-10 col-md-8 col-lg-6 mx-auto">
            <form
              className="form-group mb-5"
              action="https://formspree.io/f/xeqvlglz"
              method="POST"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                  placeholder="Email"
                  name="_replyto"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="lead text-dark">Leave a comment</div>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Enter your feeling about our services"
                required=""
                className="d-block w-100 my-3"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

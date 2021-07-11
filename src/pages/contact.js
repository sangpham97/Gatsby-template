import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/Title"

export default function Contact() {
  return (
    <Layout>
      <Seo title="Contact" />
      <Title title="contact us " />
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 col-lg-6 mx-auto">
            <form className="form-group">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                  placeholder="email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>

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

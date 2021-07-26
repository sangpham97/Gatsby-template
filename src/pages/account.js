import React from "react"
import { useAuth } from "gatsby-theme-auth0"
import Layout from "../components/layout"
const Account = () => {
  const { profile } = useAuth()

  return (
    <Layout>
      {profile && (
        <div className="py-5 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <h1 className="py-3 text-center">My Account</h1>
              <h3 className="text-center lead">Email:{profile.email}</h3>
              <div className="col-5 col-md-5 col-lg-6 my-3">
                <div className="d-flex justify-content-around">
                  <img src={profile.picture} />
                  <h4>Name:{profile.nickname}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Account

import React from "react"
import { AuthService, useAuth } from "gatsby-theme-auth0"
import { Link } from "gatsby"
const Auth0 = () => {
  const { isLoggedIn, profile } = useAuth()

  return (
    <>
      <div className="d-flex">
        {isLoggedIn ? (
          <div className="dropdown">
            <button
              className="btn p-0 btn-outline-secondary border-0 dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {profile && (
                <img
                  src={profile.picture}
                  className="w-25 img-fluid  rounded-circle "
                  alt=""
                />
              )}
            </button>

            <ul
              className="dropdown-menu justify-content-center"
              aria-labelledby="dropdownMenuButton1"
            >
              <li className="log-in-item">
                {profile && <span>{profile.nickname}</span>}
              </li>
              <li className="log-in-item">
                <span>
                  <Link to="/account">Account</Link>
                </span>
              </li>
              <li className="log-in-item">
                <button
                  className="btn btn-primary "
                  onClick={AuthService.logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={AuthService.login}>
            Login
          </button>
        )}
      </div>
    </>
  )
}

export default Auth0

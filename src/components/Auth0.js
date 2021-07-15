import React from "react"
import { AuthService, useAuth } from "gatsby-theme-auth0"

const Auth0 = () => {
  const { isLoggedIn, profile } = useAuth()
  return (
    <div>
      {profile && <p>Hello {profile.name}</p>}
      {isLoggedIn ? (
        <button onClick={AuthService.logout} className="btn btn-primary">
          Logout
        </button>
      ) : (
        <button onClick={AuthService.login} className="btn btn-primary">
          Login
        </button>
      )}
    </div>
  )
}

export default Auth0

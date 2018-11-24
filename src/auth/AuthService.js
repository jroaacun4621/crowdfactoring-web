import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'
import router from './../router'
import axios from 'axios'

// const CLIENT_ID = process.env.CLIENT_ID
// const DOMAIN = process.env.DOMAIN
// const CALLBACK_URL = process.env.CALLBACK_URL
// const API_HOST = process.env.API_HOST

const CLIENT_ID = 'XuULf_i31oATGH04Zx2-RTgfXQzQPU5v'
const DOMAIN = 'syndication-web.auth0.com'
const CALLBACK_URL = 'http://localhost:8080/callback'
const API_HOST = 'https://localhost:5000'

export default class AuthService {
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: DOMAIN,
    clientID: CLIENT_ID
  })

  login () {
    this.auth0.authorize({
      redirectUri: CALLBACK_URL,
      responseType: 'token id_token',
      scope: 'openid profile email'
    })
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        var instance = axios.create({
          headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`}
        })
        instance.get('https://' + DOMAIN + '/userinfo')
        .then(response => {
          var user_sub = response.data.sub
          localStorage.setItem('user_info', JSON.stringify(response.data))
          axios.get(API_HOST + '/user/' + user_sub)
          .then(response => {
            if (Object.keys(response.data.data.user).length === 0) {
              axios.post(API_HOST + '/user/' + user_sub)
            }
          })
          router.replace('home')
        })
        .catch(error => {
          console.log(error)
        })

      } else if (err) {
        router.replace('home')
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  getUserInfo () {
    return JSON.parse(localStorage.getItem('user_info'))
  }

  setSession (authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('user_info')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    router.replace('home')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}

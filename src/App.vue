<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Home</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>{{ userName() }}</em>
            </template>
            <b-dropdown-item v-if="authenticated" @click="logout()">Log Out</b-dropdown-item>
            <b-dropdown-item v-if="!authenticated" @click="login()">Log In</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container">
      <router-view
        :auth="auth"
        :authenticated="authenticated">
      </router-view>
    </div>
  </div>
</template>

<script>
import AuthService from './auth/AuthService'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier, getUserInfo } = auth
export default {
  name: 'app',
  data: function () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout () {
      logout()
      var domain = ''
      if (process.env.DOMAIN !== 'undefined') {
        domain = process.env.DOMAIN
      } else {
        domain = 'syndication-web.auth0.com'
      }
      var host = ''
      if (process.env.HOST !== 'undefined') {
        host = process.env.HOST
      } else {
        host = 'localhost:8080'
      }
      window.location.href = 'https://' + domain + '/v2/logout?returnTo=http%3A%2F%2F' + host
    },
    userName () {
      if (getUserInfo() === null) {
        return 'User'
      } else {
        return getUserInfo().name
      }
    }
  },
  mounted: function () {
    var host = ''
    if (process.env.API_HOST !== 'undefined') {
      host = process.env.API_HOST
    } else {
      host = 'http://localhost:5000'
    }
    this.axios.post(host + '/pageInfo')
    .catch(error => {
      console.log(error.response)
    })
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
.btn-margin {
  margin-top: 7px
}
</style>

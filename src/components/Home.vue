<template>
  <div>
    <h4 v-if="authenticated">
        You are logged in! You are logged in! <a @click="auth.logout()">Log Out</a>
    </h4>
    <h4 v-if="!authenticated">
      You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
    </h4>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['auth', 'authenticated']
}
</script>

<style>
  a {
    cursor: pointer;
  }
</style>

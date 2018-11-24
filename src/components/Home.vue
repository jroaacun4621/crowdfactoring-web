<template>
  <div>
    <div v-if="authenticated">
      <h4>
          Bienvenido
      </h4>
      <button
        class="btn btn-primary btn-margin"
        @click="redirect('/createloan')">
          Crear prestamo
      </button>
      <button
        class="btn btn-primary btn-margin"
        @click="redirect('/listloans')">
          Lista de prestamos
      </button>
    </div>
    <div>
      <h4 v-if="!authenticated">
        Por favor <a @click="auth.login()">inicie sesión</a> para continuar.
      </h4>
    </div>
    <VisitsCounter></VisitsCounter>
  </div>
</template>

<script>
import VisitsCounter from './VisitsCounter'

export default {
  name: 'home',
  components: {
    VisitsCounter
  },
  props: ['auth', 'authenticated'],
  methods: {
    redirect (uri) {
      window.location.href = uri
    }
  }
}
</script>

<style>
  a {
    cursor: pointer;
  }
</style>

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
      <div style="padding-bottom: 5%"></div>
      <GmapMap
        :center="center"
        :zoom="10"
        style="width: 100%; height: 500px;">
        <GmapMarker
          :key="0"
          :position="coords"
          :clickable="true"
          :draggable="false"/>
      </GmapMap>
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
  data: function () {
    return {
      coords: {
        lat: 0,
        lng: 0
      },
      center: {
        lat: 0,
        lng: 0
      },
      host: ''
    }
  },
  props: ['auth', 'authenticated'],
  methods: {
    redirect (uri) {
      window.location.href = uri
    },
    getGPS () {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      var instance = this
      function success(pos) {
        var crd = pos.coords;
        instance.coords.lat = crd.latitude
        instance.coords.lng = crd.longitude
        instance.center.lat = crd.latitude
        instance.center.lng = crd.longitude
      };
      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    },
    getUserId () {
      if (process.env.API_HOST !== 'undefined') {
        this.host = process.env.API_HOST
      } else {
        this.host = 'http://localhost:5000'
      }
      if (this.auth.getUserInfo() !== null) {
        this.axios.get(this.host + '/user/' + this.auth.getUserInfo().sub)
        .then(response => {
          localStorage.setItem('user_id', response.data.data.user.id)
        })
        .catch(error => {
          console.log(error.response)
        })
      }
    }
  },
  mounted: function () {
    this.getGPS()
    this.getUserId()
  }
}
</script>

<style>
  a {
    cursor: pointer;
  }
</style>

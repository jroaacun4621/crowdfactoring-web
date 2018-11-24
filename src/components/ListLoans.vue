<template>
  <div>
    <div class="col-md-12 col-xs-12">
            <h1>LISTA DE PRESTAMOS</h1>
            <table class="table">
              <tr bgcolor=silver>
                <th>ID Producto</th>
                <th>Monto</th>
                <th>Interés</th>
                <th>% Vendido</th>
                <th>Inversores</th>
                <th>Tipo de producto</th>
              </tr>
              <tr v-for="item in lista">
                <td v-text="item.count_id"></td>
                <td v-text="item.value"></td>
                <td v-text="item.interest"></td>
                <td v-text="item.sold_percent"></td>
                <td v-text="item.investor"></td>
                <td v-text="item.product_type"></td>
              </tr>
            </table>
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
      lista: []
    }
  },
  props: ['auth', 'authenticated'],
  methods: {
    redirect (uri) {
      window.location.href = uri
    },
    getData () {
      this.axios.get(this.host + '/loans')
      .then(response => {
        this.lista = response.data.data.loans
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  },
  mounted: function () {
    if (process.env.API_HOST !== 'undefined') {
      this.host = process.env.API_HOST
    } else {
      this.host = 'http://localhost:5000'
    }
    this.getData()
  }
}
</script>

<style>
  a {
    cursor: pointer;
  }
  body {
    text-align: center;
  }
</style>

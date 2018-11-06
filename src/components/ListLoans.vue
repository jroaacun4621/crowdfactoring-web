<template>
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
              <td v-text="item.txtId"></td>
              <td v-text="item.txtMonto"></td>
              <td v-text="item.txtInteres"></td>
              <td v-text="item.txtPorcentaje"></td>
              <td v-text="item.txtInversor"></td>
              <td v-text="item.tipoproducto"></td>
            </tr>
          </table>
        </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      lista: []
    }
  },
  props: ['auth', 'authenticated'],
  methods: {
    redirect (uri) {
      window.location.href = uri
    }
  },
  mounted: function () {
    if (localStorage.getItem('rows') !== null) {
        this.lista = JSON.parse(localStorage.getItem('rows'))
    }
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

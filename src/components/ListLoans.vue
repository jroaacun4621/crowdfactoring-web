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
              <td v-text="item.producto"></td>
              <td v-text="item.monto"></td>
              <td v-text="item.interes"></td>
              <td v-text="item.porcentaje"></td>
              <td v-text="item.inversores"></td>
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
      lista: [
        {producto: 'asd', monto: 'asd', interes: 'asd', porcentaje: 'asd', inversores: 'asd', tipoproducto: 'asd'},
        {producto: 'asd', monto: 'asd', interes: 'asd', porcentaje: 'asd', inversores: 'asd', tipoproducto: 'asd'},
        {producto: 'asd', monto: 'asd', interes: 'asd', porcentaje: 'asd', inversores: 'asd', tipoproducto: 'asd'},
        {producto: 'asd', monto: 'asd', interes: 'asd', porcentaje: 'asd', inversores: 'asd', tipoproducto: 'asd'}
      ]
    }
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
  body {
    text-align: center;
  }
</style>

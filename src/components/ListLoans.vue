<!DOCTYPE html>
<html lang="en">

<head>
  <title> Lista de Prestamos</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale= ">
  <meta http-equiv="X-UA-compatible" content="ie-edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="index.css">

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gijgo@1.9.10/js/gijgo.min.js" type="text/javascript"></script>
  <link href="https://cdn.jsdelivr.net/npm/gijgo@1.9.10/css/gijgo.min.css" rel="stylesheet" type="text/css"/>
</head>

<body>
  <div id="app">
    <div class="container">
      <div class="row">
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
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
        <script src="principal.js"></script>
</body>
</html>


<script>
export default {
  name: 'home',
  props: ['auth', 'authenticated'],
  methods: {
    redirect (uri) {
      window.location.href = uri
    }
  }
}
</script>

var app = new Vue({
  el: '#app',
  data: {
    lista: [
      {producto: 'asd', monto: 'asd', interes: 'asd', porcentaje: 'asd', inversores: 'asd', tipoproducto: 'asd'},
      {producto: 'asd', monto: 'asd', interes: 'asd', porcentaje: 'asd', inversores: 'asd', tipoproducto: 'asd'},
      {producto: 'asd', monto: 'asd', interes: 'asd', porcentaje: 'asd', inversores: 'asd', tipoproducto: 'asd'},
      {producto: 'asd', monto: 'asd', interes: 'asd', porcentaje: 'asd', inversores: 'asd', tipoproducto: 'asd'}
    ],
  }
})



<style>
  a {
    cursor: pointer;
  }
  body {
	text-align: center;	
  }
</style>



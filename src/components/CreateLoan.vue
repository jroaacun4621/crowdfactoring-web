<template>
  <div id="home">
  <div>
    <div>
      <h4>
        CREAR PRESTAMO
      </h4>
    </div>
  </div>
  <TABLE class="content-message-table">
    <TR>
      <TD>Monto</TD>
      <TD>Interes</TD>
    </TR>
    <TR>
      <TD>
        <div class="col-md-5">
          <input type="text" v-model="txtMonto" class="form-control">
        </div>
      </TD>
      <TD>
        <div class="col-md-5">
          <input type="text" v-model="txtInteres" class="form-control">
        </div>
      </TD>
    </TR>
    <TR>
      <TD>% a Vender</TD>
      <TD>Inversor</TD>
    </TR>
    <TR>
      <TD>
        <div class="col-md-5">
          <input type="text" v-model="txtPorcentaje" class="form-control">
        </div>
      </TD>
      <TD>
        <div class="col-md-5">
          <input type="text" v-model="txtInversor" class="form-control">
        </div>
      </TD>
    </TR>
    <!-- <TR>
      <TD>Fecha de Expiracion (yyyy/mm)</TD>
      <TD>Correo Electronico</TD>
    </TR>
    <TR>
      <TD>
        <div class="col-md-5">
          <input type="month" min="2018-01" value="2018-10" v-model="txtFecExp" class="form-control">
        </div>
      </TD>
      <TD>
        <div class="col-md-5">
          <input type="text" v-model="txtMail" class="form-control">
        </div>
      </TD>
    </TR> -->
    <TR>
      <TD>
        <div class="col-md-1">
          <button @click="cleanRegistro">Cancelar</button>
        </div>
      </TD>
      <TD>
        <div class="col-md-1">
          <!-- <input type="submit" value="Adicionar" v-show="txtMail" class="btn btn-primary" v-on:click="addRegistro"> -->
          <button @click="addRegistro">Adicionar</button>
        </div>
      </TD>
    </TR>
  </TABLE>
  <ul>
    <li v-for="item in rows">
      {{ item.txtId }} @{{ item.txtPorcentaje }} <strong>@{{ item.txtMonto }}</strong>
    </li>
  </ul>
</div>
 </template>
 <script>
export default {
  name: 'home',
  props: ['auth', 'authenticated'],
  data: function () {
    return {
      rows: [],
      txtPorcentaje: '',
      txtMonto: '',
      txtInteres: '',
      txtInversor: ''
    }
  },
  methods: {
    redirect (uri) {
      window.location.href = uri
    },
    addRegistro: function(){
      this.rows.push(
        {
          'txtId': this.rows.length,
          'txtPorcentaje': this.txtPorcentaje,
          'txtMonto': this.txtMonto,
          'txtInteres': this.txtInteres,
          'txtInversor': this.txtInversor
        }
      )
      this.txtPorcentaje= ''
      this.txtMonto= ''
      this.txtInteres= ''
      this.txtInversor= ''
      localStorage.removeItem('rows')
      localStorage.setItem('rows', JSON.stringify(this.rows))
		},
    cleanRegistro: function(){
      this.txtPorcentaje = ''
      this.txtTarjeta = ''
      this.txtSecCode = ''
      this.txtTitular = ''
      this.txtFecExp = ''
      this.txtMail = ''
		}
  },
  mounted: function () {
    if (localStorage.getItem('rows') !== null) {
        this.rows = JSON.parse(localStorage.getItem('rows'))
    }
  }
}
</script>
 <style>
a {
    cursor: pointer;
  }
	table {
		border: 1px solid #333;
		background-color: #C0C0C0;
	}
	td {
		border: 0px solid #333;
	}
	.content-message-table {
		text-align:center;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		border: 1;
	}
	.content-message-table-dimension {
		text-align: center;
		padding: 0em 2.0em 0em 2.0em;
	}
	.content-message-table-dimension-text {
		text-align: center;
		vertical-align: top;
		padding: 0.25em 0em 2.0em 0em;
	}
	.content-title-text {
		color: #000000;
		text-align: center;
		font-size: x-large;
		padding: 0.5em 0.75em 0.5em 0.75em;
		position: relative;
	}
	img {
		border-style: none;
	}
	body {
		margin: 0;
		font-size: 100.1%;
		text-align: center;
		background-color: #ffffff;
		vertical-align: middle;
		font-family: Verdana;
	}
	.container {
		width: 750px;
		margin-left: auto;
		margin-right: auto;
		border-style: none;
	}
	.text-right {
		float: right;
		text-align: right;
	}
	.text-left {
		float: left;
		text-align: left;
	}
	.text-center {
		float: center;
		text-align: center;
	}
</style>

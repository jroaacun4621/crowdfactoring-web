
<template>
  <div id="home">
    <div class="content-title-text">
		<h4>
			COMPRAR
		</h4>
	</div>
	<FORM>
	<TABLE class="content-message-table">
		<TR>
			<TD>Porcentaje a Comprar</TD>
			<TD>Numero Tarjeta de Credito</TD>
		</TR> 
		<TR>
			<TD>
				<div class="col-md-5">
					<input type="text" v-model="txtPorcentaje" class="form-control">
				</div>
			</TD>
			<TD>
				<div class="col-md-5">
					<input type="text" v-model="txtTarjeta" class="form-control">
				</div>
			</TD>
		</TR>
		<TR>
			<TD>Codigo de Seguridad</TD>
			<TD>Titular</TD>
		</TR>
		<TR>
			<TD>
				<div class="col-md-5">
					<input type="text" v-model="txtSecCode" class="form-control">
				</div>
			</TD>
			<TD>
				<div class="col-md-5">
					<input type="text" v-model="txtTitular" class="form-control">
				</div>
			</TD>
		</TR>
		<TR>
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
		</TR>
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
	  </FORM>
	  
	<BR><BR>

			<ul>
				<li v-for="item in rows">
				@{{ item.txtPorcentaje }} <strong>@{{ item.txtMail }}</strong></li>
			</ul>

  </div>

</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.0/vue.js"></script>
<script type="text/javascript">

        new Vue({
            el: '#home',
            data: {
				rows: [];
			},
			methods:{

				addRegistro: function(){
					this.rows.push({txtPorcentaje: this.txtPorcentaje, txtTarjeta: this.txtTarjeta, txtSecCode: this.txtSecCode, txtTitular: this.txtTitular, 	txtFecExp: this.txtFecExp, txtMail: this.txtMail});
					
					this.txtPorcentaje = '';
					this.txtTarjeta = '';
					this.txtSecCode = '';
					this.txtTitular = '';
					this.txtFecExp = '';
					this.txtMail = '';
				},

				cleanInput: function(){
					this.txtPorcentaje = '';
					this.txtTarjeta = '';
					this.txtSecCode = '';
					this.txtTitular = '';
					this.txtFecExp = '';
					this.txtMail = '';
				}
			}
		});
		
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
		border=1;
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

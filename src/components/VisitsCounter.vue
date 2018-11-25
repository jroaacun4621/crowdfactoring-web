<template>
  <div class="custom-footer">
    contador de visitas: {{ visits }}
  </div>
</template>

<script>
export default {
 name: 'custom-footer',
 data: function () {
   return {
     visits: ''
   }
 },
 methods: {
   visitsCount () {
     var host = ''
     if (process.env.API_HOST !== 'undefined') {
       host = process.env.API_HOST
     } else {
       host = 'http://localhost:5000'
     }
     this.axios.get(host + '/pageInfo')
     .then(response => {
       this.visits = response.data.data.page_info.visits
     })
     .catch(error => {
       console.log(error.response)
     })
   }
 },
 mounted: function () {
   this.visitsCount()
 }
}
</script>
<style>
.custom-footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: grey;
   color: white;
   text-align: center;
}
</style>

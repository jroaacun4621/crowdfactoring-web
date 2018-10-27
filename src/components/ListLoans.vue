<template>
  <div>
    <div>
      <h4>
        LISTA DE PRESTAMOS
       Subtitulo
      </h4>
    </div>
  </div>
</template>

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

<style>
  a {
    cursor: pointer;
  }
</style>

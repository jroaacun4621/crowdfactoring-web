<template>
  <div>
    <div>
      <h4>
        CREAR PRESTAMO HECTOR - HOLA
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

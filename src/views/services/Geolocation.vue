<template>
  <div class="geolocation">
    <h2>Welcome to the Village</h2>
    Geolocation
    <h6>Enable location to let them know where you are</h6>
    <router-link to="/product/payment" class="button is-danger">Check Out Location</router-link>
  </div>
</template>
<script>

export default {
  mounted() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(position => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.$socket.emit('ping', location)
        console.log(location)
      });
    }
  }
};
</script>
<style scoped>
.geolocation {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
}
h6 {
  margin: 15px 0;
  opacity: 0.6;
}

</style>
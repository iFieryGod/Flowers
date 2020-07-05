<template>
  <div>
    <Hero />
      <section class="section">
    <div class="container">
      <div class="columns is-vcentered is-multiline">
        <div class="column">
          <div class="box">
            <figure class="image is-3by2">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <p class="title is-5">Purple Kush</p>
            <router-link to="/product" class="button is-danger">Check Out</router-link>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <figure class="image is-3by2">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <p class="title is-5">Indoor</p>
            <router-link to="/product" class="button is-danger">Check Out</router-link>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <figure class="image is-3by2">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <p class="title is-5">Pure outdoor</p>
            <router-link to="/product" class="button is-danger">Check Out</router-link>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <figure class="image is-3by2">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <p class="title is-5">Sour diesel</p>
            <router-link to="/product" class="button is-danger">Check Out</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
<script>
import Hero from '../../components/Hero'
export default {
  components: {
    Hero
  }
}
</script>

<template>
  <v-carousel :show-arrows="false" cycle height="400" touchless hide-delimiters>
    <v-img>
      <v-carousel-item class="mt-5"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="fade-transition"
      eager
      ripple
      contain
      lazy-src="https://i.ibb.co/whnvc3m/placeholder.jpg"
    ></v-carousel-item>
    </v-img>
</v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.ibb.co/VHmt4ss/BLM.png',
          },
          {
            src: 'https://i.ibb.co/0r6kTnY/liverpool1.jpg',
          },
          {
            src: 'https://i.ibb.co/27JLYyM/keepcalm.jpg',
          }
        ],
      }
    },
  }
</script>
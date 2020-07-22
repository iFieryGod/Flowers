<template>
  <a role="button" @click="callNavMenu" :class="{'navbar-burger': isActive, 'burger': isBurger, 'is-active': toggleActive }" v-on:click="toggleActive = !toggleActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" id="navbarBurgerMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
</template>
<script>
import { EventBus } from "../event-bus/event.js";
export default {
  data() {
    return {
      isActive: true,
      isBurger: true,
      toggleActive: false
    }
  },
  methods: { 
    callNavMenu() {
      EventBus.$emit('clickEvent', this.toggleActive)
    } 
  }
}
</script>
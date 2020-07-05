<template>
  <div id="navbarBasicExample" :class="{'navbar-menu': isActive, 'is-active': toggleThis}">
    <div class="navbar-end">
      <router-link to='user' class="button is-warning is-inverted is-rounded mr-3 ml-3 mt-3">
        <span class="icon">
          <div>🙂 </div>
        </span>
          <span class="ml-1">Account</span>
      </router-link>
      <router-link to="/cart" class="button is-warning is-inverted is-rounded mr-3 mt-3">
        <div>🛒 </div>
        <span class="ml-1">Cart</span> 
      </router-link>
      <router-link to='about' class="button is-warning is-inverted is-rounded mr-3 mt-3">
        <span class="icon">
          <div>😈 </div>
        </span>
          <span class="ml-1">About Us</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import { EventBus } from "../event-bus/event.js";
export default {
  data() {
    return {
      isActive: true,
      toggleThis: false
    }
  },
  mounted() {
    EventBus.$on('clickEvent', toggleActive => {
      this.toggleThis = !toggleActive;
    })
  }
}
</script>
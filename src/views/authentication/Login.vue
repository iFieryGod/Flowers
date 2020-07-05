<template>
  <div id="loginModal" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <img id="login-image" src="https://i.ibb.co/kVnfMQm/icon-72x72.png" width="40">
      <header class="modal-card-head has-background-dark">
        <div class="loginEmoji">👽 </div>
        <p class="modal-card-title has-text-primary has-text-weight-semibold is-family-code is-uppercase">Login</p>
        <button @click="$emit('close')" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="text">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </section>
      <footer class="modal-card-foot has-background-warning">
          <button class="button is-success mr-5 is-family-code is-uppercase">Login</button>
          <button @click="resetPasswordValue" class="button is-danger is-family-code is-uppercase is-outlined has-text-weight-bold">Clear</button>
      </footer>
  </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      text: '',
      showLoginModal: false
    }
  }, 
  methods: { 
    resetPasswordValue() {
      this.text = '';
    } 
  }
}
</script>
<template>
  <div>
    <Hero />
    <div id="loginModal" class="modal is-active" v-if="toggleLoginModal">
      <div class="modal-background"></div>
        <form @submit.prevent>
          <div class="modal-card">
          <img id="login-image" src="https://i.ibb.co/kVnfMQm/icon-72x72.png" width="40">
          <header class="modal-card-head has-background-dark">
            <div class="loginEmoji">👽 </div>
            <router-link to="/Register" id="createAccountBtn" class="button is-warning is-family-code is-uppercase" @click="toggleForm()">Sign Up</router-link>
            <p class="modal-card-title has-text-primary has-text-weight-semibold is-family-code is-uppercase">Login</p>
            <button @click="$emit('close')" class="delete is-large" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input v-model.trim="loginForm.email" class="input" type="email" placeholder="you@email.com">
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
                <input class="input" type="password" placeholder="******" v-model.trim="loginForm.password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
          </section>
          <footer class="modal-card-foot has-background-warning">
              <button @click="login()" class="button is-success mr-2 is-family-code is-uppercase">Login</button>
              <button @click="resetPasswordValue" class="button is-danger is-family-code is-uppercase is-outlined has-text-weight-bold mr-5">Clear</button>
              <router-link to="/passwordReset" id="forgotPasswordBtn" class="button is-dark is-family-code is-uppercase mr-2" @click="$emit('open')">Forgot Password</router-link>
          </footer>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Hero from '@/components/Hero'
export default {
  components: { Hero },
  data() {
    return {
      showLoginModal: false,
      loginForm: {
        email: '',
        password: '',
      },
      toggleLoginModal: true
    }
  }, 
  methods: { 
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    resetPasswordValue() {
      this.loginForm.password = '';
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    toggleForm() {

    } 
  }
}
</script>

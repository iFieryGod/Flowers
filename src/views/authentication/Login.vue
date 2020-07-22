<template>
  <div>
    <div id="loginModal" class="modal is-active">
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
              <div class="control has-icons-left has-icons-right">
                <input v-model.trim="loginForm.email" class="input" type="email" placeholder="you@email.com" :class="{error: validation.hasError('loginForm.email'), valid: validation.isTouched('loginForm.email') && !validation.hasError('loginForm.email')}" required>
                <div class="has-text-danger" v-if="validation.hasError('loginForm.email')">{{ validation.firstError('loginForm.email')}}</div>
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="password" placeholder="******" v-model.trim="loginForm.password" minlength="5" maxlength="12" :class="{error: validation.hasError('loginForm.password'), valid: validation.isTouched('loginForm.password') && !validation.hasError('loginForm.password')}">
                <div class="has-text-danger" v-if="validation.hasError('loginForm.password')">{{ validation.firstError('loginForm.password')}}</div>
                <article class="message is-small mt-3 is-danger" v-if="showSystemMessage">
                  <div class="message-header">
                   <p class="has-text-light">System Message</p>
                    <button @click="showSystemMessage = false" class="delete is-small" aria-label="delete"></button>
                  </div>
                  <div class="message-body has-text-danger">
                    {{errorMessage}}
                  </div>
                </article>
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot has-background-warning">
              <button @click="login()" class="button is-success mr-2 is-family-code is-uppercase" :disabled="validation.countErrors() > 0">Login</button>
              <button @click="resetPasswordValue" class="button is-danger is-family-code is-uppercase is-outlined has-text-weight-bold mr-5">Clear</button>
              <router-link to="/passwordReset" id="forgotPasswordBtn" class="button is-dark is-family-code is-uppercase mr-2" @click="$emit('open')">Forgot Password</router-link>
          </footer>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { Validator } from 'simple-vue-validator'
export default {
  data() {
    return {
      showLoginModal: false,
      loginForm: {
        email: '',
        password: '',
      },
      errorMessage: '',
      showSystemMessage: false
    }
  },
  validators: {
    'loginForm.email': function (value) {
      return Validator.value(value).required().email();
    },
    'loginForm.password': function (value) {
      return Validator.value(value).required().minLength(6);
    },
  }, 
  methods: { 
    login() {
      if(this.loginForm.email !== '' && this.loginForm.password !== ''){
        this.$validate()
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      }).catch((data) => {
        this.showSystemMessage = true
        this.errorMessage = data.message
      })
      }
    },
    resetPasswordValue() {
      this.loginForm.password = '';
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    }
  }
}
</script>

<template>
  <div>
    <Hero/>
    <div v-if="showPasswordReset" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head has-background-dark">
          <div class="loginEmoji">👽 </div>
            <p class="modal-card-title has-text-primary has-text-weight-semibold is-family-code is-uppercase">Reset Password</p>
          <router-link to="/" class="delete is-large" aria-label="close">close</router-link>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div v-if="!showSuccess">
              <p class="has-text-dark has-text-weight-semibold is-family-code is-uppercase">Enter your email to reset your password</p>
              <form @submit.prevent>
                <p class="control has-icons-left has-icons-right">
                  <input v-model.trim="email" class="input" type="email" placeholder="you@email.com" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </form>
              <p v-if="errorMsg !== ''" class="error has-text-danger">{{ errorMsg }}</p>
              <button @click="resetPassword()" class="button is-danger is-family-code is-uppercase has-text-weight-bold mt-2">Reset</button>
            </div>  
          </div>
        </section>
        <footer class="modal-card-foot has-background-warning">
          <p class="has-text-link has-text-weight-semibold is-family-code is-uppercase">Success! Check your email for a reset link.</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import { auth } from '@/firebase'
export default {
  data() {
    return {
      showPasswordReset: true,
      email: '',
      showSuccess: false,
      errorMsg: ''
    }
  },
  components: {
    Hero
  },
  methods: {
    async resetPassword() {
      this.errorMsg = ''
      try {
        await auth.sendPasswordResetEmail(this.email)
        this.showSuccess = true
      } catch (err) {
        this.errorMsg = err.message
      }
    },
    togglePasswordReset() {
      this.showPasswordReset = false
    }
  }
}
</script>
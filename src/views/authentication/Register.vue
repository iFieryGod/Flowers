<template>
  <div class="register container">
    <div class="box my-5">
      <div class="tile">
        <div class="tile is-parent">
          <div class="tile is-child is-4">
            
          </div>
          <div class="tile is-child notification is-primary is-4">
            <h1 class="title">Sign Up Here</h1>
            <h2 class="subtitle">Easy as quick maths</h2>
          </div>
          <div class="tile is-child is-4">
            
          </div>
        </div>
      </div>
      <div class="SignUpEmoji">👇🏾</div>
        <form @submit.prevent>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="username1">Username</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.username" class="input is-info is-rounded" type="text" placeholder="Your Username Here" id="username1">
                  <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>          
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="firstName1">First Name</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.firstName" class="input is-info is-rounded" type="text" placeholder="Your Name Here" id="firstName1">
                  <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="lastName1">Last Name</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.lastName" class="input is-info is-rounded" type="text" placeholder="Your Lastname Here" id="lastName1">
                  <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="email1">Email Address</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.email" class="input is-info is-rounded" type="email" placeholder="you@email.com" id="email1">
                  <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="password1">Password</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.password" class="input is-info is-rounded" type="password" placeholder="*******" id="password1">
                  <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="confirmPassword1">Confirm Password</label>
              <div class="control mt-2 has-icons-left">
                  <input class="input is-info is-rounded" type="password" placeholder="*******" v-model.trim="SignUpForm.confirmPassword" id="confirmPaswword1">
                  <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
          </div>
          <button @click="signUP()" class="button is-success mr-5 is-family-code is-uppercase has-text-weight-bold is-outlined">Sign Up</button>
          <button @click="resetPasswordValue" class="button ml-5 is-danger is-family-code is-uppercase is-outlined has-text-weight-bold">Clear</button>
          <div id="backToLoginBtn"><router-link to="/login" class="button is-dark is-family-code is-uppercase has-text-weight-bold">👈 Back to login</router-link></div>
      </form> 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SignUpForm: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }, 
  methods: { 
    resetPasswordValue() {
      this.SignUpForm.password = '';
      this.SignUpForm.confirmPassword = ''
    },
    signUP() {
      this.$store.dispatch('signup', {
        username: this.SignUpForm.username,
        firstName: this.SignUpForm.firstName,
        lastName: this.SignUpForm.lastName,
        email: this.SignUpForm.email,
        password: this.SignUpForm.password,
      })
    } 
  }
}
</script>
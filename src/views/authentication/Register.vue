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
              <label for="username">Username</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.username" class="input is-info is-rounded" type="text" placeholder="Your Username Here" id="username" :class="{error: validation.hasError('SignUpForm.username'), valid: validation.isTouched('SignUpForm.username') && !validation.hasError('SignUpForm.username')}">
                  <div class="has-text-danger" v-if="validation.hasError('SignUpForm.username')">{{ validation.firstError('SignUpForm.username')}}</div>
                  <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>          
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="firstName">First Name</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.firstName" class="input is-info is-rounded" type="text" placeholder="Your Name Here" id="firstName" :class="{error: validation.hasError('SignUpForm.firstName'), valid: validation.isTouched('SignUpForm.firstName') && !validation.hasError('SignUpForm.firstName')}">
                  <div class="has-text-danger" v-if="validation.hasError('SignUpForm.firstName')">{{ validation.firstError('SignUpForm.firstName')}}</div>
                  <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="lastName">Last Name</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.lastName" class="input is-info is-rounded" type="text" placeholder="Your Lastname Here" id="lastName" :class="{error: validation.hasError('SignUpForm.lastName'), valid: validation.isTouched('SignUpForm.lastName') && !validation.hasError('SignUpForm.lastName')}">
                  <div class="has-text-danger" v-if="validation.hasError('SignUpForm.lastName')">{{ validation.firstError('SignUpForm.lastName')}}</div>
                  <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="email">Email Address</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.email" class="input is-info is-rounded" type="email" placeholder="you@email.com" id="email" :class="{error: validation.hasError('SignUpForm.email'), valid: validation.isTouched('SignUpForm.email') && !validation.hasError('SignUpForm.email')}" required>
                  <div class="has-text-danger" v-if="validation.hasError('SignUpForm.email')">{{ validation.firstError('SignUpForm.email')}}</div>
                  <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="password">Password</label>
              <div class="control mt-2 has-icons-left">
                  <input v-model.trim="SignUpForm.password" class="input is-info is-rounded" type="password" placeholder="*******" id="password" :class="{error: validation.hasError('SignUpForm.password'), valid: validation.isTouched('SignUpForm.password') && !validation.hasError('SignUpForm.password')}">
                  <div class="has-text-danger" v-if="validation.hasError('SignUpForm.password')">{{ validation.firstError('SignUpForm.password')}}</div>
                  <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <label for="confirmPassword">Confirm Password</label>
              <div class="control mt-2 has-icons-left">
                  <input class="input is-info is-rounded" type="password" placeholder="*******" v-model.trim="SignUpForm.confirmPassword" id="confirmPaswword" :class="{error: validation.hasError('SignUpForm.confirmPassword'), valid: validation.isTouched('SignUpForm.confirmPassword') && !validation.hasError('SignUpForm.confirmPassword')}">
                  <div class="has-text-danger" v-if="validation.hasError('SignUpForm.confirmPassword')">{{ validation.firstError('SignUpForm.confirmPassword')}}</div>
                  <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
          </div>
          <button @click="signUP()" class="button is-success mr-5 is-family-code is-uppercase has-text-weight-bold is-outlined" :disabled="validation.countErrors() > 0">Sign Up</button>
          <button @click="resetPasswordValue" class="button ml-5 is-danger is-family-code is-uppercase is-outlined has-text-weight-bold">Clear</button>
      </form> 
    </div>
  </div>
</template>
<script>
import { Validator } from 'simple-vue-validator'
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
  validators: {
    "SignUpForm.firstName": function(value) {
      return Validator.value(value).required().minLength(4);
    },
    "SignUpForm.username": function(value) {
      return Validator.value(value).required().minLength(4);
    },
    "SignUpForm.lastName": function(value) {
      return Validator.value(value).required().minLength(4);
    },
    "SignUpForm.email": function(value){
      return Validator.value(value).required().email();
    },
    "SignUpForm.password": function(value) {
      return Validator.value(value).required().minLength(6);
    },
    'SignUpForm.confirmPassword, SignUpForm.password': function(confirmPassword, password) {
      if(this.submitted || this.validation.isTouched('SignUpForm.confirmPassword') || this.validation.isTouched('SignUpForm.password')) {
        return Validator.value(confirmPassword).required().match(password);
      }
      return true;
    }
  }, 
  methods: { 
    resetPasswordValue() {
      this.SignUpForm.password = '';
      this.SignUpForm.confirmPassword = ''
    },
    signUP() {
      this.$validate()
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
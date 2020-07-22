<template>
  <div>
    <nav class="navbar is-fixed-top is-warning" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="https://i.ibb.co/kVnfMQm/icon-72x72.png" width="40">
    </router-link>
    <div class="navbar-start">
      <div class="navbar-item">
        <div class="level is-mobile">
          <router-link to="/register" class="" id="signUpBtn">
             <a id="signUp" :class="{'button is-primary is-outlined is-inverted is-rounded level-item': SignUpBtnClasses, 'is-loading': loadingSignUpBtn}" @click="signUp">
            <div>📝 </div>
            <strong class="is-uppercase has-text-weight-semi-bold ml-1">Sign up</strong>
            </a>
          </router-link>
          <router-link to="" class="ml-2" id="loginBtn">
            <a id="logIn" :class="{'button is-light is-outlined is-inverted is-rounded level-item': LoginBtnClasses, 'is-loading': loadingLoginBtn}" @click="login">
              <div class="loginEmoji">📲 </div>
              <strong class="is-uppercase has-text-weight-semi-bold">Log in</strong> 
            </a>
          </router-link>  
        </div>
      </div>
    </div>
    <NavbarBurger/>
  </div>
  <NavbarMenu/>
</nav>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
<LoginModal v-if="showLoginModal" @close="showLoginModal = false"/>
<PasswordReset v-if="showPasswordReset"/>
</div>
</template>
<script>
import PasswordReset from '@/components/PasswordReset'
import LoginModal from '../views/authentication/Login'
import NavbarBurger from './Navbar-Burger'
import NavbarMenu from './Navbar-Menu'
export default {
  data() {
    return {
      showLoginModal: false,
      showNavMenu: false,
      SignUpBtnClasses: true,
      loadingSignUpBtn: false,
      LoginBtnClasses: true,
      loadingLoginBtn: false,
      showPasswordReset: false
    }
  },
  components: { 
    LoginModal,
    NavbarBurger,
    NavbarMenu,
    PasswordReset 
    },  
  methods: {
    signUp() {
      this.loadingSignUpBtn = true
      setTimeout(() => {
        this.loadingSignUpBtn = false
      }, 3000)
    },
    login() {
      this.showLoginModal = true
      this.loadingLoginBtn = true
      setTimeout(() => {
        this.loadingLoginBtn = false
      }, 3000)
    }
  } 
}
</script>
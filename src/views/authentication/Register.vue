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
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <label for="">Username</label>
          <div class="control mt-2 has-icons-left">
              <input class="input is-info is-rounded" type="text" placeholder="Your Username Here">
              <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>
          
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <label for="">First Name</label>
          <div class="control mt-2 has-icons-left">
              <input class="input is-info is-rounded" type="text" placeholder="Your First Name Here">
              <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <label for="">Last Name</label>
          <div class="control mt-2 has-icons-left">
              <input class="input is-info is-rounded" type="text" placeholder="Your Last Name Here">
              <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <label for="">Email Address</label>
          <div class="control mt-2 has-icons-left">
              <input class="input is-info is-rounded" type="email" placeholder="Email Address Here">
              <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <label for="">Password</label>
          <div class="control mt-2 has-icons-left">
              <input class="input is-info is-rounded" type="password" placeholder="Password" v-model="text">
              <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <label for="">Confirm Password</label>
          <div class="control mt-2 has-icons-left">
              <input class="input is-info is-rounded" type="password" placeholder="Confirm Password" v-model="text">
              <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
      </div>
      <button class="button is-success mr-5 is-family-code is-uppercase has-text-weight-bold is-outlined">Sign Up</button>
      <button @click="resetPasswordValue" class="button ml-5 is-danger is-family-code is-uppercase is-outlined has-text-weight-bold">Clear</button>    
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: null,
    }
  }, 
  methods: { 
    resetPasswordValue() {
      this.text = '';
    } 
  }
}
</script>
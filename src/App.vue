<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <h1 id="hometitle" class="centered">Plants</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col id="navcol" class="centered">
          <b-navbar>
            <b-navbar-toggle target="nav_collapse" id="navtoggle"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
              <b-navbar-nav>
                <b-nav-item><router-link to="/pictures">Pictures</router-link></b-nav-item>
                <b-nav-item><router-link to="/video">Video</router-link></b-nav-item>
                <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <div class="grid">
      <div class="grid-item"></div>
      <div class="grid-item"><router-link to="/pictures">Pictures</router-link></div>
      <div class="grid-item"><router-link to="/video">Video</router-link></div>
      <div class="grid-item"><router-link to="/">Home</router-link></div>
      <div class="grid-item"><router-link to="/">Home</router-link></div>
      <div class="grid-item"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

#app {
  padding: 5%;
}

.centered {
  text-align: center;
}

#hometitle {
  font-size: 20vmin;
  font-family: 'Indie Flower', cursive;
}

.grid {
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 2fr, 1fr, 1fr, 1fr, 2fr;
}

.grid-item {
  background-color: aqua;
}

#navtoggle {
    width: 100%;
    float: none;
    margin: 0 auto;
    border-width:0;
    border-radius:0;
}
</style>

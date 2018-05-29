<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <h1 id="hometitle" class="centered">Plants</h1>
        </b-col>
      </b-row>
    </b-container>
    <div class="grid">
      <div class="grid-item"><router-link class="link" to="/pictures">Pictures</router-link></div>
      <div class="grid-item"><router-link class="link" to="/video">Video</router-link></div>
      <div class="grid-item"><router-link class="link" to="/stream">Stream</router-link></div>
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
  color: #006400;
}

.grid {
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 33.333% 33.333% 33.333%;
  margin-bottom: 5%;
}

.link {
  color: #006400;
  text-align: center;
}

#navtoggle {
    width: 100%;
    float: none;
    margin: 0 auto;
    border-width:0;
    border-radius:0;
}
</style>

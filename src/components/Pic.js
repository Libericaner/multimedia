import Vue from "vue";

Vue.component('pic', {
    props: ['src'],
    template: '<div class="pic"><img :src="src" class="img-fluid rounded mx-auto" /></div>'
});
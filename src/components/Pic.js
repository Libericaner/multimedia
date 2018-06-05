import Vue from "vue";

Vue.component('pic', {
    props: ['src','title','desc'],
    template: '<div class="pic"><img :src="src" class="img-fluid rounded mx-auto" /><h1>{{ title }}</h1><p>{{ desc }}</p></div>'
});
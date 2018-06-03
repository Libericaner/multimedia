import Vue from "vue";

Vue.component('pic', {
    props: ['src', 'desc'],
    template: '<div class="pic"><img :src="src" class="img-fluid rounded mx-auto" /><p>{{ desc }}</p></div>'
});
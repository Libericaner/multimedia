<template>
    <div id="video">
        <iframe id="ourvideo" src="https://www.youtube.com/embed/GKnvbNiNJxE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
   name: 'video' 
}
</script>

<style>
    #video {
        text-align: center;
        position: relative; 
        padding-bottom: 56.25%; /* ratio 16x9 */
        height: 0; 
        overflow: hidden; 
        width: 100%;
        height: auto;
    }

    #ourvideo {
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
    }
</style>
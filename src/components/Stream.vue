<template>
    <div id="stream">
        <iframe id="youtubeframe" src="https://www.youtube.com/embed/9GXloHT7X5E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
   name: 'stream' 
}
</script>

<style>
    #stream {
        text-align: center;
        position: relative; 
        padding-bottom: 56.25%; /* ratio 16x9 */
        height: 0; 
        overflow: hidden; 
        width: 100%;
        height: auto;
    }

    #youtubeframe {
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
    }
</style>


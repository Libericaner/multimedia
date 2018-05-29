<template>
    <div id="pictures">
        <div class="grid-container">
            <div class="grid-item" v-for="p in pics" :key="p">
                <pic :src="p"></pic>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'pictures',
   data: function() {
       return {
           pics: [require('./../assets/websitepics/koala.jpg'),
                require('./../assets/websitepics/kanguru.jpg'),
                require('./../assets/websitepics/tukan.jpg')]
       }
   },
   mounted: function() {
       this.currentPic = this.setNext();
   }
}
</script>

<style>
#pictures {
    justify-content: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: minmax(200px,1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  align-items: center;
}
.grid-item {
  align-self: center;
  justify-self: center;
}
</style>
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
  grid-template-columns: minmax(250px,1fr);
  grid-template-rows: minmax(200px,1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  align-self: center;
  justify-self: center;
}
</style>
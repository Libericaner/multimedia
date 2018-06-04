<template>
    <div id="pictures">
        <div class="grid-container">
            <div class="pic-item" v-for="p in pics" :key="p[0]">
                <div class="clickbox" v-on:click="showPic(p)">
                    <pic :src="p[0]" :desc="p[1]"></pic>    
                </div>
            </div>
        </div>

        <transition v-if="isModalVisible">
                <div class="modal">
                    <img :src="currentPicture[0]" class="center-fit">
                    <div class="modal-header">
                        <p>Plants</p>
                        <button type="button" class="btn-close" @click="close">x</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-green" @click="prevPic">previous</button>
                        <button type="button" class="btn-green" @click="close">close</button>
                        <button type="button" class="btn-green" @click="nextPic">next</button>
                    </div>
                </div>
        </transition>
    </div>
</template>

<script>
export default {
   name: 'pictures',
   data: function() {
       return {
            pics: [[require('./../assets/websitepics/joel1.png'),'desc1', 0],
                [require('./../assets/websitepics/joel2.png'),'desc2', 1],
                [require('./../assets/websitepics/joel3.png'),'desc3', 2],
                [require('./../assets/websitepics/miro1.jpg'),'desc4', 3],
                [require('./../assets/websitepics/miro2.jpg'),'desc5', 4],
                [require('./../assets/websitepics/miro3.jpg'),'desc6', 5],
                [require('./../assets/websitepics/dave1.jpg'),'desc7', 6],
                [require('./../assets/websitepics/dave2.jpg'),'desc8', 7],
                [require('./../assets/websitepics/dave3.jpg'),'desc9', 8]],
            isModalVisible: false,
            currentPicture: null,
            registeredPics: 9
       }
   },
   methods: {
       showPic: function (picture) {
            this.currentPicture = picture;
            this.isModalVisible = true;
       },
       prevPic: function() {
           console.log("Current PIC: " + this.currentPicture[2]);
           //if null show first
            if (this.currentPicture == null) {
                this.currentPicture = pics[0];
            } else {
                // if current pic is first, show last -> one back
                if (this.currentPicture[2] == 0) {
                    this.currentPicture = this.pics[this.registeredPics - 1];
                } else {
                    // show picture befor current picture
                    this.currentPicture = this.pics[this.currentPicture[2] - 1];
                }
            }
       },
       nextPic: function() {
           console.log("Current PIC: " + this.currentPicture[2]);
           //if null show first
            if (this.currentPicture == null) {
                this.currentPicture = pics[0];
            } else {
                // if current pic is last, show first -> one forward
                if (this.currentPicture[2] == this.registeredPics - 1) {
                    this.currentPicture = this.pics[0];
                } else {
                    // show next picture
                    this.currentPicture = this.pics[this.currentPicture[2] + 1];
                }
            }
       },
       close: function() {
            this.isModalVisible = false;
       },
   }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

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

.pic-item {
  padding: 2%;
  text-align: center;
}

.pic-item:hover {
    background-color: #AAE6DA;
}


/* Dialog */
  .center-fit {
   position: relative;
   width: auto;
   height: 100%;
   margin: auto;
   text-align: center;
   align-self: center;
  }

  .modal {
    background: #FFFFFF;
    overflow-x: scroll;
    display: grid;
    flex-direction: column;
  }

  .modal-header {
    background-color: white;
    position: fixed;
    top: 0%;
    color: #4AAE9B;
    text-align: center;
    width: 100%;
    grid-template-columns: auto auto;
    justify-content: space-between;
    font-size: 5vmin;
    font-family: 'Indie Flower', cursive;
  }

  .modal-footer {
    background-color: white;
    position: fixed;
    bottom: 0%;
    width: 100%;
    justify-content: center;
    grid-template-columns: auto auto auto;
    text-align: center;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    }
</style>
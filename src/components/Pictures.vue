<template>
    <div id="pictures">
        <div class="grid-container">
            <div class="pic-item" v-for="p in pics" :key="p[0]">
                <div class="clickbox" v-on:click="showPic(p)">
                    <pic :src="p[0]" :desc="p[1]"></pic>    
                </div>
            </div>
        </div>

        <transition name="modal-fade" v-if="isModalVisible">
            <div class="modal-backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <p>Plants</p>
                        <button type="button" class="btn-close" @click="close">x</button>
                    </div>
                    <div class="modal-body">
                        <div class="imgbox">
                            <img :src="currentPicture[0]" class="center-fit">
                        </div>
                        <br />
                        <button type="button" class="btn-green" @click="prevPic">previous</button>
                        <button type="button" class="btn-green" @click="nextPic">next</button>
                    </div>
                    <div class="modal-footer">
                            <button type="button" class="btn-green" @click="close">close</button>
                    </div>
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
           //pics [src,description,index(starting at 0)]
            pics: [[require('./../assets/websitepics/koala.jpg'),'desc1', 0],
                [require('./../assets/websitepics/kanguru.jpg'),'desc2', 1],
                [require('./../assets/websitepics/tukan.jpg'),'desc3', 2]],
            isModalVisible: false,
            currentPicture: null,
            registeredPics: 3
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
  align-self: center;
  justify-self: center;
  text-align: center;
}

.pic-item:hover {
    background-color: #AAE6DA;
}


/* Dialog */

.imgbox {
   display: grid;
   height: 100%;
  }
  .center-fit {
   max-width: 100%;
   max-height: 100vh;
   margin: auto;
  }

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    font-size: 5vmin;
    font-family: 'Indie Flower', cursive;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: center;
    text-align: center;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    text-align: center;
    vertical-align: middle;
  }

  .modal-body img {
    margin-top: 2%;
    margin-bottom: 2%;
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
  
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>
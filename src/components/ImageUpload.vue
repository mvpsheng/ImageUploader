<script>
import http from "../http-common";

export default {
  name:"App",
  data: () => ({
    chosenFile: null,
    imageURLReceived: '',
    return: {
      chosen: false,
      imageURLReceived: '',
      currentState: '',
      postResult: null
    }
  }),
  watch:{
    imageURLReceived: {
      handler(newva, oldva) {
        console.log("urlchanged!------------");
        this.$emit('urlreceived', newva); 
        // 注意：在嵌套的变更中，
        // 只要没有替换对象本身，
        // 那么这里的 `newValue` 和 `oldValue` 相同
      },
      deep: true
  }
},
  emits: ['startloading', 'urlreceived'],
  methods: {
    fileChosen: function() {
      this.$emit('startloading', 'uploading');
    },
    responsed: function() {
      this.$emit('urlreceived', this.imageURLReceived); 
    },
    dropHandler: function(ev) {
    },
    dragOverHandler: function(ev) {
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();
    },
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    async postData(ev) {
        ev.preventDefault();
        let file = document.getElementById('uploadImage').files[0] || ev.dataTransfer.items[0].getAsFile();
        this.chosenFile = document.getElementById('uploadImage').files[0] || ev.dataTransfer.items[0].getAsFile();
        this.chosen = (this.chosenFile == null) ? false: true;
        let formData = new FormData()
        formData.append('file', file)

        // console.log(file);
        try {
        console.log("start post");
        this.fileChosen();
        const res = await http.post("/upload", formData, {
          headers: {
            "x-access-token": "token-value",
          },
        });
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        console.log(result);
        console.log("get response");
        console.log('before receivedurl:');
        console.log(this.imageURLReceived);
        this.imageURLReceived = result.data;
        console.log("after receive imageurl:");
        console.log(this.imageURLReceived);
      } catch (err) {
        this.postResult = this.fortmatResponse(err.response?.data) || err;
      }
    }
    }
}
</script>

<template>
  <div class="imageLoaderPanel">
    <div class="title">
      <p class="func">Upload your image</p>
      <p class="limit">File should be Jpeg, Png,...</p>
    </div>
    <div class="dragdroparea" id="droparea" @drop="postData" @dragover="dragOverHandler">
      <img src="../images/loaderimage.png" class="fakeImage">
      <span class="dragDis">Drag & Drop your image here</span>
    </div>
    <div class="filebutton">
      <div>
        <span class="otherdisc">Or</span>
      </div>
      <div class="choosebutton">
        <!-- <input type="file" class="form-control" id="input-image" name="input-image" accept="image/*"> -->
        <div class="buttonarea">
          <span class="buttonName">Choose a file</span>  
          <input type="file" id="uploadImage" class="chafi" accept="image/*" @change="postData">  
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.imageLoaderPanel {
    /* Rectangle 230 */
  position: absolute;
  width: 402px;
  height: 469px;
  left: -219.82px;
  top: -234.37px;

  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
.func {
  /* Upload your image */
  position: absolute;
  width: 265px;
  height: 26.99px;
  left: 115.97px;
  top: 25.37px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: -0.035em;

  /* Gray 2 */

  color: #4F4F4F;
}
.limit {
  position: absolute;
  width: 221px;
  height: 14.99px;
  left: 85.64px;
  top: 73.35px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.035em;

  /* Gray 3 */

  color: #828282;
}
.dragdroparea {
  box-sizing: border-box;

  position: absolute;
  width: 338px;
  height: 218.9px;
  left: 31.82px;
  top: 112.97px;

  background: #F6F8FB;
  border: 1px dashed #97BEF4;
  border-radius: 12px;
}

.fakeImage {
  position: absolute;
  width: 114.13px;
  height: 88.24px;
  left: 113.25px;
  top: 43.81px;
}

.dragDis {
  /* Drag & Drop your image here */
  position: absolute;
  width: 166.01px;
  height: 17.99px;
  left: 93.17px;
  top: 169.3px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: -0.035em;
  /* Gray 4 */
  color: #BDBDBD;
}

.otherdisc {
  /* Or */
  position: absolute;
  width: 14px;
  height: 17.99px;
  left: 188.82px;
  top: 355.78px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.035em;

  /* Gray 4 */
  color: #BDBDBD;
}

.buttonarea {
  position: absolute;
  width: 101px;
  height: 31.98px;
  left: 145.64px;
  top: 395.39px;
  border: 2px solid #2f75ed;
  display: inline-block;
  
  /* Blue 1 */

  background: #2f75ed;
  border-radius: 8px;
}
.buttonName {
  /* left: 8.4px; */
  letter-spacing: -0.035em;
  color: #FFFFFF;
  left: 14.64px;
  font-size: 13px;
}
.chafi {
  opacity: 0;
  width: 121px;
  height: 31.98px;
  left: -2px;
  top: -26px;
  font-size: 21px;
}
</style>

<script>
import http from "./http-common";

export default {
  name:"App",
  data: () => ({
    chosenFileName: null,
    return: {
      postResult: null,
    }
  }),
  methods: {
    fileChosen: function() {
      this.chosenFileName = document.getElementById('uploadImage').files[0].name
    },
    dropHandler: function(ev) {

    // Prevent default behavior (Prevent file from being opened)
    // ev.preventDefault();
    // let file = null;
    // if (ev.dataTransfer.items) {
    //   // Use DataTransferItemList interface to access the file(s)
    //   for (var i = 0; i < ev.dataTransfer.items.length; i++) {
    //     // If dropped items aren't files, reject them
    //     if (ev.dataTransfer.items[i].kind === 'file') {
    //       file = ev.dataTransfer.items[i].getAsFile();
    //       this.chosenFileName = file.name;
    //     }
    //   }   
    // }
    //  else {
    //   // Use DataTransfer interface to access the file(s)
    //   for (var i = 0; i < ev.dataTransfer.files.length; i++) {
    //     console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    //   }
    // }
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
        let file = document.getElementById('uploadImage').files[0];

        let formData = new FormData()
        formData.append('file', file)


        try {
        console.log("start post");
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
        this.postResult = this.fortmatResponse(result);
        console.log("get response");
        console.log(postResult);
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
      <p class="chosenFile">{{chosenFileName}}</p>
    </div>
    <div class="dragdroparea" id="droparea" @drop="postData" @dragover="dragOverHandler">
      <img src="./images/loaderimage.png" class="fakeImage">
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

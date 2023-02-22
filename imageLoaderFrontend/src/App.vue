<script setup>

import ImageUpload from './components/ImageUpload.vue';
import UploadProgress from './components/UploadProgress.vue'; 
import Uploaded from './components/Uploaded.vue'; 
</script>
<script>
export default {
  data() {

    return {
      imageUrl:"",
      uploadState: 'choosingImage'
    };
  },
  components: {
    ImageUpload,
    UploadProgress,
    Uploaded
  },
  watch: {
    uploadState(sta1, sta2) {
      console.log("我是watch: 当前状态：");
      console.log(this.uploadState);
    }
  }
  ,
  methods: {
    changeState(data) {
      this.uploadState = data;
      console.log("我是changestate当前状态:");
      console.log(this.uploadState);
    },
    changeUrl(data) {
      if(data != null) {
        this.imageUrl=data;
      }
      this.uploadState='urlReceived';
      console.log("我是urlreceived当前状态:");
      console.log(this.uploadState);
    }
  }
};
</script>

<template>
  <div v-if="uploadState === 'choosingImage'">
    <ImageUpload @startloading="changeState" @urlreceived="changeUrl"/>
  </div>
  <div v-else-if="uploadState === 'uploading'">
    <UploadProgress />
  </div>
  <div v-else>
    <Uploaded />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<template>
    <div class="uploading">
        <div class="info">
            uploading...
        </div>
        <div class="index">
            <div class="moving"></div>
        </div>
    </div>
</template>

<style>
.uploading {
  position: absolute;
  width: 400.36px;
  height: 143.57px;
  left: -160.82px;
  top: -125.35px;

  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.info {
  position: absolute;
  width: 100px;
  height: 27px;
  left: 31.82px;
  top: 30.35px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: -0.035em;

  /* Gray 2 */

  color: #4F4F4F;

}

.moving {
  
  position: absolute;
  width: 100.93px;
  height: 6px;
  /* left: 81.34px;
  top: 90.09px; */

  /* Blue 1 */

  background: #2F80ED;
  border-radius: 8px;
}

.index {
  position: absolute;
  width: 340.71px;
  height: 6px;
  left: 30.82px;
  top: 90.09px;

  /* Gray 6 */

  background: #F2F2F2;
  border-radius: 8px;
}
</style>
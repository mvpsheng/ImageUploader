<template>
  <div class="uploaded">
    <div class="uploadedStatus">
      <img class="statusIcon" src="../images/checkedCircle.png">
      <div class="statusInfo">
        Uploaded Successfully!
      </div>
    </div>
    <div class="uploadedPic"></div>
      <div class="picURL">
      <div class="urlspan">
        https://images.yourdomain.com/photo-1496950866446-325...
      </div>
      <div class="copylinkbutton" style="cursor: pointer;">
        <div class="copylinkname">
          copylink
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.uploaded {
  position: absolute;
  width: 400.36px;
  height: 454.96px;
  left: -180.82px;
  top: -240.42px;

  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
.statusIcon {
  position: absolute;
  left: 180.82px;
  top: 36.42px;
  width: 35px;
  height: 35px;
  /* Green 1 */
  border-radius: 50%;
  background: #219653;
}

.statusInfo {
  position: absolute;
  width: 198px;
  height: 27px;
  left: 101px;
  top: 93.95px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.035em;

  /* Gray 2 */

  color: #4F4F4F;
}

.uploadedPic {
  position: absolute;
  width: 338px;
  height: 224.4px;
  left: 31px;
  top: 146.29px;

  background: url(../images/image.png);
  border-radius: 12px;
}

.picURL {
  box-sizing: border-box;

  position: absolute;
  width: 338px;
  height: 34px;
  left: 31px;
  top: 396.03px;

  background: #F6F8FB;
  /* Gray 5 */

  border: 1px solid #E0E0E0;
  border-radius: 8px;
}

.urlspan {
  position: absolute;
  width: 240px;
  height: 12px;
  left: 1.12px;
  top: 10.03px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.035em;

  /* Gray 2 */

  color: #4F4F4F;
}

.copylinkbutton {
  position: absolute;
  width: 74px;
  height: 30px;
  left: 261px;
  top: 1.03px;

  /* Blue 1 */

  background: #2F80ED;
  border-radius: 8px;
}

.copylinkname {
  position: absolute;
  width: 37px;
  height: 12px;
  left: 12.98px;
  top: 9.03px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.035em;

  color: #FFFFFF;
}
</style>
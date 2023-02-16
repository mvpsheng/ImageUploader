<template>
    <div class="loadedPanel">
      <div class="loadedStatus">
        <div class="statusIcon"></div>
        <div class="statusDisc"></div>
      </div>
      <div class="loadedImage"></div>
      <div class="linkAndShare"></div>
    </div>
  </template>
  <style>
.loadedPanel {
    position: absolute;
    width: 400.36px;
    height: 454.96px;
    left: 519.82px;
    top: 308.42px;

    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
}
.loadedImage {
    position: absolute;
    width: 338px;
    height: 224.4px;
    left: 551px;
    top: 446.29px;

    background: url(image.png);
    border-radius: 12px;
}
.linkAndShare {
    box-sizing: border-box;

    position: absolute;
    width: 338px;
    height: 34px;
    left: 551px;
    top: 696.03px;

    background: #F6F8FB;
    /* Gray 5 */

    border: 1px solid #E0E0E0;
    border-radius: 8px;
}
</style>
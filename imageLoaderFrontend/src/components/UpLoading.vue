<template>
  <div class="loadingPanel">
    <div class="loadingInfo"></div>
    <div class="loadingProgress"></div>
  </div>
</template>
<style>
.loadingPanel {
    position: absolute;
    width: 400.36px;
    height: 143.57px;
    left: 219.82px;
    top: 255.35px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
}
.loadingInfo {
    position: absolute;
    width: 100px;
    height: 27px;
    left: 251.82px;
    top: 291.35px;

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
.loadingProgress {
    position: absolute;
    width: 100.93px;
    height: 6px;
    left: 281.34px;
    top: 249.09px;

    /* Blue 1 */

    background: #2F80ED;
    border-radius: 8px;
}
</style>
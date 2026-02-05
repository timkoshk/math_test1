gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code = {};
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables = [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.idToCallbackMap = new Map();
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects2= [];


gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("No_Button"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes_Button"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("_1_cut_scene"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1[i].play();
}
}
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "игра музыка фул.mp3", true, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1_cut_scene"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("No_Button"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes_Button"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes_Button"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1_cut_scene"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("_2_cut_scene"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1[i].play();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "3be87d90a743dae4324324.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2_cut_scene"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("No_Button"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "joystick-trigger-button-press_gyyt5ied.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes_Button"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_2_cut_scene"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("_3_cut_scene"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1[i].play();
}
}
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_3_cut_scene"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
}

}


};

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects2.length = 0;

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0(runtimeScene);
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95951_9595cut_9595sceneObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDSmallGreenButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDYes_9595ButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNo_9595ButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95952_9595cut_9595sceneObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GD_95953_9595cut_9595sceneObjects2.length = 0;


return;

}

gdjs['_1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code'] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code;

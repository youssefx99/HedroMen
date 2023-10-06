gdjs.RunoffCode = {};
gdjs.RunoffCode.GDStoneMountainObjects1= [];
gdjs.RunoffCode.GDStoneMountainObjects2= [];
gdjs.RunoffCode.GDRiverStartObjects1= [];
gdjs.RunoffCode.GDRiverStartObjects2= [];
gdjs.RunoffCode.GDNewTiledSpriteObjects1= [];
gdjs.RunoffCode.GDNewTiledSpriteObjects2= [];
gdjs.RunoffCode.GDNewTiledSprite2Objects1= [];
gdjs.RunoffCode.GDNewTiledSprite2Objects2= [];
gdjs.RunoffCode.GDStoneMountain2Objects1= [];
gdjs.RunoffCode.GDStoneMountain2Objects2= [];
gdjs.RunoffCode.GDGrassObjects1= [];
gdjs.RunoffCode.GDGrassObjects2= [];
gdjs.RunoffCode.GDEmoteDropObjects1= [];
gdjs.RunoffCode.GDEmoteDropObjects2= [];
gdjs.RunoffCode.GDBlackDecoratedButtonObjects1= [];
gdjs.RunoffCode.GDBlackDecoratedButtonObjects2= [];
gdjs.RunoffCode.GDBackgroundBlueGrassObjects1= [];
gdjs.RunoffCode.GDBackgroundBlueGrassObjects2= [];
gdjs.RunoffCode.GDNewTextObjects1= [];
gdjs.RunoffCode.GDNewTextObjects2= [];
gdjs.RunoffCode.GDNewText2Objects1= [];
gdjs.RunoffCode.GDNewText2Objects2= [];


gdjs.RunoffCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteDrop"), gdjs.RunoffCode.GDEmoteDropObjects1);
{for(var i = 0, len = gdjs.RunoffCode.GDEmoteDropObjects1.length ;i < len;++i) {
    gdjs.RunoffCode.GDEmoteDropObjects1[i].addForceTowardPosition(600, 600, 100, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteDrop"), gdjs.RunoffCode.GDEmoteDropObjects1);
{for(var i = 0, len = gdjs.RunoffCode.GDEmoteDropObjects1.length ;i < len;++i) {
    gdjs.RunoffCode.GDEmoteDropObjects1[i].addForceTowardPosition(0, 600, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.RunoffCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RunoffCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.RunoffCode.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RunoffCode.GDBlackDecoratedButtonObjects1[k] = gdjs.RunoffCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.RunoffCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ground water", false);
}}

}


};

gdjs.RunoffCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RunoffCode.GDStoneMountainObjects1.length = 0;
gdjs.RunoffCode.GDStoneMountainObjects2.length = 0;
gdjs.RunoffCode.GDRiverStartObjects1.length = 0;
gdjs.RunoffCode.GDRiverStartObjects2.length = 0;
gdjs.RunoffCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.RunoffCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.RunoffCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.RunoffCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.RunoffCode.GDStoneMountain2Objects1.length = 0;
gdjs.RunoffCode.GDStoneMountain2Objects2.length = 0;
gdjs.RunoffCode.GDGrassObjects1.length = 0;
gdjs.RunoffCode.GDGrassObjects2.length = 0;
gdjs.RunoffCode.GDEmoteDropObjects1.length = 0;
gdjs.RunoffCode.GDEmoteDropObjects2.length = 0;
gdjs.RunoffCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.RunoffCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.RunoffCode.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.RunoffCode.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.RunoffCode.GDNewTextObjects1.length = 0;
gdjs.RunoffCode.GDNewTextObjects2.length = 0;
gdjs.RunoffCode.GDNewText2Objects1.length = 0;
gdjs.RunoffCode.GDNewText2Objects2.length = 0;

gdjs.RunoffCode.eventsList0(runtimeScene);

return;

}

gdjs['RunoffCode'] = gdjs.RunoffCode;

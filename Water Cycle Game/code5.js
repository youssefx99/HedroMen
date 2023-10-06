gdjs.Rain1Code = {};
gdjs.Rain1Code.GDNewSpriteObjects1= [];
gdjs.Rain1Code.GDNewSpriteObjects2= [];
gdjs.Rain1Code.GDTallBuildingOrangeObjects1= [];
gdjs.Rain1Code.GDTallBuildingOrangeObjects2= [];
gdjs.Rain1Code.GDTallBuildingYellowObjects1= [];
gdjs.Rain1Code.GDTallBuildingYellowObjects2= [];
gdjs.Rain1Code.GDWaterTowerObjects1= [];
gdjs.Rain1Code.GDWaterTowerObjects2= [];
gdjs.Rain1Code.GDHospitalObjects1= [];
gdjs.Rain1Code.GDHospitalObjects2= [];
gdjs.Rain1Code.GDBigGreenTree2Objects1= [];
gdjs.Rain1Code.GDBigGreenTree2Objects2= [];
gdjs.Rain1Code.GDBigGreenTree7Objects1= [];
gdjs.Rain1Code.GDBigGreenTree7Objects2= [];
gdjs.Rain1Code.GDBigGreenTree4Objects1= [];
gdjs.Rain1Code.GDBigGreenTree4Objects2= [];
gdjs.Rain1Code.GDRainObjects1= [];
gdjs.Rain1Code.GDRainObjects2= [];
gdjs.Rain1Code.GDCloud1Objects1= [];
gdjs.Rain1Code.GDCloud1Objects2= [];
gdjs.Rain1Code.GDCloud6Objects1= [];
gdjs.Rain1Code.GDCloud6Objects2= [];
gdjs.Rain1Code.GDEmoteDropObjects1= [];
gdjs.Rain1Code.GDEmoteDropObjects2= [];
gdjs.Rain1Code.GDBlackDecoratedButtonObjects1= [];
gdjs.Rain1Code.GDBlackDecoratedButtonObjects2= [];
gdjs.Rain1Code.GDBackgroundBlueGrassObjects1= [];
gdjs.Rain1Code.GDBackgroundBlueGrassObjects2= [];
gdjs.Rain1Code.GDSnowflakeObjects1= [];
gdjs.Rain1Code.GDSnowflakeObjects2= [];
gdjs.Rain1Code.GDNewTextObjects1= [];
gdjs.Rain1Code.GDNewTextObjects2= [];
gdjs.Rain1Code.GDNewTexObjects1= [];
gdjs.Rain1Code.GDNewTexObjects2= [];


gdjs.Rain1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteDrop"), gdjs.Rain1Code.GDEmoteDropObjects1);
gdjs.copyArray(runtimeScene.getObjects("Snowflake"), gdjs.Rain1Code.GDSnowflakeObjects1);
{for(var i = 0, len = gdjs.Rain1Code.GDEmoteDropObjects1.length ;i < len;++i) {
    gdjs.Rain1Code.GDEmoteDropObjects1[i].addForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.Rain1Code.GDSnowflakeObjects1.length ;i < len;++i) {
    gdjs.Rain1Code.GDSnowflakeObjects1[i].addForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.Rain1Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Rain1Code.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Rain1Code.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Rain1Code.GDBlackDecoratedButtonObjects1[k] = gdjs.Rain1Code.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Rain1Code.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Runoff", false);
}}

}


};

gdjs.Rain1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Rain1Code.GDNewSpriteObjects1.length = 0;
gdjs.Rain1Code.GDNewSpriteObjects2.length = 0;
gdjs.Rain1Code.GDTallBuildingOrangeObjects1.length = 0;
gdjs.Rain1Code.GDTallBuildingOrangeObjects2.length = 0;
gdjs.Rain1Code.GDTallBuildingYellowObjects1.length = 0;
gdjs.Rain1Code.GDTallBuildingYellowObjects2.length = 0;
gdjs.Rain1Code.GDWaterTowerObjects1.length = 0;
gdjs.Rain1Code.GDWaterTowerObjects2.length = 0;
gdjs.Rain1Code.GDHospitalObjects1.length = 0;
gdjs.Rain1Code.GDHospitalObjects2.length = 0;
gdjs.Rain1Code.GDBigGreenTree2Objects1.length = 0;
gdjs.Rain1Code.GDBigGreenTree2Objects2.length = 0;
gdjs.Rain1Code.GDBigGreenTree7Objects1.length = 0;
gdjs.Rain1Code.GDBigGreenTree7Objects2.length = 0;
gdjs.Rain1Code.GDBigGreenTree4Objects1.length = 0;
gdjs.Rain1Code.GDBigGreenTree4Objects2.length = 0;
gdjs.Rain1Code.GDRainObjects1.length = 0;
gdjs.Rain1Code.GDRainObjects2.length = 0;
gdjs.Rain1Code.GDCloud1Objects1.length = 0;
gdjs.Rain1Code.GDCloud1Objects2.length = 0;
gdjs.Rain1Code.GDCloud6Objects1.length = 0;
gdjs.Rain1Code.GDCloud6Objects2.length = 0;
gdjs.Rain1Code.GDEmoteDropObjects1.length = 0;
gdjs.Rain1Code.GDEmoteDropObjects2.length = 0;
gdjs.Rain1Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Rain1Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Rain1Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.Rain1Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.Rain1Code.GDSnowflakeObjects1.length = 0;
gdjs.Rain1Code.GDSnowflakeObjects2.length = 0;
gdjs.Rain1Code.GDNewTextObjects1.length = 0;
gdjs.Rain1Code.GDNewTextObjects2.length = 0;
gdjs.Rain1Code.GDNewTexObjects1.length = 0;
gdjs.Rain1Code.GDNewTexObjects2.length = 0;

gdjs.Rain1Code.eventsList0(runtimeScene);

return;

}

gdjs['Rain1Code'] = gdjs.Rain1Code;

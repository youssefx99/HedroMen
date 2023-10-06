gdjs.SnowCode = {};
gdjs.SnowCode.GDForestBackground2Objects1= [];
gdjs.SnowCode.GDForestBackground2Objects2= [];
gdjs.SnowCode.GDRockSnow2Objects1= [];
gdjs.SnowCode.GDRockSnow2Objects2= [];
gdjs.SnowCode.GDRockSnow3Objects1= [];
gdjs.SnowCode.GDRockSnow3Objects2= [];
gdjs.SnowCode.GDSnowflakeObjects1= [];
gdjs.SnowCode.GDSnowflakeObjects2= [];
gdjs.SnowCode.GDNewTextObjects1= [];
gdjs.SnowCode.GDNewTextObjects2= [];
gdjs.SnowCode.GDBlackDecoratedButtonObjects1= [];
gdjs.SnowCode.GDBlackDecoratedButtonObjects2= [];
gdjs.SnowCode.GDNewTiledSpriteObjects1= [];
gdjs.SnowCode.GDNewTiledSpriteObjects2= [];
gdjs.SnowCode.GDNewText2Objects1= [];
gdjs.SnowCode.GDNewText2Objects2= [];


gdjs.SnowCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Snowflake"), gdjs.SnowCode.GDSnowflakeObjects1);
{for(var i = 0, len = gdjs.SnowCode.GDSnowflakeObjects1.length ;i < len;++i) {
    gdjs.SnowCode.GDSnowflakeObjects1[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.SnowCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SnowCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.SnowCode.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SnowCode.GDBlackDecoratedButtonObjects1[k] = gdjs.SnowCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.SnowCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Thankyou", false);
}}

}


};

gdjs.SnowCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SnowCode.GDForestBackground2Objects1.length = 0;
gdjs.SnowCode.GDForestBackground2Objects2.length = 0;
gdjs.SnowCode.GDRockSnow2Objects1.length = 0;
gdjs.SnowCode.GDRockSnow2Objects2.length = 0;
gdjs.SnowCode.GDRockSnow3Objects1.length = 0;
gdjs.SnowCode.GDRockSnow3Objects2.length = 0;
gdjs.SnowCode.GDSnowflakeObjects1.length = 0;
gdjs.SnowCode.GDSnowflakeObjects2.length = 0;
gdjs.SnowCode.GDNewTextObjects1.length = 0;
gdjs.SnowCode.GDNewTextObjects2.length = 0;
gdjs.SnowCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.SnowCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.SnowCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SnowCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SnowCode.GDNewText2Objects1.length = 0;
gdjs.SnowCode.GDNewText2Objects2.length = 0;

gdjs.SnowCode.eventsList0(runtimeScene);

return;

}

gdjs['SnowCode'] = gdjs.SnowCode;

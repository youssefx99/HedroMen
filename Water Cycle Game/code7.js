gdjs.Ground_32waterCode = {};
gdjs.Ground_32waterCode.GDGroundWaterObjects1= [];
gdjs.Ground_32waterCode.GDGroundWaterObjects2= [];
gdjs.Ground_32waterCode.GDBackgroundColoredShroomObjects1= [];
gdjs.Ground_32waterCode.GDBackgroundColoredShroomObjects2= [];
gdjs.Ground_32waterCode.GDWellObjects1= [];
gdjs.Ground_32waterCode.GDWellObjects2= [];
gdjs.Ground_32waterCode.GDPipeObjects1= [];
gdjs.Ground_32waterCode.GDPipeObjects2= [];
gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects1= [];
gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects2= [];
gdjs.Ground_32waterCode.GDEmoteDropObjects1= [];
gdjs.Ground_32waterCode.GDEmoteDropObjects2= [];
gdjs.Ground_32waterCode.GDNewTextObjects1= [];
gdjs.Ground_32waterCode.GDNewTextObjects2= [];
gdjs.Ground_32waterCode.GDNewText2Objects1= [];
gdjs.Ground_32waterCode.GDNewText2Objects2= [];


gdjs.Ground_32waterCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects1[k] = gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Snow", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteDrop"), gdjs.Ground_32waterCode.GDEmoteDropObjects1);
{for(var i = 0, len = gdjs.Ground_32waterCode.GDEmoteDropObjects1.length ;i < len;++i) {
    gdjs.Ground_32waterCode.GDEmoteDropObjects1[i].addForce(0, -(100), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteDrop"), gdjs.Ground_32waterCode.GDEmoteDropObjects1);
{for(var i = 0, len = gdjs.Ground_32waterCode.GDEmoteDropObjects1.length ;i < len;++i) {
    gdjs.Ground_32waterCode.GDEmoteDropObjects1[i].addForce(0, 100, 0);
}
}}

}


};

gdjs.Ground_32waterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Ground_32waterCode.GDGroundWaterObjects1.length = 0;
gdjs.Ground_32waterCode.GDGroundWaterObjects2.length = 0;
gdjs.Ground_32waterCode.GDBackgroundColoredShroomObjects1.length = 0;
gdjs.Ground_32waterCode.GDBackgroundColoredShroomObjects2.length = 0;
gdjs.Ground_32waterCode.GDWellObjects1.length = 0;
gdjs.Ground_32waterCode.GDWellObjects2.length = 0;
gdjs.Ground_32waterCode.GDPipeObjects1.length = 0;
gdjs.Ground_32waterCode.GDPipeObjects2.length = 0;
gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Ground_32waterCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Ground_32waterCode.GDEmoteDropObjects1.length = 0;
gdjs.Ground_32waterCode.GDEmoteDropObjects2.length = 0;
gdjs.Ground_32waterCode.GDNewTextObjects1.length = 0;
gdjs.Ground_32waterCode.GDNewTextObjects2.length = 0;
gdjs.Ground_32waterCode.GDNewText2Objects1.length = 0;
gdjs.Ground_32waterCode.GDNewText2Objects2.length = 0;

gdjs.Ground_32waterCode.eventsList0(runtimeScene);

return;

}

gdjs['Ground_32waterCode'] = gdjs.Ground_32waterCode;

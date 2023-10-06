gdjs.Condensation1Code = {};
gdjs.Condensation1Code.GDSkyBackgroundObjects1= [];
gdjs.Condensation1Code.GDSkyBackgroundObjects2= [];
gdjs.Condensation1Code.GDCloud1Objects1= [];
gdjs.Condensation1Code.GDCloud1Objects2= [];
gdjs.Condensation1Code.GDCloud4Objects1= [];
gdjs.Condensation1Code.GDCloud4Objects2= [];
gdjs.Condensation1Code.GDCloud3Objects1= [];
gdjs.Condensation1Code.GDCloud3Objects2= [];
gdjs.Condensation1Code.GDEmoteDropObjects1= [];
gdjs.Condensation1Code.GDEmoteDropObjects2= [];
gdjs.Condensation1Code.GDBlackDecoratedButtonObjects1= [];
gdjs.Condensation1Code.GDBlackDecoratedButtonObjects2= [];
gdjs.Condensation1Code.GDNewTextObjects1= [];
gdjs.Condensation1Code.GDNewTextObjects2= [];
gdjs.Condensation1Code.GDNewText2Objects1= [];
gdjs.Condensation1Code.GDNewText2Objects2= [];


gdjs.Condensation1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteDrop"), gdjs.Condensation1Code.GDEmoteDropObjects1);
{for(var i = 0, len = gdjs.Condensation1Code.GDEmoteDropObjects1.length ;i < len;++i) {
    gdjs.Condensation1Code.GDEmoteDropObjects1[i].addForce(0, -(180), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteDrop"), gdjs.Condensation1Code.GDEmoteDropObjects1);
{for(var i = 0, len = gdjs.Condensation1Code.GDEmoteDropObjects1.length ;i < len;++i) {
    gdjs.Condensation1Code.GDEmoteDropObjects1[i].addForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.Condensation1Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Condensation1Code.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Condensation1Code.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Condensation1Code.GDBlackDecoratedButtonObjects1[k] = gdjs.Condensation1Code.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Condensation1Code.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Condensation2", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Condensation1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Condensation1Code.GDSkyBackgroundObjects1.length = 0;
gdjs.Condensation1Code.GDSkyBackgroundObjects2.length = 0;
gdjs.Condensation1Code.GDCloud1Objects1.length = 0;
gdjs.Condensation1Code.GDCloud1Objects2.length = 0;
gdjs.Condensation1Code.GDCloud4Objects1.length = 0;
gdjs.Condensation1Code.GDCloud4Objects2.length = 0;
gdjs.Condensation1Code.GDCloud3Objects1.length = 0;
gdjs.Condensation1Code.GDCloud3Objects2.length = 0;
gdjs.Condensation1Code.GDEmoteDropObjects1.length = 0;
gdjs.Condensation1Code.GDEmoteDropObjects2.length = 0;
gdjs.Condensation1Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Condensation1Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Condensation1Code.GDNewTextObjects1.length = 0;
gdjs.Condensation1Code.GDNewTextObjects2.length = 0;
gdjs.Condensation1Code.GDNewText2Objects1.length = 0;
gdjs.Condensation1Code.GDNewText2Objects2.length = 0;

gdjs.Condensation1Code.eventsList0(runtimeScene);

return;

}

gdjs['Condensation1Code'] = gdjs.Condensation1Code;

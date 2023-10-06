gdjs.WelcomeCode = {};
gdjs.WelcomeCode.GDNewTiledSpriteObjects1= [];
gdjs.WelcomeCode.GDNewTiledSpriteObjects2= [];
gdjs.WelcomeCode.GDNewTextObjects1= [];
gdjs.WelcomeCode.GDNewTextObjects2= [];
gdjs.WelcomeCode.GDBlueButtonObjects1= [];
gdjs.WelcomeCode.GDBlueButtonObjects2= [];
gdjs.WelcomeCode.GDCloud8Objects1= [];
gdjs.WelcomeCode.GDCloud8Objects2= [];
gdjs.WelcomeCode.GDDropEmoteObjects1= [];
gdjs.WelcomeCode.GDDropEmoteObjects2= [];
gdjs.WelcomeCode.GDNewTiledSprite2Objects1= [];
gdjs.WelcomeCode.GDNewTiledSprite2Objects2= [];
gdjs.WelcomeCode.GDNewTiledSprite3Objects1= [];
gdjs.WelcomeCode.GDNewTiledSprite3Objects2= [];
gdjs.WelcomeCode.GDBackgroundBlueLandObjects1= [];
gdjs.WelcomeCode.GDBackgroundBlueLandObjects2= [];


gdjs.WelcomeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.WelcomeCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WelcomeCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.WelcomeCode.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WelcomeCode.GDBlueButtonObjects1[k] = gdjs.WelcomeCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.WelcomeCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Evaporization1", false);
}}

}


};

gdjs.WelcomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WelcomeCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.WelcomeCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.WelcomeCode.GDNewTextObjects1.length = 0;
gdjs.WelcomeCode.GDNewTextObjects2.length = 0;
gdjs.WelcomeCode.GDBlueButtonObjects1.length = 0;
gdjs.WelcomeCode.GDBlueButtonObjects2.length = 0;
gdjs.WelcomeCode.GDCloud8Objects1.length = 0;
gdjs.WelcomeCode.GDCloud8Objects2.length = 0;
gdjs.WelcomeCode.GDDropEmoteObjects1.length = 0;
gdjs.WelcomeCode.GDDropEmoteObjects2.length = 0;
gdjs.WelcomeCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.WelcomeCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.WelcomeCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.WelcomeCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.WelcomeCode.GDBackgroundBlueLandObjects1.length = 0;
gdjs.WelcomeCode.GDBackgroundBlueLandObjects2.length = 0;

gdjs.WelcomeCode.eventsList0(runtimeScene);

return;

}

gdjs['WelcomeCode'] = gdjs.WelcomeCode;

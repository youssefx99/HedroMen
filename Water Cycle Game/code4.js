gdjs.Condensation2Code = {};
gdjs.Condensation2Code.GDCloud2Objects1= [];
gdjs.Condensation2Code.GDCloud2Objects2= [];
gdjs.Condensation2Code.GDEmoteDropObjects1= [];
gdjs.Condensation2Code.GDEmoteDropObjects2= [];
gdjs.Condensation2Code.GDSweatDropObjects1= [];
gdjs.Condensation2Code.GDSweatDropObjects2= [];
gdjs.Condensation2Code.GDNewTextObjects1= [];
gdjs.Condensation2Code.GDNewTextObjects2= [];
gdjs.Condensation2Code.GDNewText2Objects1= [];
gdjs.Condensation2Code.GDNewText2Objects2= [];
gdjs.Condensation2Code.GDSkyBackgroundObjects1= [];
gdjs.Condensation2Code.GDSkyBackgroundObjects2= [];
gdjs.Condensation2Code.GDBlackDecoratedButtonObjects1= [];
gdjs.Condensation2Code.GDBlackDecoratedButtonObjects2= [];


gdjs.Condensation2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.Condensation2Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Condensation2Code.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Condensation2Code.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Condensation2Code.GDBlackDecoratedButtonObjects1[k] = gdjs.Condensation2Code.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Condensation2Code.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rain1", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Condensation2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Condensation2Code.GDCloud2Objects1.length = 0;
gdjs.Condensation2Code.GDCloud2Objects2.length = 0;
gdjs.Condensation2Code.GDEmoteDropObjects1.length = 0;
gdjs.Condensation2Code.GDEmoteDropObjects2.length = 0;
gdjs.Condensation2Code.GDSweatDropObjects1.length = 0;
gdjs.Condensation2Code.GDSweatDropObjects2.length = 0;
gdjs.Condensation2Code.GDNewTextObjects1.length = 0;
gdjs.Condensation2Code.GDNewTextObjects2.length = 0;
gdjs.Condensation2Code.GDNewText2Objects1.length = 0;
gdjs.Condensation2Code.GDNewText2Objects2.length = 0;
gdjs.Condensation2Code.GDSkyBackgroundObjects1.length = 0;
gdjs.Condensation2Code.GDSkyBackgroundObjects2.length = 0;
gdjs.Condensation2Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Condensation2Code.GDBlackDecoratedButtonObjects2.length = 0;

gdjs.Condensation2Code.eventsList0(runtimeScene);

return;

}

gdjs['Condensation2Code'] = gdjs.Condensation2Code;

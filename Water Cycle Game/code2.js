gdjs.Evaporization2Code = {};
gdjs.Evaporization2Code.GDForestBackgroundObjects1= [];
gdjs.Evaporization2Code.GDForestBackgroundObjects2= [];
gdjs.Evaporization2Code.GDGreenSmallTree1Objects1= [];
gdjs.Evaporization2Code.GDGreenSmallTree1Objects2= [];
gdjs.Evaporization2Code.GDGreenSmallTree3Objects1= [];
gdjs.Evaporization2Code.GDGreenSmallTree3Objects2= [];
gdjs.Evaporization2Code.GDGreenSmallTree4Objects1= [];
gdjs.Evaporization2Code.GDGreenSmallTree4Objects2= [];
gdjs.Evaporization2Code.GDGreenSmallTree5Objects1= [];
gdjs.Evaporization2Code.GDGreenSmallTree5Objects2= [];
gdjs.Evaporization2Code.GDBlueFlowerObjects1= [];
gdjs.Evaporization2Code.GDBlueFlowerObjects2= [];
gdjs.Evaporization2Code.GDAlternativeBush2Objects1= [];
gdjs.Evaporization2Code.GDAlternativeBush2Objects2= [];
gdjs.Evaporization2Code.GDBush2Objects1= [];
gdjs.Evaporization2Code.GDBush2Objects2= [];
gdjs.Evaporization2Code.GDSunObjects1= [];
gdjs.Evaporization2Code.GDSunObjects2= [];
gdjs.Evaporization2Code.GDNewSpriteObjects1= [];
gdjs.Evaporization2Code.GDNewSpriteObjects2= [];
gdjs.Evaporization2Code.GDSweatDropObjects1= [];
gdjs.Evaporization2Code.GDSweatDropObjects2= [];
gdjs.Evaporization2Code.GDGrassObjects1= [];
gdjs.Evaporization2Code.GDGrassObjects2= [];
gdjs.Evaporization2Code.GDBackgroundColoredLandObjects1= [];
gdjs.Evaporization2Code.GDBackgroundColoredLandObjects2= [];
gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects1= [];
gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects2= [];
gdjs.Evaporization2Code.GDNewTextObjects1= [];
gdjs.Evaporization2Code.GDNewTextObjects2= [];


gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects = Hashtable.newFrom({"Sun": gdjs.Evaporization2Code.GDSunObjects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDGreenSmallTree1Objects1Objects = Hashtable.newFrom({"GreenSmallTree1": gdjs.Evaporization2Code.GDGreenSmallTree1Objects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects = Hashtable.newFrom({"Sun": gdjs.Evaporization2Code.GDSunObjects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDGreenSmallTree3Objects1Objects = Hashtable.newFrom({"GreenSmallTree3": gdjs.Evaporization2Code.GDGreenSmallTree3Objects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects = Hashtable.newFrom({"Sun": gdjs.Evaporization2Code.GDSunObjects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDGreenSmallTree4Objects1Objects = Hashtable.newFrom({"GreenSmallTree4": gdjs.Evaporization2Code.GDGreenSmallTree4Objects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects = Hashtable.newFrom({"Sun": gdjs.Evaporization2Code.GDSunObjects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDGreenSmallTree5Objects1Objects = Hashtable.newFrom({"GreenSmallTree5": gdjs.Evaporization2Code.GDGreenSmallTree5Objects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects = Hashtable.newFrom({"Sun": gdjs.Evaporization2Code.GDSunObjects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDAlternativeBush2Objects1Objects = Hashtable.newFrom({"AlternativeBush2": gdjs.Evaporization2Code.GDAlternativeBush2Objects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects = Hashtable.newFrom({"Sun": gdjs.Evaporization2Code.GDSunObjects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDBush2Objects1Objects = Hashtable.newFrom({"Bush2": gdjs.Evaporization2Code.GDBush2Objects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects = Hashtable.newFrom({"Sun": gdjs.Evaporization2Code.GDSunObjects1});
gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDBlueFlowerObjects1Objects = Hashtable.newFrom({"BlueFlower": gdjs.Evaporization2Code.GDBlueFlowerObjects1});
gdjs.Evaporization2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenSmallTree1"), gdjs.Evaporization2Code.GDGreenSmallTree1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sun"), gdjs.Evaporization2Code.GDSunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects, gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDGreenSmallTree1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SweatDrop"), gdjs.Evaporization2Code.GDSweatDropObjects1);
{for(var i = 0, len = gdjs.Evaporization2Code.GDSweatDropObjects1.length ;i < len;++i) {
    gdjs.Evaporization2Code.GDSweatDropObjects1[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenSmallTree3"), gdjs.Evaporization2Code.GDGreenSmallTree3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sun"), gdjs.Evaporization2Code.GDSunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects, gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDGreenSmallTree3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SweatDrop"), gdjs.Evaporization2Code.GDSweatDropObjects1);
{for(var i = 0, len = gdjs.Evaporization2Code.GDSweatDropObjects1.length ;i < len;++i) {
    gdjs.Evaporization2Code.GDSweatDropObjects1[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenSmallTree4"), gdjs.Evaporization2Code.GDGreenSmallTree4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sun"), gdjs.Evaporization2Code.GDSunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects, gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDGreenSmallTree4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SweatDrop"), gdjs.Evaporization2Code.GDSweatDropObjects1);
{for(var i = 0, len = gdjs.Evaporization2Code.GDSweatDropObjects1.length ;i < len;++i) {
    gdjs.Evaporization2Code.GDSweatDropObjects1[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenSmallTree5"), gdjs.Evaporization2Code.GDGreenSmallTree5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sun"), gdjs.Evaporization2Code.GDSunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects, gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDGreenSmallTree5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SweatDrop"), gdjs.Evaporization2Code.GDSweatDropObjects1);
{for(var i = 0, len = gdjs.Evaporization2Code.GDSweatDropObjects1.length ;i < len;++i) {
    gdjs.Evaporization2Code.GDSweatDropObjects1[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AlternativeBush2"), gdjs.Evaporization2Code.GDAlternativeBush2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sun"), gdjs.Evaporization2Code.GDSunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects, gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDAlternativeBush2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SweatDrop"), gdjs.Evaporization2Code.GDSweatDropObjects1);
{for(var i = 0, len = gdjs.Evaporization2Code.GDSweatDropObjects1.length ;i < len;++i) {
    gdjs.Evaporization2Code.GDSweatDropObjects1[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bush2"), gdjs.Evaporization2Code.GDBush2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sun"), gdjs.Evaporization2Code.GDSunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects, gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDBush2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SweatDrop"), gdjs.Evaporization2Code.GDSweatDropObjects1);
{for(var i = 0, len = gdjs.Evaporization2Code.GDSweatDropObjects1.length ;i < len;++i) {
    gdjs.Evaporization2Code.GDSweatDropObjects1[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueFlower"), gdjs.Evaporization2Code.GDBlueFlowerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sun"), gdjs.Evaporization2Code.GDSunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDSunObjects1Objects, gdjs.Evaporization2Code.mapOfGDgdjs_9546Evaporization2Code_9546GDBlueFlowerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SweatDrop"), gdjs.Evaporization2Code.GDSweatDropObjects1);
{for(var i = 0, len = gdjs.Evaporization2Code.GDSweatDropObjects1.length ;i < len;++i) {
    gdjs.Evaporization2Code.GDSweatDropObjects1[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects1[k] = gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Condensation1", false);
}}

}


};

gdjs.Evaporization2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Evaporization2Code.GDForestBackgroundObjects1.length = 0;
gdjs.Evaporization2Code.GDForestBackgroundObjects2.length = 0;
gdjs.Evaporization2Code.GDGreenSmallTree1Objects1.length = 0;
gdjs.Evaporization2Code.GDGreenSmallTree1Objects2.length = 0;
gdjs.Evaporization2Code.GDGreenSmallTree3Objects1.length = 0;
gdjs.Evaporization2Code.GDGreenSmallTree3Objects2.length = 0;
gdjs.Evaporization2Code.GDGreenSmallTree4Objects1.length = 0;
gdjs.Evaporization2Code.GDGreenSmallTree4Objects2.length = 0;
gdjs.Evaporization2Code.GDGreenSmallTree5Objects1.length = 0;
gdjs.Evaporization2Code.GDGreenSmallTree5Objects2.length = 0;
gdjs.Evaporization2Code.GDBlueFlowerObjects1.length = 0;
gdjs.Evaporization2Code.GDBlueFlowerObjects2.length = 0;
gdjs.Evaporization2Code.GDAlternativeBush2Objects1.length = 0;
gdjs.Evaporization2Code.GDAlternativeBush2Objects2.length = 0;
gdjs.Evaporization2Code.GDBush2Objects1.length = 0;
gdjs.Evaporization2Code.GDBush2Objects2.length = 0;
gdjs.Evaporization2Code.GDSunObjects1.length = 0;
gdjs.Evaporization2Code.GDSunObjects2.length = 0;
gdjs.Evaporization2Code.GDNewSpriteObjects1.length = 0;
gdjs.Evaporization2Code.GDNewSpriteObjects2.length = 0;
gdjs.Evaporization2Code.GDSweatDropObjects1.length = 0;
gdjs.Evaporization2Code.GDSweatDropObjects2.length = 0;
gdjs.Evaporization2Code.GDGrassObjects1.length = 0;
gdjs.Evaporization2Code.GDGrassObjects2.length = 0;
gdjs.Evaporization2Code.GDBackgroundColoredLandObjects1.length = 0;
gdjs.Evaporization2Code.GDBackgroundColoredLandObjects2.length = 0;
gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Evaporization2Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Evaporization2Code.GDNewTextObjects1.length = 0;
gdjs.Evaporization2Code.GDNewTextObjects2.length = 0;

gdjs.Evaporization2Code.eventsList0(runtimeScene);

return;

}

gdjs['Evaporization2Code'] = gdjs.Evaporization2Code;

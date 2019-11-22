//one
function saturdayFun(target="roller-skate") {
  console.log(`This Saturday, I want to ${target}!`);
}
saturdayFun();
//two
function mondayWork(target="go to the office") {
  console.log(`This Monday, I will ${target}!`);
}
mondayWork();
//three
function wrapAdjective("*") {
 return function(one="special"){
   return `You are ${one}!`
 };
}
wrapAdjective();
let encouragingPromptFunction = wrapAdjective("!!!");
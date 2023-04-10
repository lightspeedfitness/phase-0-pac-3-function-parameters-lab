function introduction(name) {
  const message1 = `Hi, my name is ${name}.`;
  return message1;
}
function introductionWithLanguage(name, language){
  const message2 = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return message2;
}
function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript"){
  const message3 = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return message3;
}
const greeting1 = introduction("Joe");
console.log(greeting1);

const greeting2 = introductionWithLanguage("Bob", "Pascal");
console.log(greeting2);

const greeting3 = introductionWithLanguageOptional("John","Python");
console.log(greeting3);

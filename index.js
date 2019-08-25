var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  object[key] = value;
  return object;
}
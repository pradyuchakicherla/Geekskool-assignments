var stringify = function(obj){

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null)
    return '' + obj;
  if (typeof obj === 'string')
    return '"' + obj + '"';
  if(Array.isArray(obj))
    return '[' + obj.map(stringify).join(",") + ']';
  if (typeof obj === 'object'){
    var result = []
    Object.keys(obj).forEach(function(key) {
      var val = stringify(obj[key])
      if (val !== null) {
        result.push('"' + key + '": ' + val);
      }
    });
    return '{' + result.join(',') + '}';                
  }
  throw "err1";
};
var test =  {name: "John",
  age: 21,
  scores: [25,23,34,55,86,"peace"]}
console.log(stringify(test));

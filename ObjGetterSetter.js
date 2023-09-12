const obj = {};
let _name = "";

Object.defineProperty(obj, "name", {
  get: function() {
    return _name;
  },
  set: function(value) {
    let nameParts = value.split(', ');
    let formattedName = nameParts.map((word) => [word, word.length]);
        _name = formattedName;
       
    },
});

//obj.name = "Hamlet, Artavazd";
//console.log(obj.name);
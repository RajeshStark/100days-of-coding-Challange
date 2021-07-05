
var arr = [
    { "name": "Rajesh", "subject": "maths"},
    { "name": "Sridhar", "subject": "physics"},
    { "name": "Rajesh", "subject": "biology"},
    { "name": "Sridhar", "subject": "chen"},

]

var results = [];
console.log(results.length);

for (let i = 0; i < arr.length; i++) {
   if(results.length === 0){
       results.push({"name" : arr[i].name, "subjectNames": {"subject": arr[i].subject}})
   }
   else if(results.includes(arr[i].name)){
       results.push(arr[i].subject)
   }
   else{
    results.push(arr[i].subject)
}
    
}

console.log("Results ",results);



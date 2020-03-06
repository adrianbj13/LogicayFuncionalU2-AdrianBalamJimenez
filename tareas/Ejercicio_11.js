let a = new Set(["fresa","sandia","mora","manzana"]);
let b= new Set(["manzana","pera","fresa","sandia"]);


function union(a, b){
    let union = new Set([...a, ...b]);
return union;
}

function interseccion(a,b)
{
let intersection = new Set([...a].filter(x => b.has(x)));
return intersection;
}
function diferencia(a,b)
{
let difference = new Set([...a].filter(x => !b.has(x)));
return difference;
}


console.log(union(a,b));
console.log(interseccion(a,b));
console.log(diferencia(a,b));

//console.log(interseccion(a,b));

//const r=[]
//var i=0;
/*do{
const filtered = a.filter(union=>union==b[i]);
//console.log(filtered);


i++
}
while(i<a.length)

var j=0;
do{
r[j]=a[j];
//console.log(r[j]);
j++
r[j]=b[j];


}
while(j<a.length+b.length)

 function union(a,b) {
    res = new TreeSet(a);
    res.addAll(b);
    return res;
}
*/
//console.log (union(a.toString,b.toString))
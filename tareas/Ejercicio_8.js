let l =[2,4,6,8,10,12,14,16,17,20];
let l2 =[2,4,6,8,10,12,14,16,17,20];
var i=0
var flag,flag2=true;


do 
{

if (l[i]==l2[i])
{
 flag = true
//console.log(flag)

}
else
{
    
flag2=false
//console.log(flag2)



}
i++



}while(i<l.length || i< l2.length)

var op= flag && flag2

console.log(op)
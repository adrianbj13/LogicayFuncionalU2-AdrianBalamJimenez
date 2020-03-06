let l =[2,4,6,8,10,12,14,16,17,20];
var op;
var flag1,flag2=true;
//var aux=true;
var i=0
do
{

    if(l[i]<l[i+1])
    {
        //console.log(true)
        flag1=true;
    }
    else
    {
        //console.log(false);
        flag2=false;
    }
//console.log(l[i])

i++

}
while(i<l.length-1)

op=flag1 && flag2
console.log(op)
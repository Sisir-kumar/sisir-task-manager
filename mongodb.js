var b=true


    c = b ? !b:b;

console.log("c=" +c)



 function du1(){
   no = 5
}

function du2(no){
    no=no+10
 }
du1();
du2(no);
console.log(no);


let arry = [4,1,6,2,8,5]

let result = arry.map((el) =>el*3)
                 .filter(el =>el>6)
                .reduce((total,el) =>total+=el)

let object ={name:"javascript"}

let value=null;


if( value === object){
    console.log(typeof null)
}else{
    console.log(false)
}
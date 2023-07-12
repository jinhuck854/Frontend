function run(){
    console.log('3초 후 실행');
}

function func1(){
    console.log('func1 begins');
    setTimeout(run,3000);
    console.log('func1 ends');
}

function add1(x,y){
    return x + y;
}
const not1 = (x) => (!x);

console.log(` result of not1 = ${not1(true)} `);

console.log(` result of add = ${add1(10, 20)} `);

console.log('시작');
console.log('끝1');

func1();
while(true){

}

console.log('끝2');

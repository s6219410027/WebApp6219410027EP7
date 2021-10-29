//Function การทำงานหนึ่งๆ *********
//Function จะไม่ทำงานถ้าเราไม่ call function (เรียกใช้ ฟังก์ชั่น)
//1 ไม่ส่งค่า ไม่มีพารามิเตอร์
function funcNa(){
    console.log('Na na na ...')
}

//2 ไม่ส่งค่ากลับ มีพารามิเตอร์
function funcNi(x, y){ // x,y เรียก พารามิเตอร์
    let a = x + y 
    console.log("a มีค่า " + a)
}



//3 ส่งค่ากลับ ไม่มีพารามิเตอร์
function funcWow(){


    return 999 + 1;
}


//4 ส่งค่ากลับ มีพารามิเตอร์
function funcWee(x,y,z){
    let sum = x + y + z
    return 555;
}

funcNa()
funcNi(10,20) //10,20 เรียก อาคิวเมนต์

console.log( funcWow())

let total = funcWee(10,20,30)
// alert(total)

//----------------------------------------

function funcA( x, y = 20){
    console.log( x + y )
}

funcA(10 , 100)
funcA(50)

//------------------------------------------

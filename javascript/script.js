console.log("نظام نتائج الطلاب");

class students {
    #grade1;
    #grade2;
    #grade3;
    #attendance;


    constructor(name,grade1, grade2, grade3,attendance) {
this.name=name;
this.grade1=grade1;
this.grade2=grade2;
this.grade3=grade3;
this.attendance=attendance;
 }
 get grade1(){
    return this.#grade1;
}

 set grade1(value){
    if (value ===""||value<0||value>100 )
        throw new Error("الدرجة الاولي غير صحيحه يجب ان تتراوح من 0 الي 100");
      this.#grade1= Number(value); 
 }
 get grade2(){
    return this.#grade2;
}

 set grade2(value){
    if (value ===""||value<0||value>100 )
        throw new Error("الدرجة الثانيه غير صحيحه يجب ان تتراوح من 0 الي 100");
      this.#grade2= Number(value); 
 }
 get grade3(){
    return this.#grade3;
}

 set grade3(value){
    if (value ===""||value<0||value>100 )
        throw new Error("الدرجه الثالثه غير صحيحه يجب ان تتراوح من 0 الي 100");
      this.#grade3= Number(value); 
 }



 get attendance(){
    return this.#attendance;
}

 set attendance(value){
    if (value ===""||value<0||value>100 ){
        throw new Error("نسبه الحضور غير صحيحه يجب ان تتراوح من 0 الي 100");
         }
      this.#attendance= Number(value); 
 }

get Average(){
    return( Number(this.#grade1)+Number(this.#grade2)+Number(this.#grade3))/3
}
 }
 let studentlist=[];
 let nameInput =document.getElementById("name");
  let grade1Input =document.getElementById("grade1");
   let grade2Input =document.getElementById("grade2");
    let grade3Input =document.getElementById("grade3");
  let attendanceInput =document.getElementById("attendance");

   let errorBox=document.getElementById("error");
   let studentBox=document.getElementById("student");
 let reportBox =document.getElementById("report");



let addBtn=document.getElementById("addBtn");
let mercyBtn=document.getElementById("mercyBtn");


addBtn.onclick=addstudent;
mercyBtn.onclick=mercycommittee;
function addstudent() {
    try{
        errorBox.innerText="";
        
        let name =nameInput.value;
        let g1 =Number(grade1Input.value);
        let g2 = Number(grade2Input.value);
        let g3 =Number(grade3Input.value);
        let att =Number(attendanceInput.value);
        let newstudent = new students(name,g1,g2,g3,att);
studentlist.push(newstudent);

studentBox.innerHTML +=`  الاسم ${newstudent.name} <br>الدرجة الاولي : ${g1} <br>
الدرجه الثانيه : ${ g2}<br>
 الدرجه الثالثه: ${g3}<br>
نسبه الحضور % :${att}<br> <br>`;




    } catch (error){
        errorBox.innerHTML=error.message;
    }
}
 

function mercycommittee(){
    let s =studentlist.filter(student=>student.Average>=40 && student.Average<=49
    );
let e =s.map(student=>student.Average+5);
let total =e.reduce((sum,grade)=>sum+grade,0);
let average=0;
if(s.length>0){
    average=total/s.length;
}
let names =s.map(student=>student.name);


reportBox.innerHTML=  `<P><strong> عدد الطلاب المتعثرين :  ${s.length}</strong></P>
\n<p><strong>
اسماء الطلاب:  ${names} </strong></p>\n
<p><strong>
المتوسط بعد الرافه :   ${average}<strong</p>` ;
}
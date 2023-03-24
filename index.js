



function Grade(){
  let s1 = parseInt(document.querySelector(".sub-1").value)
  let s2 = parseInt(document.querySelector(".sub-2").value)
  let s3 = parseInt(document.querySelector(".sub-3").value)
  let s4 = parseInt(document.querySelector(".sub-4").value)
  let s5 = parseInt(document.querySelector(".sub-5").value)
  let res = document.querySelector(".tot")
let avg = document.querySelector(".avg")
let grade = document.querySelector(".grade")

if(isNaN(s1)||isNaN(s2)||isNaN(s3)||isNaN(s4)||isNaN(s5))
{
   
    return alert("failed")
}
   if(s1<=35||s2<=35||s3<=35||s4<=35||s5<=35)
    {
    
      return alert("Failed")
    }else{
      if(s1>100||s2>100||s3>100||s4>100||s5>100||s1<0||s2<0||s3<0||s4<0||s5<0)
      {
          return alert("Please enter Marks in renge of 100")
      }
    }




 let tot = s1+s2+s3+s4+s5
res.innerHTML = tot
let a = tot/5
avg.innerHTML = a

   let percentage = parseInt((tot/500)*100)
   

   if(percentage>=90)
   {
    grade.innerHTML = "A"
   }
   if(percentage>=80 && percentage<=89)
   {
    grade.innerHTML = "B"
   }
   if(percentage>=70 && percentage<=79)
   {
    grade.innerHTML = "C"
   }
   if(percentage>=60 && percentage<=69)
   {
    grade.innerHTML = "D"
   }
   if(percentage<60)
   {
    grade.innerHTML = "F"
   }

   



}
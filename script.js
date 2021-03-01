var containerEle = document.body.querySelector(".container");
var num1=prompt("Please enter a number");
if(isNaN(num1)){
  containerEle.innerHTML="Please try again! That was not a number."
}else{
  var num2=prompt("Please enter an operator")
  if(num2==='*'){
    var num3=prompt("Please enter your second number")
    if(isNaN(num3)){
      containerEle.innerHTML="Please try again! That was not a number."
    }else{
      var intNum1=parseInt(num1);
      var intNum3=parseInt(num3);
      var sum1= intNum1*intNum3
      containerEle.innerHTML= "The answer is "+sum1
    }
  }else{
    containerEle.innerHTML="Please try again! That was not an operator."
  }
  if (num2==='/'){
    var num4=prompt("Please enter your second number")
    if(isNaN(num4)){
      containerEle.innerHTML="Please try again! That was not a number."
    }else{
      var intNum1=parseInt(num1);
      var intNum4=parseInt(num4);
      var sum2= intNum1/intNum4
      containerEle.innerHTML="The answer is "+sum2
    }
  }else{
    containerEle.innerHTML="Please try again! That was not an operator."
  }
  if (num2==='+'){
    var num5=prompt("Please enter your second number")
    if(isNaN(num5)){
      containerEle.innerHTML="Please try again! That was not a number."
    }else{
      var intNum1=parseInt(num1);
      var intNum5=parseInt(num5);
      var sum3= intNum1+intNum5
      containerEle.innerHTML="The answer is "+sum3
    }
  }else{
    containerEle.innerHTML="Please try again! That was not an operator"
  }
  if (num2==='-'){
    var num6=prompt("Please enter your second number")
    if(isNaN(num6)){
      containerEle.innerHTML="Please try again! That was not a number."
    }else{
      var intNum1=parseInt(num1);
      var intNum6=parseInt(num6);
      var sum4= intNum1-intNum6
      container.innerHTML="The answer is "+sum4
    }
  }else{
    containerEle.innerHTML="Please try again! That was not an operator."
  }
}
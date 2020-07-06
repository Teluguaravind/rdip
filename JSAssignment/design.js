 function add(){
    document.write("addition");
    fst=parseInt(myform.fst.value);
    snd=parseInt(myform.snd.value);
    result=fst+snd;
    myform.resut.value=result;
    return result;
  }
  function Subtract(){
    document.write("Subtract");
    fst=parseInt(myform.fst.value);
    snd=parseInt(myform.snd.value);
    result=fst-snd;
    myform.resut.value=result;
    return result;
  }
  function Multiply(){
    document.write("Multiply");
    fst=parseInt(myform.fst.value);
    snd=parseInt(myform.snd.value);
    result=fst*snd;
    myform.resut.value=result;
    return result;
  }
  function Divide(){
    document.write("Divide");
    fst=parseInt(myform.fst.value);
    snd=parseInt(myform.snd.value);
    result=fst/snd;
    myform.resut.value=result;
    return result;
  }
  function Percentage(){
    document.write("Percentage");
    fst=parseInt(myform.fst.value);
    snd=parseInt(myform.snd.value);
    result=fst%snd;
    myform.resut.value=result;
    return result;
  }
  function Squareroot(){
    document.write("Squareroot");
    fst=parseInt(myform.fst.value);
    result=Math.sqrt(fst)
    myform.result.value=result;
    return result;
  }
  function absolute(){
    document.write("absolute");
    fst=parseInt(myform.fst.value);
    result=fst;
    myform.result.value=result;
    return result;
  }


//Name Validation.....//
function validateForm() {
  document.write("NamevalidateForm");
var x=document.forms["myform"]["name"].value;
  for(i=0;i<name.length;i++)
  {
    ch=name.charAt(i);
    if((!ch>='a'&&ch<='z')&&!(ch>='A'&&ch<='Z')&& !(ch==' '))
    {
      alert("Number should not be present");
      return false;
    }
  }
  return true;
}


// Email.... validation//

function validate()
{
  document.write("emailvalidate");
  var name=document.getElementById("myEmail").value;
  var atindex=name.indexOf('@');
  var dotindex=name.lastIndexOf('.');

  if(atindex<=0 || atindex+1 >= dotindex+1 >= name.length-1)
  {
    alert("Invalid Email");
    return false;
  }
  return true;
}

// Number... Validation//

function validate()
{
  document.write("numbervalidate");
  var name=document.getElementById("phone").value;
  if(isNan(name) || name.length!=10)
  {
    alert("number should be Ten digits");
    return false;
  }
  else
  {
    return true;
  }
}
  
//palindrome ..... function//

var x=document.getElementById("form");
x.onsubmit=function(){
  document.write("palindrome");
  var y=document.getElementById("number");
  var z=document.getElementById("palindrome");
  var store=user;
  var rem=0;
  while(store!=0){
   rem=(rem*10)+(store%10);
   store=parseInt(store/10);

  }
  if(user==rev){
    result.innerHTML="This is palindrome";
    return false;
  }
   else{
      result.innerHTML="this is not a palindrome";
       return false;
       }
}


//Anagram.... Function//

function anargam(str1,str2){
  document.write("Anagram");
  if(str1.length !== str2.length) return false;
  var lookup = {}
  for(var i=0; i < str1.length; i++){
    var char = str1[i]
    lookup[char] lookup[char]+=1 : lookup[char] = 1
  }
  for(var i=0;i < str2.length; i++){
    var char = str2[i]
    if(!lookup[char]){
      return false;
    }else{
      lookup[char] -=1
    }
  }
  return true;
}


//Who Will Win....//
function getRandomIntInclusive(min,max) {
  document.write("who will win");
  min = Math.ceil(min);
  max= Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)) + min;
}
let entities ={
  0:"cockroach",
  1:"nuclear bomb",
  2:"Human being"
}
{
let keys=object.keys(entities);
console.log('keys');
let value=object.value(entities);
console.log('value');
let output=object.output(entities);
console.log('keys','value');
return output;
}




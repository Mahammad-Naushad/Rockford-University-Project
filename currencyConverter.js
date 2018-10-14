
function curConvert(m)
{
 switch(m.data)
  {  
    case "USD":
    self.postMessage("1");  
     break;

     case "INR":
     self.postMessage("71.65")
     break;
     
     case "EURO":
     self.postMessage(".86")
     break;

     case "KD":
     self.postMessage("0.30")
     break;

    case "MYR":
     self.postMessage("0.24")
     break;
}  

}

self.addEventListener("message",curConvert,true);

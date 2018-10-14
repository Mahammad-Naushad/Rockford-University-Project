 function drawCanvas()
   {
    var canvas1 = document.getElementById("progc1");
    var canvas2 = document.getElementById("progc2");
    var canvas3 = document.getElementById("progc3");
    var canvas4 = document.getElementById("progc4");
    var canvas5 = document.getElementById("progc5");
    var canvas6 = document.getElementById("progc6");
    if (canvas1.getContext)
    {
      ctx = canvas1.getContext("2d");
      ctx.fillStyle = "rgb(96, 86, 89)";
      ctx.font = "bold 25px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("    Data Structures",10,30); 
      ctx.fillStyle = "rgb(96, 86, 89)";
      ctx.font = "bold 19px sans-serif";
      ctx.fillText("Mode:",10,55); 
       ctx.fillText("Online ",131,55);
      ctx.fillText("Duration:",10,75); 
       ctx.fillText("6 months",131,75);
      ctx.fillText("Instructor:",10,95); 
       ctx.fillText("Prof.Zidane",131,95);
      ctx.fillText("Start Date:",10,115);
       ctx.fillText("Jan 01,2019",131,115);
      ctx.fillText("Last date:",10,135); 
       ctx.fillText("Nov 30,2018",131,135); 
    }

    if (canvas2.getContext)
    {
      ctx = canvas2.getContext("2d");
      ctx.fillStyle = "rgb(96, 86, 89)";
      ctx.font = "bold 25px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("     Graph Theory",10,30); 
      ctx.fillStyle = "rgb(96, 86, 89))";
      ctx.font = "bold 19px sans-serif";
      ctx.fillText("Mode:",10,55); 
       ctx.fillText("Online ",131,55);
      ctx.fillText("Duration:",10,75); 
       ctx.fillText("6 months",131,75);
      ctx.fillText("Instructor:",10,95); 
       ctx.fillText("Prof. Lopetegui",131,95);
      ctx.fillText("Start Date:",10,115);
       ctx.fillText("Feb 1,2018",131,115);
      ctx.fillText("Last date:",10,135); 
       ctx.fillText("Dec 30,2018",131,135); 
    }

    if (canvas3.getContext)
    {
      ctx = canvas3.getContext("2d");
      ctx.fillStyle = "rgb(96, 86, 89)";
      ctx.font = "bold 25px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("      Programming",10,30); 
      ctx.fillStyle = "rgb(96, 86, 89)";
      ctx.font = "bold 19px sans-serif";
      ctx.fillText("Mode:",10,55); 
       ctx.fillText("Online ",131,55);
      ctx.fillText("Duration:",10,75); 
       ctx.fillText("6 months",131,75);
      ctx.fillText("Instructor:",10,95); 
       ctx.fillText("Prof. Ancelotti",131,95);
      ctx.fillText("Start Date:",10,115);
       ctx.fillText("Feb 5,2018",131,115);
      ctx.fillText("Last date:",10,135); 
       ctx.fillText("Dec 25,2018",131,135); 
    }
   }


   function workerMsg(m)
   {
     var s = document.getElementById("cselect").value;
    /* var t=document.getElementById("cselect1").value;
     var u=document.getElementById("cselect2").value;*/
     document.getElementById("showc1").innerHTML = m.data*50+" "+s;
    // document.getElementById("showc2").innerHTML= m.data*50+" "+s;
     //document.getElementById("showc3").innerHTML= m.data*50+" "+s;
   }
  
   function convert()
   { 
    myworker = new Worker("currencyConverter.js");
     myworker.addEventListener("message",workerMsg,true);
   }
     /*
     var s = document.getElementById("cselect").value;
     myworker.postMessage(s);
     var t=document.getElementById("cselect1").value;
     myworker.postMessage(t);
     var t=document.getElementById("cselect2").value;
     myworker.postMessage(u);*/
   

   /*function convert1{
    myworker = new Worker("currencyConverter.js");
    myworker.addEventListener("message",workerMsg,true);
    var t=document.getElementById("cselect1").value;
    myworker.postMessage(t);
   }*/ 
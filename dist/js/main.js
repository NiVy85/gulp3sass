var body=document.querySelector("html");body.addEventListener("click",function(e){var t=e.clientX-20,s=e.clientY-50,o=document.createElement("span");o.style.position="absolute",o.style.fontFamily="Arial, Helvetica, sans-serif",o.style.fontSize="2rem",o.style.fontWeight="bold",o.style.cursor="default",o.style.transform="translate("+t+"px,"+s+"px)";var l=Math.floor(26*Math.random()),a=Math.floor(4*Math.random());o.style.color=["#FF9CEE","#E7FFAC","#C5A3FF","#FFBEBC"][a],o.innerHTML=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"][l],body.appendChild(o)});var le_g=document.getElementsByClassName("fir")[0],le_u=document.getElementsByClassName("sec")[0],le_l=document.getElementsByClassName("thi")[0],le_p=document.getElementsByClassName("fou")[0],ypos=[0,0,0,0],xpos=[-200,-110,-20,60];function Bump(e,t,s,o){var l=setInterval(function(){100<=t[o]?clearInterval(l):(t[o]++,e.style.transform="translate("+s[o]+"px,calc(25vh + "+t[o]+"px)",console.log("howdy"))},10)}window.addEventListener("mouseover",function(e){e.target.classList.contains("fir")&&0==ypos[0]&&Bump(le_g,ypos,xpos,0),e.target.classList.contains("sec")&&0==ypos[1]&&Bump(le_u,ypos,xpos,1),e.target.classList.contains("thi")&&0==ypos[2]&&Bump(le_l,ypos,xpos,2),e.target.classList.contains("fou")&&0==ypos[3]&&Bump(le_p,ypos,xpos,3)});
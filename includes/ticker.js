//Ticcker script start *******

var tWidth='100%';                  // width
var tHeight='150px';                  // height
var tcolour='#ffffff00';               // background colour:
var moStop=true;                     // pause on mouseover (true or false)
var fontfamily = 'regular'; // font for content
var tSpeed=3;                        // scroll speed (1 = slow, 5 = fast)

// enter your ticker content here (use \/ and \' in place of / and ' respectively)
var content='Admission for session 2024-2025 is going on !! Hurry up!! To know more scroll below.';

var cps=-tSpeed;
var aw, mq;
var fsz = parseInt(tHeight) - 140;

function startticker(){
        if (document.getElementById) {
                var tick = '<div style="position:relative;width:'+tWidth+';height:'+tHeight+';overflow:hidden;background-color:'+tcolour+'"';
                        if (moStop) tick += ' onmouseover="cps=0" onmouseout="cps=-tSpeed"'; 
                tick +='><div id="mq" style="position:absolute;left:0px;top:0px;font-family:'+fontfamily+';font-size:'+fsz+'px;white-space:nowrap;"><\/div><\/div>'; 
                document.getElementById('ticker').innerHTML = tick; 
                mq = document.getElementById("mq"); 
                mq.style.left=(100+parseInt(tWidth))+"px"; 
                mq.innerHTML='<span id="tx">'+content+'<\/span>'; 
                aw = document.getElementById("tx").offsetWidth; 
                lefttime=setInterval("scrollticker()",50);
                }
        }           
        function scrollticker(){mq.style.left = (parseInt(mq.style.left)>(-10 - aw)) ?
mq.style.left = parseInt(mq.style.left)+cps+"px": parseInt(tWidth)+10+"px";}
window.onload=startticker;

//ticker script stop
//place a div with id='ticker' in html file to see ticker
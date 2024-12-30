//
//  Copyright 2007 Finnbarr P. Murphy.  All rights reserved.
//
 
function myXMLHTTPRequest()
{
    var request;
 
    try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(ex1) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(ex2){
            request = null;
        }
    }
 
    if (!request && typeof XMLHttpRequest != "undefined") {
        request = new XMLHttpRequest();
    }
 
    return request;
}
 
 
function visitorcount() {
 
   var xmlhttp = myXMLHTTPRequest();
   if (xmlhttp) {
       try {
           xmlhttp.open("GET", 'loadcount.php', true);
       } catch (err) {
           alert ('An error occurred: ' + err.message);
       }
       xmlhttp.onreadystatechange = function (aEvt) {
           if (xmlhttp.readyState == 4) {
               var count     = xmlhttp.responseText;
               var node      = document.getElementById('vcounter');
 
               var frag      = document.createDocumentFragment();
               var preText   = document.createTextNode("You are visitor ");
               var span      = document.createElement('span');
               var spanText  = document.createTextNode(count);
               var postText  = document.createTextNode(" to this site.");
               var cssString = 'font-size:42px; font-family:Georgia; font-weight:bold;';
 
               frag.appendChild(preText);
               span.appendChild(spanText);
               span.setAttribute('style', cssString);
               frag.appendChild(span);
               frag.appendChild(postText);
               node.appendChild(frag);
           }
       }
       xmlhttp.send(null);
   }
}

function visitorcount_promotion() {
 
   var xmlhttp = myXMLHTTPRequest();
   if (xmlhttp) {
       try {
           xmlhttp.open("GET", 'loadcount_promotion.php', true);
       } catch (err) {
           alert ('An error occurred: ' + err.message);
       }
       xmlhttp.onreadystatechange = function (aEvt) {
           if (xmlhttp.readyState == 4) {
               var count     = xmlhttp.responseText;
               var node      = document.getElementById('vcounter');
 
               var frag      = document.createDocumentFragment();
               var preText   = document.createTextNode("You are visitor ");
               var span      = document.createElement('span');
               var spanText  = document.createTextNode(count);
               var postText  = document.createTextNode(" to this site.");
               var cssString = 'font-size:42px; font-family:Georgia; font-weight:bold;';
 
               frag.appendChild(preText);
               span.appendChild(spanText);
               span.setAttribute('style', cssString);
               frag.appendChild(span);
               frag.appendChild(postText);
               node.appendChild(frag);
           }
       }
       xmlhttp.send(null);
   }
}


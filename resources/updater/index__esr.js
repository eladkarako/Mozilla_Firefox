"use strict";

const  FS               = require("fs")
      ,PATH             = require("path")
      ,URL              = require("url")
      ,HTTPS            = require("https")
      ,REGEX_URL        = /\/pub[^\"]+en-GB.win64.zip/igm
    //,TEMPLATE_URL     = "https://download-installer.cdn.mozilla.net/pub/firefox/releases/"
      ,TEMPLATE_URL     = "https://ftp.mozilla.org/pub/firefox/releases/"
      ,NATURAL_COMPARE  = function(a,b){var ax=[],bx=[];if("function"===typeof NATURAL_COMPARE.extraction_rule){a=NATURAL_COMPARE.extraction_rule(a);b=NATURAL_COMPARE.extraction_rule(b)}a.replace(/(\d+)|(\D+)/g,function(_,$1,$2){ax.push([$1||Infinity,$2||""])});b.replace(/(\d+)|(\D+)/g,function(_,$1,$2){bx.push([$1||Infinity,$2||""])});while(ax.length>0&&bx.length>0){var an,bn,nn;an=ax.shift();bn=bx.shift();nn=an[0]-bn[0]||an[1].localeCompare(bn[1]);if(nn)return nn}return ax.length-bx.length}
      ,BEAUTIFY_OBJ     = function(a){
      return JSON.stringify(a, null, 2)
            .replace(/\,[\r\n] /g, "\r\n ,")
            .replace(/ *(\,(\ +))/g,"$2,")
            ;
            }
      ,HEADERS          = {"DNT":             "1"
                          ,"Accept":          "*/*"
                          ,"Referer":         TEMPLATE_URL
                          ,"Connection":      "Close"
                          ,"User-Agent":      "Mozilla/5.0 Chrome"
                          ,"Accept-Language": "en-US,en;q=0.9"
                          ,"Cache-Control":   "no-cache"
                          ,"Pragma":          "no-cache"
                          ,"X-Hello":         "Goodbye"
                          }
      ;

function get(url, onresponse, onheaders){ //supports both headers and request body handling.
  url = URL.parse(url);
  
  const CONF = {protocol: url.protocol               // "http:"
               ,auth:     url.auth                   // "username:password"
               ,hostname: url.hostname               // "www.example.com"
               ,port:     url.port                   // 80
               ,path:     url.path                   // "/"
               ,family:   4                          // IPv4
               ,method:   "GET"
               ,headers:  HEADERS
               ,agent:    undefined                  //use http.globalAgent for this host and port.
               ,timeout:  10 * 1000                  //10 seconds
               }
       ,REQUEST = HTTPS.request(CONF)
       ,CONTENT = []
       ;
  REQUEST.setSocketKeepAlive(false);                                      //make sure to return right away (single connection mode).
  REQUEST.on("response", function(response){
    if("function" === typeof onheaders) onheaders(REQUEST,response,URL,CONTENT.join("")); //response headers.
    if("function" === typeof onresponse){
      response.setEncoding("utf8");
      response.on("data", function(chunk){ CONTENT.push(chunk);                                  } );  
      response.on("end",  function(){      onresponse(CONTENT.join(""), URL, REQUEST, response); } );  //response body.
    }
  });

  REQUEST.end();
}

console.error("getting page...")

get(TEMPLATE_URL, function(content){
  var match_url, match_version;

  console.error("extracting base-URL...")
  match_url = (content.match(/\/pub[^\"\']+[\d\.]+esr[^\"\']*/igm) || [])
              .sort(NATURAL_COMPARE)  //sort by least-to-most recent-version.
              .pop()                  //take most recent version.
              ;
  /*
  /pub/firefox/releases/68.8.0esr/
  */

  console.error("extracting version from base-URL...")
  match_version = (match_url.match(/[\d\.]+esr/) || [])
                  .shift()
                  ;
  /*
  68.8.0esr
  */

  if("" !== match_url && "" !== match_version){
    process.exitCode=0;
    console.error("success.");
    console.log(
      "https://" 
      + ("ftp.mozilla.org/" + match_url + "/win64/en-GB/Firefox%20Setup%20" + match_version + ".exe")
        .replace(/\/\/+/g, "\/")
        .replace(/\%20/g, " ")    //aria2c in CMD can not handle '%'-characters unescaped, and I don't want to escape those just for 'DOS'.
    );
    /*
    https://ftp.mozilla.org/pub/firefox/releases/68.8.0esr/win64/en-GB/Firefox%20Setup%2068.8.0esr.exe
    */
  }
  else{
    process.exitCode=1;
    console.error("error.");
  }

  process.exit();
});


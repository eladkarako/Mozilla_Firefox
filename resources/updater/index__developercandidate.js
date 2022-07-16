"use strict";

const  FS           = require("fs")
      ,PATH         = require("path")
      ,URL          = require("url")
      ,HTTPS        = require("https")
      ,REGEX_URL    = /\/pub[^\"]+en-GB.win64.zip/igm
      ,HEADERS      = {"DNT":             "1"
                      ,"Accept":          "*/*"
                      ,"Referer":         "https://ftp.mozilla.org/pub/devedition/candidates/"
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

console.error("extracting latest build from [https://ftp.mozilla.org/pub/devedition/candidates/] (last link..).")


get("https://ftp.mozilla.org/pub/devedition/candidates/", function(content_first){
  var match_first = content_first.match(/[\d\.a-c]+\-candidates/igm).pop() || "";
  if("" === match_first){
    process.exitCode=222;
    console.error("could not extract the latest version from [https://ftp.mozilla.org/pub/devedition/candidates/], see if page structure has changed.");
    process.exit();
  }
  
  match_first = "https://ftp.mozilla.org/pub/devedition/candidates/" + match_first + "/build1/win64/en-GB/";
  console.error("extracting path to zip from [" + match_first + "] ...");

  get(match_first, function(content_second){
    var match_second = content_second.match(/\/pub\/[^\"]+\.zip/igm).pop() || "";
    if("" === match_second){
      process.exitCode=333;
      console.error("could not extract the latest version from [" + match_first + "], see if page structure has changed.");
      process.exit();
    }
    
    match_second = "https://ftp.mozilla.org" + match_second;

    process.exitCode=0;
    console.error("success.");
    console.log(match_second);
    process.exit();
  });
});

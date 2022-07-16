"use strict";


const  FS             = require("fs")
      ,PATH           = require("path")
      ,ARGS           = process.argv.filter(function(s){return false === /node\.exe/i.test(s) && false === /index\.js/i.test(s);}).map(function(s){s=s.replace(/\\+/gm,"/"); s=PATH.resolve(s); s=s.replace(/\\+/gm,"/"); return s;})
      ,FILE           = ARGS[0]
      ,PARTS          = PATH.parse(FILE)
      ,FILE_OUT       = PATH.resolve(PARTS.dir + "/" + PARTS.name + "_sorted_uniqued" + PARTS.ext).replace(/\\+/gm,"/").replace(/\/+/gm,"/")
      ;


function natural_compare(a, b) {
  a = ("string" === typeof a) ? a : "";
  b = ("string" === typeof b) ? b : "";

  var ax = []
     ,bx = []
     ,result
     ;

  if(true  === /^\s*\/\//.test(a) && false === /^\s*\/\//.test(b)) return -1;
  if(false === /^\s*\/\//.test(a) && true  === /^\s*\/\//.test(b)) return  1;
  //if both starting with '//' handle it just like a standard-natural-sort.

  if("undefined" !== typeof natural_compare.extractor){
    a = natural_compare.extractor(a);
    b = natural_compare.extractor(b);
  }

  a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
  b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });

  while(ax.length > 0 && bx.length > 0){  //simple compare.
    var an, bn, nn;
    an = ax.shift();
    bn = bx.shift();
    nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
    if(0 === nn) continue;
    
    result = nn;
    return result;
  }

 result = ax.length - bx.length;
 return result;
}


var   lines = FS.readFileSync(FILE,{encoding: "utf8"})
                .replace(/[\r\n]+/gm, "\n")
                .split("\n")
                .filter(function(s){return s.length > 1})
     ,tmp
     ;


tmp = new Object(null); //unique
lines.forEach(function(line){ tmp[line] = ""; });
lines = Object.keys(tmp);

natural_compare.extractor = function(line){return line.replace(/^[^\"]+\"([^\"]+)\".*$/m,"$1");};
lines = lines.sort(natural_compare);  //sort, consider just the real content.

lines = lines.join("\r\n") + "\r\n"
FS.writeFileSync(FILE_OUT, lines, {flag:"w",encoding:"utf8"}); //overwrite

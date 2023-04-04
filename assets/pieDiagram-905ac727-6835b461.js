import{am as G,c as B,s as yt,g as gt,v as dt,x as mt,a as _t,b as vt,m as bt,k as kt,l as Y,z as xt,h as tt,i as St}from"./mermaid.core-45f6dacd.js";import{i as wt}from"./init-77b53fdd.js";import{a as At}from"./array-9f3ba611.js";import{c as z}from"./path-53f90ab3.js";import{a as Et}from"./arc-3f9c86aa.js";import"./app-942be56a.js";import"./framework-d14ea875.js";class at extends Map{constructor(s,l=$t){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:l}}),s!=null)for(const[c,p]of s)this.set(c,p)}get(s){return super.get(lt(this,s))}has(s){return super.has(lt(this,s))}set(s,l){return super.set(Dt(this,s),l)}delete(s){return super.delete(Tt(this,s))}}function lt({_intern:t,_key:s},l){const c=s(l);return t.has(c)?t.get(c):l}function Dt({_intern:t,_key:s},l){const c=s(l);return t.has(c)?t.get(c):(t.set(c,l),l)}function Tt({_intern:t,_key:s},l){const c=s(l);return t.has(c)&&(l=t.get(c),t.delete(c)),l}function $t(t){return t!==null&&typeof t=="object"?t.valueOf():t}const ct=Symbol("implicit");function ot(){var t=new at,s=[],l=[],c=ct;function p(u){let h=t.get(u);if(h===void 0){if(c!==ct)return c;t.set(u,h=s.push(u)-1)}return l[h%l.length]}return p.domain=function(u){if(!arguments.length)return s.slice();s=[],t=new at;for(const h of u)t.has(h)||t.set(h,s.push(h)-1);return p},p.range=function(u){return arguments.length?(l=Array.from(u),p):l.slice()},p.unknown=function(u){return arguments.length?(c=u,p):c},p.copy=function(){return ot(s,l).unknown(c)},wt.apply(p,arguments),p}function It(t,s){return s<t?-1:s>t?1:s>=t?0:NaN}function Vt(t){return t}function Pt(){var t=Vt,s=It,l=null,c=z(0),p=z(G),u=z(0);function h(o){var y,g=(o=At(o)).length,A,M,b=0,T=new Array(g),S=new Array(g),w=+c.apply(this,arguments),$=Math.min(G,Math.max(-G,p.apply(this,arguments)-w)),I,k=Math.min(Math.abs($)/g,u.apply(this,arguments)),E=k*($<0?-1:1),D;for(y=0;y<g;++y)(D=S[T[y]=y]=+t(o[y],y,o))>0&&(b+=D);for(s!=null?T.sort(function(V,_){return s(S[V],S[_])}):l!=null&&T.sort(function(V,_){return l(o[V],o[_])}),y=0,M=b?($-g*E)/b:0;y<g;++y,w=I)A=T[y],D=S[A],I=w+(D>0?D*M:0)+E,S[A]={data:o[A],index:y,value:D,startAngle:w,endAngle:I,padAngle:k};return S}return h.value=function(o){return arguments.length?(t=typeof o=="function"?o:z(+o),h):t},h.sortValues=function(o){return arguments.length?(s=o,l=null,h):s},h.sort=function(o){return arguments.length?(l=o,s=null,h):l},h.startAngle=function(o){return arguments.length?(c=typeof o=="function"?o:z(+o),h):c},h.endAngle=function(o){return arguments.length?(p=typeof o=="function"?o:z(+o),h):p},h.padAngle=function(o){return arguments.length?(u=typeof o=="function"?o:z(+o),h):u},h}var et=function(){var t=function(_,i,e,n){for(e=e||{},n=_.length;n--;e[_[n]]=i);return e},s=[1,4],l=[1,5],c=[1,6],p=[1,7],u=[1,9],h=[1,11,13,15,17,19,20,26,27,28,29],o=[2,5],y=[1,6,11,13,15,17,19,20,26,27,28,29],g=[26,27,28],A=[2,8],M=[1,18],b=[1,19],T=[1,20],S=[1,21],w=[1,22],$=[1,23],I=[1,28],k=[6,26,27,28,29],E={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(i,e,n,a,f,r,F){var m=r.length-1;switch(f){case 4:a.setShowData(!0);break;case 7:this.$=r[m-1];break;case 9:a.addSection(r[m-1],a.cleanupValue(r[m]));break;case 10:this.$=r[m].trim(),a.setDiagramTitle(this.$);break;case 11:this.$=r[m].trim(),a.setAccTitle(this.$);break;case 12:case 13:this.$=r[m].trim(),a.setAccDescription(this.$);break;case 14:a.addSection(r[m].substr(8)),this.$=r[m].substr(8);break;case 21:a.parseDirective("%%{","open_directive");break;case 22:a.parseDirective(r[m],"type_directive");break;case 23:r[m]=r[m].trim().replace(/'/g,'"'),a.parseDirective(r[m],"arg_directive");break;case 24:a.parseDirective("}%%","close_directive","pie");break}},table:[{3:1,4:2,5:3,6:s,21:8,26:l,27:c,28:p,29:u},{1:[3]},{3:10,4:2,5:3,6:s,21:8,26:l,27:c,28:p,29:u},{3:11,4:2,5:3,6:s,21:8,26:l,27:c,28:p,29:u},t(h,o,{7:12,8:[1,13]}),t(y,[2,18]),t(y,[2,19]),t(y,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},t(g,A,{21:8,9:16,10:17,5:24,1:[2,3],11:M,13:b,15:T,17:S,19:w,20:$,29:u}),t(h,o,{7:25}),{23:26,24:[1,27],32:I},t([24,32],[2,22]),t(h,[2,6]),{4:29,26:l,27:c,28:p},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},t(g,[2,13]),t(g,[2,14]),t(g,[2,15]),t(g,A,{21:8,9:16,10:17,5:24,1:[2,4],11:M,13:b,15:T,17:S,19:w,20:$,29:u}),t(k,[2,16]),{25:34,31:[1,35]},t(k,[2,24]),t(h,[2,7]),t(g,[2,9]),t(g,[2,10]),t(g,[2,11]),t(g,[2,12]),{23:36,32:I},{32:[2,23]},t(k,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(i,e){if(e.recoverable)this.trace(i);else{var n=new Error(i);throw n.hash=e,n}},parse:function(i){var e=this,n=[0],a=[],f=[null],r=[],F=this.table,m="",U=0,nt=0,ht=2,st=1,ut=r.slice.call(arguments,1),d=Object.create(this.lexer),W={yy:{}};for(var K in this.yy)Object.prototype.hasOwnProperty.call(this.yy,K)&&(W.yy[K]=this.yy[K]);d.setInput(i,W.yy),W.yy.lexer=d,W.yy.parser=this,typeof d.yylloc>"u"&&(d.yylloc={});var Q=d.yylloc;r.push(Q);var ft=d.options&&d.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function pt(){var L;return L=a.pop()||d.lex()||st,typeof L!="number"&&(L instanceof Array&&(a=L,L=a.pop()),L=e.symbols_[L]||L),L}for(var v,j,x,X,C={},q,P,rt,H;;){if(j=n[n.length-1],this.defaultActions[j]?x=this.defaultActions[j]:((v===null||typeof v>"u")&&(v=pt()),x=F[j]&&F[j][v]),typeof x>"u"||!x.length||!x[0]){var Z="";H=[];for(q in F[j])this.terminals_[q]&&q>ht&&H.push("'"+this.terminals_[q]+"'");d.showPosition?Z="Parse error on line "+(U+1)+`:
`+d.showPosition()+`
Expecting `+H.join(", ")+", got '"+(this.terminals_[v]||v)+"'":Z="Parse error on line "+(U+1)+": Unexpected "+(v==st?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(Z,{text:d.match,token:this.terminals_[v]||v,line:d.yylineno,loc:Q,expected:H})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+j+", token: "+v);switch(x[0]){case 1:n.push(v),f.push(d.yytext),r.push(d.yylloc),n.push(x[1]),v=null,nt=d.yyleng,m=d.yytext,U=d.yylineno,Q=d.yylloc;break;case 2:if(P=this.productions_[x[1]][1],C.$=f[f.length-P],C._$={first_line:r[r.length-(P||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(P||1)].first_column,last_column:r[r.length-1].last_column},ft&&(C._$.range=[r[r.length-(P||1)].range[0],r[r.length-1].range[1]]),X=this.performAction.apply(C,[m,nt,U,W.yy,x[1],f,r].concat(ut)),typeof X<"u")return X;P&&(n=n.slice(0,-1*P*2),f=f.slice(0,-1*P),r=r.slice(0,-1*P)),n.push(this.productions_[x[1]][0]),f.push(C.$),r.push(C._$),rt=F[n[n.length-2]][n[n.length-1]],n.push(rt);break;case 3:return!0}}return!0}},D=function(){var _={EOF:1,parseError:function(e,n){if(this.yy.parser)this.yy.parser.parseError(e,n);else throw new Error(e)},setInput:function(i,e){return this.yy=e||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var e=i.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var e=i.length,n=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===a.length?this.yylloc.first_column:0)+a[a.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),e=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+e+"^"},test_match:function(i,e){var n,a,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),a=i[0].match(/(?:\r\n?|\n).*/g),a&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in f)this[r]=f[r];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,e,n,a;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),r=0;r<f.length;r++)if(n=this._input.match(this.rules[f[r]]),n&&(!e||n[0].length>e[0].length)){if(e=n,a=r,this.options.backtrack_lexer){if(i=this.test_match(n,f[r]),i!==!1)return i;if(this._backtrack){e=!1;continue}else return!1}else if(!this.options.flex)break}return e?(i=this.test_match(e,f[a]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,n,a,f){switch(a){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:break;case 6:break;case 7:return 26;case 8:break;case 9:break;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 20:this.popState();break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}};return _}();E.lexer=D;function V(){this.yy={}}return V.prototype=E,E.Parser=V,new V}();et.parser=et;const Lt=et;let J={},it=!1;const Ot=function(t,s,l){bt.parseDirective(this,t,s,l)},Nt=function(t,s){t=kt.sanitizeText(t,B()),J[t]===void 0&&(J[t]=s,Y.debug("Added new section :",t))},Mt=()=>J,Ft=function(t){it=t},Wt=function(){return it},jt=function(t){return t.substring(0,1)===":"&&(t=t.substring(1).trim()),Number(t.trim())},zt=function(){J={},it=!1,xt()},Ct={parseDirective:Ot,getConfig:()=>B().pie,addSection:Nt,getSections:Mt,cleanupValue:jt,clear:zt,setAccTitle:yt,getAccTitle:gt,setDiagramTitle:dt,getDiagramTitle:mt,setShowData:Ft,getShowData:Wt,getAccDescription:_t,setAccDescription:vt},Rt=t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,Yt=Rt;let O=B(),N;const R=450,Bt=(t,s,l,c)=>{try{O=B(),Y.debug(`Rendering info diagram
`+t);const k=B().securityLevel;let E;k==="sandbox"&&(E=tt("#i"+s));const D=k==="sandbox"?tt(E.nodes()[0].contentDocument.body):tt("body"),V=k==="sandbox"?E.nodes()[0].contentDocument:document;c.db.clear(),c.parser.parse(t),Y.debug("Parsed info diagram");const _=V.getElementById(s);N=_.parentElement.offsetWidth,N===void 0&&(N=1200),O.useWidth!==void 0&&(N=O.useWidth),O.pie.useWidth!==void 0&&(N=O.pie.useWidth);const i=D.select("#"+s);St(i,R,N,O.pie.useMaxWidth),_.setAttribute("viewBox","0 0 "+N+" "+R);var p=40,u=18,h=4,o=Math.min(N,R)/2-p,y=i.append("g").attr("transform","translate("+N/2+","+R/2+")"),g=c.db.getSections(),A=0;Object.keys(g).forEach(function(n){A+=g[n]});const e=O.themeVariables;var M=[e.pie1,e.pie2,e.pie3,e.pie4,e.pie5,e.pie6,e.pie7,e.pie8,e.pie9,e.pie10,e.pie11,e.pie12],b=ot().range(M),T=Object.entries(g).map(function(n,a){return{order:a,name:n[0],value:n[1]}}),S=Pt().value(function(n){return n.value}).sort(function(n,a){return n.order-a.order}),w=S(T),$=Et().innerRadius(0).outerRadius(o);y.selectAll("mySlices").data(w).enter().append("path").attr("d",$).attr("fill",function(n){return b(n.data.name)}).attr("class","pieCircle"),y.selectAll("mySlices").data(w).enter().append("text").text(function(n){return(n.data.value/A*100).toFixed(0)+"%"}).attr("transform",function(n){return"translate("+$.centroid(n)+")"}).style("text-anchor","middle").attr("class","slice"),y.append("text").text(c.db.getDiagramTitle()).attr("x",0).attr("y",-(R-50)/2).attr("class","pieTitleText");var I=y.selectAll(".legend").data(b.domain()).enter().append("g").attr("class","legend").attr("transform",function(n,a){const f=u+h,r=f*b.domain().length/2,F=12*u,m=a*f-r;return"translate("+F+","+m+")"});I.append("rect").attr("width",u).attr("height",u).style("fill",b).style("stroke",b),I.data(w).append("text").attr("x",u+h).attr("y",u-h).text(function(n){return c.db.getShowData()||O.showData||O.pie.showData?n.data.name+" ["+n.data.value+"]":n.data.name})}catch(k){Y.error("Error while rendering info diagram"),Y.error(k)}},Ut={draw:Bt},Gt={parser:Lt,db:Ct,renderer:Ut,styles:Yt};export{Gt as diagram};

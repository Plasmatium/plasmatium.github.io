webpackJsonp([1],{bsQ0:function(t,n){},x35b:function(t,n,r){"use strict";function i(){for(var t=0,n=0;0===t;)t=Math.random();for(;0===n;)n=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*n)}function o(t,n){var r=n.x0,i=n.y0,o=n.x1,e=n.y1,a=n.colorInfoArr,s=t.createLinearGradient(r,i,o,e);return a.forEach(function(t,n){var r=t.offset,i=t.color;s.addColorStop(r,i)}),s}function e(t){var n=t.windowH,r=t.windowW;return{x:K()*r,y:K()*n}}function a(){var t=10*i();return console.log(t),function(n){return[Math.floor(.5*(X(t+n+0*$/3)+1)*255),Math.floor(.5*(X(t+n+2*$/3)+1)*255),Math.floor(.5*(X(t+n-2*$/3)+1)*255),.382]}}function s(){function t(t){i.next(t)}var n=document.getElementById("fps-present");n||(n=document.createElement("canvas"),n.setAttribute("width","80"),n.setAttribute("height","30"),n.id="fps-present",n.style.position="fixed",n.style.top="0",document.body.appendChild(n));var r=n.getContext("2d");if(!r)throw Error("fps present mask canvas not found");var i=new J.Subject;i.timeout(5e3).pairwise().map(function(t){var n=H()(t,2),r=n[0];return n[1]-r}).bufferCount(100,1).scan(function(t,n,r){if(r%33==0){t=(1e5/n.reduce(function(t,n){return t+n},0)).toFixed(1)}return t},"0").subscribe({next:function(t){r.clearRect(0,0,80,30),r.fillStyle="#444",r.font="16px helvetica, sans",r.fillText("FPS: "+t,10,20)},error:function(t){i.unsubscribe()}});return i.next(+new Date),t}function c(t,n){var r=t.pos,i=t.dir,o=n.top,e=n.bottom,a=n.left,s=n.right,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{dcx:1,dcy:1};r.x<a?(r.x=a,i.vx*=-c.dcx):r.x>s&&(r.x=s,i.vx*=-c.dcx),r.y<o?(r.y=o,i.vy*=-c.dcy):r.y>e&&(r.y=e,i.vy*=-c.dcy)}function h(t,n){var r=(t.pos,t.dir),i=(n.windowW,n.windowH,arguments.length>2&&void 0!==arguments[2]?arguments[2]:1);r.vy+=i}function u(t){return Math.abs(t)>100?1:Math.abs(t)<.5?0:.01*t}function f(t){var n=t.pos,r=t.dir,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n.x+=r.vx,n.y+=r.vy,i&&(r.vx-=u(r.vx),r.vy-=u(r.vy))}function d(t,n){var r=j()(t.vx);t.vx=Math.abs(t.vx)-n<0?0:t.vx-r*n;j()(t.vy);t.vy=Math.abs(t.vy)-n<0?0:t.vy-r*n}function v(t,n,r){var i=t.pos,o=t.dir,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.1;if(!(i.y<r)){d(o,n*e)}}function l(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1;t.x+=(n.x-t.x)*r,t.y+=(n.y-t.y)*r}function w(){return new et("#eaeaea")}function g(){var t=new st,n=t.ctx,r=[{offset:1/6,color:"#f00"},{offset:2/6,color:"#ff0"},{offset:.5,color:"#0f0"},{offset:4/6,color:"#0ff"},{offset:5/6,color:"#00f"},{offset:1,color:"#f0f"}],i={x0:250,y0:150,x1:280,y1:200,colorInfoArr:r},e=o(t.ctx,i);n.fillStyle=e,n.font="60px helvetica,sans",n.fillText("彩虹",200,200);var a=function(n){return n.reduce(function(t,n){return t+n.toString(16)},"#")!==t.bgColor&&Math.random()<.3},s=new tt(n.getImageData(200,150,200,60));t.clrscr(),s.refine(a);for(var c=0;c<s.data.length;c+=2){var h=s.data,u=[h[c],h[c+1]],f=u[0],d=u[1],v=s.getColor({x:f,y:d}),l=new at({x:50*Math.random()+t.windowW/2,y:20*-Math.random()+t.windowH},{x:2*f+150,y:2*d+150},v,t);t.dots.push(l)}return window.onresize=function(n){var r=n.target;t.canvas.height=r.innerHeight,t.canvas.width=r.innerWidth},t}function y(){var t=new ut;return window.onresize=function(n){var r=n.target;t.canvas.height=r.innerHeight,t.canvas.width=r.innerWidth},t}function p(t,n,r){var i=t.createShader(n);if(t.shaderSource(i,r),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){var o=String(t.getShaderInfoLog(i));throw t.deleteShader(i),Error(o)}return i}function x(t,n,r){var i=t.createProgram(),o=p(t,t.VERTEX_SHADER,n);t.attachShader(i,o);var e=p(t,t.FRAGMENT_SHADER,r);if(t.attachShader(i,e),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS)){var a=String(t.getProgramInfoLog(i));throw t.deleteProgram(i),Error(a)}return i}function m(t,n,r,i,o){t.bindBuffer(n,r),t.bufferData(n,i,o)}function b(t,n,r,i,o,e){var a=void 0;if("string"==typeof i){if(!e)throw Error("webgl program should be provided if attr is string");a=t.getAttribLocation(e,i)}else a=i;var s=o.size,c=o.type,h=o.normalize,u=o.stride,f=o.offset;t.bindBuffer(n,r),t.vertexAttribPointer(a,s,c,h,u,f),t.enableVertexAttribArray(a)}function k(){var t=new vt;return window.onresize=function(n){var r=n.target;t.canvas.height=r.innerHeight,t.canvas.width=r.innerWidth},t}function M(t){var n=!0,r=!1,i=void 0;try{for(var o,e=yt()(t);!(n=(o=e.next()).done);n=!0){if(o.value)return!0}}catch(t){r=!0,i=t}finally{try{!n&&e.return&&e.return()}finally{if(r)throw i}}return!1}function _(){var t=new xt,n=t.windowH,r=[{offset:0,color:"#eacdae"},{offset:.9,color:"#fefeef"},{offset:.909,color:"#777"},{offset:.91,color:"#eacdae"},{offset:1,color:"#eacdae"}],i={x0:0,y0:0,x1:0,y1:n,colorInfoArr:r};return t.bgColor=o(t.ctx,i),t.addData(),window.onresize=function(n){var r=n.target;t.canvas.height=r.innerHeight,t.canvas.width=r.innerWidth},t}function S(t){return P.a.extend({name:"vue-canvas",computed:{cv:function(){return t()}},mounted:function(){this.cv.run()},destroyed:function(){this.cv.destory()},render:function(){var t=this,n=arguments[0],r=window.innerHeight,i=window.innerWidth,o={position:"fixed",top:0,left:0,"z-index":-1};return n("canvas",{on:{click:function(n){return t.cv.onClick(n)}},attrs:{height:r,width:i},style:o},["canvas is not support"])}})}function E(t){r("bsQ0")}Object.defineProperty(n,"__esModule",{value:!0});var A={};r.d(A,"colorfulDonut",function(){return _}),r.d(A,"glslTest",function(){return k}),r.d(A,"needleDot",function(){return y}),r.d(A,"textParticle",function(){return g});var P=r("7+uW"),C=r("d7EF"),H=r.n(C),W=r("W3Iv"),D=r.n(W),T=r("/ocq"),R=r("Zx67"),I=r.n(R),F=r("zwoO"),z=r.n(F),B=r("Pf15"),L=r.n(B),U=r("Zrlr"),O=r.n(U),N=r("wxAW"),q=r.n(N),G=r("woOf"),Q=r.n(G),V=r("Gu7T"),Y=r.n(V),Z=r("2QDH"),j=r.n(Z),J=r("EEr4"),K=(r("iIfT"),r("+pb+"),r("+KN+"),r("zJQZ"),r("cDAr"),Math.floor,Math.random),X=Math.sin,$=(Math.cos,Math.tan,Math.PI),tt=function(){function t(n){O()(this,t),this.srcData=n}return q()(t,[{key:"refine",value:function(t){for(var n=this.srcData,r=n.width,i=n.height,o=new Uint16Array(r*i*2),e=0,a=0;a<r*i;a++){var s=this.srcData.data,c=4*a;if(t([s[c],s[c+1],s[c+2],s[c+3]])){var h=a%r,u=a/r;o[e]=h,o[e+1]=u,e+=2}}this.data=o.subarray(0,2*e)}},{key:"getColor",value:function(t){var n=t.x,r=t.y,i=4*(r*this.width+n),o=this.srcData.data;return[o[i],o[i+1],o[i+2],o[i+3]]}},{key:"width",get:function(){return this.srcData.width}},{key:"height",get:function(){return this.srcData.height}}]),t}(),nt=Math.random,rt=Math.sin,it=Math.PI,ot=function(){function t(n){var r=this;O()(this,t),this.bgColor=n,this.isRunning=!1;var i=document.getElementsByTagName("canvas")[0];if(!i)throw Error("canvas not found.");this.canvas=i;var o=i.getContext("2d");if(!o)throw Error("context not found.");this.ctx=o,this.renderMask=[s()],window.onresize=function(t){var n=t.target;r.canvas.height=n.innerHeight,r.canvas.width=n.innerWidth}}return q()(t,[{key:"clrscr",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,n=t.bgColor,r=(t.canvas,t.ctx),i=t.windowH,o=t.windowW;t.data;r.fillStyle=n,r.fillRect(0,0,o,i)}},{key:"render",value:function(t){this.clrscr(),this.renderMain(this),this.renderMask.forEach(function(n){n(t)}),this.isRunning&&window.requestAnimationFrame(this.render.bind(this))}},{key:"run",value:function(){this.isRunning=!0,window.requestAnimationFrame(this.render.bind(this))}},{key:"destory",value:function(){this.isRunning=!1}},{key:"onClick",value:function(t){}},{key:"windowH",get:function(){return this.canvas.height}},{key:"windowW",get:function(){return this.canvas.width}}]),t}(),et=function(t){function n(t){O()(this,n);var r=z()(this,(n.__proto__||I()(n)).call(this,t));r.bgColor=t,r.step=0,r.waveStep=0,r.ribbonMoving=!1;var i=r.windowH,o=2*nt(),e=[1,2,3,4,5].map(function(t){return.618*Math.pow(t,1.618)});return r.curves=[1].concat(Y()(e)).map(function(t){var n=void 0;n=1===t?.1*i/t:.2*i/t;var r=function(r){return n*rt(t*(2*it*r*4e-4+o))};return Q()(r,{color:a()}),r}),setTimeout(function(){r.ribbonMoving=!0},1500),r}return L()(n,t),q()(n,[{key:"clrscr",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,n=t.bgColor,r=(t.canvas,t.ctx),i=t.windowH,o=t.windowW;t.data;r.fillStyle=n,r.fillRect(0,0,o,i)}},{key:"renderMain",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,r=(n.canvas,n.ctx),i=n.windowH,o=n.windowW,e=(n.data,this.curves[0]);if(this.curves.forEach(function(n,a){var s=void 0,c=void 0,h=void 0,u=void 0,f=void 0;a%2==0?(s=-1e4,c=1e4,h=0,u=o,f=function(t){return t+1}):(s=1e4,c=-1e4,h=o,u=0,f=function(t){return t-1}),a%2==0&&(r.beginPath(),r.moveTo(s,i/2));for(var d=h;d!=u;d=f(d))r.lineTo(d,e(d+d*t.waveStep)+n(d-d*t.waveStep)+.2*i);if(r.lineTo(c,i/2),a%2!=0){var v=n.color(t.step);r.fillStyle="rgba("+v+")",r.lineTo(c,i/2),r.closePath(),r.fill()}}),this.ribbonMoving){this.step+=.001;var a=18*this.step;this.waveStep+=Math.pow(Math.E,3*-a)*Math.pow(.6*a,2)}}}]),n}(ot),at=function(){function t(n,r,i,o){O()(this,t),this.pos=n,this.destPos=r,this.color=i,this.cv=o,this.free=!1}return q()(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.cv,n=t.ctx,r=this.pos,i=r.x,o=r.y;n.fillStyle="rgba("+this.color+")",n.fillRect(i,o,3,3)}},{key:"move",value:function(){if(this.free){l(this.pos,this.destPos,.05)}}}]),t}(),st=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#feefed";O()(this,n);var r=z()(this,(n.__proto__||I()(n)).call(this,t));return r.bgColor=t,r.dots=[],r}return L()(n,t),q()(n,[{key:"renderMain",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;t.canvas,t.ctx,t.windowH,t.windowW,t.data;this.dots&&this.dots.forEach(function(t){t.draw(),t.move()})}},{key:"onClick",value:function(t){this.dots.forEach(function(t){setTimeout(function(){return t.free=!t.free},6e4*Math.random())})}}]),n}(ot),ct=function(){return Math.random()},ht=function(){function t(n,r,i,o){O()(this,t),this.pos=n,this.r=r,this.color=i,this.cv=o,this.dir={vx:2*ct()-1,vy:2*ct()-1}}return q()(t,[{key:"mutate",value:function(){f(this);var t=this.cv,n=t.windowW;c(this,{top:0,bottom:t.windowH,left:0,right:n})}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.cv,n=t.ctx,r=(t.canvas,this.pos),i=r.x,o=r.y,e=this.r;n.fillStyle="rgba("+this.color+")",n.beginPath(),n.arc(i,o,e,0,2*Math.PI),n.closePath(),n.fill()}}]),t}(),ut=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#eaeaea";O()(this,n);var r=z()(this,(n.__proto__||I()(n)).call(this,t));return r.createDots(),r}return L()(n,t),q()(n,[{key:"createDots",value:function(){for(var t=Math.floor(150*this.windowH*this.windowW/2073600),n=this.data=new Array(t),r=0;r<t;r++){var i=e(this);n[r]=new ht(i,1.62,[172,189,206,.62],this)}}},{key:"renderMain",value:function(t){var n=this,r=(t.canvas,t.ctx),i=t.windowH,o=t.windowW,e=(t.data,22*Math.sqrt(.618*o*i/Math.PI));r.lineWidth=.3,this.data.forEach(function(t,i){n.data.slice(i+1).forEach(function(n){var i=Math.pow(t.pos.x-n.pos.x,2)+Math.pow(t.pos.y-n.pos.y,2),o=1-i/e;o<0||(r.beginPath(),r.moveTo(t.pos.x,t.pos.y),r.lineTo(n.pos.x,n.pos.y),r.closePath(),r.strokeStyle="rgba(50, 128, 255, "+o+")",r.stroke())}),t.draw(),t.mutate()})}}]),n}(ot),ft=function(){function t(){O()(this,t),this.programs={};var n=document.getElementsByTagName("canvas")[0];if(!n)throw Error("canvas not found");var r=n.getContext("webgl");if(!r)throw Error("get webgl context failed");this.canvas=n,this.gl=r}return q()(t,[{key:"run",value:function(){}},{key:"destory",value:function(){}},{key:"onClick",value:function(t){}},{key:"windowW",get:function(){return this.canvas.width}},{key:"windowH",get:function(){return this.canvas.height}}]),t}(),dt=Math.random,vt=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0,0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;O()(this,n);var o=z()(this,(n.__proto__||I()(n)).call(this));o.bgColor=t,o.dotsData=[];for(var e=o.windowW,a=o.windowH,s=(o.gl,0);s<r;s++)!function(t){var n,r=80*i()+e/2,s=80*i()+a/2,c=[1,2,3],h=[dt(),dt(),dt(),1],u=c.reduce(function(t,n){return[].concat(Y()(t),[5*dt()+r,5*dt()+s],h)},[]);(n=o.dotsData).push.apply(n,Y()(u))}();return o}return L()(n,t),q()(n,[{key:"run",value:function(){var t=this.gl,n=this.bgColor,r=this.windowW,i=this.windowH,o=H()(n,4),e=o[0],a=o[1],s=o[2],c=o[3],h=x(t,"\nuniform vec2 u_resolution;\nattribute vec2 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\nvoid main() {\n  vec2 clip = a_position/u_resolution*2.0 - 1.0;\n  v_color = a_color;\n  gl_Position = vec4(clip, 0, 1);\n}\n","\nprecision mediump float;\nvarying vec4 v_color;\nvoid main() {\n  gl_FragColor = v_color;\n}\n"),u=t.getUniformLocation(h,"u_resolution"),f=t.createBuffer(),d={size:2,type:t.FLOAT,normalize:!1,stride:24,offset:0},v=new Float32Array(this.dotsData);m(t,t.ARRAY_BUFFER,f,v,t.STATIC_DRAW),b(t,t.ARRAY_BUFFER,f,"a_position",d,h),d.offset=8,d.size=4,b(t,t.ARRAY_BUFFER,f,"a_color",d,h),t.viewport(0,0,r,i),t.useProgram(h),t.uniform2f(u,r,i),t.clearColor(e,a,s,c),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,v.length/6)}}]),n}(ft),lt=r("lHA8"),wt=r.n(lt),gt=r("BO1k"),yt=r.n(gt),pt=function(){function t(n,r,i,o,e,a){O()(this,t),this.pos=n,this.dir=r,this.r=i,this.thickness=o,this.color=e,this.cv=a,this.isSlow=!1,this.isDead=!1}return q()(t,[{key:"mutate",value:function(){this.pos,this.dir;h(this,this.cv),f(this,!0);var t=this.cv,n=t.windowW,r=t.windowH,i=void 0;i=this.isSlow?r:.9*r,c(this,{top:-1/0,bottom:i,left:0,right:n}),v(this,.05*this.r,i),this.fade()}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.cv,n=t.ctx,r=(t.canvas,this.pos),i=r.x,o=r.y,e=this.r,a=this.thickness;n.strokeStyle="rgba("+this.color+")",n.lineWidth=a,n.beginPath(),n.arc(i,o,e,0,2*Math.PI),n.closePath(),n.stroke(),this.mutate()}},{key:"markIfSlow",value:function(){var t=this.dir,n=t.vx,r=t.vy;Math.abs(n)<.5&&Math.abs(r)<.5&&(this.isSlow=!0)}},{key:"fade",value:function(){if(!this.isSlow)return void this.markIfSlow();var t=H()(this.color,4),n=t[0],r=t[1],i=t[2],o=t[3];o<1/255&&(this.isDead=!0),this.color=[n,r,i,.9*o]}}]),t}(),xt=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#eacdae";O()(this,n);var r=z()(this,(n.__proto__||I()(n)).call(this,t));return r.bgColor=t,r.data=new wt.a,r}return L()(n,t),q()(n,[{key:"renderMain",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;n.canvas,n.ctx,n.windowH,n.windowW,n.data;this.data.forEach(function(n){if(!M(n))return void t.data.delete(n);n.forEach(function(t,r){if(t)return t.isDead?void delete n[r]:void t.draw()})})}},{key:"addData",value:function(t,n){for(var r=this.windowH,o=this.windowW,e=r*o/2073600*30,a=[],s=0;s<e;s++){for(var c=[255,255,255].map(function(t){return Math.floor(t*Math.random())}),h=0;h<5;)h=Math.abs(5*i()+10);a.push(new pt({x:t||o/2,y:n||.618*r},{vx:10*i(),vy:-Math.abs(25*i())},h,Math.abs(3.1*i()+3.1),[].concat(Y()(c),[1]),this))}this.data.add(a)}},{key:"onClick",value:function(t){var n=t.x,r=t.y;this.addData(n,r)}}]),n}(ot),mt=[],bt=D()(A).map(function(t){var n=H()(t,2),r=n[0],i=n[1],o="/"+r,e=S(i);return mt.push(r),{path:o,component:e}});bt.push({path:"/",component:S(w)});var kt=new T.a({routes:bt,mode:"history"});P.a.use(T.a);var Mt=P.a.extend({name:"app",data:function(){return{links:mt}},router:kt}),_t=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"menu-container"},t._l(t.links,function(n){return r("router-link",{key:n,staticClass:"script-link",attrs:{to:n}},[r("span",[t._v(t._s(n))])])})),t._v(" "),r("router-view")],1)},St=[],Et={render:_t,staticRenderFns:St},At=Et,Pt=r("VU/8"),Ct=E,Ht=Pt(Mt,At,!1,Ct,null,null),Wt=Ht.exports;P.a.config.productionTip=!1,new P.a({el:"#app",template:"<App/>",components:{App:Wt}})}},["x35b"]);
//# sourceMappingURL=app.38d6fa949652af8b3fc9.js.map
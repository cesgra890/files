
(function($,Edge,compId){var _=null,y=true,n=false,x2='3.0.0.322',e33='${_continents-animation}',b='block',e37='${_sphere}',x43='flatmap-two',a='Base State',x9='hidden',x26='197px',x16='sphere',dt='Default Timeline',x3='horizontal',i='none',x4='rgba(192,192,192,1)',x45='flatmap-back',x47='flatmap-front',lf='left',x32='reflections',bg='background-color',x27='reflections-2nd',x15='auto',e50='${_flatmap-back}',e12='${_bg}',ov='overflow',e8='${_Stage}',x40='1000px',x6='stage',c='color',x31='continents',g='image',x7='rgba(55,106,154,1.00)',x22='30px',x30='0',x46='-220px',x25='2px',m='rect',x19='0px',h='height',x14='210px',x41='410px',x20='186px',x48='inner-shadow',p='px',o='opacity',e51='${_inner-shadow}',e52='${_flatmap-front}',e44='${_worldmap-flat}',x13='-5px',e34='${symbolSelector}',e10='${_globe}',x17='rgba(0,0,0,0)',x29='continents-animation',x39='worldmap-flat',s='style',e36='${_reflections}',x1='3.0.0',d='display',w='width',e35='${_outer-shadow}',x21='200px',ql='linear',x23='outer-shadow',x11='visible',tp='top',xc='rgba(0,0,0,1)',e38='${_reflections-2nd}';var im='images/';var g18='sphere.svg',g49='inner-shadow.svg',g42='worldmap-flat-5-continents.svgz',g28='reflections.svg',g24='outer-shadow.svg';var s5="globe";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'bg',t:m,r:['0px','1px','800px','400px','auto','auto'],f:[x4,[50,50,true,'farthest-corner',[['rgba(55,106,154,1.00)',0],['rgba(25,31,37,1.00)',100]]]],s:[0,xc,i]},{id:'globe',t:m,r:['300px','100px','auto','auto','auto','auto'],userClass:s5}],sI:[{id:'globe',sN:'globe',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"globe":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,v:b,r:[x13,x13,x14,x14,x15,x15],id:x16,f:[x17,im+g18,x19,x19]},{t:g,r:[x19,x20,x21,x22,x15,x15],id:x23,o:1,v:b,f:[x17,im+g24,x19,x19]},{t:g,r:[x25,x19,x26,x26,x15,x15],filter:[0,0,1,1,0,0,0,0,x17,0,0,0],id:x27,o:0.5,v:b,f:[x17,im+g28,x19,x19]},{id:x29,t:m,r:[x30,x19,x15,x15,x15,x15],uc:x31},{t:g,r:[x25,x19,x26,x26,x15,x15],filter:[0,0,1,1,0,0,0,0,x17,0,0,0],id:x32,o:1,v:b,f:[x17,im+g28,x19,x19]}],sI:[{id:'continents-animation',sN:'continents-animation',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"flatmap-two":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x39,t:g,r:[x19,x19,x40,x41,x15,x15],f:[x17,im+g42,x19,x19]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"continents-animation":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,id:x45,o:1,r:[x19,x46,x15,x15,x15,x15],v:b},{v:b,t:m,id:x47,r:[x19,x19,x15,x15,x15,x15]},{t:g,v:b,r:[x13,x13,x14,x14,x15,x15],id:x48,f:[x17,im+g49,x19,x19]}],sI:[{id:'flatmap-front',sN:'flatmap-two',a:{}},{id:'flatmap-back',sN:'flatmap-two',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}}};var S1=symbols[x6];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e8).P(bg,x7,c).P(ov,x9).P(h,400).P(w,800);A1.A(e10).P(lf,300).P(ov,x11);A1.A(e12).P("background-image",[50,50,true,'farthest-corner',[['rgba(55,106,154,1.00)',0],['rgba(25,31,37,1.00)',100]]],"gradient");var S2=symbols[s5];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e33).P(tp,0);A2.A(e34).P(h,200).P(w,200).P(ov,x11);A2.A(e35).P(tp,186).P(o,1,_,_,"").P(lf,0,_,_,p).P(d,b).T(0,b);A2.A(e36).P(tp,0).P(h,197).P(o,1,_,_,"").P(lf,2,_,_,p).P(w,197).P(d,b).T(0,b);A2.A(e37).P(tp,-5).P(h,210).P(lf,-5).P(w,210).P(d,b).T(0,b);A2.A(e38).P(tp,0).P(h,197).P(o,0.5,_,_,"").P(lf,2,_,_,p).P(w,197).P(d,b).T(0,b);var S3=symbols[x43];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e44).P(h,410).P(tp,0).P(lf,0).P(w,1000);A3.A(e34).P(h,220).P(ov,x11).P(w,1000);var S4=symbols[x29];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e34).P(h,200).P(w,200).P(ov,x9);A4.A(e50).P(tp,-220).P(o,1,_,_,"").P(d,b).T(0,b).P(lf,0,_,_,p).T(0,-473,4,ql);A4.A(e51).P(tp,-5).P(h,210).P(lf,-5).P(w,210).P(d,b).T(0,b);A4.A(e52).P(tp,0).P(d,b).T(0,b).P(lf,-473).T(0,0,4,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-10260560");
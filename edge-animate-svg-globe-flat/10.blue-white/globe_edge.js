
(function($,Edge,compId){var _=null,y=true,n=false,x2='3.0.0.322',e31='${_continents-animation}',b='block',e35='${_sphere}',x41='flatmap-two',a='Base State',x10='hidden',x24='197px',x14='sphere',dt='Default Timeline',x3='horizontal',i='none',x7='visible',x43='flatmap-back',x45='flatmap-front',lf='left',x30='reflections',bg='background-color',x25='reflections-2nd',x13='auto',e48='${_flatmap-back}',tp='top',ov='overflow',e9='${_Stage}',x38='1000px',x5='stage',e6='${_globe}',x29='continents',g='image',x20='30px',x28='0',x44='-220px',x23='2px',m='rect',x17='0px',h='height',x12='210px',x39='410px',x18='186px',x8='rgba(52,152,219,1.00)',p='px',o='opacity',e50='${_flatmap-front}',e49='${_inner-shadow}',x46='inner-shadow',e32='${symbolSelector}',x11='-5px',c='color',x27='continents-animation',x15='rgba(0,0,0,0)',e42='${_worldmap-flat}',s='style',x37='worldmap-flat',w='width',e34='${_reflections}',d='display',ql='linear',x21='outer-shadow',x1='3.0.0',e33='${_outer-shadow}',x19='200px',e36='${_reflections-2nd}';var im='images/';var g16='sphere.svg',g47='inner-shadow.svg',g22='outer-shadow.svg',g26='reflections.svg',g40='worldmap-flat-5-continents.svgz';var s4="globe";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'globe',t:m,r:['300px','100px','auto','auto','auto','auto'],userClass:s4}],sI:[{id:'globe',sN:'globe',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"globe":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,v:b,r:[x11,x11,x12,x12,x13,x13],id:x14,f:[x15,im+g16,x17,x17]},{t:g,r:[x17,x18,x19,x20,x13,x13],id:x21,o:1,v:b,f:[x15,im+g22,x17,x17]},{t:g,r:[x23,x17,x24,x24,x13,x13],filter:[0,0,1,1,0,0,0,0,x15,0,0,0],id:x25,o:0.5,v:b,f:[x15,im+g26,x17,x17]},{id:x27,t:m,r:[x28,x17,x13,x13,x13,x13],uc:x29},{t:g,r:[x23,x17,x24,x24,x13,x13],filter:[0,0,1,1,0,0,0,0,x15,0,0,0],id:x30,o:1,v:b,f:[x15,im+g26,x17,x17]}],sI:[{id:'continents-animation',sN:'continents-animation',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"flatmap-two":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x37,t:g,r:[x17,x17,x38,x39,x13,x13],f:[x15,im+g40,x17,x17]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"continents-animation":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,v:b,o:1,id:x43,r:[x17,x44,x13,x13,x13,x13]},{v:b,t:m,r:[x17,x17,x13,x13,x13,x13],id:x45},{r:[x11,x11,x12,x12,x13,x13],id:x46,t:g,v:b,f:[x15,im+g47,x17,x17]}],sI:[{id:'flatmap-front',sN:'flatmap-two',a:{}},{id:'flatmap-back',sN:'flatmap-two',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}}};var S1=symbols[x5];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e6).P(lf,300).P(ov,x7);A1.A(e9).P(bg,x8,c).P(w,800).P(h,400).P(ov,x10);var S2=symbols[s4];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e31).P(tp,0);A2.A(e32).P(h,200).P(ov,x7).P(w,200);A2.A(e33).P(tp,186).P(o,1,_,_,"").P(lf,0,_,_,p).P(d,b).T(0,b);A2.A(e34).P(tp,0).P(h,197).P(o,1,_,_,"").P(lf,2,_,_,p).P(w,197).P(d,b).T(0,b);A2.A(e35).P(tp,-5).P(h,210).P(lf,-5).P(w,210).P(d,b).T(0,b);A2.A(e36).P(tp,0).P(h,197).P(o,0.5,_,_,"").P(lf,2,_,_,p).P(w,197).P(d,b).T(0,b);var S3=symbols[x41];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e42).P(tp,0).P(h,410).P(lf,0).P(w,1000);A3.A(e32).P(h,220).P(w,1000).P(ov,x7);var S4=symbols[x27];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e32).P(h,200).P(ov,x10).P(w,200);A4.A(e48).P(tp,-220).P(o,1,_,_,"").P(d,b).T(0,b).P(lf,0,_,_,p).T(0,-473,4,ql);A4.A(e49).P(tp,-5).P(h,210).P(lf,-5).P(w,210).P(d,b).T(0,b);A4.A(e50).P(tp,0).P(d,b).T(0,b).P(lf,-473).T(0,0,4,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-10260560");
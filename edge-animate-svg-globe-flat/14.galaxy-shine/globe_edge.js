
(function($,Edge,compId){var _=null,y=true,n=false,x20='-5px',e32='${_continents-animation}',b='block',e36='${_sphere}',x42='flatmap-two',a='Base State',x10='hidden',x25='197px',x22='sphere',x8='rgba(255,255,255,1.00)',x3='horizontal',i='none',x13='visible',x45='flatmap-back',x46='flatmap-front',lf='left',x31='reflections',bg='background-color',x26='reflections-2nd',x17='auto',e49='${_flatmap-back}',tp='top',ov='overflow',e9='${_Stage}',x39='1000px',x7='stage',c='color',x29='continents',g='image',x30='0',x44='-220px',x24='2px',m='rect',x19='0px',x14='shine',x21='210px',x40='410px',e33='${_shine}',p='px',o='opacity',e50='${_inner-shadow}',e51='${_flatmap-front}',x47='inner-shadow',d='display',e11='${_bg-galaxy}',e34='${symbolSelector}',x2='3.0.0.322',e43='${_worldmap-flat}',x28='continents-animation',e12='${_globe}',x4='rgba(0,0,0,0)',ql='linear',x38='worldmap-flat',s='style',w='width',x15='-25px',e35='${_reflections}',x16='250px',dt='Default Timeline',x1='3.0.0',h='height',e37='${_reflections-2nd}';var im='images/';var g5='bg-galaxy.png',g23='sphere.svg',g48='inner-shadow.svg',g41='worldmap-flat-5-continents.svgz',g27='reflections.svg',g18='shine.svg';var s6="globe";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'bg-galaxy',t:g,r:['0px','0px','800px','400px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'globe',t:m,r:['300px','100px','auto','auto','auto','auto'],userClass:s6}],sI:[{id:'globe',sN:'globe',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"globe":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x14,t:g,r:[x15,x15,x16,x16,x17,x17],f:[x4,im+g18,x19,x19]},{r:[x20,x20,x21,x21,x17,x17],id:x22,t:g,v:b,f:[x4,im+g23,x19,x19]},{r:[x24,x19,x25,x25,x17,x17],t:g,filter:[0,0,1,1,0,0,0,0,x4,0,0,0],id:x26,o:1,v:b,f:[x4,im+g27,x19,x19]},{id:x28,t:m,uc:x29,r:[x30,x19,x17,x17,x17,x17]},{r:[x24,x19,x25,x25,x17,x17],t:g,filter:[0,0,1,1,0,0,0,0,x4,0,0,0],id:x31,o:1,v:b,f:[x4,im+g27,x19,x19]}],sI:[{id:'continents-animation',sN:'continents-animation',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"flatmap-two":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x38,t:g,r:[x19,x19,x39,x40,x17,x17],f:[x4,im+g41,x19,x19]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"continents-animation":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x19,x44,x17,x17,x17,x17],id:x45,o:1,v:b,t:m},{v:b,t:m,r:[x19,x19,x17,x17,x17,x17],id:x46},{r:[x20,x20,x21,x21,x17,x17],id:x47,t:g,v:b,f:[x4,im+g48,x19,x19]}],sI:[{id:'flatmap-front',sN:'flatmap-two',a:{}},{id:'flatmap-back',sN:'flatmap-two',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}}};var S1=symbols[x7];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e9).P(bg,x8,c).P(ov,x10).P(h,400).P(w,800);A1.A(e11).P(lf,0).P(tp,0);A1.A(e12).P(lf,300).P(ov,x13);var S2=symbols[s6];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e32).P(tp,0);A2.A(e33).P(h,250).P(tp,-25).P(lf,-25).P(w,250);A2.A(e34).P(h,200).P(w,200).P(ov,x13);A2.A(e35).P(tp,0).P(h,197).P(o,1,_,_,"").P(lf,2,_,_,p).P(w,197).P(d,b).T(0,b);A2.A(e36).P(tp,-5).P(h,210).P(lf,-5).P(w,210).P(d,b).T(0,b);A2.A(e37).P(tp,0).P(h,197).P(o,1,_,_,"").P(lf,2,_,_,p).P(w,197).P(d,b).T(0,b);var S3=symbols[x42];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e43).P(h,410).P(tp,0).P(lf,0).P(w,1000);A3.A(e34).P(h,220).P(ov,x13).P(w,1000);var S4=symbols[x28];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e34).P(h,200).P(w,200).P(ov,x10);A4.A(e49).P(tp,-220).P(o,1,_,_,"").P(d,b).T(0,b).P(lf,0,_,_,p).T(0,-473,4,ql);A4.A(e50).P(tp,-5).P(h,210).P(lf,-5).P(w,210).P(d,b).T(0,b);A4.A(e51).P(tp,0).P(d,b).T(0,b).P(lf,-473).T(0,0,4,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-10260560");

(function($,Edge,compId){var _=null,y=true,n=false,x2='3.0.0.322',c='color',x17='continents',g='image',e38='${_continents}',x3='horizontal',d='display',b='block',cl='clip',e20='${_sphere}',x25='30px',x9='0',a='Base State',x22='@@0@@px @@1@@px',e36='${_outer-shadow}',x35='visible',x7='hidden',x28='-1px',m='rect',dt='Default Timeline',x16='0px',x1='3.0.0',x23='183px',i='none',x18='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x31='215px',x29='sphere',p='px',o='opacity',x26='outer-shadow',x24='200px',x32='reflections',ql='linear',e19='${symbolSelector}',x5='rgba(255,255,255,1.00)',h='height',bp='background-position',x8='_4_globe_90fr',bg='background-color',e37='${_reflections}',x12='auto',lf='left',x14='rgba(0,0,0,0)',x13='rect(0px 200px 200px 0px)',x34='globe',w='width',tp='top',x11='4800px',x10='800px',ov='overflow',e6='${_Stage}',s='style',x4='stage',e21='${__4_globe_90fr}';var im='images/';var g33='reflections.svg',g27='outer-shadow.svg',g30='sphere.svg',g15='4_globe_90fr.svgz';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'globe',t:m,r:['200','100px','auto','auto','auto','auto']}],sI:[{id:'globe',sN:'globe',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3000,a:y,tt:[]}}},"continents":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x8,r:[x9,x9,x10,x11,x12,x12],cl:[x13],f:[x14,im+g15,x16,x16]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3000,a:y,tt:[]}}},"globe":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x16,x23,x24,x25,x12,x12],t:g,id:x26,o:0.75,v:b,f:[x14,im+g27,x16,x16]},{r:[x16,x28,x24,x24,x12,x12],id:x29,t:g,v:b,f:[x14,im+g30,x16,x16]},{t:m,filter:[0,0,1,1,0,0,0,0,x14,0,0,0],v:b,id:x17,r:[x31,x16,x12,x12,x12,x12]},{r:[x16,x16,x24,x24,x12,x12],t:g,filter:[0,0,1,1,0,0,0,0,x14,0,0,0],id:x32,o:1,v:b,f:[x14,im+g33,x16,x16]}],sI:[{id:'continents',sN:'continents',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3000,a:y,tt:[]}}}};var S1=symbols[x4];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e6).P(bg,x5,c).P(w,600).P(h,400).P(ov,x7);var S2=symbols[x17];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e19).P(h,200).P(w,200);A2.A(e20).P(tp,-1);A2.A(e21).P(lf,0).P(cl,[0,200,200,0],_,x18).P(bp,[0,0],_,x22).T(0,[0,0]).T(0.033,[0,-200]).T(0.067,[0,-400]).T(0.1,[0,-600]).T(0.133,[0,-800]).T(0.167,[0,-1000]).T(0.2,[0,-1200]).T(0.233,[0,-1400]).T(0.267,[0,-1600]).T(0.3,[0,-1800]).T(0.333,[0,-2000]).T(0.367,[0,-2200]).T(0.4,[0,-2400]).T(0.433,[0,-2600]).T(0.467,[0,-2800]).T(0.5,[0,-3000]).T(0.533,[0,-3200]).T(0.567,[0,-3400]).T(0.6,[0,-3600]).T(0.633,[0,-3800]).T(0.667,[0,-4000]).T(0.7,[0,-4200]).T(0.733,[0,-4400]).T(0.767,[0,-4600]).T(0.8,[-200,0]).T(0.833,[-200,-200],_,_,[0,0]).T(0.867,[-200,-400],_,_,[0,-200]).T(0.9,[-200,-600],_,_,[0,-400]).T(0.933,[-200,-800],_,_,[0,-600]).T(0.967,[-200,-1000],_,_,[0,-800]).T(1,[-200,-1200],_,_,[0,-1000]).T(1.033,[-200,-1400],_,_,[0,-1200]).T(1.067,[-200,-1600],_,_,[0,-1400]).T(1.1,[-200,-1800],_,_,[0,-1600]).T(1.133,[-200,-2000],_,_,[0,-1800]).T(1.167,[-200,-2200],_,_,[0,-2000]).T(1.2,[-200,-2400],_,_,[0,-2200]).T(1.233,[-200,-2600],_,_,[0,-2400]).T(1.267,[-200,-2800],_,_,[0,-2600]).T(1.3,[-200,-3000],_,_,[0,-2800]).T(1.333,[-200,-3200],_,_,[0,-3000]).T(1.367,[-200,-3400],_,_,[0,-3200]).T(1.4,[-200,-3600],_,_,[0,-3400]).T(1.433,[-200,-3800],_,_,[0,-3600]).T(1.467,[-200,-4000],_,_,[0,-3800]).T(1.5,[-200,-4200],_,_,[0,-4000]).T(1.533,[-200,-4400],_,_,[0,-4200]).T(1.567,[-200,-4600],_,_,[0,-4400]).T(1.6,[-400,0],_,_,[0,-4600]).T(1.633,[-400,-200],_,_,[0,0]).T(1.667,[-400,-400],_,_,[0,-200]).T(1.7,[-400,-600],_,_,[0,-400]).T(1.733,[-400,-800],_,_,[0,-600]).T(1.767,[-400,-1000],_,_,[0,-800]).T(1.8,[-400,-1200],_,_,[0,-1000]).T(1.833,[-400,-1400],_,_,[0,-1200]).T(1.867,[-400,-1600],_,_,[0,-1400]).T(1.9,[-400,-1800],_,_,[0,-1600]).T(1.933,[-400,-2000],_,_,[0,-1800]).T(1.967,[-400,-2200],_,_,[0,-2000]).T(2,[-400,-2400],_,_,[0,-2200]).T(2.033,[-400,-2600],_,_,[0,-2400]).T(2.067,[-400,-2800],_,_,[0,-2600]).T(2.1,[-400,-3000],_,_,[0,-2800]).T(2.133,[-400,-3200],_,_,[0,-3000]).T(2.167,[-400,-3400],_,_,[0,-3200]).T(2.2,[-400,-3600],_,_,[0,-3400]).T(2.233,[-400,-3800],_,_,[0,-3600]).T(2.267,[-400,-4000],_,_,[0,-3800]).T(2.3,[-400,-4200],_,_,[0,-4000]).T(2.333,[-400,-4400],_,_,[0,-4200]).T(2.367,[-400,-4600],_,_,[0,-4400]).T(2.4,[-600,0],_,_,[0,-4600]).T(2.433,[-600,-200],_,_,[0,0]).T(2.467,[-600,-400],_,_,[0,-200]).T(2.5,[-600,-600],_,_,[0,-400]).T(2.533,[-600,-800],_,_,[0,-600]).T(2.567,[-600,-1000],_,_,[0,-800]).T(2.6,[-600,-1200],_,_,[0,-1000]).T(2.633,[-600,-1400],_,_,[0,-1200]).T(2.667,[-600,-1600],_,_,[0,-1400]).T(2.7,[-600,-1800],_,_,[0,-1600]).T(2.733,[-600,-2000],_,_,[0,-1800]).T(2.767,[-600,-2200],_,_,[0,-2000]).T(2.8,[-600,-2400],_,_,[0,-2200]).T(2.833,[-600,-2600],_,_,[0,-2400]).T(2.867,[-600,-2800],_,_,[0,-2600]).T(2.9,[-600,-3000],_,_,[0,-2800]).T(2.933,[-600,-3200],_,_,[0,-3000]).T(2.967,[-600,-3400],_,_,[0,-3200]);var S3=symbols[x34];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e19).P(h,200).P(ov,x35).P(w,200);A3.A(e36).P(tp,183).P(o,0.75,_,_,"").P(lf,0,_,_,p).P(d,b).T(0,b);A3.A(e37).P(tp,0).P(o,1,_,_,"").P(lf,0,_,_,p).P(d,b).T(0,b);A3.A(e38).P(tp,0).P("filter.invert",0,"subproperty",_,"").P("filter.grayscale",0,"subproperty").P(lf,0,_,_,p).P(d,b).T(0,b);A3.A(e20).P(tp,0).P(lf,0).P(d,b).T(0,b);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-10260560");
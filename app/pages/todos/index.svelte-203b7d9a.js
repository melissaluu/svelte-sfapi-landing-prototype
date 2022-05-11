import{T as x,S as de,i as ce,s as fe,e as g,k as O,c as b,a as I,m as N,d as T,b as n,G as le,g as ee,H as c,U as W,V as he,W as _e,X as pe,Y as me,Z as oe,_ as ve,t as ge,O as be,h as ye,$ as Te,p as Ee,q as ke,o as we,n as Ue,a0 as Me,E as Oe}from"../../chunks/index-0678fdff.js";import{c as A}from"../../chunks/singletons-d1fb5791.js";import{b as X}from"../../chunks/paths-396f020f.js";A.disable_scroll_handling;A.goto;const Ne=A.invalidate;A.prefetch;A.prefetch_routes;A.before_navigate;A.after_navigate;function Y(i,{pending:e,error:t,result:a}={}){let f;async function v(_){const s=f={};_.preventDefault();const u=new FormData(i);e&&e({data:u,form:i});try{const h=await fetch(i.action,{method:i.method,headers:{accept:"application/json"},body:u});if(s!==f)return;if(h.ok){a&&a({data:u,form:i,response:h});const o=new URL(i.action);o.search=o.hash="",Ne(o.href)}else t?t({data:u,form:i,error:null,response:h}):console.error(await h.text())}catch(h){if(t&&h instanceof Error)t({data:u,form:i,error:h,response:null});else throw h}}return i.addEventListener("submit",v),{destroy(){i.removeEventListener("submit",v)}}}function ue(i){const e=i-1;return e*e*e+1}function se(i,{delay:e=0,duration:t=400,easing:a=ue,start:f=0,opacity:v=0}={}){const _=getComputedStyle(i),s=+_.opacity,u=_.transform==="none"?"":_.transform,h=1-f,o=s*(1-v);return{delay:e,duration:t,easing:a,css:(w,E)=>`
			transform: ${u} scale(${1-h*E});
			opacity: ${s-o*E}
		`}}function $e(i,{from:e,to:t},a={}){const f=getComputedStyle(i),v=f.transform==="none"?"":f.transform,[_,s]=f.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*_/t.width-(t.left+_),h=e.top+e.height*s/t.height-(t.top+s),{delay:o=0,duration:w=U=>Math.sqrt(U)*120,easing:E=ue}=a;return{delay:o,duration:x(w)?w(Math.sqrt(u*u+h*h)):w,easing:E,css:(U,p)=>{const y=p*u,P=p*h,r=U+p*e.width/t.width,l=U+p*e.height/t.height;return`transform: ${v} translate(${y}px, ${P}px) scale(${r}, ${l});`}}}function re(i,e,t){const a=i.slice();return a[3]=e[t],a[4]=e,a[5]=t,a}function ie(i,e){let t,a,f,v,_,s,u,h,o,w,E,U,p,y,P,r,l,d,S,C,q,$,D,L,Z,F,V,j,z,R,J,K=Oe,M,Q,te;function ae(...k){return e[1](e[3],e[4],e[5],...k)}function ne(){return e[2](e[3],e[4],e[5])}return{key:i,first:null,c(){t=g("div"),a=g("form"),f=g("input"),_=O(),s=g("input"),h=O(),o=g("button"),U=O(),p=g("form"),y=g("input"),r=O(),l=g("input"),S=O(),C=g("button"),q=O(),$=g("form"),D=g("input"),Z=O(),F=g("button"),z=O(),this.h()},l(k){t=b(k,"DIV",{class:!0});var m=I(t);a=b(m,"FORM",{action:!0,method:!0});var B=I(a);f=b(B,"INPUT",{type:!0,name:!0,class:!0}),_=N(B),s=b(B,"INPUT",{type:!0,name:!0,class:!0}),h=N(B),o=b(B,"BUTTON",{class:!0,"aria-label":!0}),I(o).forEach(T),B.forEach(T),U=N(m),p=b(m,"FORM",{class:!0,action:!0,method:!0});var H=I(p);y=b(H,"INPUT",{type:!0,name:!0,class:!0}),r=N(H),l=b(H,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),S=N(H),C=b(H,"BUTTON",{class:!0,"aria-label":!0}),I(C).forEach(T),H.forEach(T),q=N(m),$=b(m,"FORM",{action:!0,method:!0});var G=I($);D=b(G,"INPUT",{type:!0,name:!0,class:!0}),Z=N(G),F=b(G,"BUTTON",{class:!0,"aria-label":!0}),I(F).forEach(T),G.forEach(T),z=N(m),m.forEach(T),this.h()},h(){n(f,"type","hidden"),n(f,"name","uid"),f.value=v=e[3].uid,n(f,"class","svelte-16nsat"),n(s,"type","hidden"),n(s,"name","done"),s.value=u=e[3].done?"":"true",n(s,"class","svelte-16nsat"),n(o,"class","toggle svelte-16nsat"),n(o,"aria-label",w="Mark todo as "+(e[3].done?"not done":"done")),n(a,"action",`/${X}/todos?_method=PATCH`),n(a,"method","post"),n(y,"type","hidden"),n(y,"name","uid"),y.value=P=e[3].uid,n(y,"class","svelte-16nsat"),n(l,"aria-label","Edit todo"),n(l,"type","text"),n(l,"name","text"),l.value=d=e[3].text,n(l,"class","svelte-16nsat"),n(C,"class","save svelte-16nsat"),n(C,"aria-label","Save todo"),n(p,"class","text svelte-16nsat"),n(p,"action",`/${X}/todos?_method=PATCH`),n(p,"method","post"),n(D,"type","hidden"),n(D,"name","uid"),D.value=L=e[3].uid,n(D,"class","svelte-16nsat"),n(F,"class","delete svelte-16nsat"),n(F,"aria-label","Delete todo"),F.disabled=V=e[3].pending_delete,n($,"action",`/${X}/todos?_method=DELETE`),n($,"method","post"),n(t,"class","todo svelte-16nsat"),le(t,"done",e[3].done),this.first=t},m(k,m){ee(k,t,m),c(t,a),c(a,f),c(a,_),c(a,s),c(a,h),c(a,o),c(t,U),c(t,p),c(p,y),c(p,r),c(p,l),c(p,S),c(p,C),c(t,q),c(t,$),c($,D),c($,Z),c($,F),c(t,z),M=!0,Q||(te=[W(E=Y.call(null,a,{pending:ae})),W(Y.call(null,p)),W(j=Y.call(null,$,{pending:ne}))],Q=!0)},p(k,m){e=k,(!M||m&1&&v!==(v=e[3].uid))&&(f.value=v),(!M||m&1&&u!==(u=e[3].done?"":"true"))&&(s.value=u),(!M||m&1&&w!==(w="Mark todo as "+(e[3].done?"not done":"done")))&&n(o,"aria-label",w),E&&x(E.update)&&m&1&&E.update.call(null,{pending:ae}),(!M||m&1&&P!==(P=e[3].uid))&&(y.value=P),(!M||m&1&&d!==(d=e[3].text)&&l.value!==d)&&(l.value=d),(!M||m&1&&L!==(L=e[3].uid))&&(D.value=L),(!M||m&1&&V!==(V=e[3].pending_delete))&&(F.disabled=V),j&&x(j.update)&&m&1&&j.update.call(null,{pending:ne}),m&1&&le(t,"done",e[3].done)},r(){J=t.getBoundingClientRect()},f(){he(t),K(),_e(t,J)},a(){K(),K=pe(t,J,$e,{duration:200})},i(k){M||(k&&me(()=>{R||(R=oe(t,se,{start:.7},!0)),R.run(1)}),M=!0)},o(k){k&&(R||(R=oe(t,se,{start:.7},!1)),R.run(0)),M=!1},d(k){k&&T(t),k&&R&&R.end(),Q=!1,ve(te)}}}function Ie(i){let e,t,a,f,v,_,s,u,h,o=[],w=new Map,E,U,p,y=i[0];const P=r=>r[3].uid;for(let r=0;r<y.length;r+=1){let l=re(i,y,r),d=P(l);w.set(d,o[r]=ie(d,l))}return{c(){e=g("meta"),t=O(),a=g("div"),f=g("h1"),v=ge("Todos"),_=O(),s=g("form"),u=g("input"),h=O();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){const l=be('[data-svelte="svelte-aw2gey"]',document.head);e=b(l,"META",{name:!0,content:!0}),l.forEach(T),t=N(r),a=b(r,"DIV",{class:!0});var d=I(a);f=b(d,"H1",{});var S=I(f);v=ye(S,"Todos"),S.forEach(T),_=N(d),s=b(d,"FORM",{class:!0,action:!0,method:!0});var C=I(s);u=b(C,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),C.forEach(T),h=N(d);for(let q=0;q<o.length;q+=1)o[q].l(d);d.forEach(T),this.h()},h(){document.title="Todos",n(e,"name","description"),n(e,"content","A todo list app"),n(u,"name","text"),n(u,"aria-label","Add todo"),n(u,"placeholder","+ tap to add a todo"),n(u,"class","svelte-16nsat"),n(s,"class","new svelte-16nsat"),n(s,"action",`/${X}/todos`),n(s,"method","post"),n(a,"class","todos svelte-16nsat")},m(r,l){c(document.head,e),ee(r,t,l),ee(r,a,l),c(a,f),c(f,v),c(a,_),c(a,s),c(s,u),c(a,h);for(let d=0;d<o.length;d+=1)o[d].m(a,null);E=!0,U||(p=W(Y.call(null,s,{result:Pe})),U=!0)},p(r,[l]){if(l&1){y=r[0],Ue();for(let d=0;d<o.length;d+=1)o[d].r();o=Te(o,l,P,1,r,y,w,a,Me,ie,null,re);for(let d=0;d<o.length;d+=1)o[d].a();Ee()}},i(r){if(!E){for(let l=0;l<y.length;l+=1)ke(o[l]);E=!0}},o(r){for(let l=0;l<o.length;l+=1)we(o[l]);E=!1},d(r){T(e),r&&T(t),r&&T(a);for(let l=0;l<o.length;l+=1)o[l].d();U=!1,p()}}}const Pe=async({form:i})=>{i.reset()};function Ce(i,e,t){let{todos:a}=e;const f=(_,s,u,{data:h})=>{t(0,s[u].done=!!h.get("done"),a)},v=(_,s,u)=>t(0,s[u].pending_delete=!0,a);return i.$$set=_=>{"todos"in _&&t(0,a=_.todos)},[a,f,v]}class qe extends de{constructor(e){super(),ce(this,e,Ce,Ie,fe,{todos:0})}}export{qe as default};

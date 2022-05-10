import{F as ue,S as oe,i as ie,s as ce,e as v,k as I,G as V,t as K,c as p,a as c,d as l,m as S,H as j,h as O,I as ve,b as e,J as z,g as N,K as s,E as ae,L as pe,M as fe,w as he,x as de,y as _e,N as me,O as ge,P as be,q as le,o as re,B as Ee}from"../chunks/index-86598e45.js";import{b as R}from"../chunks/paths-396f020f.js";import{i as we}from"../chunks/urql-svelte-37fea4dc.js";import"../chunks/urql-core-1b38caef.js";import"../chunks/index-cc9c1da0.js";const qe=()=>{const o=ue("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},$e={subscribe(o){return qe().page.subscribe(o)}};var ye="https://melissaluu.github.io/svelte-sfapi-landing-prototype/app/assets/svelte-logo-87df40b8.svg";function ke(o){let a,h,i,n,m,w,_,f,$,C,u,b,r,t,d,q,g,H,x,k,A,F,G,L,B,P,D;return{c(){a=v("header"),h=v("div"),i=v("a"),n=v("img"),w=I(),_=v("nav"),f=V("svg"),$=V("path"),C=I(),u=v("ul"),b=v("li"),r=v("a"),t=K("Home"),d=I(),q=v("li"),g=v("a"),H=K("About"),x=I(),k=v("li"),A=v("a"),F=K("Todos"),G=I(),L=V("svg"),B=V("path"),P=I(),D=v("div"),this.h()},l(y){a=p(y,"HEADER",{class:!0});var E=c(a);h=p(E,"DIV",{class:!0});var Z=c(h);i=p(Z,"A",{href:!0,class:!0});var J=c(i);n=p(J,"IMG",{src:!0,alt:!0,class:!0}),J.forEach(l),Z.forEach(l),w=S(E),_=p(E,"NAV",{class:!0});var M=c(_);f=j(M,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var U=c(f);$=j(U,"path",{d:!0,class:!0}),c($).forEach(l),U.forEach(l),C=S(M),u=p(M,"UL",{class:!0});var T=c(u);b=p(T,"LI",{class:!0});var X=c(b);r=p(X,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=c(r);t=O(Q,"Home"),Q.forEach(l),X.forEach(l),d=S(T),q=p(T,"LI",{class:!0});var W=c(q);g=p(W,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Y=c(g);H=O(Y,"About"),Y.forEach(l),W.forEach(l),x=S(T),k=p(T,"LI",{class:!0});var ee=c(k);A=p(ee,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var te=c(A);F=O(te,"Todos"),te.forEach(l),ee.forEach(l),T.forEach(l),G=S(M),L=j(M,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var se=c(L);B=j(se,"path",{d:!0,class:!0}),c(B).forEach(l),se.forEach(l),M.forEach(l),P=S(E),D=p(E,"DIV",{class:!0});var ne=c(D);ne.forEach(l),E.forEach(l),this.h()},h(){ve(n.src,m=ye)||e(n,"src",m),e(n,"alt","SvelteKit"),e(n,"class","svelte-t2wq17"),e(i,"href","https://kit.svelte.dev"),e(i,"class","svelte-t2wq17"),e(h,"class","corner svelte-t2wq17"),e($,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e($,"class","svelte-t2wq17"),e(f,"viewBox","0 0 2 3"),e(f,"aria-hidden","true"),e(f,"class","svelte-t2wq17"),e(r,"sveltekit:prefetch",""),e(r,"href",R+"/"),e(r,"class","svelte-t2wq17"),e(b,"class","svelte-t2wq17"),z(b,"active",o[0].url.pathname==="/"),e(g,"sveltekit:prefetch",""),e(g,"href",R+"/about"),e(g,"class","svelte-t2wq17"),e(q,"class","svelte-t2wq17"),z(q,"active",o[0].url.pathname==="/about"),e(A,"sveltekit:prefetch",""),e(A,"href",R+"/todos"),e(A,"class","svelte-t2wq17"),e(k,"class","svelte-t2wq17"),z(k,"active",o[0].url.pathname==="/todos"),e(u,"class","svelte-t2wq17"),e(B,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(B,"class","svelte-t2wq17"),e(L,"viewBox","0 0 2 3"),e(L,"aria-hidden","true"),e(L,"class","svelte-t2wq17"),e(_,"class","svelte-t2wq17"),e(D,"class","corner svelte-t2wq17"),e(a,"class","svelte-t2wq17")},m(y,E){N(y,a,E),s(a,h),s(h,i),s(i,n),s(a,w),s(a,_),s(_,f),s(f,$),s(_,C),s(_,u),s(u,b),s(b,r),s(r,t),s(u,d),s(u,q),s(q,g),s(g,H),s(u,x),s(u,k),s(k,A),s(A,F),s(_,G),s(_,L),s(L,B),s(a,P),s(a,D)},p(y,[E]){E&1&&z(b,"active",y[0].url.pathname==="/"),E&1&&z(q,"active",y[0].url.pathname==="/about"),E&1&&z(k,"active",y[0].url.pathname==="/todos")},i:ae,o:ae,d(y){y&&l(a)}}}function Ae(o,a,h){let i;return pe(o,$e,n=>h(0,i=n)),[i]}class Le extends oe{constructor(a){super(),ie(this,a,Ae,ke,ce,{})}}function Ie(o){let a,h,i,n,m,w,_,f,$,C,u;a=new Le({});const b=o[1].default,r=fe(b,o,o[0],null);return{c(){he(a.$$.fragment),h=I(),i=v("main"),r&&r.c(),n=I(),m=v("footer"),w=v("p"),_=K("visit "),f=v("a"),$=K("kit.svelte.dev"),C=K(" to learn SvelteKit"),this.h()},l(t){de(a.$$.fragment,t),h=S(t),i=p(t,"MAIN",{class:!0});var d=c(i);r&&r.l(d),d.forEach(l),n=S(t),m=p(t,"FOOTER",{class:!0});var q=c(m);w=p(q,"P",{});var g=c(w);_=O(g,"visit "),f=p(g,"A",{href:!0,class:!0});var H=c(f);$=O(H,"kit.svelte.dev"),H.forEach(l),C=O(g," to learn SvelteKit"),g.forEach(l),q.forEach(l),this.h()},h(){e(i,"class","svelte-1izrdc8"),e(f,"href","https://kit.svelte.dev"),e(f,"class","svelte-1izrdc8"),e(m,"class","svelte-1izrdc8")},m(t,d){_e(a,t,d),N(t,h,d),N(t,i,d),r&&r.m(i,null),N(t,n,d),N(t,m,d),s(m,w),s(w,_),s(w,f),s(f,$),s(w,C),u=!0},p(t,[d]){r&&r.p&&(!u||d&1)&&me(r,b,t,t[0],u?be(b,t[0],d,null):ge(t[0]),null)},i(t){u||(le(a.$$.fragment,t),le(r,t),u=!0)},o(t){re(a.$$.fragment,t),re(r,t),u=!1},d(t){Ee(a,t),t&&l(h),t&&l(i),r&&r.d(t),t&&l(n),t&&l(m)}}}function Se(o,a,h){let{$$slots:i={},$$scope:n}=a;return we({url:"https://happy-breeze.myshopify.com/api/2022-04/graphql",fetchOptions:()=>({headers:{"Content-Type":"application/json",Accept:"application/json","X-Shopify-Storefront-Access-Token":"f8d666e5c7ea78ece514ec7c8a560be4"}})}),o.$$set=m=>{"$$scope"in m&&h(0,n=m.$$scope)},[n,i]}class ze extends oe{constructor(a){super(),ie(this,a,Se,Ie,ce,{})}}export{ze as default};

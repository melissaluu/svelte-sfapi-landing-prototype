import{S as N,i as W,s as X,e as d,k as _,t as i,O as Z,c as p,d as o,m as w,a as h,h as r,b as S,H as t,g as F,j as $,E as G}from"../chunks/index-f715f2a8.js";import{c as tt}from"../chunks/sfapi-7f116ea6.js";import"../chunks/urql-core-1b38caef.js";const et=!0,at=!1;function nt(f){let a,l,e,c=f[0].name+"",k,O,T,P,x,u,H,y,J,K,D,E,M,Y,b,B,L,v,R,g,j,C;return{c(){a=d("meta"),l=_(),e=d("div"),k=i(c),O=_(),T=d("h1"),P=i("About this app"),x=_(),u=d("p"),H=i("This is a "),y=d("a"),J=i("SvelteKit"),K=i(` app. You can make your own by typing the
		following into your command line and following the prompts:`),D=_(),E=d("pre"),M=i("npm init svelte"),Y=_(),b=d("p"),B=i(`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`),L=_(),v=d("p"),R=i("The "),g=d("a"),j=i("TODOs"),C=i(` page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!`),this.h()},l(s){const m=Z('[data-svelte="svelte-1ds1qyu"]',document.head);a=p(m,"META",{name:!0,content:!0}),m.forEach(o),l=w(s),e=p(s,"DIV",{class:!0});var n=h(e);k=r(n,c),O=w(n),T=p(n,"H1",{});var I=h(T);P=r(I,"About this app"),I.forEach(o),x=w(n),u=p(n,"P",{});var A=h(u);H=r(A,"This is a "),y=p(A,"A",{href:!0});var Q=h(y);J=r(Q,"SvelteKit"),Q.forEach(o),K=r(A,` app. You can make your own by typing the
		following into your command line and following the prompts:`),A.forEach(o),D=w(n),E=p(n,"PRE",{});var U=h(E);M=r(U,"npm init svelte"),U.forEach(o),Y=w(n),b=p(n,"P",{});var V=h(b);B=r(V,`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`),V.forEach(o),L=w(n),v=p(n,"P",{});var q=h(v);R=r(q,"The "),g=p(q,"A",{href:!0});var z=h(g);j=r(z,"TODOs"),z.forEach(o),C=r(q,` page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!`),q.forEach(o),n.forEach(o),this.h()},h(){document.title="About",S(a,"name","description"),S(a,"content","About this app"),S(y,"href","https://kit.svelte.dev"),S(g,"href","/todos"),S(e,"class","content svelte-cf77e8")},m(s,m){t(document.head,a),F(s,l,m),F(s,e,m),t(e,k),t(e,O),t(e,T),t(T,P),t(e,x),t(e,u),t(u,H),t(u,y),t(y,J),t(u,K),t(e,D),t(e,E),t(E,M),t(e,Y),t(e,b),t(b,B),t(e,L),t(e,v),t(v,R),t(v,g),t(g,j),t(v,C)},p(s,[m]){m&1&&c!==(c=s[0].name+"")&&$(k,c)},i:G,o:G,d(s){o(a),s&&o(l),s&&o(e)}}}const lt=at,dt=et,pt=!0;async function ct(){const f=`
			query {
				shop {
					id
					name
					description
				}
			}
		`,{data:a,error:l}=await tt.query(f).toPromise();return{status:l||"ok",props:{shop:a.shop}}}function ot(f,a,l){let{shop:e}=a;return f.$$set=c=>{"shop"in c&&l(0,e=c.shop)},[e]}class ht extends N{constructor(a){super(),W(this,a,ot,nt,X,{shop:0})}}export{ht as default,lt as hydrate,ct as load,pt as prerender,dt as router};

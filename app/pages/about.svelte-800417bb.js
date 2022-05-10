import{S as F,i as G,s as N,e as p,k as _,t as i,R as Z,c,d as n,m as w,a as h,h as r,b as S,K as t,g as W,j as $,E as X}from"../chunks/index-86598e45.js";import{W as tt}from"../chunks/urql-core-1b38caef.js";const et=!0,at=!1,ot=tt({url:"https://happy-breeze.myshopify.com/api/2022-04/graphql",fetchOptions:()=>({headers:{"Content-Type":"application/json",Accept:"application/json","X-Shopify-Storefront-Access-Token":"f8d666e5c7ea78ece514ec7c8a560be4"}})});function nt(v){let a,l,e,d=v[0].name+"",k,K,T,O,P,u,x,y,J,j,D,b,H,M,E,R,Y,f,B,g,C,L;return{c(){a=p("meta"),l=_(),e=p("div"),k=i(d),K=_(),T=p("h1"),O=i("About this app"),P=_(),u=p("p"),x=i("This is a "),y=p("a"),J=i("SvelteKit"),j=i(` app. You can make your own by typing the
		following into your command line and following the prompts:`),D=_(),b=p("pre"),H=i("npm init svelte"),M=_(),E=p("p"),R=i(`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`),Y=_(),f=p("p"),B=i("The "),g=p("a"),C=i("TODOs"),L=i(` page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!`),this.h()},l(s){const m=Z('[data-svelte="svelte-1ds1qyu"]',document.head);a=c(m,"META",{name:!0,content:!0}),m.forEach(n),l=w(s),e=c(s,"DIV",{class:!0});var o=h(e);k=r(o,d),K=w(o),T=c(o,"H1",{});var z=h(T);O=r(z,"About this app"),z.forEach(n),P=w(o),u=c(o,"P",{});var A=h(u);x=r(A,"This is a "),y=c(A,"A",{href:!0});var I=h(y);J=r(I,"SvelteKit"),I.forEach(n),j=r(A,` app. You can make your own by typing the
		following into your command line and following the prompts:`),A.forEach(n),D=w(o),b=c(o,"PRE",{});var Q=h(b);H=r(Q,"npm init svelte"),Q.forEach(n),M=w(o),E=c(o,"P",{});var U=h(E);R=r(U,`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`),U.forEach(n),Y=w(o),f=c(o,"P",{});var q=h(f);B=r(q,"The "),g=c(q,"A",{href:!0});var V=h(g);C=r(V,"TODOs"),V.forEach(n),L=r(q,` page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!`),q.forEach(n),o.forEach(n),this.h()},h(){document.title="About",S(a,"name","description"),S(a,"content","About this app"),S(y,"href","https://kit.svelte.dev"),S(g,"href","/todos"),S(e,"class","content svelte-cf77e8")},m(s,m){t(document.head,a),W(s,l,m),W(s,e,m),t(e,k),t(e,K),t(e,T),t(T,O),t(e,P),t(e,u),t(u,x),t(u,y),t(y,J),t(u,j),t(e,D),t(e,b),t(b,H),t(e,M),t(e,E),t(E,R),t(e,Y),t(e,f),t(f,B),t(f,g),t(g,C),t(f,L)},p(s,[m]){m&1&&d!==(d=s[0].name+"")&&$(k,d)},i:X,o:X,d(s){n(a),s&&n(l),s&&n(e)}}}const lt=at,pt=et,ct=!0;async function dt(){const v=`
			query {
				shop {
					id
					name
					description
				}
			}
		`,{data:a,error:l}=await ot.query(v).toPromise();return{status:l||"ok",props:{shop:a.shop}}}function st(v,a,l){let{shop:e}=a;return v.$$set=d=>{"shop"in d&&l(0,e=d.shop)},[e]}class ht extends F{constructor(a){super(),G(this,a,st,nt,N,{shop:0})}}export{ht as default,lt as hydrate,dt as load,ct as prerender,pt as router};

var Te=Object.defineProperty,Ue=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var xe=(r,e,t)=>e in r?Te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$e=(r,e)=>{for(var t in e||(e={}))je.call(e,t)&&xe(r,t,e[t]);if(be)for(var t of be(e))Be.call(e,t)&&xe(r,t,e[t]);return r},Ie=(r,e)=>Ue(r,Ge(e));import{S as qe,i as Re,s as Se,e as h,k as $,t as T,c as m,a as v,m as I,h as U,d as c,P as X,b as a,g as W,H as o,j as ce,E as Pe,w as He,x as Me,y as Fe,q as ee,o as de,B as Ne,O as Oe,Q as Ae,p as Le,R as Qe,I as Ye,n as ze}from"../chunks/index-0678fdff.js";import{c as Je}from"../chunks/sfapi-4fe3a0b9.js";import{m as Ke,o as We,q as Xe}from"../chunks/urql-svelte-cb83f566.js";import"../chunks/index-01566ecb.js";function Ze(r){let e,t,n,d,l,y,b,p,u,V=r[0].title+"",R,k,P,G,j=r[0].description+"",E,S,q,B,D,H;return{c(){e=h("div"),t=h("img"),b=$(),p=h("div"),u=h("a"),R=T(V),P=$(),G=h("p"),E=T(j),S=$(),q=h("p"),B=T(r[1]),D=T("\xA0"),this.h()},l(_){e=m(_,"DIV",{class:!0,id:!0});var f=v(e);t=m(f,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),b=I(f),p=m(f,"DIV",{class:!0});var x=v(p);u=m(x,"A",{href:!0,target:!0,class:!0});var A=v(u);R=U(A,V),A.forEach(c),P=I(x),G=m(x,"P",{class:!0});var F=v(G);E=U(F,j),F.forEach(c),S=I(x),q=m(x,"P",{class:!0});var C=v(q);B=U(C,r[1]),D=U(C,"\xA0"),C.forEach(c),x.forEach(c),f.forEach(c),this.h()},h(){X(t.src,n=r[2].url)||a(t,"src",n),a(t,"alt",d=r[2].altText),a(t,"width",l=r[2].width),a(t,"height",y=r[2].height),a(t,"class","block w-48 border-2 border-gray-200 rounded-md "),a(u,"href",k=r[0].onlineStoreUrl),a(u,"target","_blank"),a(u,"class","text-xl hover:underline text-green-800 hover:text-green-500"),a(G,"class","leading-relaxed mt-2"),a(q,"class","mt-3 text-lg font-semibold"),a(p,"class","ml-8 mt-3 text-gray-600"),a(e,"class","w-3/4 flex m-auto pt-6"),a(e,"id",H=`product-${r[0].id}`)},m(_,f){W(_,e,f),o(e,t),o(e,b),o(e,p),o(p,u),o(u,R),o(p,P),o(p,G),o(G,E),o(p,S),o(p,q),o(q,B),o(q,D)},p(_,[f]){f&4&&!X(t.src,n=_[2].url)&&a(t,"src",n),f&4&&d!==(d=_[2].altText)&&a(t,"alt",d),f&4&&l!==(l=_[2].width)&&a(t,"width",l),f&4&&y!==(y=_[2].height)&&a(t,"height",y),f&1&&V!==(V=_[0].title+"")&&ce(R,V),f&1&&k!==(k=_[0].onlineStoreUrl)&&a(u,"href",k),f&1&&j!==(j=_[0].description+"")&&ce(E,j),f&2&&ce(B,_[1]),f&1&&H!==(H=`product-${_[0].id}`)&&a(e,"id",H)},i:Pe,o:Pe,d(_){_&&c(e)}}}function et(r,e,t){let n,d,{product:l}=e;function y(b){return new Intl.NumberFormat("en-US",{style:"currency",currency:l.priceRange.minVariantPrice.currencyCode}).format(b)}return r.$$set=b=>{"product"in b&&t(0,l=b.product)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=l.featuredImage),r.$$.dirty&1&&t(1,d=l.priceRange?l.priceRange.maxVariantPrice.amount===l.priceRange.minVariantPrice.amount?y(l.priceRange.maxVariantPrice.amount):`${y(l.priceRange.minVariantPrice.amount)} - ${y(l.priceRange.maxVariantPrice.amount)}`:"")},[l,d,n]}class tt extends qe{constructor(e){super(),Re(this,e,et,Ze,Se,{product:0})}}function Ve(r,e,t){const n=r.slice();return n[6]=e[t],n}function ke(r){let e,t;return e=new tt({props:{product:r[6]}}),{c(){He(e.$$.fragment)},l(n){Me(e.$$.fragment,n)},m(n,d){Fe(e,n,d),t=!0},p(n,d){const l={};d&1&&(l.product=n[6]),e.$set(l)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function at(r){let e,t,n,d,l,y,b,p,u,V,R,k,P,G,j,E,S,q,B,D,H,_,f,x,A,F,C,L,te,ae,Q,re,oe,Y,ne,z,N,se,Z,le,ue,O=r[0],g=[];for(let s=0;s<O.length;s+=1)g[s]=ke(Ve(r,O,s));const De=s=>de(g[s],1,1,()=>{g[s]=null});return{c(){e=h("meta"),t=$(),n=h("section"),d=h("div"),l=h("img"),b=$(),p=h("div"),u=h("img"),R=$(),k=h("div"),P=h("img"),j=$(),E=h("div"),S=h("h1"),q=T("Ready to relax and recharge?"),B=$(),D=h("h2"),H=T("Getting ready to step away from everyday life and recharge? Get your vacation essentials now!"),_=$(),f=h("div"),x=h("a"),A=T("Shop for your vacation"),F=$(),C=h("section"),L=h("p"),te=T("Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!"),ae=$(),Q=h("h2"),re=T("Featured essential products"),oe=$(),Y=h("div");for(let s=0;s<g.length;s+=1)g[s].c();ne=$(),z=h("div"),N=h("button"),se=T("Buy vacation essentials now"),this.h()},l(s){const w=Oe('[data-svelte="svelte-t32ptj"]',document.head);e=m(w,"META",{name:!0,content:!0}),w.forEach(c),t=I(s),n=m(s,"SECTION",{class:!0});var i=v(n);d=m(i,"DIV",{class:!0});var K=v(d);l=m(K,"IMG",{src:!0,class:!0,width:!0,alt:!0}),K.forEach(c),b=I(i),p=m(i,"DIV",{class:!0});var he=v(p);u=m(he,"IMG",{src:!0,class:!0,width:!0,alt:!0}),he.forEach(c),R=I(i),k=m(i,"DIV",{class:!0});var me=v(k);P=m(me,"IMG",{src:!0,class:!0,width:!0,alt:!0}),me.forEach(c),j=I(i),E=m(i,"DIV",{class:!0});var J=v(E);S=m(J,"H1",{class:!0});var fe=v(S);q=U(fe,"Ready to relax and recharge?"),fe.forEach(c),B=I(J),D=m(J,"H2",{class:!0});var ge=v(D);H=U(ge,"Getting ready to step away from everyday life and recharge? Get your vacation essentials now!"),ge.forEach(c),_=I(J),f=m(J,"DIV",{class:!0});var pe=v(f);x=m(pe,"A",{href:!0,class:!0});var ve=v(x);A=U(ve,"Shop for your vacation"),ve.forEach(c),pe.forEach(c),J.forEach(c),i.forEach(c),F=I(s),C=m(s,"SECTION",{class:!0});var M=v(C);L=m(M,"P",{class:!0});var _e=v(L);te=U(_e,"Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!"),_e.forEach(c),ae=I(M),Q=m(M,"H2",{class:!0});var ye=v(Q);re=U(ye,"Featured essential products"),ye.forEach(c),oe=I(M),Y=m(M,"DIV",{});var we=v(Y);for(let ie=0;ie<g.length;ie+=1)g[ie].l(we);we.forEach(c),ne=I(M),z=m(M,"DIV",{class:!0});var Ce=v(z);N=m(Ce,"BUTTON",{class:!0});var Ee=v(N);se=U(Ee,"Buy vacation essentials now"),Ee.forEach(c),Ce.forEach(c),M.forEach(c),this.h()},h(){document.title="Home",a(e,"name","description"),a(e,"content","Svelte demo app"),X(l.src,y="./a-beach-shack-on-stilts.jpg")||a(l,"src",y),a(l,"class","-rotate-6 rounded-md border-4 border-white m-2 w-72 shadow-sm"),a(l,"width","275"),a(l,"alt",""),a(d,"class","row-span-3 col-start-2 row-start-2 col-span-3 mt-4"),X(u.src,V="./standing-on-a-dock-close-up.jpg")||a(u,"src",V),a(u,"class","-rotate-12 rounded-md border-4 border-white m-2 w-64 shadow-sm"),a(u,"width","250"),a(u,"alt",""),a(p,"class","col-start-1 row-start-1 col-span-3 row-span-2 flex justify-end"),X(P.src,G="./vacation-town-stroll.jpg")||a(P,"src",G),a(P,"class","rotate-12 rounded-md border-4 border-white m-2 w-80 shadow-sm"),a(P,"width","275"),a(P,"alt",""),a(k,"class","row-span-2 col-start-3 row-start-1 col-span-2"),a(S,"class","text-3xl inline-block text-white"),a(D,"class","text-xl inline-block mt-2 text-white whitespace-normal"),a(x,"href","/"),a(x,"class","px-6 py-3 rounded-md bg-orange-500 shadow-md text-white"),a(f,"class","mt-6"),a(E,"class","header svelte-qoyqm9"),a(n,"class","hero svelte-qoyqm9"),a(L,"class","text-lg text-gray-600"),a(Q,"class","mt-12 text-2xl text-gray-600 uppercase"),a(N,"class","px-6 py-4 bg-green-800 text-white rounded-md uppercase tracking-wide"),a(z,"class","mt-12 flex align-middle justify-center"),a(C,"class","mt-7 px-8 py-4")},m(s,w){o(document.head,e),W(s,t,w),W(s,n,w),o(n,d),o(d,l),o(n,b),o(n,p),o(p,u),o(n,R),o(n,k),o(k,P),o(n,j),o(n,E),o(E,S),o(S,q),o(E,B),o(E,D),o(D,H),o(E,_),o(E,f),o(f,x),o(x,A),W(s,F,w),W(s,C,w),o(C,L),o(L,te),o(C,ae),o(C,Q),o(Q,re),o(C,oe),o(C,Y);for(let i=0;i<g.length;i+=1)g[i].m(Y,null);o(C,ne),o(C,z),o(z,N),o(N,se),Z=!0,le||(ue=Ae(N,"click",r[1]),le=!0)},p(s,[w]){if(w&1){O=s[0];let i;for(i=0;i<O.length;i+=1){const K=Ve(s,O,i);g[i]?(g[i].p(K,w),ee(g[i],1)):(g[i]=ke(K),g[i].c(),ee(g[i],1),g[i].m(Y,null))}for(ze(),i=O.length;i<g.length;i+=1)De(i);Le()}},i(s){if(!Z){for(let w=0;w<O.length;w+=1)ee(g[w]);Z=!0}},o(s){g=g.filter(Boolean);for(let w=0;w<g.length;w+=1)de(g[w]);Z=!1},d(s){c(e),s&&c(t),s&&c(n),s&&c(F),s&&c(C),Qe(g,s),le=!1,ue()}}}const dt=!0;async function ut(){const r=`
			query Collection($handle: String, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
			collection(handle: $handle) {
				id
				handle
				title
				products(first: 3) {
					nodes {
						id
						title
						description
						onlineStoreUrl
						featuredImage {
							id
							width
							height
							url
							altText
						}
						variants(first:1) {
							nodes {
								id
							}
						}
					}
				}
			}
		}
	`,{data:{collection:e},error:t}=await Je.query(r,{handle:"get-ready-for-vacation"}).toPromise();return{status:t||"ok",props:{collection:e}}}function rt(r,e){if(e.fetching||e.error)return r.products.nodes;const t=e.data.collection.products.nodes;return r.products.nodes.map(d=>{const l=t.find(y=>y.id===d.id).priceRange;return Ie($e({},d),{priceRange:l})})}function ot(r,e,t){let n,d;const l=Ke({query:`
		mutation CartCreate(
			$input: CartInput!
			$country: CountryCode
			$language: LanguageCode
		) @inContext(country: $country, language: $language) {
			cartCreate(input: $input) {
				userErrors {
					message
					code
					field
				}
				cart {
					id
					checkoutUrl
				}
			}
		}
	`});let{collection:y}=e;async function b(){const u=y.products.nodes.map(R=>({merchandiseId:R.variants.nodes[0].id,quantity:1})),V=await l({input:{lines:u}});V.data.cartCreate.cart.checkoutUrl?window.location.replace(V.data.cartCreate.cart.checkoutUrl):alert("Error creating cart - please try again!")}const p=We(`
			query Collection($handle: String, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
			collection(handle: $handle) {
				id
				handle
				title
				products(first: 3) {
					nodes {
						id
						priceRange {
							maxVariantPrice {
								currencyCode
								amount
							}
							minVariantPrice {
								currencyCode
								amount
							}
						}
					}
				}
			}
		}
	`,{handle:"get-ready-for-vacation"});return Ye(r,p,u=>t(4,d=u)),Xe(p),r.$$set=u=>{"collection"in u&&t(3,y=u.collection)},r.$$.update=()=>{r.$$.dirty&24&&t(0,n=rt(y,d))},[n,b,p,y,d]}class ht extends qe{constructor(e){super(),Re(this,e,ot,at,Se,{collection:3})}}export{ht as default,ut as load,dt as prerender};

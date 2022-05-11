var Te=Object.defineProperty,Ue=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var Ee=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var xe=(r,e,t)=>e in r?Te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$e=(r,e)=>{for(var t in e||(e={}))je.call(e,t)&&xe(r,t,e[t]);if(Ee)for(var t of Ee(e))Be.call(e,t)&&xe(r,t,e[t]);return r},Ie=(r,e)=>Ue(r,Ge(e));import{S as Re,i as Se,s as qe,e as h,k as $,t as j,c as m,a as v,m as I,h as B,d as c,P as X,b as a,g as W,H as n,j as ce,E as Pe,w as He,x as Me,y as Fe,q as ee,o as de,B as Ne,O as Oe,Q as Ae,p as Le,R as Qe,I as Ye,n as ze}from"../chunks/index-0678fdff.js";import{c as Je}from"../chunks/sfapi-4fe3a0b9.js";import{m as Ke,o as We,q as Xe}from"../chunks/urql-svelte-cb83f566.js";import"../chunks/index-01566ecb.js";function Ze(r){let e,t,o,d,l,y,b,g,u,V=r[0].title+"",S,k,P,U,G=r[0].description+"",C,q,D,H,R;return{c(){e=h("div"),t=h("img"),b=$(),g=h("div"),u=h("a"),S=j(V),P=$(),U=h("p"),C=j(G),q=$(),D=h("p"),H=j(r[1]),this.h()},l(_){e=m(_,"DIV",{class:!0,id:!0});var p=v(e);t=m(p,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),b=I(p),g=m(p,"DIV",{class:!0});var E=v(g);u=m(E,"A",{href:!0,target:!0,class:!0});var T=v(u);S=B(T,V),T.forEach(c),P=I(E),U=m(E,"P",{class:!0});var A=v(U);C=B(A,G),A.forEach(c),q=I(E),D=m(E,"P",{class:!0});var F=v(D);H=B(F,r[1]),F.forEach(c),E.forEach(c),p.forEach(c),this.h()},h(){X(t.src,o=r[2].url)||a(t,"src",o),a(t,"alt",d=r[2].altText),a(t,"width",l=r[2].width),a(t,"height",y=r[2].height),a(t,"class","block w-48 border-2 border-gray-200 rounded-md "),a(u,"href",k=r[0].onlineStoreUrl),a(u,"target","_blank"),a(u,"class","text-xl hover:underline text-green-800 hover:text-green-500"),a(U,"class","leading-relaxed mt-2"),a(D,"class","mt-3 text-lg font-semibold"),a(g,"class","ml-8 mt-3 text-gray-600"),a(e,"class","w-3/4 flex m-auto pt-6"),a(e,"id",R=`product-${r[0].id}`)},m(_,p){W(_,e,p),n(e,t),n(e,b),n(e,g),n(g,u),n(u,S),n(g,P),n(g,U),n(U,C),n(g,q),n(g,D),n(D,H)},p(_,[p]){p&4&&!X(t.src,o=_[2].url)&&a(t,"src",o),p&4&&d!==(d=_[2].altText)&&a(t,"alt",d),p&4&&l!==(l=_[2].width)&&a(t,"width",l),p&4&&y!==(y=_[2].height)&&a(t,"height",y),p&1&&V!==(V=_[0].title+"")&&ce(S,V),p&1&&k!==(k=_[0].onlineStoreUrl)&&a(u,"href",k),p&1&&G!==(G=_[0].description+"")&&ce(C,G),p&2&&ce(H,_[1]),p&1&&R!==(R=`product-${_[0].id}`)&&a(e,"id",R)},i:Pe,o:Pe,d(_){_&&c(e)}}}function et(r,e,t){let o,d,{product:l}=e;function y(b){return new Intl.NumberFormat("en-US",{style:"currency",currency:l.priceRange.minVariantPrice.currencyCode}).format(b)}return r.$$set=b=>{"product"in b&&t(0,l=b.product)},r.$$.update=()=>{r.$$.dirty&1&&t(2,o=l.featuredImage),r.$$.dirty&1&&t(1,d=l.priceRange.maxVariantPrice.amount===l.priceRange.minVariantPrice.amount?y(l.priceRange.maxVariantPrice.amount):`${y(l.priceRange.minVariantPrice.amount)} - ${y(l.priceRange.maxVariantPrice.amount)}`)},[l,d,o]}class tt extends Re{constructor(e){super(),Se(this,e,et,Ze,qe,{product:0})}}function Ve(r,e,t){const o=r.slice();return o[6]=e[t],o}function ke(r){let e,t;return e=new tt({props:{product:r[6]}}),{c(){He(e.$$.fragment)},l(o){Me(e.$$.fragment,o)},m(o,d){Fe(e,o,d),t=!0},p(o,d){const l={};d&1&&(l.product=o[6]),e.$set(l)},i(o){t||(ee(e.$$.fragment,o),t=!0)},o(o){de(e.$$.fragment,o),t=!1},d(o){Ne(e,o)}}}function at(r){let e,t,o,d,l,y,b,g,u,V,S,k,P,U,G,C,q,D,H,R,_,p,E,T,A,F,x,L,te,ae,Q,re,ne,Y,oe,z,N,se,Z,le,ue,O=r[0],f=[];for(let s=0;s<O.length;s+=1)f[s]=ke(Ve(r,O,s));const De=s=>de(f[s],1,1,()=>{f[s]=null});return{c(){e=h("meta"),t=$(),o=h("section"),d=h("div"),l=h("img"),b=$(),g=h("div"),u=h("img"),S=$(),k=h("div"),P=h("img"),G=$(),C=h("div"),q=h("h1"),D=j("Ready to relax and recharge?"),H=$(),R=h("h2"),_=j("Getting ready to step away from everyday life and recharge? Get your vacation essentials now!"),p=$(),E=h("div"),T=h("a"),A=j("Shop for your vacation"),F=$(),x=h("section"),L=h("p"),te=j("Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!"),ae=$(),Q=h("h2"),re=j("Featured essential products"),ne=$(),Y=h("div");for(let s=0;s<f.length;s+=1)f[s].c();oe=$(),z=h("div"),N=h("button"),se=j("Buy vacation essentials now"),this.h()},l(s){const w=Oe('[data-svelte="svelte-t32ptj"]',document.head);e=m(w,"META",{name:!0,content:!0}),w.forEach(c),t=I(s),o=m(s,"SECTION",{class:!0});var i=v(o);d=m(i,"DIV",{class:!0});var K=v(d);l=m(K,"IMG",{src:!0,class:!0,width:!0,alt:!0}),K.forEach(c),b=I(i),g=m(i,"DIV",{class:!0});var he=v(g);u=m(he,"IMG",{src:!0,class:!0,width:!0,alt:!0}),he.forEach(c),S=I(i),k=m(i,"DIV",{class:!0});var me=v(k);P=m(me,"IMG",{src:!0,class:!0,width:!0,alt:!0}),me.forEach(c),G=I(i),C=m(i,"DIV",{class:!0});var J=v(C);q=m(J,"H1",{class:!0});var fe=v(q);D=B(fe,"Ready to relax and recharge?"),fe.forEach(c),H=I(J),R=m(J,"H2",{class:!0});var ge=v(R);_=B(ge,"Getting ready to step away from everyday life and recharge? Get your vacation essentials now!"),ge.forEach(c),p=I(J),E=m(J,"DIV",{class:!0});var pe=v(E);T=m(pe,"A",{href:!0,class:!0});var ve=v(T);A=B(ve,"Shop for your vacation"),ve.forEach(c),pe.forEach(c),J.forEach(c),i.forEach(c),F=I(s),x=m(s,"SECTION",{class:!0});var M=v(x);L=m(M,"P",{class:!0});var _e=v(L);te=B(_e,"Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!"),_e.forEach(c),ae=I(M),Q=m(M,"H2",{class:!0});var ye=v(Q);re=B(ye,"Featured essential products"),ye.forEach(c),ne=I(M),Y=m(M,"DIV",{});var we=v(Y);for(let ie=0;ie<f.length;ie+=1)f[ie].l(we);we.forEach(c),oe=I(M),z=m(M,"DIV",{class:!0});var Ce=v(z);N=m(Ce,"BUTTON",{class:!0});var be=v(N);se=B(be,"Buy vacation essentials now"),be.forEach(c),Ce.forEach(c),M.forEach(c),this.h()},h(){document.title="Home",a(e,"name","description"),a(e,"content","Svelte demo app"),X(l.src,y="./a-beach-shack-on-stilts.jpg")||a(l,"src",y),a(l,"class","-rotate-6 rounded-md border-4 border-white m-2 w-72 shadow-sm"),a(l,"width","275"),a(l,"alt",""),a(d,"class","row-span-3 col-start-2 row-start-2 col-span-3 mt-4"),X(u.src,V="./standing-on-a-dock-close-up.jpg")||a(u,"src",V),a(u,"class","-rotate-12 rounded-md border-4 border-white m-2 w-64 shadow-sm"),a(u,"width","250"),a(u,"alt",""),a(g,"class","col-start-1 row-start-1 col-span-3 row-span-2 flex justify-end"),X(P.src,U="./vacation-town-stroll.jpg")||a(P,"src",U),a(P,"class","rotate-12 rounded-md border-4 border-white m-2 w-80 shadow-sm"),a(P,"width","275"),a(P,"alt",""),a(k,"class","row-span-2 col-start-3 row-start-1 col-span-2"),a(q,"class","text-3xl inline-block text-white"),a(R,"class","text-xl inline-block mt-2 text-white whitespace-normal"),a(T,"href","/"),a(T,"class","px-6 py-3 rounded-md bg-orange-500 shadow-md text-white"),a(E,"class","mt-6"),a(C,"class","header svelte-qoban2"),a(o,"class","hero svelte-qoban2"),a(L,"class","text-lg text-gray-600"),a(Q,"class","mt-12 text-2xl text-gray-600 uppercase"),a(N,"class","px-6 py-4 bg-green-800 text-white rounded-md uppercase tracking-wide"),a(z,"class","mt-12 flex align-middle justify-center"),a(x,"class","mt-7 px-8 py-4")},m(s,w){n(document.head,e),W(s,t,w),W(s,o,w),n(o,d),n(d,l),n(o,b),n(o,g),n(g,u),n(o,S),n(o,k),n(k,P),n(o,G),n(o,C),n(C,q),n(q,D),n(C,H),n(C,R),n(R,_),n(C,p),n(C,E),n(E,T),n(T,A),W(s,F,w),W(s,x,w),n(x,L),n(L,te),n(x,ae),n(x,Q),n(Q,re),n(x,ne),n(x,Y);for(let i=0;i<f.length;i+=1)f[i].m(Y,null);n(x,oe),n(x,z),n(z,N),n(N,se),Z=!0,le||(ue=Ae(N,"click",r[1]),le=!0)},p(s,[w]){if(w&1){O=s[0];let i;for(i=0;i<O.length;i+=1){const K=Ve(s,O,i);f[i]?(f[i].p(K,w),ee(f[i],1)):(f[i]=ke(K),f[i].c(),ee(f[i],1),f[i].m(Y,null))}for(ze(),i=O.length;i<f.length;i+=1)De(i);Le()}},i(s){if(!Z){for(let w=0;w<O.length;w+=1)ee(f[w]);Z=!0}},o(s){f=f.filter(Boolean);for(let w=0;w<f.length;w+=1)de(f[w]);Z=!1},d(s){c(e),s&&c(t),s&&c(o),s&&c(F),s&&c(x),Qe(f,s),le=!1,ue()}}}const dt=!0;async function ut(){const r=`
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
						variants(first:1) {
							nodes {
								id
							}
						}
					}
				}
			}
		}
	`,{data:{collection:e},error:t}=await Je.query(r,{handle:"get-ready-for-vacation"}).toPromise();return{status:t||"ok",props:{collection:e}}}function rt(r,e){if(e.fetching||e.error)return r.products.nodes;const t=e.data.collection.products.nodes;return r.products.nodes.map(d=>{const l=t.find(y=>y.id===d.id).priceRange;return Ie($e({},d),{priceRange:l})})}function nt(r,e,t){let o,d;const l=Ke({query:`
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
	`});let{collection:y}=e;async function b(){const u=y.products.nodes.map(S=>({merchandiseId:S.variants.nodes[0].id,quantity:1})),V=await l({input:{lines:u}});V.data.cartCreate.cart.checkoutUrl?window.location.replace(V.data.cartCreate.cart.checkoutUrl):alert("Error creating cart - please try again!")}const g=We(`
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
	`,{handle:"get-ready-for-vacation"});return Ye(r,g,u=>t(4,d=u)),Xe(g),r.$$set=u=>{"collection"in u&&t(3,y=u.collection)},r.$$.update=()=>{r.$$.dirty&24&&t(0,o=rt(y,d))},[o,b,g,y,d]}class ht extends Re{constructor(e){super(),Se(this,e,nt,at,qe,{collection:3})}}export{ht as default,ut as load,dt as prerender};

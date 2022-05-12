var De=Object.defineProperty,Te=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var Ee=(r,e,t)=>e in r?De(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$e=(r,e)=>{for(var t in e||(e={}))Ge.call(e,t)&&Ee(r,t,e[t]);if(Ce)for(var t of Ce(e))je.call(e,t)&&Ee(r,t,e[t]);return r},Ie=(r,e)=>Te(r,Ue(e));import{S as Re,i as Se,s as qe,e as h,k as $,t as D,c as m,a as v,m as I,h as T,d as c,P as X,b as a,g as W,H as o,j as ce,E as Pe,w as He,x as Me,y as Fe,q as ee,o as de,B as Ne,O as Oe,Q as Ae,p as Le,R as ze,I as Qe,n as Ye}from"../chunks/index-0678fdff.js";import{c as Je}from"../chunks/sfapi-4fe3a0b9.js";import{b as Ke}from"../chunks/paths-396f020f.js";import{m as We,o as Xe,q as Ze}from"../chunks/urql-svelte-cb83f566.js";import"../chunks/index-01566ecb.js";function et(r){let e,t,n,d,s,b,C,g,u,V=r[0].title+"",S,k,P,U,G=r[0].description+"",x,q,R,j,B,H;return{c(){e=h("div"),t=h("img"),C=$(),g=h("div"),u=h("a"),S=D(V),P=$(),U=h("p"),x=D(G),q=$(),R=h("p"),j=D(r[1]),B=D("\xA0"),this.h()},l(_){e=m(_,"DIV",{class:!0,id:!0});var p=v(e);t=m(p,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),C=I(p),g=m(p,"DIV",{class:!0});var E=v(g);u=m(E,"A",{href:!0,target:!0,class:!0});var A=v(u);S=T(A,V),A.forEach(c),P=I(E),U=m(E,"P",{class:!0});var F=v(U);x=T(F,G),F.forEach(c),q=I(E),R=m(E,"P",{class:!0});var w=v(R);j=T(w,r[1]),B=T(w,"\xA0"),w.forEach(c),E.forEach(c),p.forEach(c),this.h()},h(){X(t.src,n=r[2].url)||a(t,"src",n),a(t,"alt",d=r[2].altText),a(t,"width",s=r[2].width),a(t,"height",b=r[2].height),a(t,"class","block w-48 border-2 border-gray-200 rounded-md "),a(u,"href",k=r[0].onlineStoreUrl),a(u,"target","_blank"),a(u,"class","text-xl hover:underline text-green-800 hover:text-green-500"),a(U,"class","leading-relaxed mt-2"),a(R,"class","mt-3 text-lg font-semibold"),a(g,"class","ml-8 mt-3 text-gray-600"),a(e,"class","w-3/4 flex m-auto pt-6"),a(e,"id",H=`product-${r[0].id}`)},m(_,p){W(_,e,p),o(e,t),o(e,C),o(e,g),o(g,u),o(u,S),o(g,P),o(g,U),o(U,x),o(g,q),o(g,R),o(R,j),o(R,B)},p(_,[p]){p&4&&!X(t.src,n=_[2].url)&&a(t,"src",n),p&4&&d!==(d=_[2].altText)&&a(t,"alt",d),p&4&&s!==(s=_[2].width)&&a(t,"width",s),p&4&&b!==(b=_[2].height)&&a(t,"height",b),p&1&&V!==(V=_[0].title+"")&&ce(S,V),p&1&&k!==(k=_[0].onlineStoreUrl)&&a(u,"href",k),p&1&&G!==(G=_[0].description+"")&&ce(x,G),p&2&&ce(j,_[1]),p&1&&H!==(H=`product-${_[0].id}`)&&a(e,"id",H)},i:Pe,o:Pe,d(_){_&&c(e)}}}function tt(r,e,t){let n,d,{product:s}=e;function b(C){return new Intl.NumberFormat("en-US",{style:"currency",currency:s.priceRange.minVariantPrice.currencyCode}).format(C)}return r.$$set=C=>{"product"in C&&t(0,s=C.product)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=s.featuredImage),r.$$.dirty&1&&t(1,d=s.priceRange?s.priceRange.maxVariantPrice.amount===s.priceRange.minVariantPrice.amount?b(s.priceRange.maxVariantPrice.amount):`${b(s.priceRange.minVariantPrice.amount)} - ${b(s.priceRange.maxVariantPrice.amount)}`:"")},[s,d,n]}class at extends Re{constructor(e){super(),Se(this,e,tt,et,qe,{product:0})}}function Ve(r,e,t){const n=r.slice();return n[6]=e[t],n}function ke(r){let e,t;return e=new at({props:{product:r[6]}}),{c(){He(e.$$.fragment)},l(n){Me(e.$$.fragment,n)},m(n,d){Fe(e,n,d),t=!0},p(n,d){const s={};d&1&&(s.product=n[6]),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function rt(r){let e,t,n,d,s,b,C,g,u,V,S,k,P,U,G,x,q,R,j,B,H,_,p,E,A,F,w,L,te,ae,z,re,oe,Q,ne,Y,N,se,Z,le,ue,O=r[0],f=[];for(let l=0;l<O.length;l+=1)f[l]=ke(Ve(r,O,l));const Be=l=>de(f[l],1,1,()=>{f[l]=null});return{c(){e=h("meta"),t=$(),n=h("section"),d=h("div"),s=h("img"),C=$(),g=h("div"),u=h("img"),S=$(),k=h("div"),P=h("img"),G=$(),x=h("div"),q=h("h1"),R=D("Ready to relax and recharge?"),j=$(),B=h("h2"),H=D("Getting ready to step away from everyday life and recharge? Get your vacation essentials now!"),_=$(),p=h("div"),E=h("a"),A=D("Shop for your vacation"),F=$(),w=h("section"),L=h("p"),te=D("Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!"),ae=$(),z=h("h2"),re=D("Featured essential products"),oe=$(),Q=h("div");for(let l=0;l<f.length;l+=1)f[l].c();ne=$(),Y=h("div"),N=h("button"),se=D("Buy vacation essentials now"),this.h()},l(l){const y=Oe('[data-svelte="svelte-ql662g"]',document.head);e=m(y,"META",{name:!0,content:!0}),y.forEach(c),t=I(l),n=m(l,"SECTION",{style:!0,class:!0});var i=v(n);d=m(i,"DIV",{class:!0});var K=v(d);s=m(K,"IMG",{src:!0,class:!0,width:!0,alt:!0}),K.forEach(c),C=I(i),g=m(i,"DIV",{class:!0});var he=v(g);u=m(he,"IMG",{src:!0,class:!0,width:!0,alt:!0}),he.forEach(c),S=I(i),k=m(i,"DIV",{class:!0});var me=v(k);P=m(me,"IMG",{src:!0,class:!0,width:!0,alt:!0}),me.forEach(c),G=I(i),x=m(i,"DIV",{class:!0});var J=v(x);q=m(J,"H1",{class:!0});var pe=v(q);R=T(pe,"Ready to relax and recharge?"),pe.forEach(c),j=I(J),B=m(J,"H2",{class:!0});var fe=v(B);H=T(fe,"Getting ready to step away from everyday life and recharge? Get your vacation essentials now!"),fe.forEach(c),_=I(J),p=m(J,"DIV",{class:!0});var ge=v(p);E=m(ge,"A",{href:!0,class:!0});var ve=v(E);A=T(ve,"Shop for your vacation"),ve.forEach(c),ge.forEach(c),J.forEach(c),i.forEach(c),F=I(l),w=m(l,"SECTION",{class:!0});var M=v(w);L=m(M,"P",{class:!0});var _e=v(L);te=T(_e,"Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!"),_e.forEach(c),ae=I(M),z=m(M,"H2",{class:!0});var ye=v(z);re=T(ye,"Featured essential products"),ye.forEach(c),oe=I(M),Q=m(M,"DIV",{});var we=v(Q);for(let ie=0;ie<f.length;ie+=1)f[ie].l(we);we.forEach(c),ne=I(M),Y=m(M,"DIV",{class:!0});var be=v(Y);N=m(be,"BUTTON",{class:!0});var xe=v(N);se=T(xe,"Buy vacation essentials now"),xe.forEach(c),be.forEach(c),M.forEach(c),this.h()},h(){document.title="Be vacation ready",a(e,"name","description"),a(e,"content","Happy Breeze landing prototype"),X(s.src,b="./a-beach-shack-on-stilts.jpg")||a(s,"src",b),a(s,"class","-rotate-6 rounded-md border-4 border-white m-2 w-72 shadow-sm"),a(s,"width","275"),a(s,"alt",""),a(d,"class","row-span-3 col-start-2 row-start-2 col-span-3 mt-4"),X(u.src,V="./standing-on-a-dock-close-up.jpg")||a(u,"src",V),a(u,"class","-rotate-12 rounded-md border-4 border-white m-2 w-64 shadow-sm"),a(u,"width","250"),a(u,"alt",""),a(g,"class","col-start-1 row-start-1 col-span-3 row-span-2 flex justify-end"),X(P.src,U="./vacation-town-stroll.jpg")||a(P,"src",U),a(P,"class","rotate-12 rounded-md border-4 border-white m-2 w-80 shadow-sm mt-4"),a(P,"width","275"),a(P,"alt",""),a(k,"class","row-span-2 col-start-3 row-start-1 col-span-2"),a(q,"class","text-3xl inline-block text-white"),a(B,"class","text-xl inline-block mt-2 text-white whitespace-normal"),a(E,"href","https://happy-breeze.myshopify.com/"),a(E,"class","px-6 py-3 rounded-md bg-orange-500 shadow-md text-white"),a(p,"class","mt-6"),a(x,"class","header svelte-1n78wxi"),a(n,"style",`--bg-img-url: url("${Ke}/tropical-beach-sunrise.jpg");`),a(n,"class","hero svelte-1n78wxi"),a(L,"class","text-lg text-gray-600"),a(z,"class","mt-12 text-2xl text-gray-600 uppercase"),a(N,"class","px-6 py-4 bg-orange-500 text-white rounded-md uppercase tracking-wide"),a(Y,"class","mt-12 flex align-middle justify-center"),a(w,"class","mt-7 px-8 py-4")},m(l,y){o(document.head,e),W(l,t,y),W(l,n,y),o(n,d),o(d,s),o(n,C),o(n,g),o(g,u),o(n,S),o(n,k),o(k,P),o(n,G),o(n,x),o(x,q),o(q,R),o(x,j),o(x,B),o(B,H),o(x,_),o(x,p),o(p,E),o(E,A),W(l,F,y),W(l,w,y),o(w,L),o(L,te),o(w,ae),o(w,z),o(z,re),o(w,oe),o(w,Q);for(let i=0;i<f.length;i+=1)f[i].m(Q,null);o(w,ne),o(w,Y),o(Y,N),o(N,se),Z=!0,le||(ue=Ae(N,"click",r[1]),le=!0)},p(l,[y]){if(y&1){O=l[0];let i;for(i=0;i<O.length;i+=1){const K=Ve(l,O,i);f[i]?(f[i].p(K,y),ee(f[i],1)):(f[i]=ke(K),f[i].c(),ee(f[i],1),f[i].m(Q,null))}for(Ye(),i=O.length;i<f.length;i+=1)Be(i);Le()}},i(l){if(!Z){for(let y=0;y<O.length;y+=1)ee(f[y]);Z=!0}},o(l){f=f.filter(Boolean);for(let y=0;y<f.length;y+=1)de(f[y]);Z=!1},d(l){c(e),l&&c(t),l&&c(n),l&&c(F),l&&c(w),ze(f,l),le=!1,ue()}}}const ht=!0;async function mt(){const r=`
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
	`,{data:{collection:e},error:t}=await Je.query(r,{handle:"get-ready-for-vacation"}).toPromise();return{status:t||"ok",props:{collection:e}}}function ot(r,e){if(e.fetching||e.error)return r.products.nodes;const t=e.data.collection.products.nodes;return r.products.nodes.map(d=>{const s=t.find(b=>b.id===d.id).priceRange;return Ie($e({},d),{priceRange:s})})}function nt(r,e,t){let n,d,{collection:s}=e;const b=We({query:`
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
		`});async function C(){const u=s.products.nodes.map(S=>({merchandiseId:S.variants.nodes[0].id,quantity:1})),V=await b({input:{lines:u}});V.data.cartCreate.cart.checkoutUrl?window.location.replace(V.data.cartCreate.cart.checkoutUrl):alert("Error creating cart - please try again!")}const g=Xe(`
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
	`,{handle:"get-ready-for-vacation"});return Qe(r,g,u=>t(4,d=u)),Ze(g),r.$$set=u=>{"collection"in u&&t(3,s=u.collection)},r.$$.update=()=>{r.$$.dirty&24&&t(0,n=ot(s,d))},[n,C,g,s,d]}class pt extends Re{constructor(e){super(),Se(this,e,nt,rt,qe,{collection:3})}}export{pt as default,mt as load,ht as prerender};

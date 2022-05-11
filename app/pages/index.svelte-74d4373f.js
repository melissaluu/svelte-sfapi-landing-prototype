var De=Object.defineProperty,Te=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var xe=(r,e,t)=>e in r?De(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$e=(r,e)=>{for(var t in e||(e={}))je.call(e,t)&&xe(r,t,e[t]);if(be)for(var t of be(e))Ge.call(e,t)&&xe(r,t,e[t]);return r},Ie=(r,e)=>Te(r,Ue(e));import{S as Re,i as qe,s as Se,e as h,k as $,t as D,c as m,a as v,m as I,h as T,d as c,P as X,b as a,g as W,H as n,j as ce,E as ke,w as He,x as Me,y as Fe,q as ee,o as de,B as Ne,O as Oe,Q as Ae,p as Le,R as Qe,I as ze,n as Ye}from"../chunks/index-0678fdff.js";import{c as Je}from"../chunks/sfapi-4fe3a0b9.js";import{m as Ke,o as We,q as Xe}from"../chunks/urql-svelte-cb83f566.js";import"../chunks/index-01566ecb.js";function Ze(r){let e,t,o,d,s,C,b,p,u,P=r[0].title+"",q,V,k,U,j=r[0].description+"",E,S,R,G,B,H;return{c(){e=h("div"),t=h("img"),b=$(),p=h("div"),u=h("a"),q=D(P),k=$(),U=h("p"),E=D(j),S=$(),R=h("p"),G=D(r[1]),B=D("\xA0"),this.h()},l(_){e=m(_,"DIV",{class:!0,id:!0});var f=v(e);t=m(f,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),b=I(f),p=m(f,"DIV",{class:!0});var x=v(p);u=m(x,"A",{href:!0,target:!0,class:!0});var A=v(u);q=T(A,P),A.forEach(c),k=I(x),U=m(x,"P",{class:!0});var F=v(U);E=T(F,j),F.forEach(c),S=I(x),R=m(x,"P",{class:!0});var w=v(R);G=T(w,r[1]),B=T(w,"\xA0"),w.forEach(c),x.forEach(c),f.forEach(c),this.h()},h(){X(t.src,o=r[2].url)||a(t,"src",o),a(t,"alt",d=r[2].altText),a(t,"width",s=r[2].width),a(t,"height",C=r[2].height),a(t,"class","block w-48 border-2 border-gray-200 rounded-md "),a(u,"href",V=r[0].onlineStoreUrl),a(u,"target","_blank"),a(u,"class","text-xl hover:underline text-green-800 hover:text-green-500"),a(U,"class","leading-relaxed mt-2"),a(R,"class","mt-3 text-lg font-semibold"),a(p,"class","ml-8 mt-3 text-gray-600"),a(e,"class","w-3/4 flex m-auto pt-6"),a(e,"id",H=`product-${r[0].id}`)},m(_,f){W(_,e,f),n(e,t),n(e,b),n(e,p),n(p,u),n(u,q),n(p,k),n(p,U),n(U,E),n(p,S),n(p,R),n(R,G),n(R,B)},p(_,[f]){f&4&&!X(t.src,o=_[2].url)&&a(t,"src",o),f&4&&d!==(d=_[2].altText)&&a(t,"alt",d),f&4&&s!==(s=_[2].width)&&a(t,"width",s),f&4&&C!==(C=_[2].height)&&a(t,"height",C),f&1&&P!==(P=_[0].title+"")&&ce(q,P),f&1&&V!==(V=_[0].onlineStoreUrl)&&a(u,"href",V),f&1&&j!==(j=_[0].description+"")&&ce(E,j),f&2&&ce(G,_[1]),f&1&&H!==(H=`product-${_[0].id}`)&&a(e,"id",H)},i:ke,o:ke,d(_){_&&c(e)}}}function et(r,e,t){let o,d,{product:s}=e;function C(b){return new Intl.NumberFormat("en-US",{style:"currency",currency:s.priceRange.minVariantPrice.currencyCode}).format(b)}return r.$$set=b=>{"product"in b&&t(0,s=b.product)},r.$$.update=()=>{r.$$.dirty&1&&t(2,o=s.featuredImage),r.$$.dirty&1&&t(1,d=s.priceRange?s.priceRange.maxVariantPrice.amount===s.priceRange.minVariantPrice.amount?C(s.priceRange.maxVariantPrice.amount):`${C(s.priceRange.minVariantPrice.amount)} - ${C(s.priceRange.maxVariantPrice.amount)}`:"")},[s,d,o]}class tt extends Re{constructor(e){super(),qe(this,e,et,Ze,Se,{product:0})}}function Pe(r,e,t){const o=r.slice();return o[6]=e[t],o}function Ve(r){let e,t;return e=new tt({props:{product:r[6]}}),{c(){He(e.$$.fragment)},l(o){Me(e.$$.fragment,o)},m(o,d){Fe(e,o,d),t=!0},p(o,d){const s={};d&1&&(s.product=o[6]),e.$set(s)},i(o){t||(ee(e.$$.fragment,o),t=!0)},o(o){de(e.$$.fragment,o),t=!1},d(o){Ne(e,o)}}}function at(r){let e,t,o,d,s,C,b,p,u,P,q,V,k,U,j,E,S,R,G,B,H,_,f,x,A,F,w,L,te,ae,Q,re,ne,z,oe,Y,N,se,Z,le,ue,O=r[0],g=[];for(let l=0;l<O.length;l+=1)g[l]=Ve(Pe(r,O,l));const Be=l=>de(g[l],1,1,()=>{g[l]=null});return{c(){e=h("meta"),t=$(),o=h("section"),d=h("div"),s=h("img"),b=$(),p=h("div"),u=h("img"),q=$(),V=h("div"),k=h("img"),j=$(),E=h("div"),S=h("h1"),R=D("Ready to relax and recharge?"),G=$(),B=h("h2"),H=D("Getting ready to step away from everyday life and recharge? Get your vacation essentials now!"),_=$(),f=h("div"),x=h("a"),A=D("Shop for your vacation"),F=$(),w=h("section"),L=h("p"),te=D("Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!"),ae=$(),Q=h("h2"),re=D("Featured essential products"),ne=$(),z=h("div");for(let l=0;l<g.length;l+=1)g[l].c();oe=$(),Y=h("div"),N=h("button"),se=D("Buy vacation essentials now"),this.h()},l(l){const y=Oe('[data-svelte="svelte-ql662g"]',document.head);e=m(y,"META",{name:!0,content:!0}),y.forEach(c),t=I(l),o=m(l,"SECTION",{class:!0});var i=v(o);d=m(i,"DIV",{class:!0});var K=v(d);s=m(K,"IMG",{src:!0,class:!0,width:!0,alt:!0}),K.forEach(c),b=I(i),p=m(i,"DIV",{class:!0});var he=v(p);u=m(he,"IMG",{src:!0,class:!0,width:!0,alt:!0}),he.forEach(c),q=I(i),V=m(i,"DIV",{class:!0});var me=v(V);k=m(me,"IMG",{src:!0,class:!0,width:!0,alt:!0}),me.forEach(c),j=I(i),E=m(i,"DIV",{class:!0});var J=v(E);S=m(J,"H1",{class:!0});var fe=v(S);R=T(fe,"Ready to relax and recharge?"),fe.forEach(c),G=I(J),B=m(J,"H2",{class:!0});var ge=v(B);H=T(ge,"Getting ready to step away from everyday life and recharge? Get your vacation essentials now!"),ge.forEach(c),_=I(J),f=m(J,"DIV",{class:!0});var pe=v(f);x=m(pe,"A",{href:!0,class:!0});var ve=v(x);A=T(ve,"Shop for your vacation"),ve.forEach(c),pe.forEach(c),J.forEach(c),i.forEach(c),F=I(l),w=m(l,"SECTION",{class:!0});var M=v(w);L=m(M,"P",{class:!0});var _e=v(L);te=T(_e,"Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!"),_e.forEach(c),ae=I(M),Q=m(M,"H2",{class:!0});var ye=v(Q);re=T(ye,"Featured essential products"),ye.forEach(c),ne=I(M),z=m(M,"DIV",{});var we=v(z);for(let ie=0;ie<g.length;ie+=1)g[ie].l(we);we.forEach(c),oe=I(M),Y=m(M,"DIV",{class:!0});var Ce=v(Y);N=m(Ce,"BUTTON",{class:!0});var Ee=v(N);se=T(Ee,"Buy vacation essentials now"),Ee.forEach(c),Ce.forEach(c),M.forEach(c),this.h()},h(){document.title="Be vacation ready",a(e,"name","description"),a(e,"content","Happy Breeze landing prototype"),X(s.src,C="./a-beach-shack-on-stilts.jpg")||a(s,"src",C),a(s,"class","-rotate-6 rounded-md border-4 border-white m-2 w-72 shadow-sm"),a(s,"width","275"),a(s,"alt",""),a(d,"class","row-span-3 col-start-2 row-start-2 col-span-3 mt-4"),X(u.src,P="./standing-on-a-dock-close-up.jpg")||a(u,"src",P),a(u,"class","-rotate-12 rounded-md border-4 border-white m-2 w-64 shadow-sm"),a(u,"width","250"),a(u,"alt",""),a(p,"class","col-start-1 row-start-1 col-span-3 row-span-2 flex justify-end"),X(k.src,U="./vacation-town-stroll.jpg")||a(k,"src",U),a(k,"class","rotate-12 rounded-md border-4 border-white m-2 w-80 shadow-sm mt-4"),a(k,"width","275"),a(k,"alt",""),a(V,"class","row-span-2 col-start-3 row-start-1 col-span-2"),a(S,"class","text-3xl inline-block text-white"),a(B,"class","text-xl inline-block mt-2 text-white whitespace-normal"),a(x,"href","/"),a(x,"class","px-6 py-3 rounded-md bg-orange-500 shadow-md text-white"),a(f,"class","mt-6"),a(E,"class","header svelte-jq28kn"),a(o,"class","hero svelte-jq28kn"),a(L,"class","text-lg text-gray-600"),a(Q,"class","mt-12 text-2xl text-gray-600 uppercase"),a(N,"class","px-6 py-4 bg-green-800 text-white rounded-md uppercase tracking-wide"),a(Y,"class","mt-12 flex align-middle justify-center"),a(w,"class","mt-7 px-8 py-4")},m(l,y){n(document.head,e),W(l,t,y),W(l,o,y),n(o,d),n(d,s),n(o,b),n(o,p),n(p,u),n(o,q),n(o,V),n(V,k),n(o,j),n(o,E),n(E,S),n(S,R),n(E,G),n(E,B),n(B,H),n(E,_),n(E,f),n(f,x),n(x,A),W(l,F,y),W(l,w,y),n(w,L),n(L,te),n(w,ae),n(w,Q),n(Q,re),n(w,ne),n(w,z);for(let i=0;i<g.length;i+=1)g[i].m(z,null);n(w,oe),n(w,Y),n(Y,N),n(N,se),Z=!0,le||(ue=Ae(N,"click",r[1]),le=!0)},p(l,[y]){if(y&1){O=l[0];let i;for(i=0;i<O.length;i+=1){const K=Pe(l,O,i);g[i]?(g[i].p(K,y),ee(g[i],1)):(g[i]=Ve(K),g[i].c(),ee(g[i],1),g[i].m(z,null))}for(Ye(),i=O.length;i<g.length;i+=1)Be(i);Le()}},i(l){if(!Z){for(let y=0;y<O.length;y+=1)ee(g[y]);Z=!0}},o(l){g=g.filter(Boolean);for(let y=0;y<g.length;y+=1)de(g[y]);Z=!1},d(l){c(e),l&&c(t),l&&c(o),l&&c(F),l&&c(w),Qe(g,l),le=!1,ue()}}}const dt=!0;async function ut(){const r=`
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
	`,{data:{collection:e},error:t}=await Je.query(r,{handle:"get-ready-for-vacation"}).toPromise();return{status:t||"ok",props:{collection:e}}}function rt(r,e){if(e.fetching||e.error)return r.products.nodes;const t=e.data.collection.products.nodes;return r.products.nodes.map(d=>{const s=t.find(C=>C.id===d.id).priceRange;return Ie($e({},d),{priceRange:s})})}function nt(r,e,t){let o,d,{collection:s}=e;const C=Ke({query:`
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
		`});async function b(){const u=s.products.nodes.map(q=>({merchandiseId:q.variants.nodes[0].id,quantity:1})),P=await C({input:{lines:u}});P.data.cartCreate.cart.checkoutUrl?window.location.replace(P.data.cartCreate.cart.checkoutUrl):alert("Error creating cart - please try again!")}const p=We(`
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
	`,{handle:"get-ready-for-vacation"});return ze(r,p,u=>t(4,d=u)),Xe(p),r.$$set=u=>{"collection"in u&&t(3,s=u.collection)},r.$$.update=()=>{r.$$.dirty&24&&t(0,o=rt(s,d))},[o,b,p,s,d]}class ht extends Re{constructor(e){super(),qe(this,e,nt,at,Se,{collection:3})}}export{ht as default,ut as load,dt as prerender};

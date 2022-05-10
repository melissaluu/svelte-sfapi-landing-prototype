import{T as Q,U as oe,S as ee,i as te,s as se,e as v,G as H,k as q,t as D,c as g,a as _,H as A,d as c,m as C,h as L,b as l,f as X,g as U,K as a,V as Y,j as W,E as z,W as ne,L as re,w as ae,R as le,x as ie,I as ce,y as de,q as ue,o as fe,B as pe}from"../chunks/index-86598e45.js";import{w as he}from"../chunks/index-cc9c1da0.js";import{o as me,q as _e}from"../chunks/urql-svelte-d84e47bd.js";function Z(o){return Object.prototype.toString.call(o)==="[object Date]"}function F(o,t,e,s){if(typeof e=="number"||Z(e)){const r=s-e,n=(e-t)/(o.dt||1/60),d=o.opts.stiffness*r,i=o.opts.damping*n,b=(d-i)*o.inv_mass,u=(n+b)*o.dt;return Math.abs(u)<o.opts.precision&&Math.abs(r)<o.opts.precision?s:(o.settled=!1,Z(e)?new Date(e.getTime()+u):e+u)}else{if(Array.isArray(e))return e.map((r,n)=>F(o,t[n],e[n],s[n]));if(typeof e=="object"){const r={};for(const n in e)r[n]=F(o,t[n],e[n],s[n]);return r}else throw new Error(`Cannot spring ${typeof e} values`)}}function ve(o,t={}){const e=he(o),{stiffness:s=.15,damping:r=.8,precision:n=.01}=t;let d,i,b,u=o,$=o,x=1,S=0,E=!1;function j(p,h={}){$=p;const k=b={};if(o==null||h.hard||T.stiffness>=1&&T.damping>=1)return E=!0,d=Q(),u=p,e.set(o=$),Promise.resolve();if(h.soft){const w=h.soft===!0?.5:+h.soft;S=1/(w*60),x=0}return i||(d=Q(),E=!1,i=oe(w=>{if(E)return E=!1,i=null,!1;x=Math.min(x+S,1);const O={inv_mass:x,opts:T,settled:!0,dt:(w-d)*60/1e3},m=F(O,u,o,$);return d=w,u=o,e.set(o=m),O.settled&&(i=null),!O.settled})),new Promise(w=>{i.promise.then(()=>{k===b&&w()})})}const T={set:j,update:(p,h)=>j(p($,o),h),subscribe:e.subscribe,stiffness:s,damping:r,precision:n};return T}function ge(o){let t,e,s,r,n,d,i,b,u=Math.floor(o[1]+1)+"",$,x,S,E=Math.floor(o[1])+"",j,T,p,h,k,w,O;return{c(){t=v("div"),e=v("button"),s=H("svg"),r=H("path"),n=q(),d=v("div"),i=v("div"),b=v("strong"),$=D(u),x=q(),S=v("strong"),j=D(E),T=q(),p=v("button"),h=H("svg"),k=H("path"),this.h()},l(m){t=g(m,"DIV",{class:!0});var y=_(t);e=g(y,"BUTTON",{"aria-label":!0,class:!0});var G=_(e);s=A(G,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var N=_(s);r=A(N,"path",{d:!0,class:!0}),_(r).forEach(c),N.forEach(c),G.forEach(c),n=C(y),d=g(y,"DIV",{class:!0});var M=_(d);i=g(M,"DIV",{class:!0,style:!0});var f=_(i);b=g(f,"STRONG",{class:!0,"aria-hidden":!0});var I=_(b);$=L(I,u),I.forEach(c),x=C(f),S=g(f,"STRONG",{class:!0});var B=_(S);j=L(B,E),B.forEach(c),f.forEach(c),M.forEach(c),T=C(y),p=g(y,"BUTTON",{"aria-label":!0,class:!0});var R=_(p);h=A(R,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var P=_(h);k=A(P,"path",{d:!0,class:!0}),_(k).forEach(c),P.forEach(c),R.forEach(c),y.forEach(c),this.h()},h(){l(r,"d","M0,0.5 L1,0.5"),l(r,"class","svelte-sx9eo4"),l(s,"aria-hidden","true"),l(s,"viewBox","0 0 1 1"),l(s,"class","svelte-sx9eo4"),l(e,"aria-label","Decrease the counter by one"),l(e,"class","svelte-sx9eo4"),l(b,"class","hidden svelte-sx9eo4"),l(b,"aria-hidden","true"),l(S,"class","svelte-sx9eo4"),l(i,"class","counter-digits svelte-sx9eo4"),X(i,"transform","translate(0, "+100*o[2]+"%)"),l(d,"class","counter-viewport svelte-sx9eo4"),l(k,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),l(k,"class","svelte-sx9eo4"),l(h,"aria-hidden","true"),l(h,"viewBox","0 0 1 1"),l(h,"class","svelte-sx9eo4"),l(p,"aria-label","Increase the counter by one"),l(p,"class","svelte-sx9eo4"),l(t,"class","counter svelte-sx9eo4")},m(m,y){U(m,t,y),a(t,e),a(e,s),a(s,r),a(t,n),a(t,d),a(d,i),a(i,b),a(b,$),a(i,x),a(i,S),a(S,j),a(t,T),a(t,p),a(p,h),a(h,k),w||(O=[Y(e,"click",o[4]),Y(p,"click",o[5])],w=!0)},p(m,[y]){y&2&&u!==(u=Math.floor(m[1]+1)+"")&&W($,u),y&2&&E!==(E=Math.floor(m[1])+"")&&W(j,E),y&4&&X(i,"transform","translate(0, "+100*m[2]+"%)")},i:z,o:z,d(m){m&&c(t),w=!1,ne(O)}}}function be(o,t){return(o%t+t)%t}function ye(o,t,e){let s,r,n=0;const d=ve();re(o,d,u=>e(1,r=u));const i=()=>e(0,n-=1),b=()=>e(0,n+=1);return o.$$.update=()=>{o.$$.dirty&1&&d.set(n),o.$$.dirty&2&&e(2,s=be(r,1))},[n,r,s,d,i,b]}class Ee extends ee{constructor(t){super(),te(this,t,ye,ge,se,{})}}function ke(o){let t,e=o[0].data.shop.name+"",s;return{c(){t=v("p"),s=D(e)},l(r){t=g(r,"P",{});var n=_(t);s=L(n,e),n.forEach(c)},m(r,n){U(r,t,n),a(t,s)},p(r,n){n&1&&e!==(e=r[0].data.shop.name+"")&&W(s,e)},d(r){r&&c(t)}}}function we(o){let t,e;return{c(){t=v("p"),e=D("Loading")},l(s){t=g(s,"P",{});var r=_(t);e=L(r,"Loading"),r.forEach(c)},m(s,r){U(s,t,r),a(t,e)},p:z,d(s){s&&c(t)}}}function Me(o){let t,e,s,r,n,d,i,b,u,$,x,S,E,j,T,p,h,k,w,O,m,y;function G(f,I){return f[0].fetching?we:ke}let N=G(o),M=N(o);return m=new Ee({}),{c(){t=v("meta"),e=q(),s=v("section"),r=v("h1"),n=v("div"),d=v("picture"),i=v("source"),b=q(),u=v("img"),x=D(`

		to your new`),S=v("br"),E=D("SvelteKit app"),j=q(),M.c(),T=q(),p=v("h2"),h=D("try editing "),k=v("strong"),w=D("src/routes/index.svelte"),O=q(),ae(m.$$.fragment),this.h()},l(f){const I=le('[data-svelte="svelte-t32ptj"]',document.head);t=g(I,"META",{name:!0,content:!0}),I.forEach(c),e=C(f),s=g(f,"SECTION",{class:!0});var B=_(s);r=g(B,"H1",{class:!0});var R=_(r);n=g(R,"DIV",{class:!0});var P=_(n);d=g(P,"PICTURE",{});var V=_(d);i=g(V,"SOURCE",{srcset:!0,type:!0}),b=C(V),u=g(V,"IMG",{src:!0,alt:!0,class:!0}),V.forEach(c),P.forEach(c),x=L(R,`

		to your new`),S=g(R,"BR",{}),E=L(R,"SvelteKit app"),R.forEach(c),j=C(B),M.l(B),T=C(B),p=g(B,"H2",{});var K=_(p);h=L(K,"try editing "),k=g(K,"STRONG",{});var J=_(k);w=L(J,"src/routes/index.svelte"),J.forEach(c),K.forEach(c),O=C(B),ie(m.$$.fragment,B),B.forEach(c),this.h()},h(){document.title="Home",l(t,"name","description"),l(t,"content","Svelte demo app"),l(i,"srcset","svelte-welcome.webp"),l(i,"type","image/webp"),ce(u.src,$="svelte-welcome.png")||l(u,"src",$),l(u,"alt","Welcome"),l(u,"class","svelte-mjk9ig"),l(n,"class","welcome svelte-mjk9ig"),l(r,"class","svelte-mjk9ig"),l(s,"class","svelte-mjk9ig")},m(f,I){a(document.head,t),U(f,e,I),U(f,s,I),a(s,r),a(r,n),a(n,d),a(d,i),a(d,b),a(d,u),a(r,x),a(r,S),a(r,E),a(s,j),M.m(s,null),a(s,T),a(s,p),a(p,h),a(p,k),a(k,w),a(s,O),de(m,s,null),y=!0},p(f,[I]){N===(N=G(f))&&M?M.p(f,I):(M.d(1),M=N(f),M&&(M.c(),M.m(s,T)))},i(f){y||(ue(m.$$.fragment,f),y=!0)},o(f){fe(m.$$.fragment,f),y=!1},d(f){c(t),f&&c(e),f&&c(s),M.d(),pe(m)}}}const je=!0;function Se(o,t,e){let s;const r=me(`
	query {
		shop {
			id
			name
			description
		}
	}
`);return re(o,r,n=>e(0,s=n)),_e(r),[s,r]}class Ie extends ee{constructor(t){super(),te(this,t,Se,Me,se,{})}}export{Ie as default,je as prerender};

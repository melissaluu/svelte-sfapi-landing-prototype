import{t as p,a as h,b,s as x,J as d,N as $,d as k,K as C,f as l,e as O,m as j,g as w}from"./sfapi-4fe3a0b9.js";import{w as P}from"./index-01566ecb.js";import{F as _,N,r as S}from"./index-0678fdff.js";function v(){return(v=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n}).apply(this,arguments)}var y=function(){};function V(n,i,a){var e={query:n,variables:i||null,context:a},t={stale:!1,fetching:!1,data:void 0,error:void 0,extensions:void 0},o=P(t),f=!1;return t.set=function(r){if(!(!r||r===t)){f=!0;var c=!1;if("query"in r||"variables"in r){var q=b(e.query,e.variables),m=b(r.query||e.query,r.variables||e.variables);q.key!==m.key&&(c=!0,e.query=r.query||e.query,e.variables=r.variables||e.variables||null)}"context"in r&&x(e.context)!==x(r.context)&&(c=!0,e.context=r.context);for(var u in r)u==="query"||u==="variables"||u==="context"||(u==="fetching"?t[u]=!!r[u]:u in t&&(t[u]=r[u]),c=!0);t.stale=!!r.stale,f=!1,c&&o.set(t)}},t.update=function(r){t.set(r(t))},t.subscribe=function(r,c){return o.subscribe(r,c)},t.reexecute=function(s){e.context=v({},s||e.context),o.set(t)},Object.keys(e).forEach(function(s){Object.defineProperty(t,s,{configurable:!1,get:function(){return e[s]},set:function(c){e[s]=c,f||o.set(t)}})}),t}function g(){return _("$$_urql")}function D(n){S("$$_urql",n)}function Q(n){var i=new d(n);return D(i),i}var E={fetching:!1,stale:!1,error:void 0,data:void 0,extensions:void 0};function F(n){return w(function(i){var a,e={};return n.subscribe(function(t){var o=b(t.query,t.variables);((o.context=t.context)!==e||o.key!==a)&&(a=o.key,e=t.context,i.next(o))})})}function R(n){var i=g(),a=$(function(e){n.set(e)})(k(function(e,t){return v({},e,t)},E)(C(function(e){return e.context&&e.context.pause?l({fetching:!1,stale:!1}):O([l({fetching:!0,stale:!1}),j(function(t){return v({},{fetching:!1},t,{stale:!!t.stale})})(i.executeQuery(e,e.context)),l({fetching:!1,stale:!1})])})(F(n))));return N(a.unsubscribe),n}function z(n){var i=g(),a=typeof n.subscribe!="function"?V(n.query,n.variables):n;return function(e,t){var o={fetching:!0,variables:e||a.variables,context:t||a.context};return y(o),a.set(o),p(h(1)(i.executeMutation(b(a.query,a.variables||{}),a.context))).then(function(f){var s=v({},{fetching:!1},f);return y(s),a.set(s),a})}}export{Q as i,z as m,V as o,R as q};

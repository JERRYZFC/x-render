(window.webpackJsonp=window.webpackJsonp||[]).push([[47,13],{"0zqC":function(En,un,e){"use strict";e.r(un);var V=e("tJVT"),n=e("q1tI"),O=e.n(n),W=e("wx14"),ue=e("rePB"),J=e("ODXe"),Ie=e("U8pU"),Ee=e("Ff2n"),oe=e("VTBJ"),xn=e("TSYQ"),je=e.n(xn),jn=e("Zm9Q"),Dn=e("5Z9U"),pn=e("6cGi"),an=e("KQm4"),Ve=e("wgJM"),An=e("t23M");function Pn(a){var l=Object(n.useRef)(),y=Object(n.useRef)(!1);function R(){for(var E=arguments.length,C=new Array(E),P=0;P<E;P++)C[P]=arguments[P];y.current||(Ve.a.cancel(l.current),l.current=Object(Ve.a)(function(){a.apply(void 0,C)}))}return Object(n.useEffect)(function(){return function(){y.current=!0,Ve.a.cancel(l.current)}},[]),R}function hn(a){var l=Object(n.useRef)([]),y=Object(n.useState)({}),R=Object(J.a)(y,2),E=R[1],C=Object(n.useRef)(typeof a=="function"?a():a),P=Pn(function(){var K=C.current;l.current.forEach(function(x){K=x(K)}),l.current=[],C.current=K,E({})});function A(K){l.current.push(K),P()}return[C.current,A]}var Fe=e("4IlW");function qn(a,l){var y,R=a.prefixCls,E=a.id,C=a.active,P=a.rtl,A=a.tab,K=A.key,x=A.tab,$=A.disabled,G=A.closeIcon,U=a.tabBarGutter,re=a.tabPosition,Y=a.closable,X=a.renderWrapper,se=a.removeAriaLabel,z=a.editable,q=a.onClick,ne=a.onRemove,Q=a.onFocus,ae="".concat(R,"-tab");n.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[P?"marginLeft":"marginRight"]=U:k.marginBottom=U;var he=z&&Y!==!1&&!$;function _(te){$||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var de=n.createElement("div",{key:K,ref:l,className:je()(ae,(y={},Object(ue.a)(y,"".concat(ae,"-with-remove"),he),Object(ue.a)(y,"".concat(ae,"-active"),C),Object(ue.a)(y,"".concat(ae,"-disabled"),$),y)),style:k,onClick:_},n.createElement("div",{role:"tab","aria-selected":C,id:E&&"".concat(E,"-tab-").concat(K),className:"".concat(ae,"-btn"),"aria-controls":E&&"".concat(E,"-panel-").concat(K),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),_(H)},onKeyDown:function(H){[Fe.a.SPACE,Fe.a.ENTER].includes(H.which)&&(H.preventDefault(),_(H))},onFocus:Q},x),he&&n.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(H){H.stopPropagation(),le(H)}},G||z.removeIcon||"\xD7"));return X&&(de=X(de)),de}var wn=n.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function ot(a,l,y){return Object(n.useMemo)(function(){for(var R,E=new Map,C=l.get((R=a[0])===null||R===void 0?void 0:R.key)||_n,P=C.left+C.width,A=0;A<a.length;A+=1){var K=a[A].key,x=l.get(K);if(!x){var $;x=l.get(($=a[A-1])===null||$===void 0?void 0:$.key)||_n}var G=E.get(K)||Object(oe.a)({},x);G.right=P-G.left-G.width,E.set(K,G)}return E},[a.map(function(R){return R.key}).join("_"),l,y])}var et={width:0,height:0,left:0,top:0,right:0};function lt(a,l,y,R,E){var C=E.tabs,P=E.tabPosition,A=E.rtl,K,x,$;["top","bottom"].includes(P)?(K="width",x=A?"right":"left",$=Math.abs(l.left)):(K="height",x="top",$=-l.top);var G=l[K],U=y[K],re=R[K],Y=G;return U+re>G&&(Y=G-re),Object(n.useMemo)(function(){if(!C.length)return[0,0];for(var X=C.length,se=X,z=0;z<X;z+=1){var q=a.get(C[z].key)||et;if(q[x]+q[K]>$+Y){se=z-1;break}}for(var ne=0,Q=X-1;Q>=0;Q-=1){var ae=a.get(C[Q].key)||et;if(ae[x]<$){ne=Q+1;break}}return[ne,se]},[a,$,Y,P,C.map(function(X){return X.key}).join("_"),A])}var Mn=e("Gytx"),nt=e.n(Mn),$n=e("Kwbf");function ut(a,l){var y=a.prefixCls,R=a.invalidate,E=a.item,C=a.renderItem,P=a.responsive,A=a.registerSize,K=a.itemKey,x=a.className,$=a.style,G=a.children,U=a.display,re=a.order,Y=a.component,X=Y===void 0?"div":Y,se=Object(Ee.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=P&&!U;function q(he){A(K,he)}n.useEffect(function(){return function(){q(null)}},[]);var ne=C&&E!==void 0?C(E):G,Q;R||(Q={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:P?re:void 0,pointerEvents:z?"none":void 0});var ae={};z&&(ae["aria-hidden"]=!0);var k=n.createElement(X,Object(W.a)({className:je()(!R&&y,x),style:Object(oe.a)(Object(oe.a)({},Q),$)},ae,se,{ref:l}),ne);return P&&(k=n.createElement(An.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Bn=n.forwardRef(ut);Bn.displayName="Item";var Tn=Bn;function Vn(){var a=Object(n.useState)({}),l=Object(J.a)(a,2),y=l[1],R=Object(n.useRef)([]),E=Object(n.useRef)(!1),C=0,P=0;Object(n.useEffect)(function(){return function(){E.current=!0}},[]);function A(K){var x=C;C+=1,R.current.length<x+1&&(R.current[x]=K);var $=R.current[x];function G(U){R.current[x]=typeof U=="function"?U(R.current[x]):U,Ve.a.cancel(P),P=Object(Ve.a)(function(){E.current||y({})})}return[$,G]}return A}var tt=function(l,y){var R=n.useContext(T);if(!R){var E=l.component,C=E===void 0?"div":E,P=Object(Ee.a)(l,["component"]);return n.createElement(C,Object(W.a)({},P,{ref:y}))}var A=R.className,K=Object(Ee.a)(R,["className"]),x=l.className,$=Object(Ee.a)(l,["className"]);return n.createElement(T.Provider,{value:null},n.createElement(Tn,Object(W.a)({ref:y,className:je()(A,x)},K,$)))},Jn=n.forwardRef(tt);Jn.displayName="RawItem";var F=Jn,T=n.createContext(null),I="responsive",f="invalidate";function i(a){return"+ ".concat(a.length," ...")}function v(a,l){var y=a.prefixCls,R=y===void 0?"rc-overflow":y,E=a.data,C=E===void 0?[]:E,P=a.renderItem,A=a.renderRawItem,K=a.itemKey,x=a.itemWidth,$=x===void 0?10:x,G=a.ssr,U=a.style,re=a.className,Y=a.maxCount,X=a.renderRest,se=a.renderRawRest,z=a.suffix,q=a.component,ne=q===void 0?"div":q,Q=a.itemComponent,ae=a.onVisibleChange,k=Object(Ee.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),he=Vn(),_=G==="full",le=he(null),de=Object(J.a)(le,2),te=de[0],H=de[1],ie=te||0,fe=he(new Map),me=Object(J.a)(fe,2),be=me[0],Ae=me[1],ve=he(0),ye=Object(J.a)(ve,2),Te=ye[0],Pe=ye[1],Re=he(0),Ce=Object(J.a)(Re,2),Me=Ce[0],Ge=Ce[1],Be=he(0),Ke=Object(J.a)(Be,2),$e=Ke[0],we=Ke[1],gn=Object(n.useState)(null),Qe=Object(J.a)(gn,2),Je=Qe[0],_e=Qe[1],dn=Object(n.useState)(null),cn=Object(J.a)(dn,2),De=cn[0],Le=cn[1],He=n.useMemo(function(){return De===null&&_?Number.MAX_SAFE_INTEGER:De||0},[De,te]),ze=Object(n.useState)(!1),In=Object(J.a)(ze,2),zn=In[0],Fn=In[1],Ze="".concat(R,"-item"),yn=Math.max(Te,Me),en=C.length&&Y===I,bn=Y===f,Ye=en||typeof Y=="number"&&C.length>Y,ke=Object(n.useMemo)(function(){var ce=C;return en?te===null&&_?ce=C:ce=C.slice(0,Math.min(C.length,ie/$)):typeof Y=="number"&&(ce=C.slice(0,Y)),ce},[C,$,te,Y,en]),On=Object(n.useMemo)(function(){return en?C.slice(He+1):C.slice(ke.length)},[C,ke,en,He]),tn=Object(n.useCallback)(function(ce,Se){var Ne;return typeof K=="function"?K(ce):(Ne=K&&(ce==null?void 0:ce[K]))!==null&&Ne!==void 0?Ne:Se},[K]),Ue=Object(n.useCallback)(P||function(ce){return ce},[P]);function xe(ce,Se){Le(ce),Se||(Fn(ce<C.length-1),ae==null||ae(ce))}function Un(ce,Se){H(Se.clientWidth)}function Gn(ce,Se){Ae(function(Ne){var Xe=new Map(Ne);return Se===null?Xe.delete(ce):Xe.set(ce,Se),Xe})}function at(ce,Se){Ge(Se),Pe(Me)}function mn(ce,Se){we(Se)}function ln(ce){return be.get(tn(ke[ce],ce))}n.useLayoutEffect(function(){if(ie&&yn&&ke){var ce=$e,Se=ke.length,Ne=Se-1;if(!Se){xe(0),_e(null);return}for(var Xe=0;Xe<Se;Xe+=1){var Qn=ln(Xe);if(Qn===void 0){xe(Xe-1,!0);break}if(ce+=Qn,Xe===Ne-1&&ce+ln(Ne)<=ie){xe(Ne),_e(null);break}else if(ce+yn>ie){xe(Xe-1),_e(ce-Qn-$e+Me);break}else if(Xe===Ne){xe(Ne),_e(ce-$e);break}}z&&ln(0)+$e>ie&&_e(null)}},[ie,be,Me,$e,tn,ke]);var Hn=zn&&!!On.length,fn={};Je!==null&&en&&(fn={position:"absolute",left:Je,top:0});var rn={prefixCls:Ze,responsive:en,component:Q,invalidate:bn},Yn=A?function(ce,Se){var Ne=tn(ce,Se);return n.createElement(T.Provider,{key:Ne,value:Object(oe.a)(Object(oe.a)({},rn),{},{order:Se,item:ce,itemKey:Ne,registerSize:Gn,display:Se<=He})},A(ce,Se))}:function(ce,Se){var Ne=tn(ce,Se);return n.createElement(Tn,Object(W.a)({},rn,{order:Se,key:Ne,item:ce,renderItem:Ue,itemKey:Ne,registerSize:Gn,display:Se<=He}))},Sn,Xn={order:Hn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:at,display:Hn};if(se)se&&(Sn=n.createElement(T.Provider,{value:Object(oe.a)(Object(oe.a)({},rn),Xn)},se(On)));else{var nn=X||i;Sn=n.createElement(Tn,Object(W.a)({},rn,Xn),typeof nn=="function"?nn(On):nn)}var Cn=n.createElement(ne,Object(W.a)({className:je()(!bn&&R,re),style:U,ref:l},k),ke.map(Yn),Ye?Sn:null,z&&n.createElement(Tn,Object(W.a)({},rn,{order:He,className:"".concat(Ze,"-suffix"),registerSize:mn,display:!0,style:fn}),z));return en&&(Cn=n.createElement(An.default,{onResize:Un},Cn)),Cn}var b=n.forwardRef(v);b.displayName="Overflow",b.Item=F,b.RESPONSIVE=I,b.INVALIDATE=f;var S=b,s=S,p=e("1OyB"),o=e("vuIU"),w=e("Ji7U"),M=e("LK+K"),D=e("bT9E"),d=e("YrtM"),j=n.createContext(null);function m(a,l){var y=Object(oe.a)({},a);return Object.keys(l).forEach(function(R){var E=l[R];E!==void 0&&(y[R]=E)}),y}function t(a){var l=a.children,y=a.locked,R=Object(Ee.a)(a,["children","locked"]),E=n.useContext(j),C=Object(d.a)(function(){return m(E,R)},[E,R],function(P,A){return!y&&(P[0]!==A[0]||!nt()(P[1],A[1]))});return n.createElement(j.Provider,{value:C},l)}function g(a,l,y,R){var E=n.useContext(j),C=E.activeKey,P=E.onActive,A=E.onInactive,K={active:C===a};return l||(K.onMouseEnter=function(x){y==null||y({key:a,domEvent:x}),P(a)},K.onMouseLeave=function(x){R==null||R({key:a,domEvent:x}),A(a)}),K}function c(a){var l=a.item,y=Object(Ee.a)(a,["item"]);return Object.defineProperty(y,"item",{get:function(){return Object($n.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),l}}),y}function r(a){var l=a.icon,y=a.props,R=a.children,E;return typeof l=="function"?E=n.createElement(l,Object(oe.a)({},y)):E=l,E||R||null}function u(a){var l=n.useContext(j),y=l.mode,R=l.rtl,E=l.inlineIndent;if(y!=="inline")return null;var C=a;return R?{paddingRight:C*E}:{paddingLeft:C*E}}var h=[],B=n.createContext(null);function N(){return n.useContext(B)}var L=n.createContext(h);function pe(a){var l=n.useContext(L);return n.useMemo(function(){return a!==void 0?[].concat(Object(an.a)(l),[a]):l},[l,a])}var Oe=n.createContext(null),sn=n.createContext(null);function vn(a,l){return a===void 0?null:"".concat(a,"-").concat(l)}function Kn(a){var l=n.useContext(sn);return vn(l,a)}var Nn=function(a){Object(w.a)(y,a);var l=Object(M.a)(y);function y(){return Object(p.a)(this,y),l.apply(this,arguments)}return Object(o.a)(y,[{key:"render",value:function(){var E=this.props,C=E.title,P=E.attribute,A=E.elementRef,K=Object(Ee.a)(E,["title","attribute","elementRef"]),x=Object(D.a)(K,["eventKey"]);return Object($n.a)(!P,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(s.Item,Object(W.a)({},P,{title:typeof C=="string"?C:void 0},x,{ref:A}))}}]),y}(n.Component),dt=function(l){var y,R=l.style,E=l.className,C=l.eventKey,P=l.disabled,A=l.itemIcon,K=l.children,x=l.role,$=l.onMouseEnter,G=l.onMouseLeave,U=l.onClick,re=l.onKeyDown,Y=l.onFocus,X=Object(Ee.a)(l,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=Kn(C),z=n.useContext(j),q=z.prefixCls,ne=z.onItemClick,Q=z.disabled,ae=z.overflowDisabled,k=z.itemIcon,he=z.selectedKeys,_=z.onActive,le="".concat(q,"-item"),de=n.useRef(),te=n.useRef(),H=Q||P,ie=pe(C),fe=function(Be){return{key:C,keyPath:ie,item:de.current,domEvent:Be}},me=A||k,be=g(C,H,$,G),Ae=be.active,ve=Object(Ee.a)(be,["active"]),ye=he.includes(C),Te=u(ie.length),Pe=function(Be){if(!H){var Ke=fe(Be);U==null||U(c(Ke)),ne(Ke)}},Re=function(Be){if(re==null||re(Be),Be.which===Fe.a.ENTER){var Ke=fe(Be);U==null||U(c(Ke)),ne(Ke)}},Ce=function(Be){_(C),Y==null||Y(Be)},Me={};return l.role==="option"&&(Me["aria-selected"]=ye),n.createElement(Nn,Object(W.a)({ref:de,elementRef:te,role:x===null?"none":x||"menuitem",tabIndex:P?null:-1,"data-menu-id":ae&&se?null:se},X,ve,Me,{component:"li","aria-disabled":P,style:Object(oe.a)(Object(oe.a)({},Te),R),className:je()(le,(y={},Object(ue.a)(y,"".concat(le,"-active"),Ae),Object(ue.a)(y,"".concat(le,"-selected"),ye),Object(ue.a)(y,"".concat(le,"-disabled"),H),y),E),onClick:Pe,onKeyDown:Re,onFocus:Ce}),K,n.createElement(r,{props:Object(oe.a)(Object(oe.a)({},l),{},{isSelected:ye}),icon:me}))};function Sr(a){var l=a.eventKey,y=N(),R=pe(l);return n.useEffect(function(){if(y)return y.registerPath(l,R),function(){y.unregisterPath(l,R)}},[R]),y?null:n.createElement(dt,a)}var Ft=Sr;function At(a,l){return Object(jn.a)(a).map(function(y,R){if(n.isValidElement(y)){var E=y.key;return E==null&&(E="tmp_key-".concat([].concat(Object(an.a)(l),[R]).join("-"))),n.cloneElement(y,{key:E,eventKey:E})}return y})}function rt(a){var l=n.useRef(a);l.current=a;var y=n.useCallback(function(){for(var R,E=arguments.length,C=new Array(E),P=0;P<E;P++)C[P]=arguments[P];return(R=l.current)===null||R===void 0?void 0:R.call.apply(R,[l].concat(C))},[]);return a?y:void 0}var Cr=function(l,y){var R=l.className,E=l.children,C=Object(Ee.a)(l,["className","children"]),P=n.useContext(j),A=P.prefixCls,K=P.mode;return n.createElement("ul",Object(W.a)({className:je()(A,"".concat(A,"-sub"),"".concat(A,"-").concat(K==="inline"?"inline":"vertical"),R)},C,{"data-menu-list":!0,ref:y}),E)},Yt=n.forwardRef(Cr);Yt.displayName="SubMenuList";var Xt=Yt,Rr=e("uciX"),Wn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Wn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Wn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Wn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Wn,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:Wn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Wn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Wn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Wn,offset:[4,0]}},fa=Qt;function Zt(a,l,y){if(l)return l;if(y)return y[a]||y.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(a){var l=a.prefixCls,y=a.visible,R=a.children,E=a.popup,C=a.popupClassName,P=a.popupOffset,A=a.disabled,K=a.mode,x=a.onVisibleChange,$=n.useContext(j),G=$.getPopupContainer,U=$.rtl,re=$.subMenuOpenDelay,Y=$.subMenuCloseDelay,X=$.builtinPlacements,se=$.triggerSubMenuAction,z=$.forceSubMenuRender,q=$.motion,ne=$.defaultMotions,Q=n.useState(!1),ae=Object(J.a)(Q,2),k=ae[0],he=ae[1],_=U?Object(oe.a)(Object(oe.a)({},Er),X):Object(oe.a)(Object(oe.a)({},Qt),X),le=jr[K],de=Zt(K,q,ne),te=Object(oe.a)(Object(oe.a)({},de),{},{leavedClassName:"".concat(l,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ve.a)(function(){he(y)}),function(){Ve.a.cancel(H.current)}},[y]),n.createElement(Rr.a,{prefixCls:l,popupClassName:je()("".concat(l,"-popup"),Object(ue.a)({},"".concat(l,"-rtl"),U),C),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:E,popupAlign:P&&{offset:P},action:A?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:Y,onPopupVisibleChange:x,forceRender:z,popupMotion:te},R)}var Pr=e("8XRh");function Tr(a){var l=a.id,y=a.open,R=a.keyPath,E=a.children,C="inline",P=n.useContext(j),A=P.prefixCls,K=P.forceSubMenuRender,x=P.motion,$=P.defaultMotions,G=P.mode,U=n.useRef(!1);U.current=G===C;var re=n.useState(!U.current),Y=Object(J.a)(re,2),X=Y[0],se=Y[1],z=U.current?y:!1;n.useEffect(function(){U.current&&se(!1)},[G]);var q=Object(oe.a)({},Zt(C,x,$));R.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},X?null:n.createElement(t,{mode:C,locked:!U.current},n.createElement(Pr.default,Object(W.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(A,"-hidden")}),function(Q){var ae=Q.className,k=Q.style;return n.createElement(Xt,{id:l,className:ae,style:k},E)}))}var Nr=function(l){var y,R=l.style,E=l.className,C=l.title,P=l.eventKey,A=l.disabled,K=l.internalPopupClose,x=l.children,$=l.itemIcon,G=l.expandIcon,U=l.popupClassName,re=l.popupOffset,Y=l.onClick,X=l.onMouseEnter,se=l.onMouseLeave,z=l.onTitleClick,q=l.onTitleMouseEnter,ne=l.onTitleMouseLeave,Q=Object(Ee.a)(l,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=Kn(P),k=n.useContext(j),he=k.prefixCls,_=k.mode,le=k.openKeys,de=k.disabled,te=k.overflowDisabled,H=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,be=k.onItemClick,Ae=k.onOpenChange,ve=k.onActive,ye=n.useContext(Oe),Te=ye.isSubPathKey,Pe=pe(),Re="".concat(he,"-submenu"),Ce=de||A,Me=n.useRef(),Ge=n.useRef(),Be=$||fe,Ke=G||me,$e=le.includes(P),we=!te&&$e,gn=Te(ie,P),Qe=g(P,Ce,q,ne),Je=Qe.active,_e=Object(Ee.a)(Qe,["active"]),dn=n.useState(!1),cn=Object(J.a)(dn,2),De=cn[0],Le=cn[1],He=function(xe){Ce||Le(xe)},ze=function(xe){He(!0),X==null||X({key:P,domEvent:xe})},In=function(xe){He(!1),se==null||se({key:P,domEvent:xe})},zn=n.useMemo(function(){return Je||(_!=="inline"?De||Te([H],P):!1)},[_,Je,H,De,P,Te]),Fn=u(Pe.length),Ze=function(xe){Ce||(z==null||z({key:P,domEvent:xe}),_==="inline"&&Ae(P,!$e))},yn=rt(function(Ue){Y==null||Y(c(Ue)),be(Ue)}),en=function(xe){_!=="inline"&&Ae(P,xe)},bn=function(){ve(P)},Ye=ae&&"".concat(ae,"-popup"),ke=n.createElement("div",Object(W.a)({role:"menuitem",style:Fn,className:"".concat(Re,"-title"),tabIndex:Ce?null:-1,ref:Me,title:typeof C=="string"?C:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":we,"aria-haspopup":!0,"aria-controls":Ye,"aria-disabled":Ce,onClick:Ze,onFocus:bn},_e),C,n.createElement(r,{icon:_!=="horizontal"?Ke:null,props:Object(oe.a)(Object(oe.a)({},l),{},{isOpen:we,isSubMenu:!0})},n.createElement("i",{className:"".concat(Re,"-arrow")}))),On=n.useRef(_);if(_!=="inline"&&(On.current=Pe.length>1?"vertical":_),!te){var tn=On.current;ke=n.createElement(Dr,{mode:tn,prefixCls:Re,visible:!K&&we&&_!=="inline",popupClassName:U,popupOffset:re,popup:n.createElement(t,{mode:tn},n.createElement(Xt,{id:Ye,ref:Ge},x)),disabled:Ce,onVisibleChange:en},ke)}return n.createElement(t,{onItemClick:yn,mode:_==="horizontal"?"vertical":_,itemIcon:Be,expandIcon:Ke},n.createElement(s.Item,Object(W.a)({role:"none"},Q,{component:"li",style:R,className:je()(Re,"".concat(Re,"-").concat(_),E,(y={},Object(ue.a)(y,"".concat(Re,"-open"),we),Object(ue.a)(y,"".concat(Re,"-active"),zn),Object(ue.a)(y,"".concat(Re,"-selected"),gn),Object(ue.a)(y,"".concat(Re,"-disabled"),Ce),y)),onMouseEnter:ze,onMouseLeave:In}),ke,!te&&n.createElement(Tr,{id:Ye,open:we,keyPath:Pe},x)))};function kt(a){var l=a.eventKey,y=a.children,R=pe(l),E=At(y,R),C=N();n.useEffect(function(){if(C)return C.registerPath(l,R),function(){C.unregisterPath(l,R)}},[R]);var P;return C?P=E:P=n.createElement(Nr,a,E),n.createElement(L.Provider,{value:R},P)}var Ir=e("x/xZ");function qt(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(a)){var y=a.nodeName.toLowerCase(),R=["input","select","textarea","button"].includes(y)||a.isContentEditable||y==="a"&&!!a.getAttribute("href"),E=a.getAttribute("tabindex"),C=Number(E),P=null;return E&&!Number.isNaN(C)?P=C:R&&P===null&&(P=0),R&&a.disabled&&(P=null),P!==null&&(P>=0||l&&P<0)}return!1}function _t(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=Object(an.a)(a.querySelectorAll("*")).filter(function(R){return qt(R,l)});return qt(a,l)&&y.unshift(a),y}var gt=null;function pa(){gt=document.activeElement}function ha(){gt=null}function va(){if(gt)try{gt.focus()}catch(a){}}function ga(a,l){if(l.keyCode===9){var y=_t(a),R=y[l.shiftKey?0:y.length-1],E=R===document.activeElement||a===document.activeElement;if(E){var C=y[l.shiftKey?y.length-1:0];C.focus(),l.preventDefault()}}}var wt=Fe.a.LEFT,Mt=Fe.a.RIGHT,Bt=Fe.a.UP,yt=Fe.a.DOWN,bt=Fe.a.ENTER,er=Fe.a.ESC,nr=[Bt,yt,wt,Mt];function Fr(a,l,y,R){var E,C,P,A,K="prev",x="next",$="children",G="parent";if(a==="inline"&&R===bt)return{inlineTrigger:!0};var U=(E={},Object(ue.a)(E,Bt,K),Object(ue.a)(E,yt,x),E),re=(C={},Object(ue.a)(C,wt,y?x:K),Object(ue.a)(C,Mt,y?K:x),Object(ue.a)(C,yt,$),Object(ue.a)(C,bt,$),C),Y=(P={},Object(ue.a)(P,Bt,K),Object(ue.a)(P,yt,x),Object(ue.a)(P,bt,$),Object(ue.a)(P,er,G),Object(ue.a)(P,wt,y?$:G),Object(ue.a)(P,Mt,y?G:$),P),X={inline:U,horizontal:re,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(A=X["".concat(a).concat(l?"":"Sub")])===null||A===void 0?void 0:A[R];switch(se){case K:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Ar(a){for(var l=a;l;){if(l.getAttribute("data-menu-list"))return l;l=l.parentElement}return null}function wr(a,l){for(var y=a||document.activeElement;y;){if(l.has(y))return y;y=y.parentElement}return null}function Mr(a,l){var y=_t(a,!0);return y.filter(function(R){return l.has(R)})}function tr(a,l,y){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var E=Mr(a,l),C=E.length,P=E.findIndex(function(A){return y===A});return R<0?P===-1?P=C-1:P-=1:R>0&&(P+=1),P=(P+C)%C,E[P]}function Br(a,l,y,R,E,C,P,A,K,x){var $=n.useRef(),G=n.useRef();G.current=l;var U=function(){Ve.a.cancel($.current)};return n.useEffect(function(){return function(){U()}},[]),function(re){var Y=re.which;if([].concat(nr,[bt,er]).includes(Y)){var X,se,z,q=function(){X=new Set,se=new Map,z=new Map;var fe=C();return fe.forEach(function(me){var be=document.querySelector("[data-menu-id='".concat(vn(R,me),"']"));be&&(X.add(be),z.set(be,me),se.set(me,be))}),X};q();var ne=se.get(l),Q=wr(ne,X),ae=z.get(Q),k=Fr(a,P(ae,!0).length===1,y,Y);if(!k)return;nr.includes(Y)&&re.preventDefault();var he=function(fe){if(fe){var me=fe,be=fe.querySelector("a");(be==null?void 0:be.getAttribute("href"))&&(me=be);var Ae=z.get(fe);A(Ae),U(),$.current=Object(Ve.a)(function(){G.current===Ae&&me.focus()})}};if(k.sibling||!Q){var _;!Q||a==="inline"?_=E.current:_=Ar(Q);var le=tr(_,X,Q,k.offset);he(le)}else if(k.inlineTrigger)K(ae);else if(k.offset>0)K(ae,!0),U(),$.current=Object(Ve.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=tr(fe,X);he(me)},5);else if(k.offset<0){var de=P(ae,!0),te=de[de.length-2],H=se.get(te);K(te,!1),he(H)}}x==null||x(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),rr=0;function Wr(a){var l=Object(pn.a)(a,{value:a}),y=Object(J.a)(l,2),R=y[0],E=y[1];return n.useEffect(function(){rr+=1;var C="".concat(Kr,"-").concat(rr);E("rc-menu-uuid-".concat(C))},[]),R}var ya=e("p8sG");function Lr(a){Promise.resolve().then(a)}var Kt="__RC_UTIL_PATH_SPLIT__",ar=function(l){return l.join(Kt)},xr=function(l){return l.split(Kt)},Wt="rc-menu-more";function $r(){var a=n.useState({}),l=Object(J.a)(a,2),y=l[1],R=Object(n.useRef)(new Map),E=Object(n.useRef)(new Map),C=n.useState([]),P=Object(J.a)(C,2),A=P[0],K=P[1],x=Object(n.useRef)(0),$=Object(n.useCallback)(function(z,q){var ne=ar(q);E.current.set(ne,z),R.current.set(z,ne),x.current+=1;var Q=x.current;Lr(function(){Q===x.current&&y({})})},[]),G=Object(n.useCallback)(function(z,q){var ne=ar(q);E.current.delete(ne),R.current.delete(z)},[]),U=Object(n.useCallback)(function(z){K(z)},[]),re=Object(n.useCallback)(function(z,q){var ne=R.current.get(z)||"",Q=xr(ne);return q&&A.includes(Q[0])&&Q.unshift(Wt),Q},[A]),Y=Object(n.useCallback)(function(z,q){return z.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),X=function(){var q=Object(an.a)(R.current.keys());return A.length&&q.push(Wt),q},se=Object(n.useCallback)(function(z){var q="".concat(R.current.get(z)).concat(Kt),ne=new Set;return Object(an.a)(E.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(E.current.get(Q))}),ne},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:re,getKeys:X,getSubPathKeys:se}}var Ot=[],Vr=function(l){var y,R,E=l.prefixCls,C=E===void 0?"rc-menu":E,P=l.style,A=l.className,K=l.tabIndex,x=K===void 0?0:K,$=l.children,G=l.direction,U=l.id,re=l.mode,Y=re===void 0?"vertical":re,X=l.inlineCollapsed,se=l.disabled,z=l.disabledOverflow,q=l.subMenuOpenDelay,ne=q===void 0?.1:q,Q=l.subMenuCloseDelay,ae=Q===void 0?.1:Q,k=l.forceSubMenuRender,he=l.defaultOpenKeys,_=l.openKeys,le=l.activeKey,de=l.defaultActiveFirst,te=l.selectable,H=te===void 0?!0:te,ie=l.multiple,fe=ie===void 0?!1:ie,me=l.defaultSelectedKeys,be=l.selectedKeys,Ae=l.onSelect,ve=l.onDeselect,ye=l.inlineIndent,Te=ye===void 0?24:ye,Pe=l.motion,Re=l.defaultMotions,Ce=l.triggerSubMenuAction,Me=Ce===void 0?"hover":Ce,Ge=l.builtinPlacements,Be=l.itemIcon,Ke=l.expandIcon,$e=l.overflowedIndicator,we=$e===void 0?"...":$e,gn=l.getPopupContainer,Qe=l.onClick,Je=l.onOpenChange,_e=l.onKeyDown,dn=l.openAnimation,cn=l.openTransitionName,De=Object(Ee.a)(l,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Le=At($,Ot),He=n.useState(!1),ze=Object(J.a)(He,2),In=ze[0],zn=ze[1],Fn=n.useRef(),Ze=Wr(U),yn=G==="rtl",en=n.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),bn=Object(J.a)(en,2),Ye=bn[0],ke=bn[1],On=n.useState(0),tn=Object(J.a)(On,2),Ue=tn[0],xe=tn[1],Un=Ue>=Le.length-1||Ye!=="horizontal"||z,Gn=Object(pn.a)(he,{value:_,postState:function(Z){return Z||Ot}}),at=Object(J.a)(Gn,2),mn=at[0],ln=at[1],Hn=n.useState(mn),fn=Object(J.a)(Hn,2),rn=fn[0],Yn=fn[1],Sn=Ye==="inline",Xn=n.useRef(!1);n.useEffect(function(){Sn&&Yn(mn)},[mn]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(Sn)ln(rn);else{var ee=[];ln(ee),Je==null||Je(ee)}},[Sn]);var nn=$r(),Cn=nn.registerPath,ce=nn.unregisterPath,Se=nn.refreshOverflowKeys,Ne=nn.isSubPathKey,Xe=nn.getKeyPath,Qn=nn.getKeys,Ct=nn.getSubPathKeys,Vt=n.useMemo(function(){return{registerPath:Cn,unregisterPath:ce}},[Cn,ce]),Jt=n.useMemo(function(){return{isSubPathKey:Ne}},[Ne]);n.useEffect(function(){Se(Un?Ot:Le.slice(Ue+1).map(function(ee){return ee.key}))},[Ue,Un]);var zt=Object(pn.a)(le||de&&((y=Le[0])===null||y===void 0?void 0:y.key),{value:le}),st=Object(J.a)(zt,2),Rt=st[0],mt=st[1],Et=rt(function(ee){mt(ee)}),Ut=rt(function(){mt(void 0)}),jt=Object(pn.a)(me||[],{value:be,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ot:[Z]}}),Dt=Object(J.a)(jt,2),it=Dt[0],Rn=Dt[1],Pt=function(Z){if(!!H){var ge=Z.key,We=it.includes(ge),qe;We?qe=it.filter(function(kn){return kn!==ge}):fe?qe=[].concat(Object(an.a)(it),[ge]):qe=[ge],Rn(qe);var Ln=Object(oe.a)(Object(oe.a)({},Z),{},{selectedKeys:qe});We?ve==null||ve(Ln):Ae==null||Ae(Ln)}},Tt=rt(function(ee){Qe==null||Qe(c(ee)),Pt(ee)}),ft=rt(function(ee,Z){var ge=mn.filter(function(qe){return qe!==ee});if(Z)ge.push(ee);else if(Ye!=="inline"){var We=Ct(ee);ge=ge.filter(function(qe){return!We.has(qe)})}nt()(mn,ge)||(ln(ge),Je==null||Je(ge))}),Zn=rt(gn),pt=function(Z,ge){var We=ge!=null?ge:!mn.includes(Z);ft(Z,We)},ht=Br(Ye,Rt,yn,Ze,Fn,Qn,Xe,mt,pt,_e);n.useEffect(function(){zn(!0)},[]);var Nt=Ye!=="horizontal"||z?Le:Le.map(function(ee,Z){return n.createElement(t,{key:ee.key,overflowDisabled:Z>Ue},ee)}),It=n.createElement(s,Object(W.a)({id:U,ref:Fn,prefixCls:"".concat(C,"-overflow"),component:"ul",itemComponent:Ft,className:je()(C,"".concat(C,"-root"),"".concat(C,"-").concat(Ye),A,(R={},Object(ue.a)(R,"".concat(C,"-inline-collapsed"),ke),Object(ue.a)(R,"".concat(C,"-rtl"),yn),R)),dir:G,style:P,role:"menu",tabIndex:x,data:Nt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ge=Z.length,We=ge?Le.slice(-ge):null;return n.createElement(kt,{eventKey:Wt,title:we,disabled:Un,internalPopupClose:ge===0},We)},maxCount:Ye!=="horizontal"||z?s.INVALIDATE:s.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:ht},De));return n.createElement(sn.Provider,{value:Ze},n.createElement(t,{prefixCls:C,mode:Ye,openKeys:mn,rtl:yn,disabled:se,motion:In?Pe:null,defaultMotions:In?Re:null,activeKey:Rt,onActive:Et,onInactive:Ut,selectedKeys:it,inlineIndent:Te,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ge,triggerSubMenuAction:Me,getPopupContainer:Zn,itemIcon:Be,expandIcon:Ke,onItemClick:Tt,onOpenChange:ft},n.createElement(Oe.Provider,{value:Jt},It),n.createElement(B.Provider,{value:Vt},Le)))},Jr=Vr,zr=function(l){var y=l.className,R=l.title,E=l.eventKey,C=l.children,P=Object(Ee.a)(l,["className","title","eventKey","children"]),A=n.useContext(j),K=A.prefixCls,x="".concat(K,"-item-group");return n.createElement("li",Object(W.a)({},P,{onClick:function(G){return G.stopPropagation()},className:je()(x,y)}),n.createElement("div",{className:"".concat(x,"-title"),title:typeof R=="string"?R:void 0},R),n.createElement("ul",{className:"".concat(x,"-list")},C))};function Ur(a){var l=a.children,y=Object(Ee.a)(a,["children"]),R=pe(y.eventKey),E=At(l,R),C=N();return C?E:n.createElement(zr,y,E)}function Gr(a){var l=a.className,y=a.style,R=n.useContext(j),E=R.prefixCls,C=N();return C?null:n.createElement("li",{className:je()("".concat(E,"-item-divider"),l),style:y})}var ct=Jr;ct.Item=Ft,ct.SubMenu=kt,ct.ItemGroup=Ur,ct.Divider=Gr;var Hr=ct,Yr=e("eDIo");function Xr(a,l){var y=a.prefixCls,R=a.editable,E=a.locale,C=a.style;return!R||R.showAdd===!1?null:n.createElement("button",{ref:l,type:"button",className:"".concat(y,"-nav-add"),style:C,"aria-label":(E==null?void 0:E.addAriaLabel)||"Add tab",onClick:function(A){R.onEdit("add",{event:A})}},R.addIcon||"+")}var sr=n.forwardRef(Xr);function Qr(a,l){var y=a.prefixCls,R=a.id,E=a.tabs,C=a.locale,P=a.mobile,A=a.moreIcon,K=A===void 0?"More":A,x=a.moreTransitionName,$=a.style,G=a.className,U=a.editable,re=a.tabBarGutter,Y=a.rtl,X=a.onTabClick,se=Object(n.useState)(!1),z=Object(J.a)(se,2),q=z[0],ne=z[1],Q=Object(n.useState)(null),ae=Object(J.a)(Q,2),k=ae[0],he=ae[1],_="".concat(R,"-more-popup"),le="".concat(y,"-dropdown"),de=k!==null?"".concat(_,"-").concat(k):null,te=C==null?void 0:C.dropdownAriaLabel,H=n.createElement(Hr,{onClick:function(ye){var Te=ye.key,Pe=ye.domEvent;X(Te,Pe),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":de,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},E.map(function(ve){return n.createElement(Ft,{key:ve.key,id:"".concat(_,"-").concat(ve.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(ve.key),disabled:ve.disabled},ve.tab)}));function ie(ve){for(var ye=E.filter(function(Me){return!Me.disabled}),Te=ye.findIndex(function(Me){return Me.key===k})||0,Pe=ye.length,Re=0;Re<Pe;Re+=1){Te=(Te+ve+Pe)%Pe;var Ce=ye[Te];if(!Ce.disabled){he(Ce.key);return}}}function fe(ve){var ye=ve.which;if(!q){[Fe.a.DOWN,Fe.a.SPACE,Fe.a.ENTER].includes(ye)&&(ne(!0),ve.preventDefault());return}switch(ye){case Fe.a.UP:ie(-1),ve.preventDefault();break;case Fe.a.DOWN:ie(1),ve.preventDefault();break;case Fe.a.ESC:ne(!1);break;case Fe.a.SPACE:case Fe.a.ENTER:k!==null&&X(k,ve);break}}Object(n.useEffect)(function(){var ve=document.getElementById(de);ve&&ve.scrollIntoView&&ve.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||he(null)},[q]);var me=Object(ue.a)({},Y?"marginLeft":"marginRight",re);E.length||(me.visibility="hidden",me.order=1);var be=je()(Object(ue.a)({},"".concat(le,"-rtl"),Y)),Ae=P?null:n.createElement(Yr.default,{prefixCls:le,overlay:H,trigger:["hover"],visible:q,transitionName:x,onVisibleChange:ne,overlayClassName:be,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(y,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(R,"-more"),"aria-expanded":q,onKeyDown:fe},K));return n.createElement("div",{className:je()("".concat(y,"-nav-operations"),G),style:$,ref:l},Ae,n.createElement(sr,{prefixCls:y,locale:C,editable:U}))}var Zr=n.forwardRef(Qr),Lt=Object(n.createContext)(null),kr=.1,ir=.01,St=20,or=Math.pow(.995,St);function qr(a,l){var y=Object(n.useState)(),R=Object(J.a)(y,2),E=R[0],C=R[1],P=Object(n.useState)(0),A=Object(J.a)(P,2),K=A[0],x=A[1],$=Object(n.useState)(0),G=Object(J.a)($,2),U=G[0],re=G[1],Y=Object(n.useState)(),X=Object(J.a)(Y,2),se=X[0],z=X[1],q=Object(n.useRef)();function ne(le){var de=le.touches[0],te=de.screenX,H=de.screenY;C({x:te,y:H}),window.clearInterval(q.current)}function Q(le){if(!!E){le.preventDefault();var de=le.touches[0],te=de.screenX,H=de.screenY;C({x:te,y:H});var ie=te-E.x,fe=H-E.y;l(ie,fe);var me=Date.now();x(me),re(me-K),z({x:ie,y:fe})}}function ae(){if(!!E&&(C(null),z(null),se)){var le=se.x/U,de=se.y/U,te=Math.abs(le),H=Math.abs(de);if(Math.max(te,H)<kr)return;var ie=le,fe=de;q.current=window.setInterval(function(){if(Math.abs(ie)<ir&&Math.abs(fe)<ir){window.clearInterval(q.current);return}ie*=or,fe*=or,l(ie*St,fe*St)},St)}}var k=Object(n.useRef)();function he(le){var de=le.deltaX,te=le.deltaY,H=0,ie=Math.abs(de),fe=Math.abs(te);ie===fe?H=k.current==="x"?de:te:ie>fe?(H=de,k.current="x"):(H=te,k.current="y"),l(-H,-H)&&le.preventDefault()}var _=Object(n.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:he},n.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function de(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function H(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",de,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),a.current.addEventListener("touchstart",le,{passive:!1}),a.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",de),document.removeEventListener("touchend",te)}},[])}function _r(){var a=Object(n.useRef)(new Map);function l(R){return a.current.has(R)||a.current.set(R,n.createRef()),a.current.get(R)}function y(R){a.current.delete(R)}return[l,y]}function lr(a,l){var y=n.useRef(a),R=n.useState({}),E=Object(J.a)(R,2),C=E[1];function P(A){var K=typeof A=="function"?A(y.current):A;K!==y.current&&l(K,y.current),y.current=K,C({})}return[y.current,P]}var ur=function(l){var y=l.position,R=l.prefixCls,E=l.extra;if(!E)return null;var C,P=E;return y==="right"&&(C=P.right||!P.left&&P||null),y==="left"&&(C=P.left||null),C?n.createElement("div",{className:"".concat(R,"-extra-content")},C):null};function ea(a,l){var y,R=n.useContext(Lt),E=R.prefixCls,C=R.tabs,P=a.className,A=a.style,K=a.id,x=a.animated,$=a.activeKey,G=a.rtl,U=a.extra,re=a.editable,Y=a.locale,X=a.tabPosition,se=a.tabBarGutter,z=a.children,q=a.onTabClick,ne=a.onTabScroll,Q=Object(n.useRef)(),ae=Object(n.useRef)(),k=Object(n.useRef)(),he=Object(n.useRef)(),_=_r(),le=Object(J.a)(_,2),de=le[0],te=le[1],H=X==="top"||X==="bottom",ie=lr(0,function(ee,Z){H&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(J.a)(ie,2),me=fe[0],be=fe[1],Ae=lr(0,function(ee,Z){!H&&ne&&ne({direction:ee>Z?"top":"bottom"})}),ve=Object(J.a)(Ae,2),ye=ve[0],Te=ve[1],Pe=Object(n.useState)(0),Re=Object(J.a)(Pe,2),Ce=Re[0],Me=Re[1],Ge=Object(n.useState)(0),Be=Object(J.a)(Ge,2),Ke=Be[0],$e=Be[1],we=Object(n.useState)(0),gn=Object(J.a)(we,2),Qe=gn[0],Je=gn[1],_e=Object(n.useState)(0),dn=Object(J.a)(_e,2),cn=dn[0],De=dn[1],Le=Object(n.useState)(null),He=Object(J.a)(Le,2),ze=He[0],In=He[1],zn=Object(n.useState)(null),Fn=Object(J.a)(zn,2),Ze=Fn[0],yn=Fn[1],en=Object(n.useState)(0),bn=Object(J.a)(en,2),Ye=bn[0],ke=bn[1],On=Object(n.useState)(0),tn=Object(J.a)(On,2),Ue=tn[0],xe=tn[1],Un=hn(new Map),Gn=Object(J.a)(Un,2),at=Gn[0],mn=Gn[1],ln=ot(C,at,Ce),Hn="".concat(E,"-nav-operations-hidden"),fn=0,rn=0;H?G?(fn=0,rn=Math.max(0,Ce-ze)):(fn=Math.min(0,ze-Ce),rn=0):(fn=Math.min(0,Ze-Ke),rn=0);function Yn(ee){return ee<fn?fn:ee>rn?rn:ee}var Sn=Object(n.useRef)(),Xn=Object(n.useState)(),nn=Object(J.a)(Xn,2),Cn=nn[0],ce=nn[1];function Se(){ce(Date.now())}function Ne(){window.clearTimeout(Sn.current)}qr(Q,function(ee,Z){function ge(We,qe){We(function(Ln){var kn=Yn(Ln+qe);return kn})}if(H){if(ze>=Ce)return!1;ge(be,ee)}else{if(Ze>=Ke)return!1;ge(Te,Z)}return Ne(),Se(),!0}),Object(n.useEffect)(function(){return Ne(),Cn&&(Sn.current=window.setTimeout(function(){ce(0)},100)),Ne},[Cn]);function Xe(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=ln.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(H){var ge=me;G?Z.right<me?ge=Z.right:Z.right+Z.width>me+ze&&(ge=Z.right+Z.width-ze):Z.left<-me?ge=-Z.left:Z.left+Z.width>-me+ze&&(ge=-(Z.left+Z.width-ze)),Te(0),be(Yn(ge))}else{var We=ye;Z.top<-ye?We=-Z.top:Z.top+Z.height>-ye+Ze&&(We=-(Z.top+Z.height-Ze)),be(0),Te(Yn(We))}}var Qn=lt(ln,{width:ze,height:Ze,left:me,top:ye},{width:Qe,height:cn},{width:Ye,height:Ue},Object(oe.a)(Object(oe.a)({},a),{},{tabs:C})),Ct=Object(J.a)(Qn,2),Vt=Ct[0],Jt=Ct[1],zt=C.map(function(ee){var Z=ee.key;return n.createElement(wn,{id:K,prefixCls:E,key:Z,rtl:G,tab:ee,closable:ee.closable,editable:re,active:Z===$,tabPosition:X,tabBarGutter:se,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:de(Z),onClick:function(We){q(Z,We)},onRemove:function(){te(Z)},onFocus:function(){Xe(Z),Se(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),st=Pn(function(){var ee,Z,ge,We,qe,Ln,kn,Gt,Ht,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,pr=((ge=he.current)===null||ge===void 0?void 0:ge.offsetWidth)||0,hr=((We=he.current)===null||We===void 0?void 0:We.offsetHeight)||0,da=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,ca=((Ln=k.current)===null||Ln===void 0?void 0:Ln.offsetHeight)||0;In(la),yn(ua),ke(pr),xe(hr);var vr=(((kn=ae.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-pr,gr=(((Gt=ae.current)===null||Gt===void 0?void 0:Gt.offsetHeight)||0)-hr;Me(vr),$e(gr);var yr=(Ht=k.current)===null||Ht===void 0?void 0:Ht.className.includes(Hn);Je(vr-(yr?0:da)),De(gr-(yr?0:ca)),mn(function(){var br=new Map;return C.forEach(function(ma){var Or=ma.key,vt=de(Or).current;vt&&br.set(Or,{width:vt.offsetWidth,height:vt.offsetHeight,left:vt.offsetLeft,top:vt.offsetTop})}),br})}),Rt=C.slice(0,Vt),mt=C.slice(Jt+1),Et=[].concat(Object(an.a)(Rt),Object(an.a)(mt)),Ut=Object(n.useState)(),jt=Object(J.a)(Ut,2),Dt=jt[0],it=jt[1],Rn=ln.get($),Pt=Object(n.useRef)();function Tt(){Ve.a.cancel(Pt.current)}Object(n.useEffect)(function(){var ee={};return Rn&&(H?(G?ee.right=Rn.right:ee.left=Rn.left,ee.width=Rn.width):(ee.top=Rn.top,ee.height=Rn.height)),Tt(),Pt.current=Object(Ve.a)(function(){it(ee)}),Tt},[Rn,H,G]),Object(n.useEffect)(function(){Xe()},[$,Rn,ln,H]),Object(n.useEffect)(function(){st()},[G,se,$,C.map(function(ee){return ee.key}).join("_")]);var ft=!!Et.length,Zn="".concat(E,"-nav-wrap"),pt,ht,Nt,It;return H?G?(ht=me>0,pt=me+ze<Ce):(pt=me<0,ht=-me+ze<Ce):(Nt=ye<0,It=-ye+Ze<Ke),n.createElement("div",{ref:l,role:"tablist",className:je()("".concat(E,"-nav"),P),style:A,onKeyDown:function(){Se()}},n.createElement(ur,{position:"left",extra:U,prefixCls:E}),n.createElement(An.default,{onResize:st},n.createElement("div",{className:je()(Zn,(y={},Object(ue.a)(y,"".concat(Zn,"-ping-left"),pt),Object(ue.a)(y,"".concat(Zn,"-ping-right"),ht),Object(ue.a)(y,"".concat(Zn,"-ping-top"),Nt),Object(ue.a)(y,"".concat(Zn,"-ping-bottom"),It),y)),ref:Q},n.createElement(An.default,{onResize:st},n.createElement("div",{ref:ae,className:"".concat(E,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ye,"px)"),transition:Cn?"none":void 0}},zt,n.createElement(sr,{ref:he,prefixCls:E,locale:Y,editable:re,style:{visibility:ft?"hidden":null}}),n.createElement("div",{className:je()("".concat(E,"-ink-bar"),Object(ue.a)({},"".concat(E,"-ink-bar-animated"),x.inkBar)),style:Dt}))))),n.createElement(Zr,Object(W.a)({},a,{ref:k,prefixCls:E,tabs:Et,className:!ft&&Hn})),n.createElement(ur,{position:"right",extra:U,prefixCls:E}))}var dr=n.forwardRef(ea);function na(a){var l=a.id,y=a.activeKey,R=a.animated,E=a.tabPosition,C=a.rtl,P=a.destroyInactiveTabPane,A=n.useContext(Lt),K=A.prefixCls,x=A.tabs,$=R.tabPane,G=x.findIndex(function(U){return U.key===y});return n.createElement("div",{className:je()("".concat(K,"-content-holder"))},n.createElement("div",{className:je()("".concat(K,"-content"),"".concat(K,"-content-").concat(E),Object(ue.a)({},"".concat(K,"-content-animated"),$)),style:G&&$?Object(ue.a)({},C?"marginRight":"marginLeft","-".concat(G,"00%")):null},x.map(function(U){return n.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:l,animated:$,active:U.key===y,destroyInactiveTabPane:P})})))}function cr(a){var l=a.prefixCls,y=a.forceRender,R=a.className,E=a.style,C=a.id,P=a.active,A=a.animated,K=a.destroyInactiveTabPane,x=a.tabKey,$=a.children,G=n.useState(y),U=Object(J.a)(G,2),re=U[0],Y=U[1];n.useEffect(function(){P?Y(!0):K&&Y(!1)},[P,K]);var X={};return P||(A?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:C&&"".concat(C,"-panel-").concat(x),role:"tabpanel",tabIndex:P?0:-1,"aria-labelledby":C&&"".concat(C,"-tab-").concat(x),"aria-hidden":!P,style:Object(oe.a)(Object(oe.a)({},X),E),className:je()("".concat(l,"-tabpane"),P&&"".concat(l,"-tabpane-active"),R)},(P||re||y)&&$)}var mr=0;function ta(a){return Object(jn.a)(a).map(function(l){if(n.isValidElement(l)){var y=l.key!==void 0?String(l.key):void 0;return Object(oe.a)(Object(oe.a)({key:y},l.props),{},{node:l})}return null}).filter(function(l){return l})}function ra(a,l){var y,R=a.id,E=a.prefixCls,C=E===void 0?"rc-tabs":E,P=a.className,A=a.children,K=a.direction,x=a.activeKey,$=a.defaultActiveKey,G=a.editable,U=a.animated,re=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=a.tabPosition,X=Y===void 0?"top":Y,se=a.tabBarGutter,z=a.tabBarStyle,q=a.tabBarExtraContent,ne=a.locale,Q=a.moreIcon,ae=a.moreTransitionName,k=a.destroyInactiveTabPane,he=a.renderTabBar,_=a.onChange,le=a.onTabClick,de=a.onTabScroll,te=Object(Ee.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(A),ie=K==="rtl",fe;re===!1?fe={inkBar:!1,tabPane:!1}:re===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(oe.a)({inkBar:!0,tabPane:!1},Object(Ie.a)(re)==="object"?re:{});var me=Object(n.useState)(!1),be=Object(J.a)(me,2),Ae=be[0],ve=be[1];Object(n.useEffect)(function(){ve(Object(Dn.a)())},[]);var ye=Object(pn.a)(function(){var De;return(De=H[0])===null||De===void 0?void 0:De.key},{value:x,defaultValue:$}),Te=Object(J.a)(ye,2),Pe=Te[0],Re=Te[1],Ce=Object(n.useState)(function(){return H.findIndex(function(De){return De.key===Pe})}),Me=Object(J.a)(Ce,2),Ge=Me[0],Be=Me[1];Object(n.useEffect)(function(){var De=H.findIndex(function(He){return He.key===Pe});if(De===-1){var Le;De=Math.max(0,Math.min(Ge,H.length-1)),Re((Le=H[De])===null||Le===void 0?void 0:Le.key)}Be(De)},[H.map(function(De){return De.key}).join("_"),Pe,Ge]);var Ke=Object(pn.a)(null,{value:R}),$e=Object(J.a)(Ke,2),we=$e[0],gn=$e[1],Qe=X;Ae&&!["left","right"].includes(X)&&(Qe="top"),Object(n.useEffect)(function(){R||(gn("rc-tabs-".concat(mr)),mr+=1)},[]);function Je(De,Le){le==null||le(De,Le),Re(De),_==null||_(De)}var _e={id:we,activeKey:Pe,animated:fe,tabPosition:Qe,rtl:ie,mobile:Ae},dn,cn=Object(oe.a)(Object(oe.a)({},_e),{},{editable:G,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:Je,onTabScroll:de,extra:q,style:z,panes:A});return he?dn=he(cn,dr):dn=n.createElement(dr,cn),n.createElement(Lt.Provider,{value:{tabs:H,prefixCls:C}},n.createElement("div",Object(W.a)({ref:l,id:R,className:je()(C,"".concat(C,"-").concat(Qe),(y={},Object(ue.a)(y,"".concat(C,"-mobile"),Ae),Object(ue.a)(y,"".concat(C,"-editable"),G),Object(ue.a)(y,"".concat(C,"-rtl"),ie),y),P)},te),dn,n.createElement(na,Object(W.a)({destroyInactiveTabPane:k},_e,{animated:fe}))))}var fr=n.forwardRef(ra);fr.TabPane=cr;var aa=fr,sa=aa,xt=e("MZF8"),on=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function $t(a,l){var y,R=(y=a.match(/\.(\w+)$/))===null||y===void 0?void 0:y[1];return R||(R=l.tsx?"tsx":"jsx"),R}var oa=a=>{var l,y,R,E=Object(n.useRef)(),C=Object(n.useContext)(on.context),P=C.locale,A=Object(on.useLocaleProps)(P,a),K=Object(on.useDemoUrl)(A.identifier),x=A.demoUrl||K,$=(xt.a===null||xt.a===void 0?void 0:xt.a.location.hash)==="#".concat(A.identifier),G=Object.keys(A.sources).length===1,U=Object(on.useCodeSandbox)((l=A.hideActions)!==null&&l!==void 0&&l.includes("CSB")?null:A),re=Object(on.useRiddle)((y=A.hideActions)!==null&&y!==void 0&&y.includes("RIDDLE")?null:A),Y=Object(on.useMotions)(A.motions||[],E.current),X=Object(V.default)(Y,2),se=X[0],z=X[1],q=Object(on.useCopy)(),ne=Object(V.default)(q,2),Q=ne[0],ae=ne[1],k=Object(n.useState)("_"),he=Object(V.default)(k,2),_=he[0],le=he[1],de=Object(n.useState)($t(_,A.sources[_])),te=Object(V.default)(de,2),H=te[0],ie=te[1],fe=Object(n.useState)(Boolean(A.defaultShowCode)),me=Object(V.default)(fe,2),be=me[0],Ae=me[1],ve=Object(n.useState)(Math.random()),ye=Object(V.default)(ve,2),Te=ye[0],Pe=ye[1],Re=A.sources[_][H]||A.sources[_].content,Ce=Object(on.useTSPlaygroundUrl)(P,Re),Me=Object(n.useRef)(),Ge=Object(on.usePrefersColor)(),Be=Object(V.default)(Ge,1),Ke=Be[0];Object(n.useEffect)(()=>{Pe(Math.random())},[Ke]);function $e(we){le(we),ie($t(we,A.sources[we]))}return O.a.createElement("div",{style:A.style,className:[A.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:A.identifier,"data-debug":A.debug||void 0,"data-iframe":A.iframe||void 0},A.iframe&&O.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),O.a.createElement("div",{ref:E,className:"__dumi-default-previewer-demo",style:{transform:A.transform?"translate(0, 0)":void 0,padding:A.compact||A.iframe&&A.compact!==!1?"0":void 0,background:A.background}},A.iframe?O.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(A.iframe).replace(/(\d)$/,"$1px")},key:Te,src:x,ref:Me}):A.children),O.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":A.title},A.title&&O.a.createElement(on.AnchorLink,{to:"#".concat(A.identifier)},A.title),A.description&&O.a.createElement("div",{dangerouslySetInnerHTML:{__html:A.description}})),O.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&O.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),re&&O.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),A.motions&&O.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),A.iframe&&O.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Pe(Math.random())}),!((R=A.hideActions)!==null&&R!==void 0&&R.includes("EXTERNAL"))&&O.a.createElement(on.Link,{target:"_blank",to:x},O.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),O.a.createElement("span",null),O.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Re)}),H==="tsx"&&be&&O.a.createElement(on.Link,{target:"_blank",to:Ce},O.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),O.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(be?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ae(!be)})),be&&O.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&O.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:$e},Object.keys(A.sources).map(we=>O.a.createElement(cr,{tab:we==="_"?"index.".concat($t(we,A.sources[we])):we,key:we}))),O.a.createElement("div",{className:"__dumi-default-previewer-source"},O.a.createElement(ia.a,{code:Re,lang:H,showCopy:!1}))))},Oa=un.default=oa},"80pN":function(En,un,e){"use strict";(function(V){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),O=e("q1tI"),W=e("i8i4"),ue=e("QCnb");function J(r){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+r,h=1;h<arguments.length;h++)u+="&args[]="+encodeURIComponent(arguments[h]);return"Minified React error #"+r+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ie=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ie.hasOwnProperty("ReactCurrentDispatcher")||(Ie.ReactCurrentDispatcher={current:null}),Ie.hasOwnProperty("ReactCurrentBatchConfig")||(Ie.ReactCurrentBatchConfig={suspense:null});function Ee(r){var u=r,h=r;if(r.alternate)for(;u.return;)u=u.return;else{r=u;do u=r,(u.effectTag&1026)!=0&&(h=u.return),r=u.return;while(r)}return u.tag===3?h:null}function oe(r){if(Ee(r)!==r)throw Error(J(188))}function xn(r){var u=r.alternate;if(!u){if(u=Ee(r),u===null)throw Error(J(188));return u!==r?null:r}for(var h=r,B=u;;){var N=h.return;if(N===null)break;var L=N.alternate;if(L===null){if(B=N.return,B!==null){h=B;continue}break}if(N.child===L.child){for(L=N.child;L;){if(L===h)return oe(N),r;if(L===B)return oe(N),u;L=L.sibling}throw Error(J(188))}if(h.return!==B.return)h=N,B=L;else{for(var pe=!1,Oe=N.child;Oe;){if(Oe===h){pe=!0,h=N,B=L;break}if(Oe===B){pe=!0,B=N,h=L;break}Oe=Oe.sibling}if(!pe){for(Oe=L.child;Oe;){if(Oe===h){pe=!0,h=L,B=N;break}if(Oe===B){pe=!0,B=L,h=N;break}Oe=Oe.sibling}if(!pe)throw Error(J(189))}}if(h.alternate!==B)throw Error(J(190))}if(h.tag!==3)throw Error(J(188));return h.stateNode.current===h?r:u}function je(){return!0}function jn(){return!1}function Dn(r,u,h,B){this.dispatchConfig=r,this._targetInst=u,this.nativeEvent=h,r=this.constructor.Interface;for(var N in r)r.hasOwnProperty(N)&&((u=r[N])?this[N]=u(h):N==="target"?this.target=B:this[N]=h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?je:jn,this.isPropagationStopped=jn,this}n(Dn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=je)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=je)},persist:function(){this.isPersistent=je},isPersistent:jn,destructor:function(){var r=this.constructor.Interface,u;for(u in r)this[u]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=jn,this._dispatchInstances=this._dispatchListeners=null}}),Dn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Dn.extend=function(r){function u(){}function h(){return B.apply(this,arguments)}var B=this;u.prototype=B.prototype;var N=new u;return n(N,h.prototype),h.prototype=N,h.prototype.constructor=h,h.Interface=n({},B.Interface,r),h.extend=B.extend,Ve(h),h},Ve(Dn);function pn(r,u,h,B){if(this.eventPool.length){var N=this.eventPool.pop();return this.call(N,r,u,h,B),N}return new this(r,u,h,B)}function an(r){if(!(r instanceof this))throw Error(J(279));r.destructor(),10>this.eventPool.length&&this.eventPool.push(r)}function Ve(r){r.eventPool=[],r.getPooled=pn,r.release=an}var An=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Pn(r,u){var h={};return h[r.toLowerCase()]=u.toLowerCase(),h["Webkit"+r]="webkit"+u,h["Moz"+r]="moz"+u,h}var hn={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},Fe={},qn={};An&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function wn(r){if(Fe[r])return Fe[r];if(!hn[r])return r;var u=hn[r],h;for(h in u)if(u.hasOwnProperty(h)&&h in qn)return Fe[r]=u[h];return r}var _n=wn("animationend"),ot=wn("animationiteration"),et=wn("animationstart"),lt=wn("transitionend"),Mn=null;function nt(r){if(Mn===null)try{var u=("require"+Math.random()).slice(0,7);Mn=(V&&V[u])("timers").setImmediate}catch(h){Mn=function(B){var N=new MessageChannel;N.port1.onmessage=B,N.port2.postMessage(void 0)}}return Mn(r)}var $n=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ut=$n[11],Bn=$n[12],Tn=W.unstable_batchedUpdates,Vn=Ie.IsSomeRendererActing,tt=typeof ue.unstable_flushAllWithoutAsserting=="function",Jn=ue.unstable_flushAllWithoutAsserting||function(){for(var r=!1;ut();)r=!0;return r};function F(r){try{Jn(),nt(function(){Jn()?F(r):r()})}catch(u){r(u)}}var T=0,I=!1,f=W.findDOMNode,i=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=i[0],b=i[4],S=i[5],s=i[6],p=i[7],o=i[8],w=i[9],M=i[10];function D(){}function d(r,u){if(!r)return[];if(r=xn(r),!r)return[];for(var h=r,B=[];;){if(h.tag===5||h.tag===6||h.tag===1||h.tag===0){var N=h.stateNode;u(N)&&B.push(N)}if(h.child)h.child.return=h,h=h.child;else{if(h===r)return B;for(;!h.sibling;){if(!h.return||h.return===r)return B;h=h.return}h.sibling.return=h.return,h=h.sibling}}}function j(r,u){if(r&&!r._reactInternalFiber){var h=""+r;throw r=Array.isArray(r)?"an array":r&&r.nodeType===1&&r.tagName?"a DOM node":h==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":h,Error(J(286,u,r))}}var m={renderIntoDocument:function(r){var u=document.createElement("div");return W.render(r,u)},isElement:function(r){return O.isValidElement(r)},isElementOfType:function(r,u){return O.isValidElement(r)&&r.type===u},isDOMComponent:function(r){return!(!r||r.nodeType!==1||!r.tagName)},isDOMComponentElement:function(r){return!!(r&&O.isValidElement(r)&&r.tagName)},isCompositeComponent:function(r){return m.isDOMComponent(r)?!1:r!=null&&typeof r.render=="function"&&typeof r.setState=="function"},isCompositeComponentWithType:function(r,u){return m.isCompositeComponent(r)?r._reactInternalFiber.type===u:!1},findAllInRenderedTree:function(r,u){return j(r,"findAllInRenderedTree"),r?d(r._reactInternalFiber,u):[]},scryRenderedDOMComponentsWithClass:function(r,u){return j(r,"scryRenderedDOMComponentsWithClass"),m.findAllInRenderedTree(r,function(h){if(m.isDOMComponent(h)){var B=h.className;typeof B!="string"&&(B=h.getAttribute("class")||"");var N=B.split(/\s+/);if(!Array.isArray(u)){if(u===void 0)throw Error(J(11));u=u.split(/\s+/)}return u.every(function(L){return N.indexOf(L)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(r,u){if(j(r,"findRenderedDOMComponentWithClass"),r=m.scryRenderedDOMComponentsWithClass(r,u),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for class:"+u);return r[0]},scryRenderedDOMComponentsWithTag:function(r,u){return j(r,"scryRenderedDOMComponentsWithTag"),m.findAllInRenderedTree(r,function(h){return m.isDOMComponent(h)&&h.tagName.toUpperCase()===u.toUpperCase()})},findRenderedDOMComponentWithTag:function(r,u){if(j(r,"findRenderedDOMComponentWithTag"),r=m.scryRenderedDOMComponentsWithTag(r,u),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for tag:"+u);return r[0]},scryRenderedComponentsWithType:function(r,u){return j(r,"scryRenderedComponentsWithType"),m.findAllInRenderedTree(r,function(h){return m.isCompositeComponentWithType(h,u)})},findRenderedComponentWithType:function(r,u){if(j(r,"findRenderedComponentWithType"),r=m.scryRenderedComponentsWithType(r,u),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for componentType:"+u);return r[0]},mockComponent:function(r,u){return u=u||r.mockTagName||"div",r.prototype.render.mockImplementation(function(){return O.createElement(u,null,this.props.children)}),this},nativeTouchData:function(r,u){return{touches:[{pageX:r,pageY:u}]}},Simulate:null,SimulateNative:{},act:function(r){function u(){T--,Vn.current=h,Bn.current=B}I===!1&&(I=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var h=Vn.current,B=Bn.current;Vn.current=!0,Bn.current=!0;try{var N=Tn(r)}catch(L){throw u(),L}if(N!==null&&typeof N=="object"&&typeof N.then=="function")return{then:function(L,pe){N.then(function(){1<T||tt===!0&&h===!0?(u(),L()):F(function(Oe){u(),Oe?pe(Oe):L()})},function(Oe){u(),pe(Oe)})}};try{T!==1||tt!==!1&&h!==!1||Jn(),u()}catch(L){throw u(),L}return{then:function(L){L()}}}};function t(r){return function(u,h){if(O.isValidElement(u))throw Error(J(228));if(m.isCompositeComponent(u))throw Error(J(229));var B=b[r],N=new D;N.target=u,N.type=r.toLowerCase();var L=v(u),pe=new Dn(B,L,N,u);pe.persist(),n(pe,h),B.phasedRegistrationNames?S(pe):s(pe),W.unstable_batchedUpdates(function(){p(u),M(pe)}),o()}}m.Simulate={};for(var g in b)m.Simulate[g]=t(g);function c(r,u){return function(h,B){var N=new D(r);n(N,B),m.isDOMComponent(h)?(h=f(h),N.target=h,w(u,1,document,N)):h.tagName&&(N.target=h,w(u,1,document,N))}}[["abort","abort"],[_n,"animationEnd"],[ot,"animationIteration"],[et,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[lt,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(r){var u=r[1];m.SimulateNative[u]=c(u,r[0])}),V.exports=m.default||m}).call(this,e("hOG+")(En))},JjdP:function(En,un,e){"use strict";e.r(un);var V=e("9og8"),n=e("WmNS"),O=e.n(n),W=e("LtsZ"),ue=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,J=`import { get, set, cloneDeep } from 'lodash-es';

// \u540E\u9762\u4E09\u4E2A\u53C2\u6570\u90FD\u662F\u5185\u90E8\u9012\u5F52\u4F7F\u7528\u7684\uFF0C\u5C06schema\u7684\u6811\u5F62\u7ED3\u6784\u6241\u5E73\u5316\u6210\u4E00\u5C42, \u6BCF\u4E2Aitem\u7684\u7ED3\u6784
// {
//   parent: '#',
//   schema: ...,
//   children: []
// }

// TODO: \u53D1\u5E03\u540E\u53BB\u6389
window.log1 = value => {
  console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
};

window.log2 = value => {
  console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
};

window.log3 = value => {
  console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
};

window.log4 = value => {
  console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
};

export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

// a[].b.c => a.b.c
function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\\[\\]/g, '');
  } else {
    return string;
  }
}

export function getParentPath(path) {
  if (typeof path === 'string') {
    const pathArr = path.split('.');
    if (pathArr.length === 1) {
      return '#';
    }
    pathArr.pop();
    return pathArr.join('.');
  }
  return '#';
}

export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  } else {
    console.error('path has to be a string');
  }
}

//  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }
export function destructDataPath(path) {
  let id;
  let dataIndex;
  if (path === '#') {
    return { id: '#', dataIndex: [] };
  }
  if (typeof path !== 'string') {
    throw Error(\`path \${path} is not a string!!! Something wrong here\`);
  }
  const pattern = /\\[[0-9]+\\]/g;
  const matchList = path.match(pattern);
  if (!matchList) {
    id = path;
  } else {
    id = path.replace(pattern, '[]');
    // \u8FD9\u4E2A\u662Fmatch\u4E0B\u6765\u7684\u7ED3\u679C\uFF0C\u53EF\u5B89\u5168\u5904\u7406
    dataIndex = matchList.map(item =>
      Number(item.substring(1, item.length - 1))
    );
  }
  return { id, dataIndex };
}

// id: 'a.b[].c[]'  dataIndex: [1,0] =>  'a.b[1].c[0]'
export function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }
  if (typeof id !== 'string') {
    throw Error(\`id \${id} is not a string!!! Something wrong here\`);
  }
  let _id = id;
  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\\[\\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(item => {
      _id = _id.replace(/\\[\\]/, \`[\${item}]\`);
    });
  }
  return removeBrackets(_id);
}

export function isObjType(schema) {
  return schema && schema.type === 'object' && schema.properties;
}

// TODO: \u652F\u6301\u975E\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u9879
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: \u68C0\u9A8C\u662F\u5426\u4E22\u8FDB\u53BB\u5404\u79CDschema\u90FD\u80FD\u515C\u5E95\u4E0D\u4F1Acrash
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema); // TODO: \u662F\u5426\u9700\u8981deepClone\uFF0C\u8FD9\u4E2A\u82B1\u8D39\u662F\u4E0D\u662F\u6709\u70B9\u5927
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // \u7ED9\u751F\u6210\u7684schema\u6DFB\u52A0\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF0C\u65B9\u4FBF\u4ECEschema\u4E2D\u76F4\u63A5\u8BFB\u53D6
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.items.properties = {};
  }

  const rules = Array.isArray(schema.rules) ? [...schema.rules] : [];
  if (['boolean', 'function', 'string'].indexOf(typeof schema.required) > -1) {
    rules.push({ required: schema.required }); // TODO: \u4E07\u4E00\u5185\u90E8\u5DF2\u7ECF\u7528\u91CD\u590D\u7684required\u89C4\u5219\uFF1F
  }

  if (schema.type) {
    // Check: \u4E3A\u5565\u4E00\u5B9A\u8981\u6709type\uFF1F
    // TODO: \u6CA1\u6709\u60F3\u597D validation \u7684\u90E8\u5206
    result[_name] = { parent, schema: schema, children, rules };
  }
  return result;
}

//////////   old

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u514B\u9686\u5BF9\u8C61
// function clone1(data) {
//   // data = functionToString(data);
//   try {
//     return JSON.parse(JSON.stringify(data));
//   } catch (e) {
//     return data;
//   }
// }

export const clone = cloneDeep;
// export const clone = clone1;

// export const functionToString = data => {
//   let result;
//   if (isObject(data)) {
//     result = {};
//     Object.keys(data).forEach(key => {
//       result[key] = functionToString(data[key]);
//     });
//     return result;
//   } else if (typeof data === 'function') {
//     return result.toString();
//   }
//   return data;
// };

// '3' => true, 3 => true, undefined => false
export function isLooselyNumber(num) {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }
  return false;
}

export function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
}

// \u6DF1\u5EA6\u5BF9\u6BD4
export function isDeepEqual(param1, param2) {
  if (param1 === undefined && param2 === undefined) return true;
  else if (param1 === undefined || param2 === undefined) return false;
  if (param1 === null && param2 === null) return true;
  else if (param1 === null || param2 === null) return false;
  else if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (let i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        if (!isDeepEqual(param1[i], param2[i])) return false;
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (let i = 0; i < Object.keys(param1).length; i++) {
      const key = Object.keys(param1)[i];
      if (
        param1[key] &&
        typeof param1[key] !== 'number' &&
        (param1[key].constructor === Array ||
          param1[key].constructor === Object)
      ) {
        if (!isDeepEqual(param1[key], param2[key])) return false;
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor === String || param1.constructor === Number) {
    return param1 === param2;
  }
  return true;
}

// \u65F6\u95F4\u7EC4\u4EF6
export function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

export function hasRepeat(list) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y))
  );
}

// ----------------- schema \u76F8\u5173

// \u5408\u5E76propsSchema\u548CUISchema\u3002\u7531\u4E8E\u4E24\u8005\u7684\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u5408\u5E76\u4E3A\u4E00\u4E2A\u5927schema\u80FD\u7B80\u5316\u5185\u90E8\u5904\u7406
export function combineSchema(propsSchema = {}, uiSchema = {}) {
  const propList = getChildren(propsSchema);
  const newList = propList.map(p => {
    const { name } = p;
    const { type, enum: options, properties, items } = p.schema;
    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options; // enum + array \u4EE3\u8868\u7684\u591A\u9009\u6846\uFF0C\u6CA1\u6709sub
    const ui = name && uiSchema[p.name];
    if (!ui) {
      return p;
    }
    // \u5982\u679C\u662Flist\uFF0C\u9012\u5F52\u5408\u5E76items
    if (isArr) {
      const newItems = combineSchema(items, ui.items || {});
      return { ...p, schema: { ...p.schema, ...ui, items: newItems } };
    }
    // object\u9012\u5F52\u5408\u5E76\u6574\u4E2Aschema
    if (isObj) {
      const newSchema = combineSchema(p.schema, ui);
      return { ...p, schema: newSchema };
    }
    return { ...p, schema: { ...p.schema, ...ui } };
  });

  const newObj = {};
  newList.forEach(s => {
    newObj[s.name] = s.schema;
  });

  const topLevelUi = {};
  Object.keys(uiSchema).forEach(key => {
    if (typeof key === 'string' && key.substring(0, 3) === 'ui:') {
      topLevelUi[key] = uiSchema[key];
    }
  });
  if (isEmpty(newObj)) {
    return { ...propsSchema, ...topLevelUi };
  }
  return { ...propsSchema, ...topLevelUi, properties: newObj };
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// \u5408\u5E76\u591A\u4E2Aschema\u6811\uFF0C\u6BD4\u5982\u4E00\u4E2Aschema\u7684\u6811\u8282\u70B9\u662F\u53E6\u4E00\u4E2Aschema
export function combine() {}

// \u4EE3\u66FFeval\u7684\u51FD\u6570
export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

// \u89E3\u6790\u51FD\u6570\u5B57\u7B26\u4E32\u503C
export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

// \u5224\u65ADschema\u7684\u503C\u662F\u662F\u5426\u662F\u201C\u51FD\u6570\u201D
// JSON\u65E0\u6CD5\u4F7F\u7528\u51FD\u6570\u503C\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u4F7F\u7528"{{...}}"\u6765\u6807\u8BB0\u4E3A\u51FD\u6570\uFF0C\u4E5F\u53EF\u4F7F\u7528@\u6807\u8BB0\uFF0C\u4E0D\u63A8\u8350\u3002
export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  // \u4E0D\u518D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u4E86\uFF01
  if (typeof func !== 'string') return false;
  // \u8FD9\u6837\u7684pattern {{.....}}
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (
    typeof func === 'string' &&
    func.match(pattern) &&
    !func.match(reg1) &&
    !func.match(reg2)
  ) {
    return true;
  }
  return false;
}

export function parseSingleExpression(func, formData = {}, dataPath) {
  const parentPath = getParentPath(dataPath);
  const parent = getValueByPath(formData, parentPath) || {};
  if (typeof func === 'string') {
    const funcBody = func.substring(2, func.length - 2);
    const str = \`
    return \${funcBody
      .replace(/formData/g, JSON.stringify(formData))
      .replace(/rootValue/g, JSON.stringify(parent))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.log(error, func, dataPath);
      return func;
    }
    // const funcBody = func.substring(2, func.length - 2);
    // //TODO: \u8FD9\u6837\u6709\u95EE\u9898\uFF0C\u4F8B\u5982 a.b.indexOf(), \u4F1A\u628A a.b.indexOf \u5F53\u505A\u503C
    // const match1 = /formData.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const match2 = /rootValue.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const str = \`
    // return (\${funcBody
    //   .replaceAll(match1, (v, m1) =>
    //     JSON.stringify(getValueByPath(formData, m1))
    //   )
    //   .replaceAll(match2, (v, m1) =>
    //     JSON.stringify(getValueByPath(parent, m1))
    //   )})\`;
    // try {
    //   return Function(str)();
    // } catch (error) {
    //   console.log(error);
    //   return func;
    // }
  } else return func;
}

export const schemaContainsExpression = (schema, shallow = true) => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (
        typeof key === 'string' &&
        key.toLowerCase().indexOf('props') > -1
      ) {
        const propsObj = schema[key];
        if (isObject(propsObj)) {
          return Object.keys(propsObj).some(k => {
            return isExpression(propsObj[k]);
          });
        }
      } else if (!shallow && isObject(value)) {
        return schemaContainsExpression(value, false);
      }
      return false;
    });
  } else {
    return false;
  }
};

// TODO: \u4E24\u4E2A\u4F18\u5316\uFF0C1. \u53EF\u4EE5\u901A\u8FC7\u8868\u8FBE\u5F0F\u7684path\u6765\u5224\u65AD\uFF0C\u907F\u514D\u4E00\u4E9B\u91CD\u590D\u8BA1\u7B97
export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      // TODO: dataPath \u8FD9\u8FB9\u8981\u5904\u7406\u4E00\u4E0B\uFF0C\u5426\u5219rootValue\u7C7B\u7684\u6CA1\u6709\u6548\u679C
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
      // console.log(
      //   formData.materialType,
      //   dataPath,
      //   parseSingleExpression(value, formData, dataPath)
      // );
    } else if (
      typeof key === 'string' &&
      key.toLowerCase().indexOf('props') > -1
    ) {
      // \u6709\u53EF\u80FD\u53EB xxxProps
      const propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(k => {
          schema[key][k] = parseSingleExpression(
            propsObj[k],
            formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};

// \u5224\u65ADschema\u4E2D\u662F\u5426\u6709\u5C5E\u6027\u503C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F
export function isFunctionSchema(schema) {
  return Object.keys(schema).some(key => {
    if (typeof schema[key] === 'function') {
      return true;
    } else if (typeof schema[key] === 'string') {
      return isExpression(schema[key]);
    } else if (typeof schema[key] === 'object') {
      return isFunctionSchema(schema[key]);
    } else {
      return false;
    }
  });
}

// \u4F8B\u5982\u5F53\u524Ditem\u7684id = '#/obj/input'  propName: 'ui:labelWidth' \u5F80\u4E0A\u4E00\u76F4\u627E\uFF0C\u76F4\u5230\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u662Fundefined\u7684\u503C TODO: \u770B\u770B\u662F\u5426ok
export const getParentProps = (propName, id, flatten) => {
  try {
    const item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];
    if (item && item.parent) {
      const parentSchema = flatten[item.parent].schema;
      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};

export const getSaveNumber = () => {
  const searchStr = localStorage.getItem('SAVES');
  if (searchStr) {
    try {
      const saves = JSON.parse(searchStr);
      const length = saves.length;
      if (length) return length + 1;
    } catch (error) {
      return 1;
    }
  } else {
    return 1;
  }
};

export function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren2(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

export const oldSchemaToNew = schema => {
  if (schema && schema.propsSchema) {
    const { propsSchema, ...rest } = schema;
    return { schema: propsSchema, ...rest };
  }
  return schema;
};

export const newSchemaToOld = setting => {
  if (setting && setting.schema) {
    const { schema, ...rest } = setting;
    return { propsSchema: schema, ...rest };
  }
  return setting;
};

// from FR

export const getEnum = schema => {
  if (!schema) return undefined;
  const itemEnum = schema && schema.items && schema.items.enum;
  const schemaEnum = schema && schema.enum;
  return itemEnum ? itemEnum : schemaEnum;
};

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export const isEmail = value => {
  const regex = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';
  if (value && new RegExp(regex).test(value)) {
    return true;
  }
  return false;
};

export function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

export const getKeyFromPath = path => {
  try {
    const keyList = path.split('.');
    const last = keyList.slice(-1)[0];
    return last;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};

// \u66F4\u591A\u7684\u503C\u83B7\u53D6
export const getDisplayValue = (value, schema) => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }
  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }
  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }
  return value;
};

// \u53BB\u6389\u6570\u7EC4\u91CC\u7684\u7A7A\u5143\u7D20 {a: [null, {x:1}]} => {a: [{x:1}]}
export const removeEmptyItemFromList = formData => {
  let result = {};
  if (isObject(formData)) {
    Object.keys(formData).forEach(key => {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(item => {
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }
      return false;
    });
  } else {
    result = formData;
  }
  return result;
};

export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
  let result = {};
  let singleResult = {};
  if (schema.hidden === true) return { validator: () => true };
  if (isObjType(schema)) {
    result.type = 'object';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    result.fields = {};
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    if (typeof schema.min === 'number') {
      result.min = schema.min;
    }
    if (typeof schema.max === 'number') {
      result.max = schema.max;
    }
    result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else {
    // \u5355\u4E2A\u7684\u903B\u8F91
    const processRule = item => {
      if (schema.type) return { ...item, type: schema.type };
      if (item.pattern && typeof item.pattern === 'string') {
        return { ...item, pattern: new RegExp(item.pattern) };
      }
      return item;
    };
    const { required, ...rest } = schema;

    ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        // \u6682\u65F6\u5148\u53BB\u6389\uFF0C\u5E94\u8BE5\u6CA1\u4E8B\u4E86\uFF0C\u5728range\u7EC4\u4EF6\u7684\u6E90\u5934\u4E0A\u628A\u5947\u602A\u7684case\u5E72\u6389\u4E86
        // const rangeValidator = {
        //   validator: (rule, value) => {
        //     const rangeRequired = schema.required === true && isRequired;
        //     // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
        //     // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [undefined,undefined]
        //     const notValid1 = value[0] === '' && value[1] === '';
        //     const notValid2 = value[0] === undefined && value[1] === undefined;
        //     if (rangeRequired) {
        //       if (!value) return false;
        //       if (Array.isArray(value)) {
        //         if (notValid1 || notValid2) {
        //           return false;
        //         }
        //         return true;
        //       }
        //       return true;
        //     } else {
        //       return true;
        //     }
        //   },
        //   type: 'array',
        //   message: '\${title}\u5FC5\u586B',
        // };
        // singleResult = rangeValidator;
        singleResult.type = 'array';
        break;
      case 'html':
        singleResult.type = 'string';
        break;
      default:
        break;
    }
    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
      default:
        break;
    }

    let requiredRule;
    if (isRequired && schema.required === true) {
      requiredRule = { required: true, type: singleResult.type || 'string' };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const _rules = [];
        schema.rules.forEach(item => {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult, ..._rules];
      } else if (isObject(schema.rules)) {
        // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      const imgValidator = {
        validator: (rule, value) => {
          const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
          return !!pattern.exec(value) || isUrl(value);
        },
        message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
      };
      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }
  return result;
};

// async-validator \u4EA7\u51FA\u7684path\u6CA1\u6CD5\u7528\uFF0C\u8F6C\u4E00\u4E0B
// "list.1.userName" => "list[1].userName"
export const formatPathFromValidator = err => {
  const errArr = err.split('.');
  return errArr
    .map(item => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return \`[\${item}]\`;
      }
    })
    .reduce((a, b) => {
      if (b[0] === '[' || a === '') {
        return a + b;
      } else {
        return a + '.' + b;
      }
    }, '');
};

// schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}
export const isPathRequired = (path, schema) => {
  let pathArr = path.split('.');
  while (pathArr.length > 0) {
    let [_path, ...rest] = pathArr;
    _path = _path.split('[')[0];
    let childSchema;
    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }
    pathArr = rest;
    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    }

    // \u5355\u4E2A\u7684\u903B\u8F91
    let result = { required: false };
    if (schema.required === true) {
      result.required = true;
    }
    if (schema.rules) {
      const requiredItem = schema.rules.find(item => item.required);
      if (requiredItem) {
        result = requiredItem;
      }
    }
    return result;
  }
};

// _path \u53EA\u4F9B\u5185\u90E8\u9012\u5F52\u4F7F\u7528
export const generateDataSkeleton = (schema, formData, _path = '') => {
  let result = {};
  let _formData = clone(formData);
  result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(
        childSchema,
        childData,
        \`\${_path}.\${key}\`
      );
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean') {
      // result = false;
      result = undefined;
    } else {
      result = undefined;
    }
  }
  return result;
};

export const translateMessage = (msg, schema) => {
  if (typeof msg !== 'string') {
    return '';
  }
  if (!schema) return msg;
  msg = msg.replace('\${title}', schema.title);
  msg = msg.replace('\${type}', schema.format || schema.type);
  // \u517C\u5BB9\u4EE3\u7801
  if (typeof schema.min === 'number') {
    msg = msg.replace('\${min}', schema.min);
  }
  if (typeof schema.max === 'number') {
    msg = msg.replace('\${max}', schema.max);
  }
  if (schema.rules) {
    const minRule = schema.rules.find(r => r.min !== undefined);
    if (minRule) {
      msg = msg.replace('\${min}', minRule.min);
    }
    const maxRule = schema.rules.find(r => r.max !== undefined);
    if (maxRule) {
      msg = msg.replace('\${max}', maxRule.max);
    }
    const lenRule = schema.rules.find(r => r.len !== undefined);
    if (lenRule) {
      msg = msg.replace('\${len}', lenRule.len);
    }
    const patternRule = schema.rules.find(r => r.pattern !== undefined);
    if (patternRule) {
      msg = msg.replace('\${pattern}', patternRule.pattern);
    }
  }
  return msg;
};

// "objectName": {
//   "title": "\u5BF9\u8C61",
//   "description": "\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",
//   "type": "object",
//   "properties": {

//   }
// }

// "listName": {
//   "title": "\u5BF9\u8C61\u6570\u7EC4",
//   "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {

//     }
//   }
// }

const changeSchema = (_schema, singleChange) => {
  let schema = clone(_schema);
  schema = singleChange(schema);
  if (isObjType(schema)) {
    let requiredKeys = [];
    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }
      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }
  return schema;
};

export const updateSchemaToNewVersion = schema => {
  return changeSchema(schema, updateSingleSchema);
};

const updateSingleSchema = schema => {
  try {
    schema.rules = schema.rules || [];
    schema.props = schema.props || {};
    if (schema['ui:options']) {
      schema.props = schema['ui:options'];
      delete schema['ui:options'];
    }
    if (schema.pattern) {
      const validItem = { pattern: schema.pattern };
      if (schema.message && schema.message.pattern) {
        validItem.message = schema.message.pattern;
      }
      schema.rules.push(validItem);
      delete schema.pattern;
      delete schema.message;
    }
    // min / max
    if (schema.minLength) {
      schema.min = schema.minLength;
      delete schema.minLength;
    }
    if (schema.maxLength) {
      schema.max = schema.maxLength;
      delete schema.maxLength;
    }
    if (schema.minItems) {
      schema.min = schema.minItems;
      delete schema.minItems;
    }
    if (schema.maxItems) {
      schema.max = schema.maxItems;
      delete schema.maxItems;
    }
    if (schema.step) {
      schema.props.step = schema.step;
      delete schema.step;
    }
    // ui:xxx
    if (schema['ui:className']) {
      schema.className = schema['ui:className'];
      delete schema['ui:className'];
    }
    if (schema['ui:hidden']) {
      schema.hidden = schema['ui:hidden'];
      delete schema['ui:hidden'];
    }
    if (schema['ui:readonly']) {
      schema.readOnly = schema['ui:readonly']; // \u6539\u6210\u9A7C\u5CF0\u4E86
      delete schema['ui:readonly'];
    }
    if (schema['ui:disabled']) {
      schema.disabled = schema['ui:disabled'];
      delete schema['ui:disabled'];
    }
    if (schema['ui:width']) {
      schema.width = schema['ui:width'];
      delete schema['ui:width'];
    }
    if (schema['ui:displayType']) {
      schema.displayType = schema['ui:displayType'];
      delete schema['ui:displayType'];
    }
    if (schema['ui:column']) {
      schema.column = schema['ui:column'];
      delete schema['ui:column'];
    }
    if (schema['ui:widget']) {
      schema.widget = schema['ui:widget'];
      delete schema['ui:widget'];
    }
    if (schema['ui:labelWidth']) {
      schema.labelWidth = schema['ui:labelWidth'];
      delete schema['ui:labelWidth'];
    }
    if (schema.rules && schema.rules.length === 0) {
      delete schema.rules;
    }
    if (JSON.stringify(schema.props) === '{}') {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
};

// \u65E7\u7248schema\u8F6C\u65B0\u7248schema
export const parseExpression = (schema, formData) => {
  let schema1 = parseRootValue(schema);
  let schema2 = replaceParseValue(schema1);
};

// \u68C0\u9A8C\u4E00\u4E2Astring\u662F function\uFF08\u4F20\u7EDF\u6D3B\u7BAD\u5934\u51FD\u6570\uFF09
export const parseFunctionString = string => {
  if (typeof string !== 'string') return false;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (string.match(reg1)) {
    return string.match(reg1)[1];
  }
  if (string.match(reg2)) {
    return string.match(reg2)[1];
  }
  return false;
};

export const completeSchemaWithTheme = (schema = {}, theme = {}) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.theme && theme[schema.theme]) {
      result = { ...schema, ...theme[schema.theme] };
    }
    Object.keys(schema).forEach(key => {
      result[key] = completeSchemaWithTheme(schema[key], theme);
    });
  } else {
    result = schema;
  }
  return result;
};

export const cleanEmpty = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && isObject(v) ? cleanEmpty(v) : v))
      .filter(v => !(v == undefined));
  } else if (isObject(obj)) {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && isObject(v) ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == undefined ? a : ((a[k] = v), a)), {});
  } else {
    return obj;
  }
};

export const removeHiddenFromResult = (data, flatten) => {
  Object.keys(flatten).forEach(key => {
    const hidden = flatten[key].schema && flatten[key].schema.hidden === true; // Remark: \u6709\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5, \u6682\u65F6\u4E0D\u53BB\u6389\u4E86\uFF08\u6709\u4E1A\u52A1\u53CD\u800C\u662F\u5E0C\u671B\u7559\u4E0B\u7684\uFF09\uFF0C\u5C31\u53BB\u6389 hidden = true \u7684
    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};

export function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}

export function yymmdd(timeStamp) {
  const date_ob = new Date(Number(timeStamp));
  const adjustZero = num => ('0' + num).slice(-2);
  let day = adjustZero(date_ob.getDate());
  let month = adjustZero(date_ob.getMonth());
  let year = date_ob.getFullYear();
  let hours = adjustZero(date_ob.getHours());
  let minutes = adjustZero(date_ob.getMinutes());
  let seconds = adjustZero(date_ob.getSeconds());
  return \`\${year}-\${month}-\${day} \${hours}:\${minutes}:\${seconds}\`;
}`,Ie=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Ee=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,oe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,xn=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,je=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,jn=`import React, { useState, useEffect } from 'react';
import deepEqual from 'deep-equal';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import CodeBlock from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,Dn=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,pn=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...rest}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,an=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,Ve=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,An=`.debug * {
  outline: 1px solid gold;
}

.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Pn=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,hn=`import React, { useState, useEffect } from 'react';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import MonacoEditor from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => { }}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <MonacoEditor
              value={schemaStr}
              onChange={handleCodeChange}
            />
          </TabPane>
          <TabPane tab="Data" key="2">
            <MonacoEditor
              value={schema2str(form.getValues())}
              options={{ readOnly: true }}
            />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,Fe=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,qn=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,wn=`import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { valueMap, keySuggestions } from './suggestionsMap';

const Demo = ({ value, onChange, options }) => {

  const editorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (model, position) => {

        // \u5F97\u5230\u5192\u53F7\u4E4B\u524D\u7684\u6587\u672C
        var textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });

        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };

        let propKey = '';
        const match = textUntilPosition.match(/[a-z]+(?=["][:])/)
        if (match && match.length) {
          propKey = match[0];
        }

        const suggestions = propKey ? (valueMap(range)[propKey] || []) : keySuggestions(range)

        return { suggestions }

      },
      triggerCharacters: ['"']
    });
  }

  return (
    <MonacoEditor
      height="800px"
      language="json"
      value={value}
      onChange={onChange}
      editorWillMount={editorWillMount}
      options={options}
    />
  );
};

export default Demo;`,_n=`import { monaco } from 'react-monaco-editor';

const valueMap = range => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6',
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4',
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4',
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9',
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009',
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009',
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846',
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846',
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09',
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761',
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206',
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61',
      },
      {
        label: 'list0',
        insertText: 'list0',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)',
      },
      {
        label: 'list1',
        insertText: 'list1',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'list2',
        insertText: 'list2',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'list3',
        insertText: 'list3',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)',
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string',
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number',
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean',
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array',
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object',
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html',
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color',
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email',
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url',
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload',
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A',
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A',
      },
    ],
  };
};

const keySuggestions = range => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F',
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F',
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B',
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F',
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C',
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B',
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder',
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind',
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C',
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C',
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528',
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB',
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF',
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40',
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6',
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6',
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className',
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F',
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C',
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848',
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules',
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027',
  },
];

export { valueMap, keySuggestions };`,ot=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,et=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = (params, sorter) => {
    console.group(sorter);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      sorter: true,
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi,
          },
        ]}
      />
      <Table
        // size="small"
        pagination={{ pageSize: 4 }}
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,lt=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        debug
        columns={columns}
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,Mn=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,nt=`import React, { useEffect } from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';
import { history } from 'umi';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState, form }: any = useTable();
  useEffect(() => {
    // \u5B9E\u9645\u4F7F\u7528\u65F6queryParam\u4E3Aurl\u4E0A\u53D6\u4E0B\u6765\u7684\u6709\u6548\u53C2\u6570
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form\u5177\u4F53api\u53C2\u8003form-render\u6587\u6863
      form.setValues(queryParam);
    }
  }, []);

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };
  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };
  const onSearch = search => {
    console.log('onSearch', search);
  };
  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="url\u5E26\u53C2\u67E5\u8BE2"
        rowKey="id"
        toolbarRender={() => [
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,$n=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,ut=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,Bn=`import React from 'react';
import Generator from 'fr-generator';
import './index.less';

const {
  Provider,
  Sidebar,
  Canvas,
  Settings,
} = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar fixedName />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,Tn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Vn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
}

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = (schema) => {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema =>  transformFrom(schema);
const toFormily = schema => transformTo(schema);

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,tt=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground }]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,Jn=un.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p;return O.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return s=function(D,d){if(!d&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var j=S(d);if(j&&j.has(D))return j.get(D);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in D)if(g!=="default"&&Object.prototype.hasOwnProperty.call(D,g)){var c=t?Object.getOwnPropertyDescriptor(D,g):null;c&&(c.get||c.set)?Object.defineProperty(m,g,c):m[g]=D[g]}return m.default=D,j&&j.set(D,m),m},S=function(D){if(typeof WeakMap!="function")return null;var d=new WeakMap,j=new WeakMap;return(S=function(t){return t?j:d})(D)},f=e("K+nK"),w.t0=f,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=s,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,v=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=w.sent,p=function(){var D=(0,v.useState)("Line"),d=(0,i.default)(D,2),j=d[0],m=d[1],t={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[j];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},w.abrupt("return",p);case 18:case"end":return w.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>

      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(w,M,D){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},w),i.default.createElement("p",null,JSON.stringify(M)),i.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p;return O.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return s=function(D,d){if(!d&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var j=S(d);if(j&&j.has(D))return j.get(D);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in D)if(g!=="default"&&Object.prototype.hasOwnProperty.call(D,g)){var c=t?Object.getOwnPropertyDescriptor(D,g):null;c&&(c.get||c.set)?Object.defineProperty(m,g,c):m[g]=D[g]}return m.default=D,j&&j.set(D,m),m},S=function(D){if(typeof WeakMap!="function")return null;var d=new WeakMap,j=new WeakMap;return(S=function(t){return t?j:d})(D)},f=e("K+nK"),w.t0=f,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=s,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,v=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=w.sent,p=function(){var D=(0,v.useState)(!1),d=(0,i.default)(D,2),j=d[0],m=d[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:j,onChange:function(){return m(!j)}})),v.default.createElement(b.PivotTable,{leftExpandable:j,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},w.abrupt("return",p);case 18:case"end":return w.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M,D,d,j;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,r){if(!r&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=o(r);if(u&&u.has(c))return u.get(c);var h={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=B?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(o=function(B){return B?u:r})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=f,t.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=w,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=t.sent,t.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=t.sent,M=b.default.TextArea,D={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var c=(0,S.useState)(JSON.stringify(D)),r=(0,v.default)(c,2),u=r[0],h=r[1],B=(0,S.useState)({}),N=(0,v.default)(B,2),L=N[0],pe=N[1],Oe=function(){try{var Nn=(0,p.updateSchemaToNewVersion)(JSON.parse(u));pe(Nn)}catch(dt){console.log(dt)}},sn=function(Nn){h(Nn.target.value)},vn=function(){h(JSON.stringify(JSON.parse(u),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(M,{style:{minHeight:400,marginTop:12,marginBottom:12},value:u,onChange:sn}),S.default.createElement(i.default,{style:{marginRight:12},onClick:vn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(i.default,{type:"primary",onClick:Oe},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(M,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},j=d,t.abrupt("return",j);case 38:case"end":return t.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M,D,d,j,m;return O.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return D=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var h=M(u);if(h&&h.has(r))return h.get(r);var B={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in r)if(L!=="default"&&Object.prototype.hasOwnProperty.call(r,L)){var pe=N?Object.getOwnPropertyDescriptor(r,L):null;pe&&(pe.get||pe.set)?Object.defineProperty(B,L,pe):B[L]=r[L]}return B.default=r,h&&h.set(r,B),B},M=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,h=new WeakMap;return(M=function(N){return N?h:u})(r)},f=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=f,g.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,i=(0,g.t0)(g.t1),g.t2=f,g.next=13,e.e(83).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,v=(0,g.t2)(g.t3),g.t4=f,g.next=18,e.e(84).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,b=(0,g.t4)(g.t5),g.t6=f,g.next=23,e.e(75).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,S=(0,g.t6)(g.t7),g.t8=f,g.next=28,e.e(74).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,s=(0,g.t8)(g.t9),g.t10=f,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,p=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return o=g.sent,g.t12=D,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,w=(0,g.t12)(g.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},j=function(c){(0,S.default)(u,c);var r=(0,s.default)(u);function u(){var h;(0,v.default)(this,u);for(var B=arguments.length,N=new Array(B),L=0;L<B;L++)N[L]=arguments[L];return h=r.call.apply(r,[this].concat(N)),h.onFinish=function(pe,Oe){console.log("formData:",pe,"errors",Oe)},h}return(0,b.default)(u,[{key:"render",value:function(){var B=this.props.form;return p.default.createElement("div",null,p.default.createElement(w.default,{form:B,schema:d,onFinish:this.onFinish}),p.default.createElement(i.default,{type:"primary",onClick:B.submit},"\u63D0\u4EA4"))}}]),u}(p.default.Component),m=(0,w.connectForm)(j),g.abrupt("return",m);case 47:case"end":return g.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M;return O.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=s(t);if(g&&g.has(m))return g.get(m);var c={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var h=r?Object.getOwnPropertyDescriptor(m,u):null;h&&(h.get||h.set)?Object.defineProperty(c,u,h):c[u]=m[u]}return c.default=m,g&&g.set(m,c),c},s=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(s=function(r){return r?g:t})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,v=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,S=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(){var m=(0,S.useForm)(),t=function(c,r){console.log("formData:",c,"errors",r)};return v.default.createElement("div",null,v.default.createElement(S.default,{form:m,schema:o,onFinish:t}),v.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=w,d.abrupt("return",M);case 27:case"end":return d.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M;return O.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=s(t);if(g&&g.has(m))return g.get(m);var c={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var h=r?Object.getOwnPropertyDescriptor(m,u):null;h&&(h.get||h.set)?Object.defineProperty(c,u,h):c[u]=m[u]}return c.default=m,g&&g.set(m,c),c},s=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(s=function(r){return r?g:t})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,v=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,S=(0,d.t4)(d.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},w=function(){var m=(0,S.useForm)(),t=function(c,r){r.length>0?alert("errors:"+JSON.stringify(r)):alert("formData:"+JSON.stringify(c,null,2))};return v.default.createElement("div",null,v.default.createElement(S.default,{form:m,schema:o,onFinish:t}),v.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=w,d.abrupt("return",M);case 27:case"end":return d.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S;return O.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b=function(w){return{type:"object",displayType:w,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(v.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(v.default,{schema:b("column")}))},p.abrupt("return",S);case 14:case"end":return p.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S;return O.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return i.default.createElement(v.default,{readOnly:!0,schema:b})},p.abrupt("return",S);case 14:case"end":return p.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S;return O.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return i.default.createElement(v.default,{labelWidth:"200",schema:b})},p.abrupt("return",S);case 14:case"end":return p.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M,D,d,j;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return D=function(c,r){if(!r&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=M(r);if(u&&u.has(c))return u.get(c);var h={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=B?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},M=function(c){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(M=function(B){return B?u:r})(c)},f=e("K+nK"),t.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=f,t.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=f,t.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=f,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.t8=D,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,s=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return p=t.sent,t.t10=D,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,o=(0,t.t10)(t.t11),t.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return w=t.sent,d=function(){var c=(0,o.useForm)(),r=(0,s.useState)({}),u=(0,S.default)(r,2),h=u[0],B=u[1],N=function(){(0,w.fakeApi)("xxx/getForm").then(function(Oe){c.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,w.delay)(1e3).then(function(pe){B({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var L=function(Oe,sn){sn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(sn.map(function(vn){return vn.name}))):(0,w.fakeApi)("xxx/submit",Oe).then(function(vn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(o.default,{form:c,schema:h,onFinish:L}),s.default.createElement(i.default,null,s.default.createElement(v.default,{onClick:N},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(v.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=d,t.abrupt("return",j);case 48:case"end":return t.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ee}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M,D,d,j;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return M=function(c,r){if(!r&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=w(r);if(u&&u.has(c))return u.get(c);var h={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=B?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},w=function(c){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(w=function(B){return B?u:r})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=f,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=t.sent,t.t8=M,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return o=t.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var c=(0,p.useForm)(),r=function(B,N){N.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(N.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",B).then(function(L){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},u=function(B){var N=B.data,L=B.errors,pe=B.schema,Oe=(0,v.default)(B,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(sn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(p.default,{form:c,schema:D,beforeFinish:u,onFinish:r}),S.default.createElement(i.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},j=d,t.abrupt("return",j);case 42:case"end":return t.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ee}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M,D,d,j;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return M=function(c,r){if(!r&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=w(r);if(u&&u.has(c))return u.get(c);var h={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=B?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},w=function(c){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(w=function(B){return B?u:r})(c)},f=e("K+nK"),t.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=f,t.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=f,t.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=f,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return s=t.sent,t.t8=M,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return o=t.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var c=(0,p.useForm)(),r=function(B,N){N.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(N.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",B).then(function(L){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},u=function(){(0,o.fakeApi)("xxx/getForm").then(function(B){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(p.default,{form:c,schema:D,onFinish:r}),S.default.createElement(i.default,null,S.default.createElement(v.default,{onClick:u},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(v.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=d,t.abrupt("return",j);case 44:case"end":return t.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ee}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M,D,d;return O.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return w=function(g,c){if(!c&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var r=o(c);if(r&&r.has(g))return r.get(g);var u={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in g)if(B!=="default"&&Object.prototype.hasOwnProperty.call(g,B)){var N=h?Object.getOwnPropertyDescriptor(g,B):null;N&&(N.get||N.set)?Object.defineProperty(u,B,N):u[B]=g[B]}return u.default=g,r&&r.set(g,u),u},o=function(g){if(typeof WeakMap!="function")return null;var c=new WeakMap,r=new WeakMap;return(o=function(h){return h?r:c})(g)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=f,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,v=(0,m.t2)(m.t3),m.t4=w,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return S=m.sent,m.t6=w,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,s=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=m.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var g=(0,s.useForm)(),c=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},r=function(h,B){B.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(N){return N.name}))):v.default.info(JSON.stringify(h))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(s.default,{form:g,schema:M,onMount:c,onFinish:r}),b.default.createElement(i.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=D,m.abrupt("return",d);case 37:case"end":return m.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['east', 'south', 'west', 'north'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ee}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return S=function(d,j){if(!j&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(j);if(m&&m.has(d))return m.get(d);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var r=g?Object.getOwnPropertyDescriptor(d,c):null;r&&(r.get||r.set)?Object.defineProperty(t,c,r):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},b=function(d){if(typeof WeakMap!="function")return null;var j=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:j})(d)},f=e("K+nK"),M.t0=f,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,i=(0,M.t0)(M.t1),M.t2=S,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,v=(0,M.t2)(M.t3),s={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var d=(0,v.useForm)();return i.default.createElement(v.default,{form:d,schema:s})},o=p,M.abrupt("return",o);case 17:case"end":return M.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '\u5C55\u793A\u66F4\u591A\u5185\u5BB9',
      type: 'boolean',
    },
    select1: {
      title: '\u8BF7\u5047\u539F\u56E0',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u75C5\u5047', '\u6709\u4E8B', '\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '\u5177\u4F53\u539F\u56E0',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S;return O.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,S=function(){return i.default.createElement(v.default,{schema:b.expression})},p.abrupt("return",S);case 16:case"end":return p.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:xn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w;return O.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return S=function(j,m){if(!m&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var t=b(m);if(t&&t.has(j))return t.get(j);var g={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in j)if(r!=="default"&&Object.prototype.hasOwnProperty.call(j,r)){var u=c?Object.getOwnPropertyDescriptor(j,r):null;u&&(u.get||u.set)?Object.defineProperty(g,r,u):g[r]=j[r]}return g.default=j,t&&t.set(j,g),g},b=function(j){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(b=function(c){return c?t:m})(j)},D.t0=S,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,f=(0,D.t0)(D.t1),D.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=D.sent,D.t2=S,D.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return D.t3=D.sent,v=(0,D.t2)(D.t3),s=function(j){return new Promise(function(m){return setTimeout(m,j)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var j=(0,v.useForm)(),m=function(){j.setValues({input1:"hello world"}),s(3e3).then(function(g){j.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(v.default,{form:j,schema:p,onMount:m})},w=o,D.abrupt("return",w);case 20:case"end":return D.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u9009\u62E9\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'radio',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),window.hello=function(w){var M=w.value;console.log(M)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(v.default,{schema:b})},s=S,o.abrupt("return",s);case 16:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list4',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return S=function(d,j){if(!j&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(j);if(m&&m.has(d))return m.get(d);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var r=g?Object.getOwnPropertyDescriptor(d,c):null;r&&(r.get||r.set)?Object.defineProperty(t,c,r):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},b=function(d){if(typeof WeakMap!="function")return null;var j=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:j})(d)},M.t0=S,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,f=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=M.sent,M.t2=S,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,v=(0,M.t2)(M.t3),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var d=(0,v.useForm)(),j={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){d.setValueByPath("input2",t)}};return f.default.createElement(v.default,{form:d,schema:s,watch:j})},o=p,M.abrupt("return",o);case 19:case"end":return M.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M;return O.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=s(t);if(g&&g.has(m))return g.get(m);var c={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var h=r?Object.getOwnPropertyDescriptor(m,u):null;h&&(h.get||h.set)?Object.defineProperty(c,u,h):c[u]=m[u]}return c.default=m,g&&g.set(m,c),c},s=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(s=function(r){return r?g:t})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=p,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,v=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,S=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},w=function(){var m=(0,S.useForm)(),t=function(r,u){u.length>0?alert("errorFields:"+JSON.stringify(u)):alert("formData:"+JSON.stringify(r,null,2))},g={input1:function(r){r.length>2?m.setSchemaByPath("obj1.select",function(u){var h=u.enumNames;return{enumNames:h.map(function(B){return B+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(S.default,{form:m,schema:o,onFinish:t,watch:g}),v.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=w,d.abrupt("return",M);case 27:case"end":return d.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M,D,d,j;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,r){if(!r&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=o(r);if(u&&u.has(c))return u.get(c);var h={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=B?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(o=function(B){return B?u:r})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=f,t.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.t4=f,t.next=20,e.e(85).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=t.sent,t.t8=w,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(c){return console.log("widget props:",c),S.default.createElement(v.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},c))},d=function(){var c=(0,p.useForm)();return S.default.createElement("div",null,S.default.createElement(p.default,{form:c,schema:M,widgets:{site:D},onFinish:function(u){return alert(JSON.stringify(u,null,2))}}),S.default.createElement(i.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},j=d,t.abrupt("return",j);case 40:case"end":return t.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M;return O.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=p(t);if(g&&g.has(m))return g.get(m);var c={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var h=r?Object.getOwnPropertyDescriptor(m,u):null;h&&(h.get||h.set)?Object.defineProperty(c,u,h):c[u]=m[u]}return c.default=m,g&&g.set(m,c),c},p=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(p=function(r){return r?g:t})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,v=(0,d.t2)(d.t3),d.t4=o,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,b=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return S=d.sent,d.t6=o,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,s=(0,d.t6)(d.t7),w=function(){var m=(0,s.useForm)({logOnMount:function(r){console.log("onMount",r)},logOnSubmit:function(r){console.log("onSubmit",r)}}),t={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},g=function(r,u){u.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(u.map(function(h){return h.name}))):v.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(s.default,{id:"my-demo-form",form:m,schema:t,onFinish:g}),b.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},M=w,d.abrupt("return",M);case 33:case"end":return d.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm({
    logOnMount: info => {
      console.log('onMount', info);
    },
    logOnSubmit: info => {
      console.log('onSubmit', info);
    },
  });

  const schema = {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    }
  };

  return (
    <div>
      <FormRender
        id="my-demo-form"
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return p=function(){var d=(0,v.useForm)(),j=function(t,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(t))};return i.default.createElement("div",null,i.default.createElement(v.default,{form:d,schema:s,onFinish:j}),i.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},S=function(d,j){if(!j&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(j);if(m&&m.has(d))return m.get(d);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var r=g?Object.getOwnPropertyDescriptor(d,c):null;r&&(r.get||r.set)?Object.defineProperty(t,c,r):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},b=function(d){if(typeof WeakMap!="function")return null;var j=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:j})(d)},f=e("K+nK"),M.t0=f,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,i=(0,M.t0)(M.t1),M.t2=S,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,v=(0,M.t2)(M.t3),s={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=p,M.abrupt("return",o);case 17:case"end":return M.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w,M,D,d,j;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,r){if(!r&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=o(r);if(u&&u.has(c))return u.get(c);var h={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=B?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(o=function(B){return B?u:r})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=f,t.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=w,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=t.sent,t.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=t.sent,M=b.default.TextArea,D={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var c=(0,S.useState)(JSON.stringify(D)),r=(0,v.default)(c,2),u=r[0],h=r[1],B=(0,S.useState)({}),N=(0,v.default)(B,2),L=N[0],pe=N[1],Oe=function(){try{var Nn=(0,p.updateSchemaToNewVersion)(JSON.parse(u));pe(Nn)}catch(dt){console.log(dt)}},sn=function(Nn){h(Nn.target.value)},vn=function(){h(JSON.stringify(JSON.parse(u),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(M,{style:{minHeight:400,marginTop:12,marginBottom:12},value:u,onChange:sn}),S.default.createElement(i.default,{style:{marginRight:12},onClick:vn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(i.default,{type:"primary",onClick:Oe},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(M,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},j=d,t.abrupt("return",j);case 38:case"end":return t.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w;return O.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return o=function(){var j=(0,v.useState)({}),m=(0,i.default)(j,2),t=m[0],g=m[1],c=(0,v.useState)([]),r=(0,i.default)(c,2),u=r[0],h=r[1],B=(0,v.useState)(!1),N=(0,i.default)(B,2),L=N[0],pe=N[1],Oe=(0,b.useForm)({formData:t,onChange:g,onValidate:h,showValidate:L});(0,v.useEffect)(function(){Oe.init()},[]);var sn=function(){pe(!0),u.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(u))):alert(JSON.stringify(t))};return v.default.createElement("div",null,v.default.createElement(b.default,{form:Oe,schema:p}),v.default.createElement("button",{onClick:sn},"\u63D0\u4EA4"))},s=function(j,m){if(!m&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var t=S(m);if(t&&t.has(j))return t.get(j);var g={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in j)if(r!=="default"&&Object.prototype.hasOwnProperty.call(j,r)){var u=c?Object.getOwnPropertyDescriptor(j,r):null;u&&(u.get||u.set)?Object.defineProperty(g,r,u):g[r]=j[r]}return g.default=j,t&&t.set(j,g),g},S=function(j){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(S=function(c){return c?t:m})(j)},f=e("K+nK"),D.t0=f,D.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return D.t1=D.sent,i=(0,D.t0)(D.t1),D.t2=s,D.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return D.t3=D.sent,v=(0,D.t2)(D.t3),D.t4=s,D.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return D.t5=D.sent,b=(0,D.t4)(D.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},w=o,D.abrupt("return",w);case 22:case"end":return D.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const form = useForm({
    formData,
    onChange: setData,
    onValidate: setValid,
    showValidate,
  }); // 1. formData\u3001onChange \u548C onValidate \u4F5C\u4E3A useForm \u7684\u5165\u53C2\u4F20\u5165

  useEffect(() => {
    form.init();
  }, []);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        form={form} // 3. \u8865\u4E0A
        schema={schema}
        // formData={formData} // 4. \u5168\u653E\u5230 useForm \u91CC\u4E86
        // onChange={setData}
        // onValidate={setValid}
        // showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S;return O.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,S=function(){return i.default.createElement(v.default,{schema:b.basic})},p.abrupt("return",S);case 16:case"end":return p.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:xn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S;return O.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,S=function(){return i.default.createElement(v.default,{schema:b.titleTrick})},p.abrupt("return",S);case 16:case"end":return p.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:xn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:je},"main.js":{import:"./main",content:jn},"json/simplest.json":{import:"./json/simplest.json",content:Dn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:pn},"monaco/index.js":{import:"./monaco",content:an},"theme.css":{import:"./theme.css",content:Ve},"index.css":{import:"./index.css",content:An}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Pn},"main.js":{import:"./main",content:hn},"json/simplest.json":{import:"./json/simplest.json",content:Fe},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:qn},"monaco/index.js":{import:"./monaco",content:wn},"suggestionsMap.js":{import:"./suggestionsMap",content:_n},"index.css":{import:"./index.css",content:ot}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:et}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:lt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:nt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s,p,o,w;return O.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return f=e("K+nK"),D.t0=f,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,i=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(70)]).then(e.bind(null,"P2DI"));case 8:for(v=D.sent,b=[],S=0;S<6;S++)b.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return s={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(j,m){return i.default.createElement("a",{onClick:function(){return alert(j.title)}},"\u7F16\u8F91")}}],o=function(){var j=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(v.Search,{schema:s,api:j}),i.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},w=(0,v.withTable)(o),D.abrupt("return",w);case 16:case"end":return D.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, withTable } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.4"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){var f,i,v,b,S,s;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(69)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(v.default,{defaultValue:b}))},s=S,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:ut}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Bn},"index.less":{import:"./index.less",content:Tn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var F=Object(V.a)(O.a.mark(function I(){return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return F.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:tt},"index.less":{import:"./index.less",content:Tn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(En,un,e){},Zs1V:function(En){En.exports=JSON.parse("{}")},p8sG:function(En,un,e){"use strict";En.exports=e("80pN")},ymTJ:function(En,un,e){"use strict";e.r(un);var V=e("q1tI"),n=e.n(V),O=e("dEAq"),W=e.n(O),ue=e("0zqC"),J=e("ZpkN"),Ie=e("JjdP"),Ee=n.a.memo(Ie.default["measure-demo"].component);un.default=oe=>(n.a.useEffect(()=>{oe!=null&&oe.location.hash&&O.AnchorLink.scrollToAnchor(decodeURIComponent(oe.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548"},n.a.createElement(O.AnchorLink,{to:"#\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548"),n.a.createElement("p",null,`\u4E1A\u754C\u6709\u53E5\u8BDD\u53EB "You can't improve what you can't measure"\u3002\u5373\u662F\u8BF4\uFF0C\u5982\u679C\u65E0\u6CD5\u5EA6\u91CF\u4E00\u4EF6\u4E8B\uFF0C\u90A3\u6539\u5584\u4E5F\u65E0\u4ECE\u8C08\u8D77\u3002 FormRender \u4F5C\u4E3A\u8868\u5355\u63D0\u6548\u7684\u65B9\u6848\uFF0C\u63D0\u6548\u7684\u540C\u65F6\u4E5F\u9700\u8981\u7ED9\u51FA\u5408\u7406\u7684\u5EA6\u91CF\u6570\u636E\uFF0C\u5E2E\u52A9\u4F7F\u7528\u8005\u66F4\u597D\u5730\u8BA4\u77E5\u548C\u53D1\u73B0\u95EE\u9898\u3002`),n.a.createElement("p",null,"\u76EE\u524D FormRender \u63D0\u4F9B\u4E86\u4E24\u4E2A\u89E6\u53D1\u65F6\u673A\u4EE5\u53CA\u4E00\u7CFB\u5217\u76F8\u5173\u6570\u636E\u4F5C\u4E3A\u5BF9\u5916\u5F00\u653E\u63A5\u53E3\uFF0C\u63A8\u8350\u7528\u6237\u7528\u4E8E\u63A5\u5165\u9002\u5408\u81EA\u5DF1\u9879\u76EE\u7684\u57CB\u70B9 & \u6570\u636E\u76D1\u63A7\u65B9\u6848\u3002"),n.a.createElement("h2",{id:"roadmap"},n.a.createElement(O.AnchorLink,{to:"#roadmap","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"RoadMap"),n.a.createElement("p",null,"\u6570\u636E"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u7684\u5EA6\u91CF\u4F1A\u662F\u66F4\u4E3A\u6574\u4F53\u7684\u6570\u636E\uFF1A\u4F8B\u5982\u8868\u5355\u7684\u62A5\u9519\u548C\u63D0\u4EA4\u662F\u5426\u6210\u529F\uFF0C\u6574\u4F53\u8868\u5355\u63D0\u4EA4\u65F6\u957F\u7B49\u3002"),n.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u63D0\u4F9B\u66F4\u4E3A\u7EC6\u81F4\u7684\u6570\u636E\u8FDB\u4E00\u6B65\u627E\u5BFB\u5230\u5982\u679C\u4E00\u4E2A\u8868\u5355\u7684\u7528\u6237\u586B\u5199\u6548\u7387\u4F4E\u4E0B\uFF0C\u662F\u54EA\u4E2A\u8868\u5355\u539F\u4EF6\u548C\u64CD\u4F5C\u9020\u6210\u4E86\u7F13\u6162\uFF0C\u66F4\u8FDB\u4E00\u6B65\u4EE5\u6570\u636E\u7ED9\u51FA\u4F18\u5316\u7684\u6307\u5F15")),n.a.createElement("p",null,"\u65B9\u6848"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u5BF9\u5916\u63D0\u4F9B\u4E86\u89E6\u53D1\u94A9\u5B50\u4EE5\u53CA\u6570\u636E\uFF0C\u8BA9\u7528\u6237\u81EA\u884C\u9009\u62E9\u76D1\u63A7\u548C\u6570\u636E\u57CB\u70B9\u65B9\u6848"),n.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u7ED9\u51FA\u5168\u5957\u7684\u670D\u52A1\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6CE8\u518C\u5373\u53EF\u83B7\u53D6\u8868\u5355\u5065\u5EB7\u4FE1\u606F")),n.a.createElement("h2",{id:"\u4F7F\u7528"},n.a.createElement(O.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),n.a.createElement("p",null,"\u63D0\u4F9B\u4E86 ",n.a.createElement("code",null,"logOnMount")," \u548C ",n.a.createElement("code",null,"logOnSubmit")," \u4E24\u4E2A\u94A9\u5B50\u3002\u5728\u4F7F\u7528 ",n.a.createElement("code",null,"useForm")," \u65F6\u6CE8\u5165\uFF1A"),n.a.createElement(J.a,{code:`const form = useForm({
  logOnMount: info => {
    console.log('onMount', info);
  },
  logOnSubmit: info => {
    console.log('onSubmit', info);
  },
});`,lang:"js"}),n.a.createElement("p",null,"\u6700\u7B80\u4F7F\u7528\u6837\u4F8B\u5982\u4E0B\uFF0C\u6548\u679C\u89C1 console")),n.a.createElement(ue.default,Ie.default["measure-demo"].previewerProps,n.a.createElement(Ee,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"logonmount"},n.a.createElement(O.AnchorLink,{to:"#logonmount","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"logOnMount"),n.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u4E00\u822C\u4E5F\u5C31\u662F\u9875\u9762\u9996\u6B21\u52A0\u8F7D\u65F6\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"id")),n.a.createElement("td",null,"\u8868\u5355 id\uFF0C\u53EA\u5F53\u7528\u6237\u6CE8\u660E id \u65F6\u624D\u4F1A log")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"formData")),n.a.createElement("td",null,"\u8868\u5355\u503C")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"schema")),n.a.createElement("td",null,"\u8868\u5355\u534F\u8BAE")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"url")),n.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u9875\u9762\u5730\u5740")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"formMount")),n.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9")))),n.a.createElement(J.a,{code:`{
  id: "my-demo-form",
  schema: {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  },
  url: 'https://x-render.gitee.io/form-render/measure',
  formData: {},
  formMount: '2021-07-02 16:03:42',
};`,lang:"js"}),n.a.createElement("h3",{id:"logonsubmit"},n.a.createElement(O.AnchorLink,{to:"#logonsubmit","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"logOnSubmit"),n.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u6BCF\u6B21\u63D0\u4EA4\u65F6\u89E6\u53D1\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"duration")),n.a.createElement("td",null,"\u8868\u5355\u586B\u5199\u65F6\u957F")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"ms")),n.a.createElement("td",null,"duration \u7684\u65F6\u95F4\u6233\u5F62\u5F0F")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"numberOfSubmits")),n.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u4E86\u51E0\u6B21")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"failedAttempts")),n.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u5931\u8D25\u4E86\u51E0\u6B21")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"errors")),n.a.createElement("td",null,"\u63D0\u4EA4\u5931\u8D25\u7684\u6821\u9A8C\u4FE1\u606F")))),n.a.createElement(J.a,{code:`{
  id: "my-demo-form", // \u5982\u679C\u6CE8\u660E\u8868\u5355id\uFF0C\u4F1A\u5728\u6B64\u5904\u5C55\u793A
  formMount: '2021-07-02 16:27:28', // \u8868\u5355\u9996\u6B21\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9
  ms: 35598, // duration\u7684\u65F6\u95F4\u6233\u5F62\u5F0F
  duration: '00:00:35', // \u4ECE\u8868\u5355\u52A0\u8F7D/\u4E0A\u6B21\u63D0\u4EA4\u5B8C\u6210\u5F00\u59CB\u8BA1\u65F6\uFF0C\u5230\u672C\u6B21\u63D0\u4EA4\u4F7F\u7528\u7684\u65F6\u95F4
  numberOfSubmits: 1, // \u63D0\u4EA4\u7684\u6B21\u6570\uFF08\u5931\u8D25\u4E0E\u5426\uFF09
  failedAttempts: 0, // \u63D0\u4EA4\u5931\u8D25\u7684\u6B21\u6570\uFF08\u5373\u6709\u6821\u9A8C\u672A\u901A\u8FC7\uFF09
  url: 'https://x-render.gitee.io/form-render/measure', // \u8868\u5355\u5BF9\u5E94\u9875\u9762\u7684url
  formData: {
    input1: '3123',
    select1: 'c',
  },
  schema: { ... }, // \u8868\u5355\u534F\u8BAE
  errors: [], // \u6821\u9A8C\u672A\u901A\u8FC7\u65F6\uFF0C\u5C55\u793A\u62A5\u9519\u6821\u9A8C\u4FE1\u606F
};`,lang:"js"})))))}}]);
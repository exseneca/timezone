goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37107 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37107(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37108 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37108(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35970 = coll;
var G__35971 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35970,G__35971) : shadow.dom.lazy_native_coll_seq.call(null,G__35970,G__35971));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36021 = arguments.length;
switch (G__36021) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36034 = arguments.length;
switch (G__36034) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36044 = arguments.length;
switch (G__36044) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36058 = arguments.length;
switch (G__36058) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36132 = arguments.length;
switch (G__36132) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36144 = arguments.length;
switch (G__36144) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36152){if((e36152 instanceof Object)){
var e = e36152;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36152;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36160 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36161 = null;
var count__36162 = (0);
var i__36163 = (0);
while(true){
if((i__36163 < count__36162)){
var el = chunk__36161.cljs$core$IIndexed$_nth$arity$2(null,i__36163);
var handler_37120__$1 = ((function (seq__36160,chunk__36161,count__36162,i__36163,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36160,chunk__36161,count__36162,i__36163,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37120__$1);


var G__37121 = seq__36160;
var G__37122 = chunk__36161;
var G__37123 = count__36162;
var G__37124 = (i__36163 + (1));
seq__36160 = G__37121;
chunk__36161 = G__37122;
count__36162 = G__37123;
i__36163 = G__37124;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36160);
if(temp__5804__auto__){
var seq__36160__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36160__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36160__$1);
var G__37126 = cljs.core.chunk_rest(seq__36160__$1);
var G__37127 = c__5568__auto__;
var G__37128 = cljs.core.count(c__5568__auto__);
var G__37129 = (0);
seq__36160 = G__37126;
chunk__36161 = G__37127;
count__36162 = G__37128;
i__36163 = G__37129;
continue;
} else {
var el = cljs.core.first(seq__36160__$1);
var handler_37130__$1 = ((function (seq__36160,chunk__36161,count__36162,i__36163,el,seq__36160__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36160,chunk__36161,count__36162,i__36163,el,seq__36160__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37130__$1);


var G__37132 = cljs.core.next(seq__36160__$1);
var G__37133 = null;
var G__37134 = (0);
var G__37135 = (0);
seq__36160 = G__37132;
chunk__36161 = G__37133;
count__36162 = G__37134;
i__36163 = G__37135;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36202 = arguments.length;
switch (G__36202) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36208 = cljs.core.seq(events);
var chunk__36209 = null;
var count__36210 = (0);
var i__36211 = (0);
while(true){
if((i__36211 < count__36210)){
var vec__36219 = chunk__36209.cljs$core$IIndexed$_nth$arity$2(null,i__36211);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37139 = seq__36208;
var G__37140 = chunk__36209;
var G__37141 = count__36210;
var G__37142 = (i__36211 + (1));
seq__36208 = G__37139;
chunk__36209 = G__37140;
count__36210 = G__37141;
i__36211 = G__37142;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36208);
if(temp__5804__auto__){
var seq__36208__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36208__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36208__$1);
var G__37143 = cljs.core.chunk_rest(seq__36208__$1);
var G__37144 = c__5568__auto__;
var G__37145 = cljs.core.count(c__5568__auto__);
var G__37146 = (0);
seq__36208 = G__37143;
chunk__36209 = G__37144;
count__36210 = G__37145;
i__36211 = G__37146;
continue;
} else {
var vec__36225 = cljs.core.first(seq__36208__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37147 = cljs.core.next(seq__36208__$1);
var G__37148 = null;
var G__37149 = (0);
var G__37150 = (0);
seq__36208 = G__37147;
chunk__36209 = G__37148;
count__36210 = G__37149;
i__36211 = G__37150;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36238 = cljs.core.seq(styles);
var chunk__36239 = null;
var count__36240 = (0);
var i__36241 = (0);
while(true){
if((i__36241 < count__36240)){
var vec__36259 = chunk__36239.cljs$core$IIndexed$_nth$arity$2(null,i__36241);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36259,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37151 = seq__36238;
var G__37152 = chunk__36239;
var G__37153 = count__36240;
var G__37154 = (i__36241 + (1));
seq__36238 = G__37151;
chunk__36239 = G__37152;
count__36240 = G__37153;
i__36241 = G__37154;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36238);
if(temp__5804__auto__){
var seq__36238__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36238__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36238__$1);
var G__37155 = cljs.core.chunk_rest(seq__36238__$1);
var G__37156 = c__5568__auto__;
var G__37157 = cljs.core.count(c__5568__auto__);
var G__37158 = (0);
seq__36238 = G__37155;
chunk__36239 = G__37156;
count__36240 = G__37157;
i__36241 = G__37158;
continue;
} else {
var vec__36264 = cljs.core.first(seq__36238__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37159 = cljs.core.next(seq__36238__$1);
var G__37160 = null;
var G__37161 = (0);
var G__37162 = (0);
seq__36238 = G__37159;
chunk__36239 = G__37160;
count__36240 = G__37161;
i__36241 = G__37162;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36273_37163 = key;
var G__36273_37164__$1 = (((G__36273_37163 instanceof cljs.core.Keyword))?G__36273_37163.fqn:null);
switch (G__36273_37164__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37166 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37166,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37166,"aria-");
}
})())){
el.setAttribute(ks_37166,value);
} else {
(el[ks_37166] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36279){
var map__36280 = p__36279;
var map__36280__$1 = cljs.core.__destructure_map(map__36280);
var props = map__36280__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36282 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36282,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36282,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36282,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36289 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36289,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36289;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36295 = arguments.length;
switch (G__36295) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36310){
var vec__36311 = p__36310;
var seq__36312 = cljs.core.seq(vec__36311);
var first__36313 = cljs.core.first(seq__36312);
var seq__36312__$1 = cljs.core.next(seq__36312);
var nn = first__36313;
var first__36313__$1 = cljs.core.first(seq__36312__$1);
var seq__36312__$2 = cljs.core.next(seq__36312__$1);
var np = first__36313__$1;
var nc = seq__36312__$2;
var node = vec__36311;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36319 = nn;
var G__36320 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36319,G__36320) : create_fn.call(null,G__36319,G__36320));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36350 = nn;
var G__36351 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36350,G__36351) : create_fn.call(null,G__36350,G__36351));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36360 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36360,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36360,(1),null);
var seq__36367_37170 = cljs.core.seq(node_children);
var chunk__36368_37171 = null;
var count__36369_37172 = (0);
var i__36370_37173 = (0);
while(true){
if((i__36370_37173 < count__36369_37172)){
var child_struct_37174 = chunk__36368_37171.cljs$core$IIndexed$_nth$arity$2(null,i__36370_37173);
var children_37175 = shadow.dom.dom_node(child_struct_37174);
if(cljs.core.seq_QMARK_(children_37175)){
var seq__36414_37176 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37175));
var chunk__36416_37177 = null;
var count__36417_37178 = (0);
var i__36418_37179 = (0);
while(true){
if((i__36418_37179 < count__36417_37178)){
var child_37180 = chunk__36416_37177.cljs$core$IIndexed$_nth$arity$2(null,i__36418_37179);
if(cljs.core.truth_(child_37180)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37180);


var G__37181 = seq__36414_37176;
var G__37182 = chunk__36416_37177;
var G__37183 = count__36417_37178;
var G__37184 = (i__36418_37179 + (1));
seq__36414_37176 = G__37181;
chunk__36416_37177 = G__37182;
count__36417_37178 = G__37183;
i__36418_37179 = G__37184;
continue;
} else {
var G__37185 = seq__36414_37176;
var G__37186 = chunk__36416_37177;
var G__37187 = count__36417_37178;
var G__37188 = (i__36418_37179 + (1));
seq__36414_37176 = G__37185;
chunk__36416_37177 = G__37186;
count__36417_37178 = G__37187;
i__36418_37179 = G__37188;
continue;
}
} else {
var temp__5804__auto___37189 = cljs.core.seq(seq__36414_37176);
if(temp__5804__auto___37189){
var seq__36414_37190__$1 = temp__5804__auto___37189;
if(cljs.core.chunked_seq_QMARK_(seq__36414_37190__$1)){
var c__5568__auto___37191 = cljs.core.chunk_first(seq__36414_37190__$1);
var G__37192 = cljs.core.chunk_rest(seq__36414_37190__$1);
var G__37193 = c__5568__auto___37191;
var G__37194 = cljs.core.count(c__5568__auto___37191);
var G__37195 = (0);
seq__36414_37176 = G__37192;
chunk__36416_37177 = G__37193;
count__36417_37178 = G__37194;
i__36418_37179 = G__37195;
continue;
} else {
var child_37196 = cljs.core.first(seq__36414_37190__$1);
if(cljs.core.truth_(child_37196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37196);


var G__37197 = cljs.core.next(seq__36414_37190__$1);
var G__37198 = null;
var G__37199 = (0);
var G__37200 = (0);
seq__36414_37176 = G__37197;
chunk__36416_37177 = G__37198;
count__36417_37178 = G__37199;
i__36418_37179 = G__37200;
continue;
} else {
var G__37201 = cljs.core.next(seq__36414_37190__$1);
var G__37202 = null;
var G__37203 = (0);
var G__37204 = (0);
seq__36414_37176 = G__37201;
chunk__36416_37177 = G__37202;
count__36417_37178 = G__37203;
i__36418_37179 = G__37204;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37175);
}


var G__37205 = seq__36367_37170;
var G__37206 = chunk__36368_37171;
var G__37207 = count__36369_37172;
var G__37208 = (i__36370_37173 + (1));
seq__36367_37170 = G__37205;
chunk__36368_37171 = G__37206;
count__36369_37172 = G__37207;
i__36370_37173 = G__37208;
continue;
} else {
var temp__5804__auto___37209 = cljs.core.seq(seq__36367_37170);
if(temp__5804__auto___37209){
var seq__36367_37210__$1 = temp__5804__auto___37209;
if(cljs.core.chunked_seq_QMARK_(seq__36367_37210__$1)){
var c__5568__auto___37211 = cljs.core.chunk_first(seq__36367_37210__$1);
var G__37212 = cljs.core.chunk_rest(seq__36367_37210__$1);
var G__37213 = c__5568__auto___37211;
var G__37214 = cljs.core.count(c__5568__auto___37211);
var G__37215 = (0);
seq__36367_37170 = G__37212;
chunk__36368_37171 = G__37213;
count__36369_37172 = G__37214;
i__36370_37173 = G__37215;
continue;
} else {
var child_struct_37216 = cljs.core.first(seq__36367_37210__$1);
var children_37217 = shadow.dom.dom_node(child_struct_37216);
if(cljs.core.seq_QMARK_(children_37217)){
var seq__36436_37218 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37217));
var chunk__36438_37219 = null;
var count__36439_37220 = (0);
var i__36440_37221 = (0);
while(true){
if((i__36440_37221 < count__36439_37220)){
var child_37226 = chunk__36438_37219.cljs$core$IIndexed$_nth$arity$2(null,i__36440_37221);
if(cljs.core.truth_(child_37226)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37226);


var G__37227 = seq__36436_37218;
var G__37228 = chunk__36438_37219;
var G__37229 = count__36439_37220;
var G__37230 = (i__36440_37221 + (1));
seq__36436_37218 = G__37227;
chunk__36438_37219 = G__37228;
count__36439_37220 = G__37229;
i__36440_37221 = G__37230;
continue;
} else {
var G__37231 = seq__36436_37218;
var G__37232 = chunk__36438_37219;
var G__37233 = count__36439_37220;
var G__37234 = (i__36440_37221 + (1));
seq__36436_37218 = G__37231;
chunk__36438_37219 = G__37232;
count__36439_37220 = G__37233;
i__36440_37221 = G__37234;
continue;
}
} else {
var temp__5804__auto___37235__$1 = cljs.core.seq(seq__36436_37218);
if(temp__5804__auto___37235__$1){
var seq__36436_37236__$1 = temp__5804__auto___37235__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36436_37236__$1)){
var c__5568__auto___37237 = cljs.core.chunk_first(seq__36436_37236__$1);
var G__37238 = cljs.core.chunk_rest(seq__36436_37236__$1);
var G__37239 = c__5568__auto___37237;
var G__37240 = cljs.core.count(c__5568__auto___37237);
var G__37241 = (0);
seq__36436_37218 = G__37238;
chunk__36438_37219 = G__37239;
count__36439_37220 = G__37240;
i__36440_37221 = G__37241;
continue;
} else {
var child_37242 = cljs.core.first(seq__36436_37236__$1);
if(cljs.core.truth_(child_37242)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37242);


var G__37243 = cljs.core.next(seq__36436_37236__$1);
var G__37244 = null;
var G__37245 = (0);
var G__37246 = (0);
seq__36436_37218 = G__37243;
chunk__36438_37219 = G__37244;
count__36439_37220 = G__37245;
i__36440_37221 = G__37246;
continue;
} else {
var G__37247 = cljs.core.next(seq__36436_37236__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__36436_37218 = G__37247;
chunk__36438_37219 = G__37248;
count__36439_37220 = G__37249;
i__36440_37221 = G__37250;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37217);
}


var G__37251 = cljs.core.next(seq__36367_37210__$1);
var G__37252 = null;
var G__37253 = (0);
var G__37254 = (0);
seq__36367_37170 = G__37251;
chunk__36368_37171 = G__37252;
count__36369_37172 = G__37253;
i__36370_37173 = G__37254;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36492 = cljs.core.seq(node);
var chunk__36493 = null;
var count__36494 = (0);
var i__36495 = (0);
while(true){
if((i__36495 < count__36494)){
var n = chunk__36493.cljs$core$IIndexed$_nth$arity$2(null,i__36495);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37263 = seq__36492;
var G__37264 = chunk__36493;
var G__37265 = count__36494;
var G__37266 = (i__36495 + (1));
seq__36492 = G__37263;
chunk__36493 = G__37264;
count__36494 = G__37265;
i__36495 = G__37266;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36492);
if(temp__5804__auto__){
var seq__36492__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36492__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36492__$1);
var G__37267 = cljs.core.chunk_rest(seq__36492__$1);
var G__37268 = c__5568__auto__;
var G__37269 = cljs.core.count(c__5568__auto__);
var G__37270 = (0);
seq__36492 = G__37267;
chunk__36493 = G__37268;
count__36494 = G__37269;
i__36495 = G__37270;
continue;
} else {
var n = cljs.core.first(seq__36492__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37271 = cljs.core.next(seq__36492__$1);
var G__37272 = null;
var G__37273 = (0);
var G__37274 = (0);
seq__36492 = G__37271;
chunk__36493 = G__37272;
count__36494 = G__37273;
i__36495 = G__37274;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36497 = arguments.length;
switch (G__36497) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36507 = arguments.length;
switch (G__36507) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36515 = arguments.length;
switch (G__36515) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37293 = arguments.length;
var i__5770__auto___37294 = (0);
while(true){
if((i__5770__auto___37294 < len__5769__auto___37293)){
args__5775__auto__.push((arguments[i__5770__auto___37294]));

var G__37295 = (i__5770__auto___37294 + (1));
i__5770__auto___37294 = G__37295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36524_37296 = cljs.core.seq(nodes);
var chunk__36525_37297 = null;
var count__36526_37298 = (0);
var i__36527_37299 = (0);
while(true){
if((i__36527_37299 < count__36526_37298)){
var node_37300 = chunk__36525_37297.cljs$core$IIndexed$_nth$arity$2(null,i__36527_37299);
fragment.appendChild(shadow.dom._to_dom(node_37300));


var G__37301 = seq__36524_37296;
var G__37302 = chunk__36525_37297;
var G__37303 = count__36526_37298;
var G__37304 = (i__36527_37299 + (1));
seq__36524_37296 = G__37301;
chunk__36525_37297 = G__37302;
count__36526_37298 = G__37303;
i__36527_37299 = G__37304;
continue;
} else {
var temp__5804__auto___37305 = cljs.core.seq(seq__36524_37296);
if(temp__5804__auto___37305){
var seq__36524_37306__$1 = temp__5804__auto___37305;
if(cljs.core.chunked_seq_QMARK_(seq__36524_37306__$1)){
var c__5568__auto___37307 = cljs.core.chunk_first(seq__36524_37306__$1);
var G__37308 = cljs.core.chunk_rest(seq__36524_37306__$1);
var G__37309 = c__5568__auto___37307;
var G__37310 = cljs.core.count(c__5568__auto___37307);
var G__37311 = (0);
seq__36524_37296 = G__37308;
chunk__36525_37297 = G__37309;
count__36526_37298 = G__37310;
i__36527_37299 = G__37311;
continue;
} else {
var node_37312 = cljs.core.first(seq__36524_37306__$1);
fragment.appendChild(shadow.dom._to_dom(node_37312));


var G__37313 = cljs.core.next(seq__36524_37306__$1);
var G__37314 = null;
var G__37315 = (0);
var G__37316 = (0);
seq__36524_37296 = G__37313;
chunk__36525_37297 = G__37314;
count__36526_37298 = G__37315;
i__36527_37299 = G__37316;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36523){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36523));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36553_37317 = cljs.core.seq(scripts);
var chunk__36554_37318 = null;
var count__36555_37319 = (0);
var i__36556_37320 = (0);
while(true){
if((i__36556_37320 < count__36555_37319)){
var vec__36567_37322 = chunk__36554_37318.cljs$core$IIndexed$_nth$arity$2(null,i__36556_37320);
var script_tag_37323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567_37322,(0),null);
var script_body_37324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567_37322,(1),null);
eval(script_body_37324);


var G__37328 = seq__36553_37317;
var G__37329 = chunk__36554_37318;
var G__37330 = count__36555_37319;
var G__37331 = (i__36556_37320 + (1));
seq__36553_37317 = G__37328;
chunk__36554_37318 = G__37329;
count__36555_37319 = G__37330;
i__36556_37320 = G__37331;
continue;
} else {
var temp__5804__auto___37332 = cljs.core.seq(seq__36553_37317);
if(temp__5804__auto___37332){
var seq__36553_37333__$1 = temp__5804__auto___37332;
if(cljs.core.chunked_seq_QMARK_(seq__36553_37333__$1)){
var c__5568__auto___37334 = cljs.core.chunk_first(seq__36553_37333__$1);
var G__37335 = cljs.core.chunk_rest(seq__36553_37333__$1);
var G__37336 = c__5568__auto___37334;
var G__37337 = cljs.core.count(c__5568__auto___37334);
var G__37338 = (0);
seq__36553_37317 = G__37335;
chunk__36554_37318 = G__37336;
count__36555_37319 = G__37337;
i__36556_37320 = G__37338;
continue;
} else {
var vec__36570_37339 = cljs.core.first(seq__36553_37333__$1);
var script_tag_37340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36570_37339,(0),null);
var script_body_37341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36570_37339,(1),null);
eval(script_body_37341);


var G__37342 = cljs.core.next(seq__36553_37333__$1);
var G__37343 = null;
var G__37344 = (0);
var G__37345 = (0);
seq__36553_37317 = G__37342;
chunk__36554_37318 = G__37343;
count__36555_37319 = G__37344;
i__36556_37320 = G__37345;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36581){
var vec__36591 = p__36581;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36591,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36591,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36673 = arguments.length;
switch (G__36673) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36685 = cljs.core.seq(style_keys);
var chunk__36686 = null;
var count__36687 = (0);
var i__36688 = (0);
while(true){
if((i__36688 < count__36687)){
var it = chunk__36686.cljs$core$IIndexed$_nth$arity$2(null,i__36688);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37362 = seq__36685;
var G__37363 = chunk__36686;
var G__37364 = count__36687;
var G__37365 = (i__36688 + (1));
seq__36685 = G__37362;
chunk__36686 = G__37363;
count__36687 = G__37364;
i__36688 = G__37365;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36685);
if(temp__5804__auto__){
var seq__36685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36685__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36685__$1);
var G__37369 = cljs.core.chunk_rest(seq__36685__$1);
var G__37370 = c__5568__auto__;
var G__37371 = cljs.core.count(c__5568__auto__);
var G__37372 = (0);
seq__36685 = G__37369;
chunk__36686 = G__37370;
count__36687 = G__37371;
i__36688 = G__37372;
continue;
} else {
var it = cljs.core.first(seq__36685__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37373 = cljs.core.next(seq__36685__$1);
var G__37374 = null;
var G__37375 = (0);
var G__37376 = (0);
seq__36685 = G__37373;
chunk__36686 = G__37374;
count__36687 = G__37375;
i__36688 = G__37376;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36701,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36718 = k36701;
var G__36718__$1 = (((G__36718 instanceof cljs.core.Keyword))?G__36718.fqn:null);
switch (G__36718__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36701,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36719){
var vec__36720 = p__36719;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36720,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36720,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36700){
var self__ = this;
var G__36700__$1 = this;
return (new cljs.core.RecordIter((0),G__36700__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36702,other36703){
var self__ = this;
var this36702__$1 = this;
return (((!((other36703 == null)))) && ((((this36702__$1.constructor === other36703.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36702__$1.x,other36703.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36702__$1.y,other36703.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36702__$1.__extmap,other36703.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36701){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36738 = k36701;
var G__36738__$1 = (((G__36738 instanceof cljs.core.Keyword))?G__36738.fqn:null);
switch (G__36738__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36701);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36700){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36739 = cljs.core.keyword_identical_QMARK_;
var expr__36740 = k__5352__auto__;
if(cljs.core.truth_((pred__36739.cljs$core$IFn$_invoke$arity$2 ? pred__36739.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36740) : pred__36739.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36740)))){
return (new shadow.dom.Coordinate(G__36700,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36739.cljs$core$IFn$_invoke$arity$2 ? pred__36739.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36740) : pred__36739.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36740)))){
return (new shadow.dom.Coordinate(self__.x,G__36700,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36700),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36700){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36700,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36712){
var extmap__5385__auto__ = (function (){var G__36775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36712,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36712)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36775);
} else {
return G__36775;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36712),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36712),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36798,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36832 = k36798;
var G__36832__$1 = (((G__36832 instanceof cljs.core.Keyword))?G__36832.fqn:null);
switch (G__36832__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36798,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36840){
var vec__36841 = p__36840;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36841,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36841,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36797){
var self__ = this;
var G__36797__$1 = this;
return (new cljs.core.RecordIter((0),G__36797__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36799,other36800){
var self__ = this;
var this36799__$1 = this;
return (((!((other36800 == null)))) && ((((this36799__$1.constructor === other36800.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36799__$1.w,other36800.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36799__$1.h,other36800.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36799__$1.__extmap,other36800.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36798){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36904 = k36798;
var G__36904__$1 = (((G__36904 instanceof cljs.core.Keyword))?G__36904.fqn:null);
switch (G__36904__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36798);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36797){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36905 = cljs.core.keyword_identical_QMARK_;
var expr__36906 = k__5352__auto__;
if(cljs.core.truth_((pred__36905.cljs$core$IFn$_invoke$arity$2 ? pred__36905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36906) : pred__36905.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36906)))){
return (new shadow.dom.Size(G__36797,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36905.cljs$core$IFn$_invoke$arity$2 ? pred__36905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36906) : pred__36905.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36906)))){
return (new shadow.dom.Size(self__.w,G__36797,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36797),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36797){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36797,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36803){
var extmap__5385__auto__ = (function (){var G__36913 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36803,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36803)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36913);
} else {
return G__36913;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36803),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36803),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37407 = (i + (1));
var G__37408 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37407;
ret = G__37408;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36940){
var vec__36941 = p__36940;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36949 = arguments.length;
switch (G__36949) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37410 = ps;
var G__37411 = (i + (1));
el__$1 = G__37410;
i = G__37411;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36957 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36957,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36957,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36957,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36960_37413 = cljs.core.seq(props);
var chunk__36961_37414 = null;
var count__36962_37415 = (0);
var i__36963_37416 = (0);
while(true){
if((i__36963_37416 < count__36962_37415)){
var vec__36973_37417 = chunk__36961_37414.cljs$core$IIndexed$_nth$arity$2(null,i__36963_37416);
var k_37418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973_37417,(0),null);
var v_37419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973_37417,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37418);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37418),v_37419);


var G__37420 = seq__36960_37413;
var G__37421 = chunk__36961_37414;
var G__37422 = count__36962_37415;
var G__37423 = (i__36963_37416 + (1));
seq__36960_37413 = G__37420;
chunk__36961_37414 = G__37421;
count__36962_37415 = G__37422;
i__36963_37416 = G__37423;
continue;
} else {
var temp__5804__auto___37424 = cljs.core.seq(seq__36960_37413);
if(temp__5804__auto___37424){
var seq__36960_37425__$1 = temp__5804__auto___37424;
if(cljs.core.chunked_seq_QMARK_(seq__36960_37425__$1)){
var c__5568__auto___37426 = cljs.core.chunk_first(seq__36960_37425__$1);
var G__37427 = cljs.core.chunk_rest(seq__36960_37425__$1);
var G__37428 = c__5568__auto___37426;
var G__37429 = cljs.core.count(c__5568__auto___37426);
var G__37430 = (0);
seq__36960_37413 = G__37427;
chunk__36961_37414 = G__37428;
count__36962_37415 = G__37429;
i__36963_37416 = G__37430;
continue;
} else {
var vec__36976_37431 = cljs.core.first(seq__36960_37425__$1);
var k_37432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36976_37431,(0),null);
var v_37433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36976_37431,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37432);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37432),v_37433);


var G__37434 = cljs.core.next(seq__36960_37425__$1);
var G__37435 = null;
var G__37436 = (0);
var G__37437 = (0);
seq__36960_37413 = G__37434;
chunk__36961_37414 = G__37435;
count__36962_37415 = G__37436;
i__36963_37416 = G__37437;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36980 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36980,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36980,(1),null);
var seq__36983_37438 = cljs.core.seq(node_children);
var chunk__36985_37439 = null;
var count__36986_37440 = (0);
var i__36987_37441 = (0);
while(true){
if((i__36987_37441 < count__36986_37440)){
var child_struct_37442 = chunk__36985_37439.cljs$core$IIndexed$_nth$arity$2(null,i__36987_37441);
if((!((child_struct_37442 == null)))){
if(typeof child_struct_37442 === 'string'){
var text_37444 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37444),child_struct_37442].join(''));
} else {
var children_37445 = shadow.dom.svg_node(child_struct_37442);
if(cljs.core.seq_QMARK_(children_37445)){
var seq__37023_37446 = cljs.core.seq(children_37445);
var chunk__37025_37447 = null;
var count__37026_37448 = (0);
var i__37027_37449 = (0);
while(true){
if((i__37027_37449 < count__37026_37448)){
var child_37450 = chunk__37025_37447.cljs$core$IIndexed$_nth$arity$2(null,i__37027_37449);
if(cljs.core.truth_(child_37450)){
node.appendChild(child_37450);


var G__37451 = seq__37023_37446;
var G__37452 = chunk__37025_37447;
var G__37453 = count__37026_37448;
var G__37454 = (i__37027_37449 + (1));
seq__37023_37446 = G__37451;
chunk__37025_37447 = G__37452;
count__37026_37448 = G__37453;
i__37027_37449 = G__37454;
continue;
} else {
var G__37455 = seq__37023_37446;
var G__37456 = chunk__37025_37447;
var G__37457 = count__37026_37448;
var G__37458 = (i__37027_37449 + (1));
seq__37023_37446 = G__37455;
chunk__37025_37447 = G__37456;
count__37026_37448 = G__37457;
i__37027_37449 = G__37458;
continue;
}
} else {
var temp__5804__auto___37459 = cljs.core.seq(seq__37023_37446);
if(temp__5804__auto___37459){
var seq__37023_37460__$1 = temp__5804__auto___37459;
if(cljs.core.chunked_seq_QMARK_(seq__37023_37460__$1)){
var c__5568__auto___37461 = cljs.core.chunk_first(seq__37023_37460__$1);
var G__37463 = cljs.core.chunk_rest(seq__37023_37460__$1);
var G__37464 = c__5568__auto___37461;
var G__37465 = cljs.core.count(c__5568__auto___37461);
var G__37466 = (0);
seq__37023_37446 = G__37463;
chunk__37025_37447 = G__37464;
count__37026_37448 = G__37465;
i__37027_37449 = G__37466;
continue;
} else {
var child_37467 = cljs.core.first(seq__37023_37460__$1);
if(cljs.core.truth_(child_37467)){
node.appendChild(child_37467);


var G__37468 = cljs.core.next(seq__37023_37460__$1);
var G__37469 = null;
var G__37470 = (0);
var G__37471 = (0);
seq__37023_37446 = G__37468;
chunk__37025_37447 = G__37469;
count__37026_37448 = G__37470;
i__37027_37449 = G__37471;
continue;
} else {
var G__37472 = cljs.core.next(seq__37023_37460__$1);
var G__37473 = null;
var G__37474 = (0);
var G__37475 = (0);
seq__37023_37446 = G__37472;
chunk__37025_37447 = G__37473;
count__37026_37448 = G__37474;
i__37027_37449 = G__37475;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37445);
}
}


var G__37476 = seq__36983_37438;
var G__37477 = chunk__36985_37439;
var G__37478 = count__36986_37440;
var G__37479 = (i__36987_37441 + (1));
seq__36983_37438 = G__37476;
chunk__36985_37439 = G__37477;
count__36986_37440 = G__37478;
i__36987_37441 = G__37479;
continue;
} else {
var G__37480 = seq__36983_37438;
var G__37481 = chunk__36985_37439;
var G__37482 = count__36986_37440;
var G__37483 = (i__36987_37441 + (1));
seq__36983_37438 = G__37480;
chunk__36985_37439 = G__37481;
count__36986_37440 = G__37482;
i__36987_37441 = G__37483;
continue;
}
} else {
var temp__5804__auto___37484 = cljs.core.seq(seq__36983_37438);
if(temp__5804__auto___37484){
var seq__36983_37485__$1 = temp__5804__auto___37484;
if(cljs.core.chunked_seq_QMARK_(seq__36983_37485__$1)){
var c__5568__auto___37486 = cljs.core.chunk_first(seq__36983_37485__$1);
var G__37487 = cljs.core.chunk_rest(seq__36983_37485__$1);
var G__37488 = c__5568__auto___37486;
var G__37489 = cljs.core.count(c__5568__auto___37486);
var G__37490 = (0);
seq__36983_37438 = G__37487;
chunk__36985_37439 = G__37488;
count__36986_37440 = G__37489;
i__36987_37441 = G__37490;
continue;
} else {
var child_struct_37491 = cljs.core.first(seq__36983_37485__$1);
if((!((child_struct_37491 == null)))){
if(typeof child_struct_37491 === 'string'){
var text_37492 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37492),child_struct_37491].join(''));
} else {
var children_37493 = shadow.dom.svg_node(child_struct_37491);
if(cljs.core.seq_QMARK_(children_37493)){
var seq__37029_37494 = cljs.core.seq(children_37493);
var chunk__37031_37495 = null;
var count__37032_37496 = (0);
var i__37033_37497 = (0);
while(true){
if((i__37033_37497 < count__37032_37496)){
var child_37498 = chunk__37031_37495.cljs$core$IIndexed$_nth$arity$2(null,i__37033_37497);
if(cljs.core.truth_(child_37498)){
node.appendChild(child_37498);


var G__37499 = seq__37029_37494;
var G__37500 = chunk__37031_37495;
var G__37501 = count__37032_37496;
var G__37502 = (i__37033_37497 + (1));
seq__37029_37494 = G__37499;
chunk__37031_37495 = G__37500;
count__37032_37496 = G__37501;
i__37033_37497 = G__37502;
continue;
} else {
var G__37503 = seq__37029_37494;
var G__37504 = chunk__37031_37495;
var G__37505 = count__37032_37496;
var G__37506 = (i__37033_37497 + (1));
seq__37029_37494 = G__37503;
chunk__37031_37495 = G__37504;
count__37032_37496 = G__37505;
i__37033_37497 = G__37506;
continue;
}
} else {
var temp__5804__auto___37507__$1 = cljs.core.seq(seq__37029_37494);
if(temp__5804__auto___37507__$1){
var seq__37029_37508__$1 = temp__5804__auto___37507__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37029_37508__$1)){
var c__5568__auto___37509 = cljs.core.chunk_first(seq__37029_37508__$1);
var G__37510 = cljs.core.chunk_rest(seq__37029_37508__$1);
var G__37511 = c__5568__auto___37509;
var G__37512 = cljs.core.count(c__5568__auto___37509);
var G__37513 = (0);
seq__37029_37494 = G__37510;
chunk__37031_37495 = G__37511;
count__37032_37496 = G__37512;
i__37033_37497 = G__37513;
continue;
} else {
var child_37514 = cljs.core.first(seq__37029_37508__$1);
if(cljs.core.truth_(child_37514)){
node.appendChild(child_37514);


var G__37515 = cljs.core.next(seq__37029_37508__$1);
var G__37516 = null;
var G__37517 = (0);
var G__37518 = (0);
seq__37029_37494 = G__37515;
chunk__37031_37495 = G__37516;
count__37032_37496 = G__37517;
i__37033_37497 = G__37518;
continue;
} else {
var G__37519 = cljs.core.next(seq__37029_37508__$1);
var G__37520 = null;
var G__37521 = (0);
var G__37522 = (0);
seq__37029_37494 = G__37519;
chunk__37031_37495 = G__37520;
count__37032_37496 = G__37521;
i__37033_37497 = G__37522;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37493);
}
}


var G__37523 = cljs.core.next(seq__36983_37485__$1);
var G__37524 = null;
var G__37525 = (0);
var G__37526 = (0);
seq__36983_37438 = G__37523;
chunk__36985_37439 = G__37524;
count__36986_37440 = G__37525;
i__36987_37441 = G__37526;
continue;
} else {
var G__37527 = cljs.core.next(seq__36983_37485__$1);
var G__37528 = null;
var G__37529 = (0);
var G__37530 = (0);
seq__36983_37438 = G__37527;
chunk__36985_37439 = G__37528;
count__36986_37440 = G__37529;
i__36987_37441 = G__37530;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37531 = arguments.length;
var i__5770__auto___37532 = (0);
while(true){
if((i__5770__auto___37532 < len__5769__auto___37531)){
args__5775__auto__.push((arguments[i__5770__auto___37532]));

var G__37533 = (i__5770__auto___37532 + (1));
i__5770__auto___37532 = G__37533;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37045){
var G__37046 = cljs.core.first(seq37045);
var seq37045__$1 = cljs.core.next(seq37045);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37046,seq37045__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37057 = arguments.length;
switch (G__37057) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33432__auto___37535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_37069){
var state_val_37070 = (state_37069[(1)]);
if((state_val_37070 === (1))){
var state_37069__$1 = state_37069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37069__$1,(2),once_or_cleanup);
} else {
if((state_val_37070 === (2))){
var inst_37062 = (state_37069[(2)]);
var inst_37063 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37069__$1 = (function (){var statearr_37077 = state_37069;
(statearr_37077[(7)] = inst_37062);

return statearr_37077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37069__$1,inst_37063);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33269__auto__ = null;
var shadow$dom$state_machine__33269__auto____0 = (function (){
var statearr_37080 = [null,null,null,null,null,null,null,null];
(statearr_37080[(0)] = shadow$dom$state_machine__33269__auto__);

(statearr_37080[(1)] = (1));

return statearr_37080;
});
var shadow$dom$state_machine__33269__auto____1 = (function (state_37069){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_37069);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e37081){var ex__33272__auto__ = e37081;
var statearr_37082_37536 = state_37069;
(statearr_37082_37536[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_37069[(4)]))){
var statearr_37083_37537 = state_37069;
(statearr_37083_37537[(1)] = cljs.core.first((state_37069[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37538 = state_37069;
state_37069 = G__37538;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
shadow$dom$state_machine__33269__auto__ = function(state_37069){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33269__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33269__auto____1.call(this,state_37069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33269__auto____0;
shadow$dom$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33269__auto____1;
return shadow$dom$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_37084 = f__33433__auto__();
(statearr_37084[(6)] = c__33432__auto___37535);

return statearr_37084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

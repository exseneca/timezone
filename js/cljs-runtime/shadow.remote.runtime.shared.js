goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33526){
var map__33531 = p__33526;
var map__33531__$1 = cljs.core.__destructure_map(map__33531);
var runtime = map__33531__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33531__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33715 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33715)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__33535 = runtime;
var G__33536 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33715);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__33535,G__33536) : shadow.remote.runtime.shared.process.call(null,G__33535,G__33536));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33537,res){
var map__33538 = p__33537;
var map__33538__$1 = cljs.core.__destructure_map(map__33538);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33538__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33538__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33539 = res;
var G__33539__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33539,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33539);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33539__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33539__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33542 = arguments.length;
switch (G__33542) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33550,msg,handlers,timeout_after_ms){
var map__33551 = p__33550;
var map__33551__$1 = cljs.core.__destructure_map(map__33551);
var runtime = map__33551__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33551__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33829 = arguments.length;
var i__5770__auto___33830 = (0);
while(true){
if((i__5770__auto___33830 < len__5769__auto___33829)){
args__5775__auto__.push((arguments[i__5770__auto___33830]));

var G__33831 = (i__5770__auto___33830 + (1));
i__5770__auto___33830 = G__33831;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33562,ev,args){
var map__33564 = p__33562;
var map__33564__$1 = cljs.core.__destructure_map(map__33564);
var runtime = map__33564__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33564__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33565 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33568 = null;
var count__33569 = (0);
var i__33570 = (0);
while(true){
if((i__33570 < count__33569)){
var ext = chunk__33568.cljs$core$IIndexed$_nth$arity$2(null,i__33570);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33834 = seq__33565;
var G__33835 = chunk__33568;
var G__33836 = count__33569;
var G__33837 = (i__33570 + (1));
seq__33565 = G__33834;
chunk__33568 = G__33835;
count__33569 = G__33836;
i__33570 = G__33837;
continue;
} else {
var G__33839 = seq__33565;
var G__33840 = chunk__33568;
var G__33841 = count__33569;
var G__33842 = (i__33570 + (1));
seq__33565 = G__33839;
chunk__33568 = G__33840;
count__33569 = G__33841;
i__33570 = G__33842;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33565);
if(temp__5804__auto__){
var seq__33565__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33565__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33565__$1);
var G__33843 = cljs.core.chunk_rest(seq__33565__$1);
var G__33844 = c__5568__auto__;
var G__33845 = cljs.core.count(c__5568__auto__);
var G__33846 = (0);
seq__33565 = G__33843;
chunk__33568 = G__33844;
count__33569 = G__33845;
i__33570 = G__33846;
continue;
} else {
var ext = cljs.core.first(seq__33565__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33847 = cljs.core.next(seq__33565__$1);
var G__33848 = null;
var G__33849 = (0);
var G__33850 = (0);
seq__33565 = G__33847;
chunk__33568 = G__33848;
count__33569 = G__33849;
i__33570 = G__33850;
continue;
} else {
var G__33852 = cljs.core.next(seq__33565__$1);
var G__33853 = null;
var G__33854 = (0);
var G__33855 = (0);
seq__33565 = G__33852;
chunk__33568 = G__33853;
count__33569 = G__33854;
i__33570 = G__33855;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33555){
var G__33556 = cljs.core.first(seq33555);
var seq33555__$1 = cljs.core.next(seq33555);
var G__33557 = cljs.core.first(seq33555__$1);
var seq33555__$2 = cljs.core.next(seq33555__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33556,G__33557,seq33555__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33581,p__33582){
var map__33583 = p__33581;
var map__33583__$1 = cljs.core.__destructure_map(map__33583);
var runtime = map__33583__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33583__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33584 = p__33582;
var map__33584__$1 = cljs.core.__destructure_map(map__33584);
var msg = map__33584__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33584__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33585 = cljs.core.deref(state_ref);
var map__33585__$1 = cljs.core.__destructure_map(map__33585);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33585__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33585__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33591,msg){
var map__33592 = p__33591;
var map__33592__$1 = cljs.core.__destructure_map(map__33592);
var runtime = map__33592__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33592__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33626,key,p__33627){
var map__33628 = p__33626;
var map__33628__$1 = cljs.core.__destructure_map(map__33628);
var state = map__33628__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33628__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33629 = p__33627;
var map__33629__$1 = cljs.core.__destructure_map(map__33629);
var spec = map__33629__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33629__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33649,key,spec){
var map__33650 = p__33649;
var map__33650__$1 = cljs.core.__destructure_map(map__33650);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33650__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33652_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33652_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33653_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33653_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33654_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33654_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33655_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33655_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33656_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33656_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33670,key){
var map__33671 = p__33670;
var map__33671__$1 = cljs.core.__destructure_map(map__33671);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33674,msg){
var map__33675 = p__33674;
var map__33675__$1 = cljs.core.__destructure_map(map__33675);
var runtime = map__33675__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33675__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33681,p__33682){
var map__33683 = p__33681;
var map__33683__$1 = cljs.core.__destructure_map(map__33683);
var runtime = map__33683__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33683__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33684 = p__33682;
var map__33684__$1 = cljs.core.__destructure_map(map__33684);
var msg = map__33684__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33684__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33684__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33685 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33687 = null;
var count__33688 = (0);
var i__33689 = (0);
while(true){
if((i__33689 < count__33688)){
var map__33698 = chunk__33687.cljs$core$IIndexed$_nth$arity$2(null,i__33689);
var map__33698__$1 = cljs.core.__destructure_map(map__33698);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33698__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34013 = seq__33685;
var G__34014 = chunk__33687;
var G__34015 = count__33688;
var G__34016 = (i__33689 + (1));
seq__33685 = G__34013;
chunk__33687 = G__34014;
count__33688 = G__34015;
i__33689 = G__34016;
continue;
} else {
var G__34017 = seq__33685;
var G__34018 = chunk__33687;
var G__34019 = count__33688;
var G__34020 = (i__33689 + (1));
seq__33685 = G__34017;
chunk__33687 = G__34018;
count__33688 = G__34019;
i__33689 = G__34020;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33685);
if(temp__5804__auto__){
var seq__33685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33685__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33685__$1);
var G__34021 = cljs.core.chunk_rest(seq__33685__$1);
var G__34022 = c__5568__auto__;
var G__34023 = cljs.core.count(c__5568__auto__);
var G__34024 = (0);
seq__33685 = G__34021;
chunk__33687 = G__34022;
count__33688 = G__34023;
i__33689 = G__34024;
continue;
} else {
var map__33699 = cljs.core.first(seq__33685__$1);
var map__33699__$1 = cljs.core.__destructure_map(map__33699);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33699__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34027 = cljs.core.next(seq__33685__$1);
var G__34028 = null;
var G__34029 = (0);
var G__34030 = (0);
seq__33685 = G__34027;
chunk__33687 = G__34028;
count__33688 = G__34029;
i__33689 = G__34030;
continue;
} else {
var G__34031 = cljs.core.next(seq__33685__$1);
var G__34032 = null;
var G__34033 = (0);
var G__34034 = (0);
seq__33685 = G__34031;
chunk__33687 = G__34032;
count__33688 = G__34033;
i__33689 = G__34034;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

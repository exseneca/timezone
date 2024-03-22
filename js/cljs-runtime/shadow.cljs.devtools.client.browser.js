goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39053 = arguments.length;
var i__5770__auto___39054 = (0);
while(true){
if((i__5770__auto___39054 < len__5769__auto___39053)){
args__5775__auto__.push((arguments[i__5770__auto___39054]));

var G__39055 = (i__5770__auto___39054 + (1));
i__5770__auto___39054 = G__39055;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38621){
var G__38622 = cljs.core.first(seq38621);
var seq38621__$1 = cljs.core.next(seq38621);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38622,seq38621__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38626 = cljs.core.seq(sources);
var chunk__38632 = null;
var count__38633 = (0);
var i__38634 = (0);
while(true){
if((i__38634 < count__38633)){
var map__38663 = chunk__38632.cljs$core$IIndexed$_nth$arity$2(null,i__38634);
var map__38663__$1 = cljs.core.__destructure_map(map__38663);
var src = map__38663__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38663__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38663__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38663__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38663__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38664){var e_39056 = e38664;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39056);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39056.message)].join('')));
}

var G__39057 = seq__38626;
var G__39058 = chunk__38632;
var G__39059 = count__38633;
var G__39060 = (i__38634 + (1));
seq__38626 = G__39057;
chunk__38632 = G__39058;
count__38633 = G__39059;
i__38634 = G__39060;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38626);
if(temp__5804__auto__){
var seq__38626__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38626__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38626__$1);
var G__39061 = cljs.core.chunk_rest(seq__38626__$1);
var G__39062 = c__5568__auto__;
var G__39063 = cljs.core.count(c__5568__auto__);
var G__39064 = (0);
seq__38626 = G__39061;
chunk__38632 = G__39062;
count__38633 = G__39063;
i__38634 = G__39064;
continue;
} else {
var map__38665 = cljs.core.first(seq__38626__$1);
var map__38665__$1 = cljs.core.__destructure_map(map__38665);
var src = map__38665__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38665__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38665__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38665__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38665__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38666){var e_39065 = e38666;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39065);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39065.message)].join('')));
}

var G__39066 = cljs.core.next(seq__38626__$1);
var G__39067 = null;
var G__39068 = (0);
var G__39069 = (0);
seq__38626 = G__39066;
chunk__38632 = G__39067;
count__38633 = G__39068;
i__38634 = G__39069;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38667 = cljs.core.seq(js_requires);
var chunk__38668 = null;
var count__38669 = (0);
var i__38670 = (0);
while(true){
if((i__38670 < count__38669)){
var js_ns = chunk__38668.cljs$core$IIndexed$_nth$arity$2(null,i__38670);
var require_str_39072 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39072);


var G__39073 = seq__38667;
var G__39074 = chunk__38668;
var G__39075 = count__38669;
var G__39076 = (i__38670 + (1));
seq__38667 = G__39073;
chunk__38668 = G__39074;
count__38669 = G__39075;
i__38670 = G__39076;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38667);
if(temp__5804__auto__){
var seq__38667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38667__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38667__$1);
var G__39077 = cljs.core.chunk_rest(seq__38667__$1);
var G__39078 = c__5568__auto__;
var G__39079 = cljs.core.count(c__5568__auto__);
var G__39080 = (0);
seq__38667 = G__39077;
chunk__38668 = G__39078;
count__38669 = G__39079;
i__38670 = G__39080;
continue;
} else {
var js_ns = cljs.core.first(seq__38667__$1);
var require_str_39081 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39081);


var G__39082 = cljs.core.next(seq__38667__$1);
var G__39083 = null;
var G__39084 = (0);
var G__39085 = (0);
seq__38667 = G__39082;
chunk__38668 = G__39083;
count__38669 = G__39084;
i__38670 = G__39085;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38673){
var map__38674 = p__38673;
var map__38674__$1 = cljs.core.__destructure_map(map__38674);
var msg = map__38674__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38674__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38674__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38675(s__38676){
return (new cljs.core.LazySeq(null,(function (){
var s__38676__$1 = s__38676;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38676__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38681 = cljs.core.first(xs__6360__auto__);
var map__38681__$1 = cljs.core.__destructure_map(map__38681);
var src = map__38681__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38676__$1,map__38681,map__38681__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38674,map__38674__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38675_$_iter__38677(s__38678){
return (new cljs.core.LazySeq(null,((function (s__38676__$1,map__38681,map__38681__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38674,map__38674__$1,msg,info,reload_info){
return (function (){
var s__38678__$1 = s__38678;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38678__$1);
if(temp__5804__auto____$1){
var s__38678__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38678__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38678__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38680 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38679 = (0);
while(true){
if((i__38679 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38679);
cljs.core.chunk_append(b__38680,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39086 = (i__38679 + (1));
i__38679 = G__39086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38680),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38675_$_iter__38677(cljs.core.chunk_rest(s__38678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38680),null);
}
} else {
var warning = cljs.core.first(s__38678__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38675_$_iter__38677(cljs.core.rest(s__38678__$2)));
}
} else {
return null;
}
break;
}
});})(s__38676__$1,map__38681,map__38681__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38674,map__38674__$1,msg,info,reload_info))
,null,null));
});})(s__38676__$1,map__38681,map__38681__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38674,map__38674__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38675(cljs.core.rest(s__38676__$1)));
} else {
var G__39087 = cljs.core.rest(s__38676__$1);
s__38676__$1 = G__39087;
continue;
}
} else {
var G__39088 = cljs.core.rest(s__38676__$1);
s__38676__$1 = G__39088;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38684_39089 = cljs.core.seq(warnings);
var chunk__38685_39090 = null;
var count__38686_39091 = (0);
var i__38687_39092 = (0);
while(true){
if((i__38687_39092 < count__38686_39091)){
var map__38691_39093 = chunk__38685_39090.cljs$core$IIndexed$_nth$arity$2(null,i__38687_39092);
var map__38691_39094__$1 = cljs.core.__destructure_map(map__38691_39093);
var w_39095 = map__38691_39094__$1;
var msg_39096__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38691_39094__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38691_39094__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38691_39094__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38691_39094__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39099)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39097),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39098),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39096__$1)].join(''));


var G__39100 = seq__38684_39089;
var G__39101 = chunk__38685_39090;
var G__39102 = count__38686_39091;
var G__39103 = (i__38687_39092 + (1));
seq__38684_39089 = G__39100;
chunk__38685_39090 = G__39101;
count__38686_39091 = G__39102;
i__38687_39092 = G__39103;
continue;
} else {
var temp__5804__auto___39104 = cljs.core.seq(seq__38684_39089);
if(temp__5804__auto___39104){
var seq__38684_39105__$1 = temp__5804__auto___39104;
if(cljs.core.chunked_seq_QMARK_(seq__38684_39105__$1)){
var c__5568__auto___39106 = cljs.core.chunk_first(seq__38684_39105__$1);
var G__39107 = cljs.core.chunk_rest(seq__38684_39105__$1);
var G__39108 = c__5568__auto___39106;
var G__39109 = cljs.core.count(c__5568__auto___39106);
var G__39110 = (0);
seq__38684_39089 = G__39107;
chunk__38685_39090 = G__39108;
count__38686_39091 = G__39109;
i__38687_39092 = G__39110;
continue;
} else {
var map__38692_39111 = cljs.core.first(seq__38684_39105__$1);
var map__38692_39112__$1 = cljs.core.__destructure_map(map__38692_39111);
var w_39113 = map__38692_39112__$1;
var msg_39114__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38692_39112__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38692_39112__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38692_39112__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38692_39112__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39117)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39115),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39116),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39114__$1)].join(''));


var G__39118 = cljs.core.next(seq__38684_39105__$1);
var G__39119 = null;
var G__39120 = (0);
var G__39121 = (0);
seq__38684_39089 = G__39118;
chunk__38685_39090 = G__39119;
count__38686_39091 = G__39120;
i__38687_39092 = G__39121;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38672_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38672_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38697){
var map__38698 = p__38697;
var map__38698__$1 = cljs.core.__destructure_map(map__38698);
var msg = map__38698__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38698__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38698__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38699 = cljs.core.seq(updates);
var chunk__38701 = null;
var count__38702 = (0);
var i__38703 = (0);
while(true){
if((i__38703 < count__38702)){
var path = chunk__38701.cljs$core$IIndexed$_nth$arity$2(null,i__38703);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38829_39123 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38833_39124 = null;
var count__38834_39125 = (0);
var i__38835_39126 = (0);
while(true){
if((i__38835_39126 < count__38834_39125)){
var node_39127 = chunk__38833_39124.cljs$core$IIndexed$_nth$arity$2(null,i__38835_39126);
if(cljs.core.not(node_39127.shadow$old)){
var path_match_39128 = shadow.cljs.devtools.client.browser.match_paths(node_39127.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39128)){
var new_link_39129 = (function (){var G__38874 = node_39127.cloneNode(true);
G__38874.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39128),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38874;
})();
(node_39127.shadow$old = true);

(new_link_39129.onload = ((function (seq__38829_39123,chunk__38833_39124,count__38834_39125,i__38835_39126,seq__38699,chunk__38701,count__38702,i__38703,new_link_39129,path_match_39128,node_39127,path,map__38698,map__38698__$1,msg,updates,reload_info){
return (function (e){
var seq__38876_39130 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38878_39131 = null;
var count__38879_39132 = (0);
var i__38880_39133 = (0);
while(true){
if((i__38880_39133 < count__38879_39132)){
var map__38890_39134 = chunk__38878_39131.cljs$core$IIndexed$_nth$arity$2(null,i__38880_39133);
var map__38890_39135__$1 = cljs.core.__destructure_map(map__38890_39134);
var task_39136 = map__38890_39135__$1;
var fn_str_39137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890_39135__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890_39135__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39139 = goog.getObjectByName(fn_str_39137,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39138)].join(''));

(fn_obj_39139.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39139.cljs$core$IFn$_invoke$arity$2(path,new_link_39129) : fn_obj_39139.call(null,path,new_link_39129));


var G__39143 = seq__38876_39130;
var G__39144 = chunk__38878_39131;
var G__39145 = count__38879_39132;
var G__39146 = (i__38880_39133 + (1));
seq__38876_39130 = G__39143;
chunk__38878_39131 = G__39144;
count__38879_39132 = G__39145;
i__38880_39133 = G__39146;
continue;
} else {
var temp__5804__auto___39148 = cljs.core.seq(seq__38876_39130);
if(temp__5804__auto___39148){
var seq__38876_39149__$1 = temp__5804__auto___39148;
if(cljs.core.chunked_seq_QMARK_(seq__38876_39149__$1)){
var c__5568__auto___39150 = cljs.core.chunk_first(seq__38876_39149__$1);
var G__39151 = cljs.core.chunk_rest(seq__38876_39149__$1);
var G__39152 = c__5568__auto___39150;
var G__39153 = cljs.core.count(c__5568__auto___39150);
var G__39154 = (0);
seq__38876_39130 = G__39151;
chunk__38878_39131 = G__39152;
count__38879_39132 = G__39153;
i__38880_39133 = G__39154;
continue;
} else {
var map__38891_39155 = cljs.core.first(seq__38876_39149__$1);
var map__38891_39156__$1 = cljs.core.__destructure_map(map__38891_39155);
var task_39157 = map__38891_39156__$1;
var fn_str_39158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891_39156__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891_39156__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39160 = goog.getObjectByName(fn_str_39158,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39159)].join(''));

(fn_obj_39160.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39160.cljs$core$IFn$_invoke$arity$2(path,new_link_39129) : fn_obj_39160.call(null,path,new_link_39129));


var G__39161 = cljs.core.next(seq__38876_39149__$1);
var G__39162 = null;
var G__39163 = (0);
var G__39164 = (0);
seq__38876_39130 = G__39161;
chunk__38878_39131 = G__39162;
count__38879_39132 = G__39163;
i__38880_39133 = G__39164;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39127);
});})(seq__38829_39123,chunk__38833_39124,count__38834_39125,i__38835_39126,seq__38699,chunk__38701,count__38702,i__38703,new_link_39129,path_match_39128,node_39127,path,map__38698,map__38698__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39128], 0));

goog.dom.insertSiblingAfter(new_link_39129,node_39127);


var G__39165 = seq__38829_39123;
var G__39166 = chunk__38833_39124;
var G__39167 = count__38834_39125;
var G__39168 = (i__38835_39126 + (1));
seq__38829_39123 = G__39165;
chunk__38833_39124 = G__39166;
count__38834_39125 = G__39167;
i__38835_39126 = G__39168;
continue;
} else {
var G__39169 = seq__38829_39123;
var G__39170 = chunk__38833_39124;
var G__39171 = count__38834_39125;
var G__39172 = (i__38835_39126 + (1));
seq__38829_39123 = G__39169;
chunk__38833_39124 = G__39170;
count__38834_39125 = G__39171;
i__38835_39126 = G__39172;
continue;
}
} else {
var G__39173 = seq__38829_39123;
var G__39174 = chunk__38833_39124;
var G__39175 = count__38834_39125;
var G__39176 = (i__38835_39126 + (1));
seq__38829_39123 = G__39173;
chunk__38833_39124 = G__39174;
count__38834_39125 = G__39175;
i__38835_39126 = G__39176;
continue;
}
} else {
var temp__5804__auto___39177 = cljs.core.seq(seq__38829_39123);
if(temp__5804__auto___39177){
var seq__38829_39178__$1 = temp__5804__auto___39177;
if(cljs.core.chunked_seq_QMARK_(seq__38829_39178__$1)){
var c__5568__auto___39179 = cljs.core.chunk_first(seq__38829_39178__$1);
var G__39180 = cljs.core.chunk_rest(seq__38829_39178__$1);
var G__39181 = c__5568__auto___39179;
var G__39182 = cljs.core.count(c__5568__auto___39179);
var G__39183 = (0);
seq__38829_39123 = G__39180;
chunk__38833_39124 = G__39181;
count__38834_39125 = G__39182;
i__38835_39126 = G__39183;
continue;
} else {
var node_39184 = cljs.core.first(seq__38829_39178__$1);
if(cljs.core.not(node_39184.shadow$old)){
var path_match_39185 = shadow.cljs.devtools.client.browser.match_paths(node_39184.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39185)){
var new_link_39186 = (function (){var G__38893 = node_39184.cloneNode(true);
G__38893.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39185),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38893;
})();
(node_39184.shadow$old = true);

(new_link_39186.onload = ((function (seq__38829_39123,chunk__38833_39124,count__38834_39125,i__38835_39126,seq__38699,chunk__38701,count__38702,i__38703,new_link_39186,path_match_39185,node_39184,seq__38829_39178__$1,temp__5804__auto___39177,path,map__38698,map__38698__$1,msg,updates,reload_info){
return (function (e){
var seq__38894_39187 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38896_39188 = null;
var count__38897_39189 = (0);
var i__38898_39190 = (0);
while(true){
if((i__38898_39190 < count__38897_39189)){
var map__38902_39191 = chunk__38896_39188.cljs$core$IIndexed$_nth$arity$2(null,i__38898_39190);
var map__38902_39192__$1 = cljs.core.__destructure_map(map__38902_39191);
var task_39193 = map__38902_39192__$1;
var fn_str_39194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39192__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39192__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39196 = goog.getObjectByName(fn_str_39194,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39195)].join(''));

(fn_obj_39196.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39196.cljs$core$IFn$_invoke$arity$2(path,new_link_39186) : fn_obj_39196.call(null,path,new_link_39186));


var G__39197 = seq__38894_39187;
var G__39198 = chunk__38896_39188;
var G__39199 = count__38897_39189;
var G__39200 = (i__38898_39190 + (1));
seq__38894_39187 = G__39197;
chunk__38896_39188 = G__39198;
count__38897_39189 = G__39199;
i__38898_39190 = G__39200;
continue;
} else {
var temp__5804__auto___39201__$1 = cljs.core.seq(seq__38894_39187);
if(temp__5804__auto___39201__$1){
var seq__38894_39202__$1 = temp__5804__auto___39201__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38894_39202__$1)){
var c__5568__auto___39203 = cljs.core.chunk_first(seq__38894_39202__$1);
var G__39204 = cljs.core.chunk_rest(seq__38894_39202__$1);
var G__39205 = c__5568__auto___39203;
var G__39206 = cljs.core.count(c__5568__auto___39203);
var G__39207 = (0);
seq__38894_39187 = G__39204;
chunk__38896_39188 = G__39205;
count__38897_39189 = G__39206;
i__38898_39190 = G__39207;
continue;
} else {
var map__38903_39208 = cljs.core.first(seq__38894_39202__$1);
var map__38903_39209__$1 = cljs.core.__destructure_map(map__38903_39208);
var task_39210 = map__38903_39209__$1;
var fn_str_39211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38903_39209__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38903_39209__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39213 = goog.getObjectByName(fn_str_39211,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39212)].join(''));

(fn_obj_39213.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39213.cljs$core$IFn$_invoke$arity$2(path,new_link_39186) : fn_obj_39213.call(null,path,new_link_39186));


var G__39214 = cljs.core.next(seq__38894_39202__$1);
var G__39215 = null;
var G__39216 = (0);
var G__39217 = (0);
seq__38894_39187 = G__39214;
chunk__38896_39188 = G__39215;
count__38897_39189 = G__39216;
i__38898_39190 = G__39217;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39184);
});})(seq__38829_39123,chunk__38833_39124,count__38834_39125,i__38835_39126,seq__38699,chunk__38701,count__38702,i__38703,new_link_39186,path_match_39185,node_39184,seq__38829_39178__$1,temp__5804__auto___39177,path,map__38698,map__38698__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39185], 0));

goog.dom.insertSiblingAfter(new_link_39186,node_39184);


var G__39219 = cljs.core.next(seq__38829_39178__$1);
var G__39220 = null;
var G__39221 = (0);
var G__39222 = (0);
seq__38829_39123 = G__39219;
chunk__38833_39124 = G__39220;
count__38834_39125 = G__39221;
i__38835_39126 = G__39222;
continue;
} else {
var G__39226 = cljs.core.next(seq__38829_39178__$1);
var G__39227 = null;
var G__39228 = (0);
var G__39229 = (0);
seq__38829_39123 = G__39226;
chunk__38833_39124 = G__39227;
count__38834_39125 = G__39228;
i__38835_39126 = G__39229;
continue;
}
} else {
var G__39230 = cljs.core.next(seq__38829_39178__$1);
var G__39231 = null;
var G__39232 = (0);
var G__39233 = (0);
seq__38829_39123 = G__39230;
chunk__38833_39124 = G__39231;
count__38834_39125 = G__39232;
i__38835_39126 = G__39233;
continue;
}
}
} else {
}
}
break;
}


var G__39234 = seq__38699;
var G__39235 = chunk__38701;
var G__39236 = count__38702;
var G__39237 = (i__38703 + (1));
seq__38699 = G__39234;
chunk__38701 = G__39235;
count__38702 = G__39236;
i__38703 = G__39237;
continue;
} else {
var G__39238 = seq__38699;
var G__39239 = chunk__38701;
var G__39240 = count__38702;
var G__39241 = (i__38703 + (1));
seq__38699 = G__39238;
chunk__38701 = G__39239;
count__38702 = G__39240;
i__38703 = G__39241;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38699);
if(temp__5804__auto__){
var seq__38699__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38699__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38699__$1);
var G__39243 = cljs.core.chunk_rest(seq__38699__$1);
var G__39244 = c__5568__auto__;
var G__39245 = cljs.core.count(c__5568__auto__);
var G__39246 = (0);
seq__38699 = G__39243;
chunk__38701 = G__39244;
count__38702 = G__39245;
i__38703 = G__39246;
continue;
} else {
var path = cljs.core.first(seq__38699__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38906_39247 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38910_39248 = null;
var count__38911_39249 = (0);
var i__38912_39250 = (0);
while(true){
if((i__38912_39250 < count__38911_39249)){
var node_39251 = chunk__38910_39248.cljs$core$IIndexed$_nth$arity$2(null,i__38912_39250);
if(cljs.core.not(node_39251.shadow$old)){
var path_match_39252 = shadow.cljs.devtools.client.browser.match_paths(node_39251.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39252)){
var new_link_39253 = (function (){var G__38945 = node_39251.cloneNode(true);
G__38945.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39252),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38945;
})();
(node_39251.shadow$old = true);

(new_link_39253.onload = ((function (seq__38906_39247,chunk__38910_39248,count__38911_39249,i__38912_39250,seq__38699,chunk__38701,count__38702,i__38703,new_link_39253,path_match_39252,node_39251,path,seq__38699__$1,temp__5804__auto__,map__38698,map__38698__$1,msg,updates,reload_info){
return (function (e){
var seq__38946_39254 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38948_39255 = null;
var count__38949_39256 = (0);
var i__38950_39257 = (0);
while(true){
if((i__38950_39257 < count__38949_39256)){
var map__38964_39258 = chunk__38948_39255.cljs$core$IIndexed$_nth$arity$2(null,i__38950_39257);
var map__38964_39259__$1 = cljs.core.__destructure_map(map__38964_39258);
var task_39260 = map__38964_39259__$1;
var fn_str_39261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38964_39259__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38964_39259__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39263 = goog.getObjectByName(fn_str_39261,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39262)].join(''));

(fn_obj_39263.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39263.cljs$core$IFn$_invoke$arity$2(path,new_link_39253) : fn_obj_39263.call(null,path,new_link_39253));


var G__39264 = seq__38946_39254;
var G__39265 = chunk__38948_39255;
var G__39266 = count__38949_39256;
var G__39267 = (i__38950_39257 + (1));
seq__38946_39254 = G__39264;
chunk__38948_39255 = G__39265;
count__38949_39256 = G__39266;
i__38950_39257 = G__39267;
continue;
} else {
var temp__5804__auto___39268__$1 = cljs.core.seq(seq__38946_39254);
if(temp__5804__auto___39268__$1){
var seq__38946_39269__$1 = temp__5804__auto___39268__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38946_39269__$1)){
var c__5568__auto___39270 = cljs.core.chunk_first(seq__38946_39269__$1);
var G__39271 = cljs.core.chunk_rest(seq__38946_39269__$1);
var G__39272 = c__5568__auto___39270;
var G__39273 = cljs.core.count(c__5568__auto___39270);
var G__39274 = (0);
seq__38946_39254 = G__39271;
chunk__38948_39255 = G__39272;
count__38949_39256 = G__39273;
i__38950_39257 = G__39274;
continue;
} else {
var map__38965_39275 = cljs.core.first(seq__38946_39269__$1);
var map__38965_39276__$1 = cljs.core.__destructure_map(map__38965_39275);
var task_39277 = map__38965_39276__$1;
var fn_str_39278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38965_39276__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38965_39276__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39280 = goog.getObjectByName(fn_str_39278,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39279)].join(''));

(fn_obj_39280.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39280.cljs$core$IFn$_invoke$arity$2(path,new_link_39253) : fn_obj_39280.call(null,path,new_link_39253));


var G__39281 = cljs.core.next(seq__38946_39269__$1);
var G__39282 = null;
var G__39283 = (0);
var G__39284 = (0);
seq__38946_39254 = G__39281;
chunk__38948_39255 = G__39282;
count__38949_39256 = G__39283;
i__38950_39257 = G__39284;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39251);
});})(seq__38906_39247,chunk__38910_39248,count__38911_39249,i__38912_39250,seq__38699,chunk__38701,count__38702,i__38703,new_link_39253,path_match_39252,node_39251,path,seq__38699__$1,temp__5804__auto__,map__38698,map__38698__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39252], 0));

goog.dom.insertSiblingAfter(new_link_39253,node_39251);


var G__39285 = seq__38906_39247;
var G__39286 = chunk__38910_39248;
var G__39287 = count__38911_39249;
var G__39288 = (i__38912_39250 + (1));
seq__38906_39247 = G__39285;
chunk__38910_39248 = G__39286;
count__38911_39249 = G__39287;
i__38912_39250 = G__39288;
continue;
} else {
var G__39289 = seq__38906_39247;
var G__39290 = chunk__38910_39248;
var G__39291 = count__38911_39249;
var G__39292 = (i__38912_39250 + (1));
seq__38906_39247 = G__39289;
chunk__38910_39248 = G__39290;
count__38911_39249 = G__39291;
i__38912_39250 = G__39292;
continue;
}
} else {
var G__39293 = seq__38906_39247;
var G__39294 = chunk__38910_39248;
var G__39295 = count__38911_39249;
var G__39296 = (i__38912_39250 + (1));
seq__38906_39247 = G__39293;
chunk__38910_39248 = G__39294;
count__38911_39249 = G__39295;
i__38912_39250 = G__39296;
continue;
}
} else {
var temp__5804__auto___39297__$1 = cljs.core.seq(seq__38906_39247);
if(temp__5804__auto___39297__$1){
var seq__38906_39298__$1 = temp__5804__auto___39297__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38906_39298__$1)){
var c__5568__auto___39299 = cljs.core.chunk_first(seq__38906_39298__$1);
var G__39300 = cljs.core.chunk_rest(seq__38906_39298__$1);
var G__39301 = c__5568__auto___39299;
var G__39302 = cljs.core.count(c__5568__auto___39299);
var G__39303 = (0);
seq__38906_39247 = G__39300;
chunk__38910_39248 = G__39301;
count__38911_39249 = G__39302;
i__38912_39250 = G__39303;
continue;
} else {
var node_39304 = cljs.core.first(seq__38906_39298__$1);
if(cljs.core.not(node_39304.shadow$old)){
var path_match_39305 = shadow.cljs.devtools.client.browser.match_paths(node_39304.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39305)){
var new_link_39306 = (function (){var G__38967 = node_39304.cloneNode(true);
G__38967.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39305),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38967;
})();
(node_39304.shadow$old = true);

(new_link_39306.onload = ((function (seq__38906_39247,chunk__38910_39248,count__38911_39249,i__38912_39250,seq__38699,chunk__38701,count__38702,i__38703,new_link_39306,path_match_39305,node_39304,seq__38906_39298__$1,temp__5804__auto___39297__$1,path,seq__38699__$1,temp__5804__auto__,map__38698,map__38698__$1,msg,updates,reload_info){
return (function (e){
var seq__38968_39307 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38970_39308 = null;
var count__38971_39309 = (0);
var i__38972_39310 = (0);
while(true){
if((i__38972_39310 < count__38971_39309)){
var map__38977_39311 = chunk__38970_39308.cljs$core$IIndexed$_nth$arity$2(null,i__38972_39310);
var map__38977_39312__$1 = cljs.core.__destructure_map(map__38977_39311);
var task_39313 = map__38977_39312__$1;
var fn_str_39314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38977_39312__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38977_39312__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39316 = goog.getObjectByName(fn_str_39314,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39315)].join(''));

(fn_obj_39316.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39316.cljs$core$IFn$_invoke$arity$2(path,new_link_39306) : fn_obj_39316.call(null,path,new_link_39306));


var G__39317 = seq__38968_39307;
var G__39318 = chunk__38970_39308;
var G__39319 = count__38971_39309;
var G__39320 = (i__38972_39310 + (1));
seq__38968_39307 = G__39317;
chunk__38970_39308 = G__39318;
count__38971_39309 = G__39319;
i__38972_39310 = G__39320;
continue;
} else {
var temp__5804__auto___39321__$2 = cljs.core.seq(seq__38968_39307);
if(temp__5804__auto___39321__$2){
var seq__38968_39322__$1 = temp__5804__auto___39321__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38968_39322__$1)){
var c__5568__auto___39323 = cljs.core.chunk_first(seq__38968_39322__$1);
var G__39324 = cljs.core.chunk_rest(seq__38968_39322__$1);
var G__39325 = c__5568__auto___39323;
var G__39326 = cljs.core.count(c__5568__auto___39323);
var G__39327 = (0);
seq__38968_39307 = G__39324;
chunk__38970_39308 = G__39325;
count__38971_39309 = G__39326;
i__38972_39310 = G__39327;
continue;
} else {
var map__38990_39328 = cljs.core.first(seq__38968_39322__$1);
var map__38990_39329__$1 = cljs.core.__destructure_map(map__38990_39328);
var task_39330 = map__38990_39329__$1;
var fn_str_39331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38990_39329__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38990_39329__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39333 = goog.getObjectByName(fn_str_39331,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39332)].join(''));

(fn_obj_39333.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39333.cljs$core$IFn$_invoke$arity$2(path,new_link_39306) : fn_obj_39333.call(null,path,new_link_39306));


var G__39334 = cljs.core.next(seq__38968_39322__$1);
var G__39335 = null;
var G__39336 = (0);
var G__39337 = (0);
seq__38968_39307 = G__39334;
chunk__38970_39308 = G__39335;
count__38971_39309 = G__39336;
i__38972_39310 = G__39337;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39304);
});})(seq__38906_39247,chunk__38910_39248,count__38911_39249,i__38912_39250,seq__38699,chunk__38701,count__38702,i__38703,new_link_39306,path_match_39305,node_39304,seq__38906_39298__$1,temp__5804__auto___39297__$1,path,seq__38699__$1,temp__5804__auto__,map__38698,map__38698__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39305], 0));

goog.dom.insertSiblingAfter(new_link_39306,node_39304);


var G__39338 = cljs.core.next(seq__38906_39298__$1);
var G__39339 = null;
var G__39340 = (0);
var G__39341 = (0);
seq__38906_39247 = G__39338;
chunk__38910_39248 = G__39339;
count__38911_39249 = G__39340;
i__38912_39250 = G__39341;
continue;
} else {
var G__39342 = cljs.core.next(seq__38906_39298__$1);
var G__39343 = null;
var G__39344 = (0);
var G__39345 = (0);
seq__38906_39247 = G__39342;
chunk__38910_39248 = G__39343;
count__38911_39249 = G__39344;
i__38912_39250 = G__39345;
continue;
}
} else {
var G__39346 = cljs.core.next(seq__38906_39298__$1);
var G__39347 = null;
var G__39348 = (0);
var G__39349 = (0);
seq__38906_39247 = G__39346;
chunk__38910_39248 = G__39347;
count__38911_39249 = G__39348;
i__38912_39250 = G__39349;
continue;
}
}
} else {
}
}
break;
}


var G__39350 = cljs.core.next(seq__38699__$1);
var G__39351 = null;
var G__39352 = (0);
var G__39353 = (0);
seq__38699 = G__39350;
chunk__38701 = G__39351;
count__38702 = G__39352;
i__38703 = G__39353;
continue;
} else {
var G__39354 = cljs.core.next(seq__38699__$1);
var G__39355 = null;
var G__39356 = (0);
var G__39357 = (0);
seq__38699 = G__39354;
chunk__38701 = G__39355;
count__38702 = G__39356;
i__38703 = G__39357;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__39029){
var map__39030 = p__39029;
var map__39030__$1 = cljs.core.__destructure_map(map__39030);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39030__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39031,done,error){
var map__39032 = p__39031;
var map__39032__$1 = cljs.core.__destructure_map(map__39032);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39032__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39033,done,error){
var map__39034 = p__39033;
var map__39034__$1 = cljs.core.__destructure_map(map__39034);
var msg = map__39034__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39034__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39034__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39034__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39035){
var map__39036 = p__39035;
var map__39036__$1 = cljs.core.__destructure_map(map__39036);
var src = map__39036__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39036__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39038 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39038) : done.call(null,G__39038));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39040){
var map__39041 = p__39040;
var map__39041__$1 = cljs.core.__destructure_map(map__39041);
var msg__$1 = map__39041__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39041__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39042){var ex = e39042;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39043){
var map__39044 = p__39043;
var map__39044__$1 = cljs.core.__destructure_map(map__39044);
var env = map__39044__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39044__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39049){
var map__39050 = p__39049;
var map__39050__$1 = cljs.core.__destructure_map(map__39050);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39050__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39050__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39051){
var map__39052 = p__39051;
var map__39052__$1 = cljs.core.__destructure_map(map__39052);
var svc = map__39052__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39052__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

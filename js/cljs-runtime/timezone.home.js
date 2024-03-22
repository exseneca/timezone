goog.provide('timezone.home');
var module$node_modules$luxon$build$cjs_browser$luxon=shadow.js.require("module$node_modules$luxon$build$cjs_browser$luxon", {});
timezone.home.get_time_value = (function timezone$home$get_time_value(){
return document.getElementById("time").value;
});
timezone.home.get_input_timezone_value = (function timezone$home$get_input_timezone_value(){
return document.getElementById("input-timezone").value;
});
timezone.home.get_output_timezone_value = (function timezone$home$get_output_timezone_value(){
return document.getElementById("output-timezone").value;
});
timezone.home.time_a = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
timezone.home.input_timezone = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
timezone.home.output_timezone = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
timezone.home.timezones = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Intl.supportedValuesOf("timeZone"));
timezone.home.reset_atoms = (function timezone$home$reset_atoms(){
cljs.core.reset_BANG_(timezone.home.time_a,timezone.home.get_time_value());

cljs.core.reset_BANG_(timezone.home.input_timezone,timezone.home.get_input_timezone_value());

return cljs.core.reset_BANG_(timezone.home.output_timezone,timezone.home.get_output_timezone_value());
});
timezone.home.convert_time = (function timezone$home$convert_time(in_time,input_tz,output_tz){
return module$node_modules$luxon$build$cjs_browser$luxon.DateTime.fromISO(in_time,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zone","zone",2068674983),input_tz], null))).setZone(output_tz).toFormat("T");
});
timezone.home.home = (function timezone$home$home(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Time zone converter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter time"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"time",new cljs.core.Keyword(null,"id","id",-1388402092),"time",new cljs.core.Keyword(null,"name","name",1843675177),"time",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timezone.home.get_time_value()], 0));

return timezone.home.reset_atoms();
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"input-timezone"], null),"Input time zone: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"input-timezone",new cljs.core.Keyword(null,"name","name",1843675177),"input-timezone",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

timezone.home.reset_atoms();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timezone.home.get_input_timezone_value()], 0));
})], null),(function (){var iter__5523__auto__ = (function timezone$home$home_$_iter__40822(s__40823){
return (new cljs.core.LazySeq(null,(function (){
var s__40823__$1 = s__40823;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40823__$1);
if(temp__5804__auto__){
var s__40823__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40823__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40823__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40825 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40824 = (0);
while(true){
if((i__40824 < size__5522__auto__)){
var timezone__$1 = cljs.core._nth(c__5521__auto__,i__40824);
cljs.core.chunk_append(b__40825,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),timezone__$1], null),timezone__$1], null));

var G__40830 = (i__40824 + (1));
i__40824 = G__40830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40825),timezone$home$home_$_iter__40822(cljs.core.chunk_rest(s__40823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40825),null);
}
} else {
var timezone__$1 = cljs.core.first(s__40823__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),timezone__$1], null),timezone__$1], null),timezone$home$home_$_iter__40822(cljs.core.rest(s__40823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(timezone.home.timezones);
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"input-timezone"], null),"Output time zone: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"output-timezone",new cljs.core.Keyword(null,"name","name",1843675177),"output-timezone",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return timezone.home.reset_atoms();
})], null),(function (){var iter__5523__auto__ = (function timezone$home$home_$_iter__40826(s__40827){
return (new cljs.core.LazySeq(null,(function (){
var s__40827__$1 = s__40827;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40827__$1);
if(temp__5804__auto__){
var s__40827__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40827__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40827__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40829 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40828 = (0);
while(true){
if((i__40828 < size__5522__auto__)){
var timezone__$1 = cljs.core._nth(c__5521__auto__,i__40828);
cljs.core.chunk_append(b__40829,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),timezone__$1], null),timezone__$1], null));

var G__40831 = (i__40828 + (1));
i__40828 = G__40831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40829),timezone$home$home_$_iter__40826(cljs.core.chunk_rest(s__40827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40829),null);
}
} else {
var timezone__$1 = cljs.core.first(s__40827__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),timezone__$1], null),timezone__$1], null),timezone$home$home_$_iter__40826(cljs.core.rest(s__40827__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(timezone.home.timezones);
})()], null),(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(timezone.home.time_a);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(timezone.home.input_timezone);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.deref(timezone.home.output_timezone);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var result = timezone.home.convert_time(cljs.core.deref(timezone.home.time_a),cljs.core.deref(timezone.home.input_timezone),cljs.core.deref(timezone.home.output_timezone));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,"Invalid DateTime")){
return "Please enter a time";
} else {
return result;
}
})()], null):null)], null)], null);
});
timezone.home.init = (function timezone$home$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timezone.home.home], null),document.getElementById("root"));
});

//# sourceMappingURL=timezone.home.js.map

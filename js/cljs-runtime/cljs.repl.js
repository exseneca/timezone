goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36516){
var map__36517 = p__36516;
var map__36517__$1 = cljs.core.__destructure_map(map__36517);
var m = map__36517__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36517__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36517__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36518_36776 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36519_36777 = null;
var count__36520_36778 = (0);
var i__36521_36779 = (0);
while(true){
if((i__36521_36779 < count__36520_36778)){
var f_36780 = chunk__36519_36777.cljs$core$IIndexed$_nth$arity$2(null,i__36521_36779);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36780], 0));


var G__36781 = seq__36518_36776;
var G__36782 = chunk__36519_36777;
var G__36783 = count__36520_36778;
var G__36784 = (i__36521_36779 + (1));
seq__36518_36776 = G__36781;
chunk__36519_36777 = G__36782;
count__36520_36778 = G__36783;
i__36521_36779 = G__36784;
continue;
} else {
var temp__5804__auto___36785 = cljs.core.seq(seq__36518_36776);
if(temp__5804__auto___36785){
var seq__36518_36786__$1 = temp__5804__auto___36785;
if(cljs.core.chunked_seq_QMARK_(seq__36518_36786__$1)){
var c__5568__auto___36787 = cljs.core.chunk_first(seq__36518_36786__$1);
var G__36788 = cljs.core.chunk_rest(seq__36518_36786__$1);
var G__36789 = c__5568__auto___36787;
var G__36790 = cljs.core.count(c__5568__auto___36787);
var G__36791 = (0);
seq__36518_36776 = G__36788;
chunk__36519_36777 = G__36789;
count__36520_36778 = G__36790;
i__36521_36779 = G__36791;
continue;
} else {
var f_36792 = cljs.core.first(seq__36518_36786__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36792], 0));


var G__36793 = cljs.core.next(seq__36518_36786__$1);
var G__36794 = null;
var G__36795 = (0);
var G__36796 = (0);
seq__36518_36776 = G__36793;
chunk__36519_36777 = G__36794;
count__36520_36778 = G__36795;
i__36521_36779 = G__36796;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36802 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36802], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36802)))?cljs.core.second(arglists_36802):arglists_36802)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36530_36804 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36531_36805 = null;
var count__36532_36806 = (0);
var i__36533_36807 = (0);
while(true){
if((i__36533_36807 < count__36532_36806)){
var vec__36545_36809 = chunk__36531_36805.cljs$core$IIndexed$_nth$arity$2(null,i__36533_36807);
var name_36810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545_36809,(0),null);
var map__36548_36811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545_36809,(1),null);
var map__36548_36812__$1 = cljs.core.__destructure_map(map__36548_36811);
var doc_36813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36548_36812__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36548_36812__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36810], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36814], 0));

if(cljs.core.truth_(doc_36813)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36813], 0));
} else {
}


var G__36815 = seq__36530_36804;
var G__36816 = chunk__36531_36805;
var G__36817 = count__36532_36806;
var G__36818 = (i__36533_36807 + (1));
seq__36530_36804 = G__36815;
chunk__36531_36805 = G__36816;
count__36532_36806 = G__36817;
i__36533_36807 = G__36818;
continue;
} else {
var temp__5804__auto___36819 = cljs.core.seq(seq__36530_36804);
if(temp__5804__auto___36819){
var seq__36530_36820__$1 = temp__5804__auto___36819;
if(cljs.core.chunked_seq_QMARK_(seq__36530_36820__$1)){
var c__5568__auto___36821 = cljs.core.chunk_first(seq__36530_36820__$1);
var G__36822 = cljs.core.chunk_rest(seq__36530_36820__$1);
var G__36823 = c__5568__auto___36821;
var G__36824 = cljs.core.count(c__5568__auto___36821);
var G__36825 = (0);
seq__36530_36804 = G__36822;
chunk__36531_36805 = G__36823;
count__36532_36806 = G__36824;
i__36533_36807 = G__36825;
continue;
} else {
var vec__36549_36826 = cljs.core.first(seq__36530_36820__$1);
var name_36827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36549_36826,(0),null);
var map__36552_36828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36549_36826,(1),null);
var map__36552_36829__$1 = cljs.core.__destructure_map(map__36552_36828);
var doc_36830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36552_36829__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36552_36829__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36827], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36831], 0));

if(cljs.core.truth_(doc_36830)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36830], 0));
} else {
}


var G__36833 = cljs.core.next(seq__36530_36820__$1);
var G__36834 = null;
var G__36835 = (0);
var G__36836 = (0);
seq__36530_36804 = G__36833;
chunk__36531_36805 = G__36834;
count__36532_36806 = G__36835;
i__36533_36807 = G__36836;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36560 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36561 = null;
var count__36562 = (0);
var i__36563 = (0);
while(true){
if((i__36563 < count__36562)){
var role = chunk__36561.cljs$core$IIndexed$_nth$arity$2(null,i__36563);
var temp__5804__auto___36844__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36844__$1)){
var spec_36845 = temp__5804__auto___36844__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36845)], 0));
} else {
}


var G__36846 = seq__36560;
var G__36847 = chunk__36561;
var G__36848 = count__36562;
var G__36849 = (i__36563 + (1));
seq__36560 = G__36846;
chunk__36561 = G__36847;
count__36562 = G__36848;
i__36563 = G__36849;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36560);
if(temp__5804__auto____$1){
var seq__36560__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36560__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36560__$1);
var G__36850 = cljs.core.chunk_rest(seq__36560__$1);
var G__36851 = c__5568__auto__;
var G__36852 = cljs.core.count(c__5568__auto__);
var G__36853 = (0);
seq__36560 = G__36850;
chunk__36561 = G__36851;
count__36562 = G__36852;
i__36563 = G__36853;
continue;
} else {
var role = cljs.core.first(seq__36560__$1);
var temp__5804__auto___36854__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36854__$2)){
var spec_36855 = temp__5804__auto___36854__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36855)], 0));
} else {
}


var G__36856 = cljs.core.next(seq__36560__$1);
var G__36857 = null;
var G__36858 = (0);
var G__36859 = (0);
seq__36560 = G__36856;
chunk__36561 = G__36857;
count__36562 = G__36858;
i__36563 = G__36859;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36868 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36869 = cljs.core.ex_cause(t);
via = G__36868;
t = G__36869;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36681 = datafied_throwable;
var map__36681__$1 = cljs.core.__destructure_map(map__36681);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36681__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36681__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36681__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36682 = cljs.core.last(via);
var map__36682__$1 = cljs.core.__destructure_map(map__36682);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36683 = data;
var map__36683__$1 = cljs.core.__destructure_map(map__36683);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36684 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36684__$1 = cljs.core.__destructure_map(map__36684);
var top_data = map__36684__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36684__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36690 = phase;
var G__36690__$1 = (((G__36690 instanceof cljs.core.Keyword))?G__36690.fqn:null);
switch (G__36690__$1) {
case "read-source":
var map__36691 = data;
var map__36691__$1 = cljs.core.__destructure_map(map__36691);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36691__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36691__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36692 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36692__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36692,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36692);
var G__36692__$2 = (cljs.core.truth_((function (){var fexpr__36693 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36693.cljs$core$IFn$_invoke$arity$1 ? fexpr__36693.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36693.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36692__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36692__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36692__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36692__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36694 = top_data;
var G__36694__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36694,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36694);
var G__36694__$2 = (cljs.core.truth_((function (){var fexpr__36699 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36699.cljs$core$IFn$_invoke$arity$1 ? fexpr__36699.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36699.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36694__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36694__$1);
var G__36694__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36694__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36694__$2);
var G__36694__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36694__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36694__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36694__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36694__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36706 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(3),null);
var G__36711 = top_data;
var G__36711__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36711,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36711);
var G__36711__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36711__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36711__$1);
var G__36711__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36711__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36711__$2);
var G__36711__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36711__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36711__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36711__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36711__$4;
}

break;
case "execution":
var vec__36713 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36713,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36713,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36713,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36713,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36677_SHARP_){
var or__5045__auto__ = (p1__36677_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36716 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36716.cljs$core$IFn$_invoke$arity$1 ? fexpr__36716.cljs$core$IFn$_invoke$arity$1(p1__36677_SHARP_) : fexpr__36716.call(null,p1__36677_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36717 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36717__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36717,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36717);
var G__36717__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36717__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36717__$1);
var G__36717__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36717__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36717__$2);
var G__36717__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36717__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36717__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36717__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36717__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36690__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36726){
var map__36727 = p__36726;
var map__36727__$1 = cljs.core.__destructure_map(map__36727);
var triage_data = map__36727__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36728 = phase;
var G__36728__$1 = (((G__36728 instanceof cljs.core.Keyword))?G__36728.fqn:null);
switch (G__36728__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36729 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36730 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36731 = loc;
var G__36732 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36734_36879 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36735_36880 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36736_36881 = true;
var _STAR_print_fn_STAR__temp_val__36737_36882 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36736_36881);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36737_36882);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36724_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36724_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36735_36880);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36734_36879);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36729,G__36730,G__36731,G__36732) : format.call(null,G__36729,G__36730,G__36731,G__36732));

break;
case "macroexpansion":
var G__36742 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36743 = cause_type;
var G__36744 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36745 = loc;
var G__36746 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36742,G__36743,G__36744,G__36745,G__36746) : format.call(null,G__36742,G__36743,G__36744,G__36745,G__36746));

break;
case "compile-syntax-check":
var G__36749 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36750 = cause_type;
var G__36751 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36752 = loc;
var G__36753 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36749,G__36750,G__36751,G__36752,G__36753) : format.call(null,G__36749,G__36750,G__36751,G__36752,G__36753));

break;
case "compilation":
var G__36754 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36755 = cause_type;
var G__36756 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36757 = loc;
var G__36758 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36754,G__36755,G__36756,G__36757,G__36758) : format.call(null,G__36754,G__36755,G__36756,G__36757,G__36758));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36761 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36762 = symbol;
var G__36763 = loc;
var G__36764 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36765_36885 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36766_36886 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36767_36887 = true;
var _STAR_print_fn_STAR__temp_val__36768_36888 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36767_36887);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36768_36888);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36725_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36725_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36766_36886);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36765_36885);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36761,G__36762,G__36763,G__36764) : format.call(null,G__36761,G__36762,G__36763,G__36764));
} else {
var G__36769 = "Execution error%s at %s(%s).\n%s\n";
var G__36770 = cause_type;
var G__36771 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36772 = loc;
var G__36773 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36769,G__36770,G__36771,G__36772,G__36773) : format.call(null,G__36769,G__36770,G__36771,G__36772,G__36773));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36728__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

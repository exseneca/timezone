goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33495 = (function (f,blockable,meta33496){
this.f = f;
this.blockable = blockable;
this.meta33496 = meta33496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33497,meta33496__$1){
var self__ = this;
var _33497__$1 = this;
return (new cljs.core.async.t_cljs$core$async33495(self__.f,self__.blockable,meta33496__$1));
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33497){
var self__ = this;
var _33497__$1 = this;
return self__.meta33496;
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33496","meta33496",-1462775882,null)], null);
}));

(cljs.core.async.t_cljs$core$async33495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33495");

(cljs.core.async.t_cljs$core$async33495.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33495.
 */
cljs.core.async.__GT_t_cljs$core$async33495 = (function cljs$core$async$__GT_t_cljs$core$async33495(f,blockable,meta33496){
return (new cljs.core.async.t_cljs$core$async33495(f,blockable,meta33496));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33494 = arguments.length;
switch (G__33494) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33495(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33500 = arguments.length;
switch (G__33500) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33505 = arguments.length;
switch (G__33505) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33508 = arguments.length;
switch (G__33508) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35827 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35827) : fn1.call(null,val_35827));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35827) : fn1.call(null,val_35827));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33519 = arguments.length;
switch (G__33519) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35829 = n;
var x_35830 = (0);
while(true){
if((x_35830 < n__5636__auto___35829)){
(a[x_35830] = x_35830);

var G__35831 = (x_35830 + (1));
x_35830 = G__35831;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33532 = (function (flag,meta33533){
this.flag = flag;
this.meta33533 = meta33533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33534,meta33533__$1){
var self__ = this;
var _33534__$1 = this;
return (new cljs.core.async.t_cljs$core$async33532(self__.flag,meta33533__$1));
}));

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33534){
var self__ = this;
var _33534__$1 = this;
return self__.meta33533;
}));

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33533","meta33533",1693187954,null)], null);
}));

(cljs.core.async.t_cljs$core$async33532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33532");

(cljs.core.async.t_cljs$core$async33532.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33532.
 */
cljs.core.async.__GT_t_cljs$core$async33532 = (function cljs$core$async$__GT_t_cljs$core$async33532(flag,meta33533){
return (new cljs.core.async.t_cljs$core$async33532(flag,meta33533));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33532(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33547 = (function (flag,cb,meta33548){
this.flag = flag;
this.cb = cb;
this.meta33548 = meta33548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33549,meta33548__$1){
var self__ = this;
var _33549__$1 = this;
return (new cljs.core.async.t_cljs$core$async33547(self__.flag,self__.cb,meta33548__$1));
}));

(cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33549){
var self__ = this;
var _33549__$1 = this;
return self__.meta33548;
}));

(cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33548","meta33548",34259451,null)], null);
}));

(cljs.core.async.t_cljs$core$async33547.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33547");

(cljs.core.async.t_cljs$core$async33547.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33547");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33547.
 */
cljs.core.async.__GT_t_cljs$core$async33547 = (function cljs$core$async$__GT_t_cljs$core$async33547(flag,cb,meta33548){
return (new cljs.core.async.t_cljs$core$async33547(flag,cb,meta33548));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33547(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33552_SHARP_){
var G__33558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33552_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33558) : fret.call(null,G__33558));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33553_SHARP_){
var G__33561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33553_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33561) : fret.call(null,G__33561));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35834 = (i + (1));
i = G__35834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35837 = arguments.length;
var i__5770__auto___35838 = (0);
while(true){
if((i__5770__auto___35838 < len__5769__auto___35837)){
args__5775__auto__.push((arguments[i__5770__auto___35838]));

var G__35839 = (i__5770__auto___35838 + (1));
i__5770__auto___35838 = G__35839;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33578){
var map__33579 = p__33578;
var map__33579__$1 = cljs.core.__destructure_map(map__33579);
var opts = map__33579__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33573){
var G__33574 = cljs.core.first(seq33573);
var seq33573__$1 = cljs.core.next(seq33573);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33574,seq33573__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33587 = arguments.length;
switch (G__33587) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33432__auto___35844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_33618){
var state_val_33634 = (state_33618[(1)]);
if((state_val_33634 === (7))){
var inst_33614 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33641_35846 = state_33618__$1;
(statearr_33641_35846[(2)] = inst_33614);

(statearr_33641_35846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (1))){
var state_33618__$1 = state_33618;
var statearr_33643_35847 = state_33618__$1;
(statearr_33643_35847[(2)] = null);

(statearr_33643_35847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (4))){
var inst_33597 = (state_33618[(7)]);
var inst_33597__$1 = (state_33618[(2)]);
var inst_33598 = (inst_33597__$1 == null);
var state_33618__$1 = (function (){var statearr_33645 = state_33618;
(statearr_33645[(7)] = inst_33597__$1);

return statearr_33645;
})();
if(cljs.core.truth_(inst_33598)){
var statearr_33647_35849 = state_33618__$1;
(statearr_33647_35849[(1)] = (5));

} else {
var statearr_33648_35850 = state_33618__$1;
(statearr_33648_35850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (13))){
var state_33618__$1 = state_33618;
var statearr_33651_35851 = state_33618__$1;
(statearr_33651_35851[(2)] = null);

(statearr_33651_35851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (6))){
var inst_33597 = (state_33618[(7)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33618__$1,(11),to,inst_33597);
} else {
if((state_val_33634 === (3))){
var inst_33616 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33618__$1,inst_33616);
} else {
if((state_val_33634 === (12))){
var state_33618__$1 = state_33618;
var statearr_33660_35852 = state_33618__$1;
(statearr_33660_35852[(2)] = null);

(statearr_33660_35852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (2))){
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33618__$1,(4),from);
} else {
if((state_val_33634 === (11))){
var inst_33607 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
if(cljs.core.truth_(inst_33607)){
var statearr_33662_35853 = state_33618__$1;
(statearr_33662_35853[(1)] = (12));

} else {
var statearr_33663_35854 = state_33618__$1;
(statearr_33663_35854[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (9))){
var state_33618__$1 = state_33618;
var statearr_33664_35855 = state_33618__$1;
(statearr_33664_35855[(2)] = null);

(statearr_33664_35855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (5))){
var state_33618__$1 = state_33618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33665_35856 = state_33618__$1;
(statearr_33665_35856[(1)] = (8));

} else {
var statearr_33666_35857 = state_33618__$1;
(statearr_33666_35857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (14))){
var inst_33612 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33667_35858 = state_33618__$1;
(statearr_33667_35858[(2)] = inst_33612);

(statearr_33667_35858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (10))){
var inst_33604 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33668_35859 = state_33618__$1;
(statearr_33668_35859[(2)] = inst_33604);

(statearr_33668_35859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (8))){
var inst_33601 = cljs.core.async.close_BANG_(to);
var state_33618__$1 = state_33618;
var statearr_33669_35860 = state_33618__$1;
(statearr_33669_35860[(2)] = inst_33601);

(statearr_33669_35860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_33673 = [null,null,null,null,null,null,null,null];
(statearr_33673[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_33673[(1)] = (1));

return statearr_33673;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_33618){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_33618);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e33676){var ex__33272__auto__ = e33676;
var statearr_33677_35863 = state_33618;
(statearr_33677_35863[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_33618[(4)]))){
var statearr_33678_35864 = state_33618;
(statearr_33678_35864[(1)] = cljs.core.first((state_33618[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35867 = state_33618;
state_33618 = G__35867;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_33618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_33618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_33680 = f__33433__auto__();
(statearr_33680[(6)] = c__33432__auto___35844);

return statearr_33680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33694){
var vec__33695 = p__33694;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33695,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33695,(1),null);
var job = vec__33695;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33432__auto___35881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_33704){
var state_val_33705 = (state_33704[(1)]);
if((state_val_33705 === (1))){
var state_33704__$1 = state_33704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33704__$1,(2),res,v);
} else {
if((state_val_33705 === (2))){
var inst_33701 = (state_33704[(2)]);
var inst_33702 = cljs.core.async.close_BANG_(res);
var state_33704__$1 = (function (){var statearr_33706 = state_33704;
(statearr_33706[(7)] = inst_33701);

return statearr_33706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33704__$1,inst_33702);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0 = (function (){
var statearr_33708 = [null,null,null,null,null,null,null,null];
(statearr_33708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__);

(statearr_33708[(1)] = (1));

return statearr_33708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1 = (function (state_33704){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_33704);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e33709){var ex__33272__auto__ = e33709;
var statearr_33710_35885 = state_33704;
(statearr_33710_35885[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_33704[(4)]))){
var statearr_33711_35886 = state_33704;
(statearr_33711_35886[(1)] = cljs.core.first((state_33704[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35887 = state_33704;
state_33704 = G__35887;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = function(state_33704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1.call(this,state_33704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_33712 = f__33433__auto__();
(statearr_33712[(6)] = c__33432__auto___35881);

return statearr_33712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33714){
var vec__33716 = p__33714;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33716,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33716,(1),null);
var job = vec__33716;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35888 = n;
var __35890 = (0);
while(true){
if((__35890 < n__5636__auto___35888)){
var G__33719_35891 = type;
var G__33719_35892__$1 = (((G__33719_35891 instanceof cljs.core.Keyword))?G__33719_35891.fqn:null);
switch (G__33719_35892__$1) {
case "compute":
var c__33432__auto___35897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35890,c__33432__auto___35897,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async){
return (function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = ((function (__35890,c__33432__auto___35897,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async){
return (function (state_33733){
var state_val_33734 = (state_33733[(1)]);
if((state_val_33734 === (1))){
var state_33733__$1 = state_33733;
var statearr_33735_35898 = state_33733__$1;
(statearr_33735_35898[(2)] = null);

(statearr_33735_35898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (2))){
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33733__$1,(4),jobs);
} else {
if((state_val_33734 === (3))){
var inst_33731 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33733__$1,inst_33731);
} else {
if((state_val_33734 === (4))){
var inst_33723 = (state_33733[(2)]);
var inst_33724 = process__$1(inst_33723);
var state_33733__$1 = state_33733;
if(cljs.core.truth_(inst_33724)){
var statearr_33738_35899 = state_33733__$1;
(statearr_33738_35899[(1)] = (5));

} else {
var statearr_33739_35900 = state_33733__$1;
(statearr_33739_35900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (5))){
var state_33733__$1 = state_33733;
var statearr_33740_35901 = state_33733__$1;
(statearr_33740_35901[(2)] = null);

(statearr_33740_35901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (6))){
var state_33733__$1 = state_33733;
var statearr_33741_35902 = state_33733__$1;
(statearr_33741_35902[(2)] = null);

(statearr_33741_35902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (7))){
var inst_33729 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33742_35903 = state_33733__$1;
(statearr_33742_35903[(2)] = inst_33729);

(statearr_33742_35903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35890,c__33432__auto___35897,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async))
;
return ((function (__35890,switch__33268__auto__,c__33432__auto___35897,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0 = (function (){
var statearr_33749 = [null,null,null,null,null,null,null];
(statearr_33749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__);

(statearr_33749[(1)] = (1));

return statearr_33749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1 = (function (state_33733){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_33733);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e33762){var ex__33272__auto__ = e33762;
var statearr_33764_35904 = state_33733;
(statearr_33764_35904[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_33733[(4)]))){
var statearr_33769_35905 = state_33733;
(statearr_33769_35905[(1)] = cljs.core.first((state_33733[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35906 = state_33733;
state_33733 = G__35906;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = function(state_33733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1.call(this,state_33733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__;
})()
;})(__35890,switch__33268__auto__,c__33432__auto___35897,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async))
})();
var state__33434__auto__ = (function (){var statearr_33770 = f__33433__auto__();
(statearr_33770[(6)] = c__33432__auto___35897);

return statearr_33770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
});})(__35890,c__33432__auto___35897,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async))
);


break;
case "async":
var c__33432__auto___35907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35890,c__33432__auto___35907,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async){
return (function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = ((function (__35890,c__33432__auto___35907,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async){
return (function (state_33783){
var state_val_33784 = (state_33783[(1)]);
if((state_val_33784 === (1))){
var state_33783__$1 = state_33783;
var statearr_33786_35908 = state_33783__$1;
(statearr_33786_35908[(2)] = null);

(statearr_33786_35908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (2))){
var state_33783__$1 = state_33783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33783__$1,(4),jobs);
} else {
if((state_val_33784 === (3))){
var inst_33781 = (state_33783[(2)]);
var state_33783__$1 = state_33783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33783__$1,inst_33781);
} else {
if((state_val_33784 === (4))){
var inst_33773 = (state_33783[(2)]);
var inst_33774 = async(inst_33773);
var state_33783__$1 = state_33783;
if(cljs.core.truth_(inst_33774)){
var statearr_33787_35915 = state_33783__$1;
(statearr_33787_35915[(1)] = (5));

} else {
var statearr_33788_35916 = state_33783__$1;
(statearr_33788_35916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (5))){
var state_33783__$1 = state_33783;
var statearr_33789_35917 = state_33783__$1;
(statearr_33789_35917[(2)] = null);

(statearr_33789_35917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (6))){
var state_33783__$1 = state_33783;
var statearr_33790_35918 = state_33783__$1;
(statearr_33790_35918[(2)] = null);

(statearr_33790_35918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (7))){
var inst_33779 = (state_33783[(2)]);
var state_33783__$1 = state_33783;
var statearr_33791_35919 = state_33783__$1;
(statearr_33791_35919[(2)] = inst_33779);

(statearr_33791_35919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35890,c__33432__auto___35907,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async))
;
return ((function (__35890,switch__33268__auto__,c__33432__auto___35907,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0 = (function (){
var statearr_33793 = [null,null,null,null,null,null,null];
(statearr_33793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__);

(statearr_33793[(1)] = (1));

return statearr_33793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1 = (function (state_33783){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_33783);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e33794){var ex__33272__auto__ = e33794;
var statearr_33795_35920 = state_33783;
(statearr_33795_35920[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_33783[(4)]))){
var statearr_33796_35921 = state_33783;
(statearr_33796_35921[(1)] = cljs.core.first((state_33783[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35922 = state_33783;
state_33783 = G__35922;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = function(state_33783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1.call(this,state_33783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__;
})()
;})(__35890,switch__33268__auto__,c__33432__auto___35907,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async))
})();
var state__33434__auto__ = (function (){var statearr_33798 = f__33433__auto__();
(statearr_33798[(6)] = c__33432__auto___35907);

return statearr_33798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
});})(__35890,c__33432__auto___35907,G__33719_35891,G__33719_35892__$1,n__5636__auto___35888,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33719_35892__$1)].join('')));

}

var G__35923 = (__35890 + (1));
__35890 = G__35923;
continue;
} else {
}
break;
}

var c__33432__auto___35924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_33820){
var state_val_33821 = (state_33820[(1)]);
if((state_val_33821 === (7))){
var inst_33816 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
var statearr_33824_35931 = state_33820__$1;
(statearr_33824_35931[(2)] = inst_33816);

(statearr_33824_35931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (1))){
var state_33820__$1 = state_33820;
var statearr_33825_35932 = state_33820__$1;
(statearr_33825_35932[(2)] = null);

(statearr_33825_35932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (4))){
var inst_33801 = (state_33820[(7)]);
var inst_33801__$1 = (state_33820[(2)]);
var inst_33802 = (inst_33801__$1 == null);
var state_33820__$1 = (function (){var statearr_33832 = state_33820;
(statearr_33832[(7)] = inst_33801__$1);

return statearr_33832;
})();
if(cljs.core.truth_(inst_33802)){
var statearr_33833_35933 = state_33820__$1;
(statearr_33833_35933[(1)] = (5));

} else {
var statearr_33838_35934 = state_33820__$1;
(statearr_33838_35934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (6))){
var inst_33806 = (state_33820[(8)]);
var inst_33801 = (state_33820[(7)]);
var inst_33806__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33807 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33808 = [inst_33801,inst_33806__$1];
var inst_33809 = (new cljs.core.PersistentVector(null,2,(5),inst_33807,inst_33808,null));
var state_33820__$1 = (function (){var statearr_33851 = state_33820;
(statearr_33851[(8)] = inst_33806__$1);

return statearr_33851;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33820__$1,(8),jobs,inst_33809);
} else {
if((state_val_33821 === (3))){
var inst_33818 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33820__$1,inst_33818);
} else {
if((state_val_33821 === (2))){
var state_33820__$1 = state_33820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33820__$1,(4),from);
} else {
if((state_val_33821 === (9))){
var inst_33813 = (state_33820[(2)]);
var state_33820__$1 = (function (){var statearr_33860 = state_33820;
(statearr_33860[(9)] = inst_33813);

return statearr_33860;
})();
var statearr_33866_35935 = state_33820__$1;
(statearr_33866_35935[(2)] = null);

(statearr_33866_35935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (5))){
var inst_33804 = cljs.core.async.close_BANG_(jobs);
var state_33820__$1 = state_33820;
var statearr_33876_35936 = state_33820__$1;
(statearr_33876_35936[(2)] = inst_33804);

(statearr_33876_35936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (8))){
var inst_33806 = (state_33820[(8)]);
var inst_33811 = (state_33820[(2)]);
var state_33820__$1 = (function (){var statearr_33881 = state_33820;
(statearr_33881[(10)] = inst_33811);

return statearr_33881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33820__$1,(9),results,inst_33806);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0 = (function (){
var statearr_33882 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__);

(statearr_33882[(1)] = (1));

return statearr_33882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1 = (function (state_33820){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_33820);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e33887){var ex__33272__auto__ = e33887;
var statearr_33888_35937 = state_33820;
(statearr_33888_35937[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_33820[(4)]))){
var statearr_33889_35938 = state_33820;
(statearr_33889_35938[(1)] = cljs.core.first((state_33820[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35939 = state_33820;
state_33820 = G__35939;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = function(state_33820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1.call(this,state_33820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_33890 = f__33433__auto__();
(statearr_33890[(6)] = c__33432__auto___35924);

return statearr_33890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


var c__33432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_33967){
var state_val_33968 = (state_33967[(1)]);
if((state_val_33968 === (7))){
var inst_33963 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_33969_35940 = state_33967__$1;
(statearr_33969_35940[(2)] = inst_33963);

(statearr_33969_35940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (20))){
var state_33967__$1 = state_33967;
var statearr_33970_35941 = state_33967__$1;
(statearr_33970_35941[(2)] = null);

(statearr_33970_35941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (1))){
var state_33967__$1 = state_33967;
var statearr_33971_35942 = state_33967__$1;
(statearr_33971_35942[(2)] = null);

(statearr_33971_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (4))){
var inst_33910 = (state_33967[(7)]);
var inst_33910__$1 = (state_33967[(2)]);
var inst_33915 = (inst_33910__$1 == null);
var state_33967__$1 = (function (){var statearr_33972 = state_33967;
(statearr_33972[(7)] = inst_33910__$1);

return statearr_33972;
})();
if(cljs.core.truth_(inst_33915)){
var statearr_33973_35944 = state_33967__$1;
(statearr_33973_35944[(1)] = (5));

} else {
var statearr_33974_35945 = state_33967__$1;
(statearr_33974_35945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (15))){
var inst_33945 = (state_33967[(8)]);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33967__$1,(18),to,inst_33945);
} else {
if((state_val_33968 === (21))){
var inst_33958 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_33975_35946 = state_33967__$1;
(statearr_33975_35946[(2)] = inst_33958);

(statearr_33975_35946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (13))){
var inst_33960 = (state_33967[(2)]);
var state_33967__$1 = (function (){var statearr_33977 = state_33967;
(statearr_33977[(9)] = inst_33960);

return statearr_33977;
})();
var statearr_33979_35947 = state_33967__$1;
(statearr_33979_35947[(2)] = null);

(statearr_33979_35947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (6))){
var inst_33910 = (state_33967[(7)]);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33967__$1,(11),inst_33910);
} else {
if((state_val_33968 === (17))){
var inst_33953 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
if(cljs.core.truth_(inst_33953)){
var statearr_33980_35948 = state_33967__$1;
(statearr_33980_35948[(1)] = (19));

} else {
var statearr_33981_35949 = state_33967__$1;
(statearr_33981_35949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (3))){
var inst_33965 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33967__$1,inst_33965);
} else {
if((state_val_33968 === (12))){
var inst_33924 = (state_33967[(10)]);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33967__$1,(14),inst_33924);
} else {
if((state_val_33968 === (2))){
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33967__$1,(4),results);
} else {
if((state_val_33968 === (19))){
var state_33967__$1 = state_33967;
var statearr_33982_35951 = state_33967__$1;
(statearr_33982_35951[(2)] = null);

(statearr_33982_35951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (11))){
var inst_33924 = (state_33967[(2)]);
var state_33967__$1 = (function (){var statearr_33983 = state_33967;
(statearr_33983[(10)] = inst_33924);

return statearr_33983;
})();
var statearr_33984_35952 = state_33967__$1;
(statearr_33984_35952[(2)] = null);

(statearr_33984_35952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (9))){
var state_33967__$1 = state_33967;
var statearr_33985_35953 = state_33967__$1;
(statearr_33985_35953[(2)] = null);

(statearr_33985_35953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (5))){
var state_33967__$1 = state_33967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33986_35954 = state_33967__$1;
(statearr_33986_35954[(1)] = (8));

} else {
var statearr_33987_35955 = state_33967__$1;
(statearr_33987_35955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (14))){
var inst_33945 = (state_33967[(8)]);
var inst_33947 = (state_33967[(11)]);
var inst_33945__$1 = (state_33967[(2)]);
var inst_33946 = (inst_33945__$1 == null);
var inst_33947__$1 = cljs.core.not(inst_33946);
var state_33967__$1 = (function (){var statearr_33988 = state_33967;
(statearr_33988[(8)] = inst_33945__$1);

(statearr_33988[(11)] = inst_33947__$1);

return statearr_33988;
})();
if(inst_33947__$1){
var statearr_33989_35956 = state_33967__$1;
(statearr_33989_35956[(1)] = (15));

} else {
var statearr_33990_35957 = state_33967__$1;
(statearr_33990_35957[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (16))){
var inst_33947 = (state_33967[(11)]);
var state_33967__$1 = state_33967;
var statearr_33999_35958 = state_33967__$1;
(statearr_33999_35958[(2)] = inst_33947);

(statearr_33999_35958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (10))){
var inst_33921 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34005_35959 = state_33967__$1;
(statearr_34005_35959[(2)] = inst_33921);

(statearr_34005_35959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (18))){
var inst_33950 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34006_35960 = state_33967__$1;
(statearr_34006_35960[(2)] = inst_33950);

(statearr_34006_35960[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (8))){
var inst_33918 = cljs.core.async.close_BANG_(to);
var state_33967__$1 = state_33967;
var statearr_34007_35961 = state_33967__$1;
(statearr_34007_35961[(2)] = inst_33918);

(statearr_34007_35961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0 = (function (){
var statearr_34008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__);

(statearr_34008[(1)] = (1));

return statearr_34008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1 = (function (state_33967){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_33967);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e34009){var ex__33272__auto__ = e34009;
var statearr_34011_35962 = state_33967;
(statearr_34011_35962[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_33967[(4)]))){
var statearr_34012_35963 = state_33967;
(statearr_34012_35963[(1)] = cljs.core.first((state_33967[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35964 = state_33967;
state_33967 = G__35964;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__ = function(state_33967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1.call(this,state_33967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_34026 = f__33433__auto__();
(statearr_34026[(6)] = c__33432__auto__);

return statearr_34026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));

return c__33432__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34036 = arguments.length;
switch (G__34036) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34040 = arguments.length;
switch (G__34040) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34043 = arguments.length;
switch (G__34043) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33432__auto___35981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_34070){
var state_val_34071 = (state_34070[(1)]);
if((state_val_34071 === (7))){
var inst_34066 = (state_34070[(2)]);
var state_34070__$1 = state_34070;
var statearr_34072_35982 = state_34070__$1;
(statearr_34072_35982[(2)] = inst_34066);

(statearr_34072_35982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (1))){
var state_34070__$1 = state_34070;
var statearr_34073_35983 = state_34070__$1;
(statearr_34073_35983[(2)] = null);

(statearr_34073_35983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (4))){
var inst_34047 = (state_34070[(7)]);
var inst_34047__$1 = (state_34070[(2)]);
var inst_34048 = (inst_34047__$1 == null);
var state_34070__$1 = (function (){var statearr_34074 = state_34070;
(statearr_34074[(7)] = inst_34047__$1);

return statearr_34074;
})();
if(cljs.core.truth_(inst_34048)){
var statearr_34075_35985 = state_34070__$1;
(statearr_34075_35985[(1)] = (5));

} else {
var statearr_34076_35986 = state_34070__$1;
(statearr_34076_35986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (13))){
var state_34070__$1 = state_34070;
var statearr_34077_35987 = state_34070__$1;
(statearr_34077_35987[(2)] = null);

(statearr_34077_35987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (6))){
var inst_34047 = (state_34070[(7)]);
var inst_34053 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34047) : p.call(null,inst_34047));
var state_34070__$1 = state_34070;
if(cljs.core.truth_(inst_34053)){
var statearr_34078_35988 = state_34070__$1;
(statearr_34078_35988[(1)] = (9));

} else {
var statearr_34079_35989 = state_34070__$1;
(statearr_34079_35989[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (3))){
var inst_34068 = (state_34070[(2)]);
var state_34070__$1 = state_34070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34070__$1,inst_34068);
} else {
if((state_val_34071 === (12))){
var state_34070__$1 = state_34070;
var statearr_34081_35995 = state_34070__$1;
(statearr_34081_35995[(2)] = null);

(statearr_34081_35995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (2))){
var state_34070__$1 = state_34070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34070__$1,(4),ch);
} else {
if((state_val_34071 === (11))){
var inst_34047 = (state_34070[(7)]);
var inst_34057 = (state_34070[(2)]);
var state_34070__$1 = state_34070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34070__$1,(8),inst_34057,inst_34047);
} else {
if((state_val_34071 === (9))){
var state_34070__$1 = state_34070;
var statearr_34082_35996 = state_34070__$1;
(statearr_34082_35996[(2)] = tc);

(statearr_34082_35996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (5))){
var inst_34050 = cljs.core.async.close_BANG_(tc);
var inst_34051 = cljs.core.async.close_BANG_(fc);
var state_34070__$1 = (function (){var statearr_34083 = state_34070;
(statearr_34083[(8)] = inst_34050);

return statearr_34083;
})();
var statearr_34084_35997 = state_34070__$1;
(statearr_34084_35997[(2)] = inst_34051);

(statearr_34084_35997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (14))){
var inst_34064 = (state_34070[(2)]);
var state_34070__$1 = state_34070;
var statearr_34085_35998 = state_34070__$1;
(statearr_34085_35998[(2)] = inst_34064);

(statearr_34085_35998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (10))){
var state_34070__$1 = state_34070;
var statearr_34086_35999 = state_34070__$1;
(statearr_34086_35999[(2)] = fc);

(statearr_34086_35999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (8))){
var inst_34059 = (state_34070[(2)]);
var state_34070__$1 = state_34070;
if(cljs.core.truth_(inst_34059)){
var statearr_34088_36000 = state_34070__$1;
(statearr_34088_36000[(1)] = (12));

} else {
var statearr_34089_36001 = state_34070__$1;
(statearr_34089_36001[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_34090 = [null,null,null,null,null,null,null,null,null];
(statearr_34090[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_34090[(1)] = (1));

return statearr_34090;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_34070){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_34070);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e34091){var ex__33272__auto__ = e34091;
var statearr_34092_36002 = state_34070;
(statearr_34092_36002[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_34070[(4)]))){
var statearr_34093_36003 = state_34070;
(statearr_34093_36003[(1)] = cljs.core.first((state_34070[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36004 = state_34070;
state_34070 = G__36004;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_34070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_34070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_34094 = f__33433__auto__();
(statearr_34094[(6)] = c__33432__auto___35981);

return statearr_34094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_34120){
var state_val_34121 = (state_34120[(1)]);
if((state_val_34121 === (7))){
var inst_34115 = (state_34120[(2)]);
var state_34120__$1 = state_34120;
var statearr_34122_36005 = state_34120__$1;
(statearr_34122_36005[(2)] = inst_34115);

(statearr_34122_36005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (1))){
var inst_34097 = init;
var inst_34098 = inst_34097;
var state_34120__$1 = (function (){var statearr_34123 = state_34120;
(statearr_34123[(7)] = inst_34098);

return statearr_34123;
})();
var statearr_34124_36006 = state_34120__$1;
(statearr_34124_36006[(2)] = null);

(statearr_34124_36006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (4))){
var inst_34101 = (state_34120[(8)]);
var inst_34101__$1 = (state_34120[(2)]);
var inst_34103 = (inst_34101__$1 == null);
var state_34120__$1 = (function (){var statearr_34125 = state_34120;
(statearr_34125[(8)] = inst_34101__$1);

return statearr_34125;
})();
if(cljs.core.truth_(inst_34103)){
var statearr_34126_36008 = state_34120__$1;
(statearr_34126_36008[(1)] = (5));

} else {
var statearr_34127_36009 = state_34120__$1;
(statearr_34127_36009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (6))){
var inst_34098 = (state_34120[(7)]);
var inst_34101 = (state_34120[(8)]);
var inst_34106 = (state_34120[(9)]);
var inst_34106__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34098,inst_34101) : f.call(null,inst_34098,inst_34101));
var inst_34107 = cljs.core.reduced_QMARK_(inst_34106__$1);
var state_34120__$1 = (function (){var statearr_34129 = state_34120;
(statearr_34129[(9)] = inst_34106__$1);

return statearr_34129;
})();
if(inst_34107){
var statearr_34130_36011 = state_34120__$1;
(statearr_34130_36011[(1)] = (8));

} else {
var statearr_34131_36012 = state_34120__$1;
(statearr_34131_36012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (3))){
var inst_34117 = (state_34120[(2)]);
var state_34120__$1 = state_34120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34120__$1,inst_34117);
} else {
if((state_val_34121 === (2))){
var state_34120__$1 = state_34120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34120__$1,(4),ch);
} else {
if((state_val_34121 === (9))){
var inst_34106 = (state_34120[(9)]);
var inst_34098 = inst_34106;
var state_34120__$1 = (function (){var statearr_34132 = state_34120;
(statearr_34132[(7)] = inst_34098);

return statearr_34132;
})();
var statearr_34134_36016 = state_34120__$1;
(statearr_34134_36016[(2)] = null);

(statearr_34134_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (5))){
var inst_34098 = (state_34120[(7)]);
var state_34120__$1 = state_34120;
var statearr_34135_36017 = state_34120__$1;
(statearr_34135_36017[(2)] = inst_34098);

(statearr_34135_36017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (10))){
var inst_34113 = (state_34120[(2)]);
var state_34120__$1 = state_34120;
var statearr_34136_36018 = state_34120__$1;
(statearr_34136_36018[(2)] = inst_34113);

(statearr_34136_36018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (8))){
var inst_34106 = (state_34120[(9)]);
var inst_34109 = cljs.core.deref(inst_34106);
var state_34120__$1 = state_34120;
var statearr_34137_36020 = state_34120__$1;
(statearr_34137_36020[(2)] = inst_34109);

(statearr_34137_36020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33269__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33269__auto____0 = (function (){
var statearr_34138 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34138[(0)] = cljs$core$async$reduce_$_state_machine__33269__auto__);

(statearr_34138[(1)] = (1));

return statearr_34138;
});
var cljs$core$async$reduce_$_state_machine__33269__auto____1 = (function (state_34120){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_34120);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e34139){var ex__33272__auto__ = e34139;
var statearr_34140_36022 = state_34120;
(statearr_34140_36022[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_34120[(4)]))){
var statearr_34142_36023 = state_34120;
(statearr_34142_36023[(1)] = cljs.core.first((state_34120[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36024 = state_34120;
state_34120 = G__36024;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33269__auto__ = function(state_34120){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33269__auto____1.call(this,state_34120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33269__auto____0;
cljs$core$async$reduce_$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33269__auto____1;
return cljs$core$async$reduce_$_state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_34143 = f__33433__auto__();
(statearr_34143[(6)] = c__33432__auto__);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));

return c__33432__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_34150){
var state_val_34151 = (state_34150[(1)]);
if((state_val_34151 === (1))){
var inst_34145 = cljs.core.async.reduce(f__$1,init,ch);
var state_34150__$1 = state_34150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34150__$1,(2),inst_34145);
} else {
if((state_val_34151 === (2))){
var inst_34147 = (state_34150[(2)]);
var inst_34148 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34147) : f__$1.call(null,inst_34147));
var state_34150__$1 = state_34150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34150__$1,inst_34148);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33269__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33269__auto____0 = (function (){
var statearr_34152 = [null,null,null,null,null,null,null];
(statearr_34152[(0)] = cljs$core$async$transduce_$_state_machine__33269__auto__);

(statearr_34152[(1)] = (1));

return statearr_34152;
});
var cljs$core$async$transduce_$_state_machine__33269__auto____1 = (function (state_34150){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_34150);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e34153){var ex__33272__auto__ = e34153;
var statearr_34154_36033 = state_34150;
(statearr_34154_36033[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_34150[(4)]))){
var statearr_34155_36035 = state_34150;
(statearr_34155_36035[(1)] = cljs.core.first((state_34150[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36036 = state_34150;
state_34150 = G__36036;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33269__auto__ = function(state_34150){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33269__auto____1.call(this,state_34150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33269__auto____0;
cljs$core$async$transduce_$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33269__auto____1;
return cljs$core$async$transduce_$_state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_34157 = f__33433__auto__();
(statearr_34157[(6)] = c__33432__auto__);

return statearr_34157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));

return c__33432__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34159 = arguments.length;
switch (G__34159) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_34185){
var state_val_34186 = (state_34185[(1)]);
if((state_val_34186 === (7))){
var inst_34167 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34188_36041 = state_34185__$1;
(statearr_34188_36041[(2)] = inst_34167);

(statearr_34188_36041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (1))){
var inst_34161 = cljs.core.seq(coll);
var inst_34162 = inst_34161;
var state_34185__$1 = (function (){var statearr_34189 = state_34185;
(statearr_34189[(7)] = inst_34162);

return statearr_34189;
})();
var statearr_34190_36042 = state_34185__$1;
(statearr_34190_36042[(2)] = null);

(statearr_34190_36042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (4))){
var inst_34162 = (state_34185[(7)]);
var inst_34165 = cljs.core.first(inst_34162);
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34185__$1,(7),ch,inst_34165);
} else {
if((state_val_34186 === (13))){
var inst_34179 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34191_36045 = state_34185__$1;
(statearr_34191_36045[(2)] = inst_34179);

(statearr_34191_36045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (6))){
var inst_34170 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
if(cljs.core.truth_(inst_34170)){
var statearr_34192_36046 = state_34185__$1;
(statearr_34192_36046[(1)] = (8));

} else {
var statearr_34193_36047 = state_34185__$1;
(statearr_34193_36047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (3))){
var inst_34183 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34185__$1,inst_34183);
} else {
if((state_val_34186 === (12))){
var state_34185__$1 = state_34185;
var statearr_34195_36048 = state_34185__$1;
(statearr_34195_36048[(2)] = null);

(statearr_34195_36048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (2))){
var inst_34162 = (state_34185[(7)]);
var state_34185__$1 = state_34185;
if(cljs.core.truth_(inst_34162)){
var statearr_34196_36049 = state_34185__$1;
(statearr_34196_36049[(1)] = (4));

} else {
var statearr_34197_36050 = state_34185__$1;
(statearr_34197_36050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (11))){
var inst_34176 = cljs.core.async.close_BANG_(ch);
var state_34185__$1 = state_34185;
var statearr_34198_36051 = state_34185__$1;
(statearr_34198_36051[(2)] = inst_34176);

(statearr_34198_36051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (9))){
var state_34185__$1 = state_34185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34199_36052 = state_34185__$1;
(statearr_34199_36052[(1)] = (11));

} else {
var statearr_34200_36053 = state_34185__$1;
(statearr_34200_36053[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (5))){
var inst_34162 = (state_34185[(7)]);
var state_34185__$1 = state_34185;
var statearr_34201_36054 = state_34185__$1;
(statearr_34201_36054[(2)] = inst_34162);

(statearr_34201_36054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (10))){
var inst_34181 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34202_36055 = state_34185__$1;
(statearr_34202_36055[(2)] = inst_34181);

(statearr_34202_36055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (8))){
var inst_34162 = (state_34185[(7)]);
var inst_34172 = cljs.core.next(inst_34162);
var inst_34162__$1 = inst_34172;
var state_34185__$1 = (function (){var statearr_34203 = state_34185;
(statearr_34203[(7)] = inst_34162__$1);

return statearr_34203;
})();
var statearr_34205_36057 = state_34185__$1;
(statearr_34205_36057[(2)] = null);

(statearr_34205_36057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_34207 = [null,null,null,null,null,null,null,null];
(statearr_34207[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_34207[(1)] = (1));

return statearr_34207;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_34185){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_34185);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e34208){var ex__33272__auto__ = e34208;
var statearr_34209_36059 = state_34185;
(statearr_34209_36059[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_34185[(4)]))){
var statearr_34210_36060 = state_34185;
(statearr_34210_36060[(1)] = cljs.core.first((state_34185[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36061 = state_34185;
state_34185 = G__36061;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_34185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_34185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_34211 = f__33433__auto__();
(statearr_34211[(6)] = c__33432__auto__);

return statearr_34211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));

return c__33432__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34215 = arguments.length;
switch (G__34215) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36066 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36066(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36067 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36067(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36068 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36068(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36069 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36069(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34218 = (function (ch,cs,meta34219){
this.ch = ch;
this.cs = cs;
this.meta34219 = meta34219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34220,meta34219__$1){
var self__ = this;
var _34220__$1 = this;
return (new cljs.core.async.t_cljs$core$async34218(self__.ch,self__.cs,meta34219__$1));
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34220){
var self__ = this;
var _34220__$1 = this;
return self__.meta34219;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34219","meta34219",-1606973855,null)], null);
}));

(cljs.core.async.t_cljs$core$async34218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34218");

(cljs.core.async.t_cljs$core$async34218.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34218.
 */
cljs.core.async.__GT_t_cljs$core$async34218 = (function cljs$core$async$__GT_t_cljs$core$async34218(ch,cs,meta34219){
return (new cljs.core.async.t_cljs$core$async34218(ch,cs,meta34219));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34218(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33432__auto___36070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_34478){
var state_val_34480 = (state_34478[(1)]);
if((state_val_34480 === (7))){
var inst_34469 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34524_36071 = state_34478__$1;
(statearr_34524_36071[(2)] = inst_34469);

(statearr_34524_36071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (20))){
var inst_34327 = (state_34478[(7)]);
var inst_34340 = cljs.core.first(inst_34327);
var inst_34342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34340,(0),null);
var inst_34344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34340,(1),null);
var state_34478__$1 = (function (){var statearr_34529 = state_34478;
(statearr_34529[(8)] = inst_34342);

return statearr_34529;
})();
if(cljs.core.truth_(inst_34344)){
var statearr_34530_36072 = state_34478__$1;
(statearr_34530_36072[(1)] = (22));

} else {
var statearr_34531_36073 = state_34478__$1;
(statearr_34531_36073[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (27))){
var inst_34400 = (state_34478[(9)]);
var inst_34392 = (state_34478[(10)]);
var inst_34390 = (state_34478[(11)]);
var inst_34276 = (state_34478[(12)]);
var inst_34400__$1 = cljs.core._nth(inst_34390,inst_34392);
var inst_34402 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34400__$1,inst_34276,done);
var state_34478__$1 = (function (){var statearr_34535 = state_34478;
(statearr_34535[(9)] = inst_34400__$1);

return statearr_34535;
})();
if(cljs.core.truth_(inst_34402)){
var statearr_34536_36074 = state_34478__$1;
(statearr_34536_36074[(1)] = (30));

} else {
var statearr_34537_36075 = state_34478__$1;
(statearr_34537_36075[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (1))){
var state_34478__$1 = state_34478;
var statearr_34538_36076 = state_34478__$1;
(statearr_34538_36076[(2)] = null);

(statearr_34538_36076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (24))){
var inst_34327 = (state_34478[(7)]);
var inst_34363 = (state_34478[(2)]);
var inst_34364 = cljs.core.next(inst_34327);
var inst_34289 = inst_34364;
var inst_34290 = null;
var inst_34291 = (0);
var inst_34292 = (0);
var state_34478__$1 = (function (){var statearr_34539 = state_34478;
(statearr_34539[(13)] = inst_34292);

(statearr_34539[(14)] = inst_34291);

(statearr_34539[(15)] = inst_34290);

(statearr_34539[(16)] = inst_34289);

(statearr_34539[(17)] = inst_34363);

return statearr_34539;
})();
var statearr_34540_36077 = state_34478__$1;
(statearr_34540_36077[(2)] = null);

(statearr_34540_36077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (39))){
var state_34478__$1 = state_34478;
var statearr_34544_36078 = state_34478__$1;
(statearr_34544_36078[(2)] = null);

(statearr_34544_36078[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (4))){
var inst_34276 = (state_34478[(12)]);
var inst_34276__$1 = (state_34478[(2)]);
var inst_34278 = (inst_34276__$1 == null);
var state_34478__$1 = (function (){var statearr_34545 = state_34478;
(statearr_34545[(12)] = inst_34276__$1);

return statearr_34545;
})();
if(cljs.core.truth_(inst_34278)){
var statearr_34546_36079 = state_34478__$1;
(statearr_34546_36079[(1)] = (5));

} else {
var statearr_34547_36080 = state_34478__$1;
(statearr_34547_36080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (15))){
var inst_34292 = (state_34478[(13)]);
var inst_34291 = (state_34478[(14)]);
var inst_34290 = (state_34478[(15)]);
var inst_34289 = (state_34478[(16)]);
var inst_34315 = (state_34478[(2)]);
var inst_34323 = (inst_34292 + (1));
var tmp34541 = inst_34291;
var tmp34542 = inst_34290;
var tmp34543 = inst_34289;
var inst_34289__$1 = tmp34543;
var inst_34290__$1 = tmp34542;
var inst_34291__$1 = tmp34541;
var inst_34292__$1 = inst_34323;
var state_34478__$1 = (function (){var statearr_34548 = state_34478;
(statearr_34548[(18)] = inst_34315);

(statearr_34548[(13)] = inst_34292__$1);

(statearr_34548[(14)] = inst_34291__$1);

(statearr_34548[(15)] = inst_34290__$1);

(statearr_34548[(16)] = inst_34289__$1);

return statearr_34548;
})();
var statearr_34549_36081 = state_34478__$1;
(statearr_34549_36081[(2)] = null);

(statearr_34549_36081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (21))){
var inst_34367 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34553_36082 = state_34478__$1;
(statearr_34553_36082[(2)] = inst_34367);

(statearr_34553_36082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (31))){
var inst_34400 = (state_34478[(9)]);
var inst_34405 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34400);
var state_34478__$1 = state_34478;
var statearr_34554_36083 = state_34478__$1;
(statearr_34554_36083[(2)] = inst_34405);

(statearr_34554_36083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (32))){
var inst_34389 = (state_34478[(19)]);
var inst_34391 = (state_34478[(20)]);
var inst_34392 = (state_34478[(10)]);
var inst_34390 = (state_34478[(11)]);
var inst_34407 = (state_34478[(2)]);
var inst_34408 = (inst_34392 + (1));
var tmp34550 = inst_34389;
var tmp34551 = inst_34391;
var tmp34552 = inst_34390;
var inst_34389__$1 = tmp34550;
var inst_34390__$1 = tmp34552;
var inst_34391__$1 = tmp34551;
var inst_34392__$1 = inst_34408;
var state_34478__$1 = (function (){var statearr_34555 = state_34478;
(statearr_34555[(21)] = inst_34407);

(statearr_34555[(19)] = inst_34389__$1);

(statearr_34555[(20)] = inst_34391__$1);

(statearr_34555[(10)] = inst_34392__$1);

(statearr_34555[(11)] = inst_34390__$1);

return statearr_34555;
})();
var statearr_34556_36084 = state_34478__$1;
(statearr_34556_36084[(2)] = null);

(statearr_34556_36084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (40))){
var inst_34436 = (state_34478[(22)]);
var inst_34440 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34436);
var state_34478__$1 = state_34478;
var statearr_34557_36085 = state_34478__$1;
(statearr_34557_36085[(2)] = inst_34440);

(statearr_34557_36085[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (33))){
var inst_34411 = (state_34478[(23)]);
var inst_34428 = cljs.core.chunked_seq_QMARK_(inst_34411);
var state_34478__$1 = state_34478;
if(inst_34428){
var statearr_34558_36086 = state_34478__$1;
(statearr_34558_36086[(1)] = (36));

} else {
var statearr_34559_36087 = state_34478__$1;
(statearr_34559_36087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (13))){
var inst_34309 = (state_34478[(24)]);
var inst_34312 = cljs.core.async.close_BANG_(inst_34309);
var state_34478__$1 = state_34478;
var statearr_34560_36088 = state_34478__$1;
(statearr_34560_36088[(2)] = inst_34312);

(statearr_34560_36088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (22))){
var inst_34342 = (state_34478[(8)]);
var inst_34359 = cljs.core.async.close_BANG_(inst_34342);
var state_34478__$1 = state_34478;
var statearr_34561_36089 = state_34478__$1;
(statearr_34561_36089[(2)] = inst_34359);

(statearr_34561_36089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (36))){
var inst_34411 = (state_34478[(23)]);
var inst_34430 = cljs.core.chunk_first(inst_34411);
var inst_34431 = cljs.core.chunk_rest(inst_34411);
var inst_34432 = cljs.core.count(inst_34430);
var inst_34389 = inst_34431;
var inst_34390 = inst_34430;
var inst_34391 = inst_34432;
var inst_34392 = (0);
var state_34478__$1 = (function (){var statearr_34562 = state_34478;
(statearr_34562[(19)] = inst_34389);

(statearr_34562[(20)] = inst_34391);

(statearr_34562[(10)] = inst_34392);

(statearr_34562[(11)] = inst_34390);

return statearr_34562;
})();
var statearr_34563_36090 = state_34478__$1;
(statearr_34563_36090[(2)] = null);

(statearr_34563_36090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (41))){
var inst_34411 = (state_34478[(23)]);
var inst_34442 = (state_34478[(2)]);
var inst_34443 = cljs.core.next(inst_34411);
var inst_34389 = inst_34443;
var inst_34390 = null;
var inst_34391 = (0);
var inst_34392 = (0);
var state_34478__$1 = (function (){var statearr_34564 = state_34478;
(statearr_34564[(19)] = inst_34389);

(statearr_34564[(20)] = inst_34391);

(statearr_34564[(10)] = inst_34392);

(statearr_34564[(11)] = inst_34390);

(statearr_34564[(25)] = inst_34442);

return statearr_34564;
})();
var statearr_34565_36091 = state_34478__$1;
(statearr_34565_36091[(2)] = null);

(statearr_34565_36091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (43))){
var state_34478__$1 = state_34478;
var statearr_34566_36092 = state_34478__$1;
(statearr_34566_36092[(2)] = null);

(statearr_34566_36092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (29))){
var inst_34455 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34567_36093 = state_34478__$1;
(statearr_34567_36093[(2)] = inst_34455);

(statearr_34567_36093[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (44))){
var inst_34466 = (state_34478[(2)]);
var state_34478__$1 = (function (){var statearr_34568 = state_34478;
(statearr_34568[(26)] = inst_34466);

return statearr_34568;
})();
var statearr_34569_36094 = state_34478__$1;
(statearr_34569_36094[(2)] = null);

(statearr_34569_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (6))){
var inst_34380 = (state_34478[(27)]);
var inst_34379 = cljs.core.deref(cs);
var inst_34380__$1 = cljs.core.keys(inst_34379);
var inst_34381 = cljs.core.count(inst_34380__$1);
var inst_34382 = cljs.core.reset_BANG_(dctr,inst_34381);
var inst_34387 = cljs.core.seq(inst_34380__$1);
var inst_34389 = inst_34387;
var inst_34390 = null;
var inst_34391 = (0);
var inst_34392 = (0);
var state_34478__$1 = (function (){var statearr_34570 = state_34478;
(statearr_34570[(27)] = inst_34380__$1);

(statearr_34570[(19)] = inst_34389);

(statearr_34570[(20)] = inst_34391);

(statearr_34570[(10)] = inst_34392);

(statearr_34570[(11)] = inst_34390);

(statearr_34570[(28)] = inst_34382);

return statearr_34570;
})();
var statearr_34571_36095 = state_34478__$1;
(statearr_34571_36095[(2)] = null);

(statearr_34571_36095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (28))){
var inst_34389 = (state_34478[(19)]);
var inst_34411 = (state_34478[(23)]);
var inst_34411__$1 = cljs.core.seq(inst_34389);
var state_34478__$1 = (function (){var statearr_34572 = state_34478;
(statearr_34572[(23)] = inst_34411__$1);

return statearr_34572;
})();
if(inst_34411__$1){
var statearr_34573_36096 = state_34478__$1;
(statearr_34573_36096[(1)] = (33));

} else {
var statearr_34574_36097 = state_34478__$1;
(statearr_34574_36097[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (25))){
var inst_34391 = (state_34478[(20)]);
var inst_34392 = (state_34478[(10)]);
var inst_34394 = (inst_34392 < inst_34391);
var inst_34396 = inst_34394;
var state_34478__$1 = state_34478;
if(cljs.core.truth_(inst_34396)){
var statearr_34575_36098 = state_34478__$1;
(statearr_34575_36098[(1)] = (27));

} else {
var statearr_34576_36099 = state_34478__$1;
(statearr_34576_36099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (34))){
var state_34478__$1 = state_34478;
var statearr_34577_36100 = state_34478__$1;
(statearr_34577_36100[(2)] = null);

(statearr_34577_36100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (17))){
var state_34478__$1 = state_34478;
var statearr_34578_36101 = state_34478__$1;
(statearr_34578_36101[(2)] = null);

(statearr_34578_36101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (3))){
var inst_34471 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34478__$1,inst_34471);
} else {
if((state_val_34480 === (12))){
var inst_34372 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34580_36102 = state_34478__$1;
(statearr_34580_36102[(2)] = inst_34372);

(statearr_34580_36102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (2))){
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34478__$1,(4),ch);
} else {
if((state_val_34480 === (23))){
var state_34478__$1 = state_34478;
var statearr_34581_36103 = state_34478__$1;
(statearr_34581_36103[(2)] = null);

(statearr_34581_36103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (35))){
var inst_34449 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34582_36104 = state_34478__$1;
(statearr_34582_36104[(2)] = inst_34449);

(statearr_34582_36104[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (19))){
var inst_34327 = (state_34478[(7)]);
var inst_34332 = cljs.core.chunk_first(inst_34327);
var inst_34333 = cljs.core.chunk_rest(inst_34327);
var inst_34334 = cljs.core.count(inst_34332);
var inst_34289 = inst_34333;
var inst_34290 = inst_34332;
var inst_34291 = inst_34334;
var inst_34292 = (0);
var state_34478__$1 = (function (){var statearr_34583 = state_34478;
(statearr_34583[(13)] = inst_34292);

(statearr_34583[(14)] = inst_34291);

(statearr_34583[(15)] = inst_34290);

(statearr_34583[(16)] = inst_34289);

return statearr_34583;
})();
var statearr_34584_36105 = state_34478__$1;
(statearr_34584_36105[(2)] = null);

(statearr_34584_36105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (11))){
var inst_34327 = (state_34478[(7)]);
var inst_34289 = (state_34478[(16)]);
var inst_34327__$1 = cljs.core.seq(inst_34289);
var state_34478__$1 = (function (){var statearr_34585 = state_34478;
(statearr_34585[(7)] = inst_34327__$1);

return statearr_34585;
})();
if(inst_34327__$1){
var statearr_34586_36106 = state_34478__$1;
(statearr_34586_36106[(1)] = (16));

} else {
var statearr_34587_36107 = state_34478__$1;
(statearr_34587_36107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (9))){
var inst_34374 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34588_36108 = state_34478__$1;
(statearr_34588_36108[(2)] = inst_34374);

(statearr_34588_36108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (5))){
var inst_34287 = cljs.core.deref(cs);
var inst_34288 = cljs.core.seq(inst_34287);
var inst_34289 = inst_34288;
var inst_34290 = null;
var inst_34291 = (0);
var inst_34292 = (0);
var state_34478__$1 = (function (){var statearr_34589 = state_34478;
(statearr_34589[(13)] = inst_34292);

(statearr_34589[(14)] = inst_34291);

(statearr_34589[(15)] = inst_34290);

(statearr_34589[(16)] = inst_34289);

return statearr_34589;
})();
var statearr_34590_36109 = state_34478__$1;
(statearr_34590_36109[(2)] = null);

(statearr_34590_36109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (14))){
var state_34478__$1 = state_34478;
var statearr_34591_36110 = state_34478__$1;
(statearr_34591_36110[(2)] = null);

(statearr_34591_36110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (45))){
var inst_34463 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34592_36111 = state_34478__$1;
(statearr_34592_36111[(2)] = inst_34463);

(statearr_34592_36111[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (26))){
var inst_34380 = (state_34478[(27)]);
var inst_34457 = (state_34478[(2)]);
var inst_34460 = cljs.core.seq(inst_34380);
var state_34478__$1 = (function (){var statearr_34593 = state_34478;
(statearr_34593[(29)] = inst_34457);

return statearr_34593;
})();
if(inst_34460){
var statearr_34594_36112 = state_34478__$1;
(statearr_34594_36112[(1)] = (42));

} else {
var statearr_34595_36113 = state_34478__$1;
(statearr_34595_36113[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (16))){
var inst_34327 = (state_34478[(7)]);
var inst_34329 = cljs.core.chunked_seq_QMARK_(inst_34327);
var state_34478__$1 = state_34478;
if(inst_34329){
var statearr_34596_36114 = state_34478__$1;
(statearr_34596_36114[(1)] = (19));

} else {
var statearr_34597_36115 = state_34478__$1;
(statearr_34597_36115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (38))){
var inst_34446 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34598_36116 = state_34478__$1;
(statearr_34598_36116[(2)] = inst_34446);

(statearr_34598_36116[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (30))){
var state_34478__$1 = state_34478;
var statearr_34599_36117 = state_34478__$1;
(statearr_34599_36117[(2)] = null);

(statearr_34599_36117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (10))){
var inst_34292 = (state_34478[(13)]);
var inst_34290 = (state_34478[(15)]);
var inst_34307 = cljs.core._nth(inst_34290,inst_34292);
var inst_34309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34307,(0),null);
var inst_34310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34307,(1),null);
var state_34478__$1 = (function (){var statearr_34600 = state_34478;
(statearr_34600[(24)] = inst_34309);

return statearr_34600;
})();
if(cljs.core.truth_(inst_34310)){
var statearr_34602_36119 = state_34478__$1;
(statearr_34602_36119[(1)] = (13));

} else {
var statearr_34603_36120 = state_34478__$1;
(statearr_34603_36120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (18))){
var inst_34370 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34604_36121 = state_34478__$1;
(statearr_34604_36121[(2)] = inst_34370);

(statearr_34604_36121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (42))){
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34478__$1,(45),dchan);
} else {
if((state_val_34480 === (37))){
var inst_34411 = (state_34478[(23)]);
var inst_34436 = (state_34478[(22)]);
var inst_34276 = (state_34478[(12)]);
var inst_34436__$1 = cljs.core.first(inst_34411);
var inst_34437 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34436__$1,inst_34276,done);
var state_34478__$1 = (function (){var statearr_34605 = state_34478;
(statearr_34605[(22)] = inst_34436__$1);

return statearr_34605;
})();
if(cljs.core.truth_(inst_34437)){
var statearr_34606_36122 = state_34478__$1;
(statearr_34606_36122[(1)] = (39));

} else {
var statearr_34607_36123 = state_34478__$1;
(statearr_34607_36123[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (8))){
var inst_34292 = (state_34478[(13)]);
var inst_34291 = (state_34478[(14)]);
var inst_34295 = (inst_34292 < inst_34291);
var inst_34296 = inst_34295;
var state_34478__$1 = state_34478;
if(cljs.core.truth_(inst_34296)){
var statearr_34609_36124 = state_34478__$1;
(statearr_34609_36124[(1)] = (10));

} else {
var statearr_34610_36125 = state_34478__$1;
(statearr_34610_36125[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33269__auto__ = null;
var cljs$core$async$mult_$_state_machine__33269__auto____0 = (function (){
var statearr_34611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34611[(0)] = cljs$core$async$mult_$_state_machine__33269__auto__);

(statearr_34611[(1)] = (1));

return statearr_34611;
});
var cljs$core$async$mult_$_state_machine__33269__auto____1 = (function (state_34478){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_34478);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e34612){var ex__33272__auto__ = e34612;
var statearr_34613_36130 = state_34478;
(statearr_34613_36130[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_34478[(4)]))){
var statearr_34614_36131 = state_34478;
(statearr_34614_36131[(1)] = cljs.core.first((state_34478[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36133 = state_34478;
state_34478 = G__36133;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33269__auto__ = function(state_34478){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33269__auto____1.call(this,state_34478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33269__auto____0;
cljs$core$async$mult_$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33269__auto____1;
return cljs$core$async$mult_$_state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_34615 = f__33433__auto__();
(statearr_34615[(6)] = c__33432__auto___36070);

return statearr_34615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34617 = arguments.length;
switch (G__34617) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36135 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36135(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36136 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36136(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36140 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36140(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36141 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36141(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36142 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36142(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36145 = arguments.length;
var i__5770__auto___36146 = (0);
while(true){
if((i__5770__auto___36146 < len__5769__auto___36145)){
args__5775__auto__.push((arguments[i__5770__auto___36146]));

var G__36147 = (i__5770__auto___36146 + (1));
i__5770__auto___36146 = G__36147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34628){
var map__34629 = p__34628;
var map__34629__$1 = cljs.core.__destructure_map(map__34629);
var opts = map__34629__$1;
var statearr_34630_36148 = state;
(statearr_34630_36148[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34631_36149 = state;
(statearr_34631_36149[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34632_36150 = state;
(statearr_34632_36150[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34624){
var G__34625 = cljs.core.first(seq34624);
var seq34624__$1 = cljs.core.next(seq34624);
var G__34626 = cljs.core.first(seq34624__$1);
var seq34624__$2 = cljs.core.next(seq34624__$1);
var G__34627 = cljs.core.first(seq34624__$2);
var seq34624__$3 = cljs.core.next(seq34624__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34625,G__34626,G__34627,seq34624__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34635 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34636){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34636 = meta34636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34637,meta34636__$1){
var self__ = this;
var _34637__$1 = this;
return (new cljs.core.async.t_cljs$core$async34635(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34636__$1));
}));

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34637){
var self__ = this;
var _34637__$1 = this;
return self__.meta34636;
}));

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34636","meta34636",1872020403,null)], null);
}));

(cljs.core.async.t_cljs$core$async34635.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34635");

(cljs.core.async.t_cljs$core$async34635.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34635");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34635.
 */
cljs.core.async.__GT_t_cljs$core$async34635 = (function cljs$core$async$__GT_t_cljs$core$async34635(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34636){
return (new cljs.core.async.t_cljs$core$async34635(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34636));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async34635(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33432__auto___36153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_34724){
var state_val_34725 = (state_34724[(1)]);
if((state_val_34725 === (7))){
var inst_34667 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34667)){
var statearr_34730_36154 = state_34724__$1;
(statearr_34730_36154[(1)] = (8));

} else {
var statearr_34731_36155 = state_34724__$1;
(statearr_34731_36155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (20))){
var inst_34660 = (state_34724[(7)]);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34724__$1,(23),out,inst_34660);
} else {
if((state_val_34725 === (1))){
var inst_34643 = calc_state();
var inst_34644 = cljs.core.__destructure_map(inst_34643);
var inst_34645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34644,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34644,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34644,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34648 = inst_34643;
var state_34724__$1 = (function (){var statearr_34736 = state_34724;
(statearr_34736[(8)] = inst_34647);

(statearr_34736[(9)] = inst_34646);

(statearr_34736[(10)] = inst_34645);

(statearr_34736[(11)] = inst_34648);

return statearr_34736;
})();
var statearr_34737_36156 = state_34724__$1;
(statearr_34737_36156[(2)] = null);

(statearr_34737_36156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (24))){
var inst_34651 = (state_34724[(12)]);
var inst_34648 = inst_34651;
var state_34724__$1 = (function (){var statearr_34738 = state_34724;
(statearr_34738[(11)] = inst_34648);

return statearr_34738;
})();
var statearr_34739_36157 = state_34724__$1;
(statearr_34739_36157[(2)] = null);

(statearr_34739_36157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (4))){
var inst_34660 = (state_34724[(7)]);
var inst_34662 = (state_34724[(13)]);
var inst_34659 = (state_34724[(2)]);
var inst_34660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34659,(0),null);
var inst_34661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34659,(1),null);
var inst_34662__$1 = (inst_34660__$1 == null);
var state_34724__$1 = (function (){var statearr_34740 = state_34724;
(statearr_34740[(7)] = inst_34660__$1);

(statearr_34740[(14)] = inst_34661);

(statearr_34740[(13)] = inst_34662__$1);

return statearr_34740;
})();
if(cljs.core.truth_(inst_34662__$1)){
var statearr_34741_36158 = state_34724__$1;
(statearr_34741_36158[(1)] = (5));

} else {
var statearr_34742_36159 = state_34724__$1;
(statearr_34742_36159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (15))){
var inst_34681 = (state_34724[(15)]);
var inst_34652 = (state_34724[(16)]);
var inst_34681__$1 = cljs.core.empty_QMARK_(inst_34652);
var state_34724__$1 = (function (){var statearr_34743 = state_34724;
(statearr_34743[(15)] = inst_34681__$1);

return statearr_34743;
})();
if(inst_34681__$1){
var statearr_34744_36168 = state_34724__$1;
(statearr_34744_36168[(1)] = (17));

} else {
var statearr_34748_36169 = state_34724__$1;
(statearr_34748_36169[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (21))){
var inst_34651 = (state_34724[(12)]);
var inst_34648 = inst_34651;
var state_34724__$1 = (function (){var statearr_34750 = state_34724;
(statearr_34750[(11)] = inst_34648);

return statearr_34750;
})();
var statearr_34751_36170 = state_34724__$1;
(statearr_34751_36170[(2)] = null);

(statearr_34751_36170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (13))){
var inst_34674 = (state_34724[(2)]);
var inst_34675 = calc_state();
var inst_34648 = inst_34675;
var state_34724__$1 = (function (){var statearr_34752 = state_34724;
(statearr_34752[(17)] = inst_34674);

(statearr_34752[(11)] = inst_34648);

return statearr_34752;
})();
var statearr_34753_36171 = state_34724__$1;
(statearr_34753_36171[(2)] = null);

(statearr_34753_36171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (22))){
var inst_34701 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34754_36172 = state_34724__$1;
(statearr_34754_36172[(2)] = inst_34701);

(statearr_34754_36172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (6))){
var inst_34661 = (state_34724[(14)]);
var inst_34665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34661,change);
var state_34724__$1 = state_34724;
var statearr_34756_36177 = state_34724__$1;
(statearr_34756_36177[(2)] = inst_34665);

(statearr_34756_36177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (25))){
var state_34724__$1 = state_34724;
var statearr_34757_36178 = state_34724__$1;
(statearr_34757_36178[(2)] = null);

(statearr_34757_36178[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (17))){
var inst_34653 = (state_34724[(18)]);
var inst_34661 = (state_34724[(14)]);
var inst_34683 = (inst_34653.cljs$core$IFn$_invoke$arity$1 ? inst_34653.cljs$core$IFn$_invoke$arity$1(inst_34661) : inst_34653.call(null,inst_34661));
var inst_34684 = cljs.core.not(inst_34683);
var state_34724__$1 = state_34724;
var statearr_34758_36179 = state_34724__$1;
(statearr_34758_36179[(2)] = inst_34684);

(statearr_34758_36179[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (3))){
var inst_34705 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34724__$1,inst_34705);
} else {
if((state_val_34725 === (12))){
var state_34724__$1 = state_34724;
var statearr_34763_36180 = state_34724__$1;
(statearr_34763_36180[(2)] = null);

(statearr_34763_36180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (2))){
var inst_34651 = (state_34724[(12)]);
var inst_34648 = (state_34724[(11)]);
var inst_34651__$1 = cljs.core.__destructure_map(inst_34648);
var inst_34652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34651__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34651__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34651__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34724__$1 = (function (){var statearr_34768 = state_34724;
(statearr_34768[(12)] = inst_34651__$1);

(statearr_34768[(18)] = inst_34653);

(statearr_34768[(16)] = inst_34652);

return statearr_34768;
})();
return cljs.core.async.ioc_alts_BANG_(state_34724__$1,(4),inst_34654);
} else {
if((state_val_34725 === (23))){
var inst_34692 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34692)){
var statearr_34773_36181 = state_34724__$1;
(statearr_34773_36181[(1)] = (24));

} else {
var statearr_34774_36182 = state_34724__$1;
(statearr_34774_36182[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (19))){
var inst_34687 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34778_36183 = state_34724__$1;
(statearr_34778_36183[(2)] = inst_34687);

(statearr_34778_36183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (11))){
var inst_34661 = (state_34724[(14)]);
var inst_34671 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34661);
var state_34724__$1 = state_34724;
var statearr_34780_36184 = state_34724__$1;
(statearr_34780_36184[(2)] = inst_34671);

(statearr_34780_36184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (9))){
var inst_34678 = (state_34724[(19)]);
var inst_34652 = (state_34724[(16)]);
var inst_34661 = (state_34724[(14)]);
var inst_34678__$1 = (inst_34652.cljs$core$IFn$_invoke$arity$1 ? inst_34652.cljs$core$IFn$_invoke$arity$1(inst_34661) : inst_34652.call(null,inst_34661));
var state_34724__$1 = (function (){var statearr_34784 = state_34724;
(statearr_34784[(19)] = inst_34678__$1);

return statearr_34784;
})();
if(cljs.core.truth_(inst_34678__$1)){
var statearr_34786_36185 = state_34724__$1;
(statearr_34786_36185[(1)] = (14));

} else {
var statearr_34787_36186 = state_34724__$1;
(statearr_34787_36186[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (5))){
var inst_34662 = (state_34724[(13)]);
var state_34724__$1 = state_34724;
var statearr_34788_36187 = state_34724__$1;
(statearr_34788_36187[(2)] = inst_34662);

(statearr_34788_36187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (14))){
var inst_34678 = (state_34724[(19)]);
var state_34724__$1 = state_34724;
var statearr_34790_36188 = state_34724__$1;
(statearr_34790_36188[(2)] = inst_34678);

(statearr_34790_36188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (26))){
var inst_34697 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34791_36189 = state_34724__$1;
(statearr_34791_36189[(2)] = inst_34697);

(statearr_34791_36189[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (16))){
var inst_34689 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34689)){
var statearr_34799_36190 = state_34724__$1;
(statearr_34799_36190[(1)] = (20));

} else {
var statearr_34805_36191 = state_34724__$1;
(statearr_34805_36191[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (10))){
var inst_34703 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34806_36192 = state_34724__$1;
(statearr_34806_36192[(2)] = inst_34703);

(statearr_34806_36192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (18))){
var inst_34681 = (state_34724[(15)]);
var state_34724__$1 = state_34724;
var statearr_34807_36193 = state_34724__$1;
(statearr_34807_36193[(2)] = inst_34681);

(statearr_34807_36193[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (8))){
var inst_34660 = (state_34724[(7)]);
var inst_34669 = (inst_34660 == null);
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34669)){
var statearr_34808_36194 = state_34724__$1;
(statearr_34808_36194[(1)] = (11));

} else {
var statearr_34809_36195 = state_34724__$1;
(statearr_34809_36195[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33269__auto__ = null;
var cljs$core$async$mix_$_state_machine__33269__auto____0 = (function (){
var statearr_34810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34810[(0)] = cljs$core$async$mix_$_state_machine__33269__auto__);

(statearr_34810[(1)] = (1));

return statearr_34810;
});
var cljs$core$async$mix_$_state_machine__33269__auto____1 = (function (state_34724){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_34724);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e34811){var ex__33272__auto__ = e34811;
var statearr_34815_36196 = state_34724;
(statearr_34815_36196[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_34724[(4)]))){
var statearr_34816_36197 = state_34724;
(statearr_34816_36197[(1)] = cljs.core.first((state_34724[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36198 = state_34724;
state_34724 = G__36198;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33269__auto__ = function(state_34724){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33269__auto____1.call(this,state_34724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33269__auto____0;
cljs$core$async$mix_$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33269__auto____1;
return cljs$core$async$mix_$_state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_34818 = f__33433__auto__();
(statearr_34818[(6)] = c__33432__auto___36153);

return statearr_34818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36203 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36203(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36204 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36204(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36205 = (function() {
var G__36206 = null;
var G__36206__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36206__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36206 = function(p,v){
switch(arguments.length){
case 1:
return G__36206__1.call(this,p);
case 2:
return G__36206__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36206.cljs$core$IFn$_invoke$arity$1 = G__36206__1;
G__36206.cljs$core$IFn$_invoke$arity$2 = G__36206__2;
return G__36206;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34852 = arguments.length;
switch (G__34852) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36205(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36205(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34856 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34857){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34857 = meta34857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34858,meta34857__$1){
var self__ = this;
var _34858__$1 = this;
return (new cljs.core.async.t_cljs$core$async34856(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34857__$1));
}));

(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34858){
var self__ = this;
var _34858__$1 = this;
return self__.meta34857;
}));

(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34856.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34857","meta34857",-1646199659,null)], null);
}));

(cljs.core.async.t_cljs$core$async34856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34856");

(cljs.core.async.t_cljs$core$async34856.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34856.
 */
cljs.core.async.__GT_t_cljs$core$async34856 = (function cljs$core$async$__GT_t_cljs$core$async34856(ch,topic_fn,buf_fn,mults,ensure_mult,meta34857){
return (new cljs.core.async.t_cljs$core$async34856(ch,topic_fn,buf_fn,mults,ensure_mult,meta34857));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34855 = arguments.length;
switch (G__34855) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34853_SHARP_){
if(cljs.core.truth_((p1__34853_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34853_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34853_SHARP_.call(null,topic)))){
return p1__34853_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34853_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async34856(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33432__auto___36222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_34933){
var state_val_34934 = (state_34933[(1)]);
if((state_val_34934 === (7))){
var inst_34929 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34936_36223 = state_34933__$1;
(statearr_34936_36223[(2)] = inst_34929);

(statearr_34936_36223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (20))){
var state_34933__$1 = state_34933;
var statearr_34937_36224 = state_34933__$1;
(statearr_34937_36224[(2)] = null);

(statearr_34937_36224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (1))){
var state_34933__$1 = state_34933;
var statearr_34938_36228 = state_34933__$1;
(statearr_34938_36228[(2)] = null);

(statearr_34938_36228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (24))){
var inst_34911 = (state_34933[(7)]);
var inst_34921 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34911);
var state_34933__$1 = state_34933;
var statearr_34939_36229 = state_34933__$1;
(statearr_34939_36229[(2)] = inst_34921);

(statearr_34939_36229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (4))){
var inst_34861 = (state_34933[(8)]);
var inst_34861__$1 = (state_34933[(2)]);
var inst_34862 = (inst_34861__$1 == null);
var state_34933__$1 = (function (){var statearr_34942 = state_34933;
(statearr_34942[(8)] = inst_34861__$1);

return statearr_34942;
})();
if(cljs.core.truth_(inst_34862)){
var statearr_34943_36230 = state_34933__$1;
(statearr_34943_36230[(1)] = (5));

} else {
var statearr_34944_36231 = state_34933__$1;
(statearr_34944_36231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (15))){
var inst_34905 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34945_36232 = state_34933__$1;
(statearr_34945_36232[(2)] = inst_34905);

(statearr_34945_36232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (21))){
var inst_34926 = (state_34933[(2)]);
var state_34933__$1 = (function (){var statearr_34946 = state_34933;
(statearr_34946[(9)] = inst_34926);

return statearr_34946;
})();
var statearr_34947_36233 = state_34933__$1;
(statearr_34947_36233[(2)] = null);

(statearr_34947_36233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (13))){
var inst_34885 = (state_34933[(10)]);
var inst_34887 = cljs.core.chunked_seq_QMARK_(inst_34885);
var state_34933__$1 = state_34933;
if(inst_34887){
var statearr_34948_36234 = state_34933__$1;
(statearr_34948_36234[(1)] = (16));

} else {
var statearr_34949_36235 = state_34933__$1;
(statearr_34949_36235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (22))){
var inst_34918 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
if(cljs.core.truth_(inst_34918)){
var statearr_34950_36236 = state_34933__$1;
(statearr_34950_36236[(1)] = (23));

} else {
var statearr_34951_36237 = state_34933__$1;
(statearr_34951_36237[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (6))){
var inst_34913 = (state_34933[(11)]);
var inst_34861 = (state_34933[(8)]);
var inst_34911 = (state_34933[(7)]);
var inst_34911__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34861) : topic_fn.call(null,inst_34861));
var inst_34912 = cljs.core.deref(mults);
var inst_34913__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34912,inst_34911__$1);
var state_34933__$1 = (function (){var statearr_34952 = state_34933;
(statearr_34952[(11)] = inst_34913__$1);

(statearr_34952[(7)] = inst_34911__$1);

return statearr_34952;
})();
if(cljs.core.truth_(inst_34913__$1)){
var statearr_34953_36242 = state_34933__$1;
(statearr_34953_36242[(1)] = (19));

} else {
var statearr_34954_36243 = state_34933__$1;
(statearr_34954_36243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (25))){
var inst_34923 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34955_36244 = state_34933__$1;
(statearr_34955_36244[(2)] = inst_34923);

(statearr_34955_36244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (17))){
var inst_34885 = (state_34933[(10)]);
var inst_34896 = cljs.core.first(inst_34885);
var inst_34897 = cljs.core.async.muxch_STAR_(inst_34896);
var inst_34898 = cljs.core.async.close_BANG_(inst_34897);
var inst_34899 = cljs.core.next(inst_34885);
var inst_34871 = inst_34899;
var inst_34872 = null;
var inst_34873 = (0);
var inst_34874 = (0);
var state_34933__$1 = (function (){var statearr_34956 = state_34933;
(statearr_34956[(12)] = inst_34873);

(statearr_34956[(13)] = inst_34898);

(statearr_34956[(14)] = inst_34871);

(statearr_34956[(15)] = inst_34872);

(statearr_34956[(16)] = inst_34874);

return statearr_34956;
})();
var statearr_34957_36248 = state_34933__$1;
(statearr_34957_36248[(2)] = null);

(statearr_34957_36248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (3))){
var inst_34931 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34933__$1,inst_34931);
} else {
if((state_val_34934 === (12))){
var inst_34907 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34958_36249 = state_34933__$1;
(statearr_34958_36249[(2)] = inst_34907);

(statearr_34958_36249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (2))){
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34933__$1,(4),ch);
} else {
if((state_val_34934 === (23))){
var state_34933__$1 = state_34933;
var statearr_34959_36253 = state_34933__$1;
(statearr_34959_36253[(2)] = null);

(statearr_34959_36253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (19))){
var inst_34913 = (state_34933[(11)]);
var inst_34861 = (state_34933[(8)]);
var inst_34916 = cljs.core.async.muxch_STAR_(inst_34913);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34933__$1,(22),inst_34916,inst_34861);
} else {
if((state_val_34934 === (11))){
var inst_34885 = (state_34933[(10)]);
var inst_34871 = (state_34933[(14)]);
var inst_34885__$1 = cljs.core.seq(inst_34871);
var state_34933__$1 = (function (){var statearr_34960 = state_34933;
(statearr_34960[(10)] = inst_34885__$1);

return statearr_34960;
})();
if(inst_34885__$1){
var statearr_34961_36254 = state_34933__$1;
(statearr_34961_36254[(1)] = (13));

} else {
var statearr_34962_36255 = state_34933__$1;
(statearr_34962_36255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (9))){
var inst_34909 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34963_36256 = state_34933__$1;
(statearr_34963_36256[(2)] = inst_34909);

(statearr_34963_36256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (5))){
var inst_34868 = cljs.core.deref(mults);
var inst_34869 = cljs.core.vals(inst_34868);
var inst_34870 = cljs.core.seq(inst_34869);
var inst_34871 = inst_34870;
var inst_34872 = null;
var inst_34873 = (0);
var inst_34874 = (0);
var state_34933__$1 = (function (){var statearr_34964 = state_34933;
(statearr_34964[(12)] = inst_34873);

(statearr_34964[(14)] = inst_34871);

(statearr_34964[(15)] = inst_34872);

(statearr_34964[(16)] = inst_34874);

return statearr_34964;
})();
var statearr_34965_36257 = state_34933__$1;
(statearr_34965_36257[(2)] = null);

(statearr_34965_36257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (14))){
var state_34933__$1 = state_34933;
var statearr_34971_36258 = state_34933__$1;
(statearr_34971_36258[(2)] = null);

(statearr_34971_36258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (16))){
var inst_34885 = (state_34933[(10)]);
var inst_34891 = cljs.core.chunk_first(inst_34885);
var inst_34892 = cljs.core.chunk_rest(inst_34885);
var inst_34893 = cljs.core.count(inst_34891);
var inst_34871 = inst_34892;
var inst_34872 = inst_34891;
var inst_34873 = inst_34893;
var inst_34874 = (0);
var state_34933__$1 = (function (){var statearr_34972 = state_34933;
(statearr_34972[(12)] = inst_34873);

(statearr_34972[(14)] = inst_34871);

(statearr_34972[(15)] = inst_34872);

(statearr_34972[(16)] = inst_34874);

return statearr_34972;
})();
var statearr_34973_36262 = state_34933__$1;
(statearr_34973_36262[(2)] = null);

(statearr_34973_36262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (10))){
var inst_34873 = (state_34933[(12)]);
var inst_34871 = (state_34933[(14)]);
var inst_34872 = (state_34933[(15)]);
var inst_34874 = (state_34933[(16)]);
var inst_34879 = cljs.core._nth(inst_34872,inst_34874);
var inst_34880 = cljs.core.async.muxch_STAR_(inst_34879);
var inst_34881 = cljs.core.async.close_BANG_(inst_34880);
var inst_34882 = (inst_34874 + (1));
var tmp34967 = inst_34873;
var tmp34968 = inst_34871;
var tmp34969 = inst_34872;
var inst_34871__$1 = tmp34968;
var inst_34872__$1 = tmp34969;
var inst_34873__$1 = tmp34967;
var inst_34874__$1 = inst_34882;
var state_34933__$1 = (function (){var statearr_34974 = state_34933;
(statearr_34974[(12)] = inst_34873__$1);

(statearr_34974[(14)] = inst_34871__$1);

(statearr_34974[(15)] = inst_34872__$1);

(statearr_34974[(17)] = inst_34881);

(statearr_34974[(16)] = inst_34874__$1);

return statearr_34974;
})();
var statearr_34976_36263 = state_34933__$1;
(statearr_34976_36263[(2)] = null);

(statearr_34976_36263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (18))){
var inst_34902 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34980_36267 = state_34933__$1;
(statearr_34980_36267[(2)] = inst_34902);

(statearr_34980_36267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (8))){
var inst_34873 = (state_34933[(12)]);
var inst_34874 = (state_34933[(16)]);
var inst_34876 = (inst_34874 < inst_34873);
var inst_34877 = inst_34876;
var state_34933__$1 = state_34933;
if(cljs.core.truth_(inst_34877)){
var statearr_34981_36268 = state_34933__$1;
(statearr_34981_36268[(1)] = (10));

} else {
var statearr_34982_36269 = state_34933__$1;
(statearr_34982_36269[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_34984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34984[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_34984[(1)] = (1));

return statearr_34984;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_34933){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_34933);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e34985){var ex__33272__auto__ = e34985;
var statearr_34986_36270 = state_34933;
(statearr_34986_36270[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_34933[(4)]))){
var statearr_34987_36271 = state_34933;
(statearr_34987_36271[(1)] = cljs.core.first((state_34933[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36272 = state_34933;
state_34933 = G__36272;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_34933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_34933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_34989 = f__33433__auto__();
(statearr_34989[(6)] = c__33432__auto___36222);

return statearr_34989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34994 = arguments.length;
switch (G__34994) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35006 = arguments.length;
switch (G__35006) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35030 = arguments.length;
switch (G__35030) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33432__auto___36290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_35080){
var state_val_35081 = (state_35080[(1)]);
if((state_val_35081 === (7))){
var state_35080__$1 = state_35080;
var statearr_35086_36291 = state_35080__$1;
(statearr_35086_36291[(2)] = null);

(statearr_35086_36291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (1))){
var state_35080__$1 = state_35080;
var statearr_35087_36293 = state_35080__$1;
(statearr_35087_36293[(2)] = null);

(statearr_35087_36293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (4))){
var inst_35037 = (state_35080[(7)]);
var inst_35036 = (state_35080[(8)]);
var inst_35039 = (inst_35037 < inst_35036);
var state_35080__$1 = state_35080;
if(cljs.core.truth_(inst_35039)){
var statearr_35088_36294 = state_35080__$1;
(statearr_35088_36294[(1)] = (6));

} else {
var statearr_35090_36296 = state_35080__$1;
(statearr_35090_36296[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (15))){
var inst_35066 = (state_35080[(9)]);
var inst_35071 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35066);
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35080__$1,(17),out,inst_35071);
} else {
if((state_val_35081 === (13))){
var inst_35066 = (state_35080[(9)]);
var inst_35066__$1 = (state_35080[(2)]);
var inst_35067 = cljs.core.some(cljs.core.nil_QMARK_,inst_35066__$1);
var state_35080__$1 = (function (){var statearr_35092 = state_35080;
(statearr_35092[(9)] = inst_35066__$1);

return statearr_35092;
})();
if(cljs.core.truth_(inst_35067)){
var statearr_35093_36297 = state_35080__$1;
(statearr_35093_36297[(1)] = (14));

} else {
var statearr_35095_36298 = state_35080__$1;
(statearr_35095_36298[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (6))){
var state_35080__$1 = state_35080;
var statearr_35096_36299 = state_35080__$1;
(statearr_35096_36299[(2)] = null);

(statearr_35096_36299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (17))){
var inst_35073 = (state_35080[(2)]);
var state_35080__$1 = (function (){var statearr_35099 = state_35080;
(statearr_35099[(10)] = inst_35073);

return statearr_35099;
})();
var statearr_35100_36300 = state_35080__$1;
(statearr_35100_36300[(2)] = null);

(statearr_35100_36300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (3))){
var inst_35078 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35080__$1,inst_35078);
} else {
if((state_val_35081 === (12))){
var _ = (function (){var statearr_35102 = state_35080;
(statearr_35102[(4)] = cljs.core.rest((state_35080[(4)])));

return statearr_35102;
})();
var state_35080__$1 = state_35080;
var ex35098 = (state_35080__$1[(2)]);
var statearr_35103_36301 = state_35080__$1;
(statearr_35103_36301[(5)] = ex35098);


if((ex35098 instanceof Object)){
var statearr_35105_36302 = state_35080__$1;
(statearr_35105_36302[(1)] = (11));

(statearr_35105_36302[(5)] = null);

} else {
throw ex35098;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (2))){
var inst_35035 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35036 = cnt;
var inst_35037 = (0);
var state_35080__$1 = (function (){var statearr_35107 = state_35080;
(statearr_35107[(7)] = inst_35037);

(statearr_35107[(11)] = inst_35035);

(statearr_35107[(8)] = inst_35036);

return statearr_35107;
})();
var statearr_35109_36303 = state_35080__$1;
(statearr_35109_36303[(2)] = null);

(statearr_35109_36303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (11))){
var inst_35045 = (state_35080[(2)]);
var inst_35046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35080__$1 = (function (){var statearr_35113 = state_35080;
(statearr_35113[(12)] = inst_35045);

return statearr_35113;
})();
var statearr_35114_36304 = state_35080__$1;
(statearr_35114_36304[(2)] = inst_35046);

(statearr_35114_36304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (9))){
var inst_35037 = (state_35080[(7)]);
var _ = (function (){var statearr_35115 = state_35080;
(statearr_35115[(4)] = cljs.core.cons((12),(state_35080[(4)])));

return statearr_35115;
})();
var inst_35052 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35037) : chs__$1.call(null,inst_35037));
var inst_35053 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35037) : done.call(null,inst_35037));
var inst_35054 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35052,inst_35053);
var ___$1 = (function (){var statearr_35116 = state_35080;
(statearr_35116[(4)] = cljs.core.rest((state_35080[(4)])));

return statearr_35116;
})();
var state_35080__$1 = state_35080;
var statearr_35117_36305 = state_35080__$1;
(statearr_35117_36305[(2)] = inst_35054);

(statearr_35117_36305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (5))){
var inst_35064 = (state_35080[(2)]);
var state_35080__$1 = (function (){var statearr_35118 = state_35080;
(statearr_35118[(13)] = inst_35064);

return statearr_35118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35080__$1,(13),dchan);
} else {
if((state_val_35081 === (14))){
var inst_35069 = cljs.core.async.close_BANG_(out);
var state_35080__$1 = state_35080;
var statearr_35119_36306 = state_35080__$1;
(statearr_35119_36306[(2)] = inst_35069);

(statearr_35119_36306[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (16))){
var inst_35076 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35120_36307 = state_35080__$1;
(statearr_35120_36307[(2)] = inst_35076);

(statearr_35120_36307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (10))){
var inst_35037 = (state_35080[(7)]);
var inst_35057 = (state_35080[(2)]);
var inst_35058 = (inst_35037 + (1));
var inst_35037__$1 = inst_35058;
var state_35080__$1 = (function (){var statearr_35121 = state_35080;
(statearr_35121[(7)] = inst_35037__$1);

(statearr_35121[(14)] = inst_35057);

return statearr_35121;
})();
var statearr_35122_36308 = state_35080__$1;
(statearr_35122_36308[(2)] = null);

(statearr_35122_36308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (8))){
var inst_35062 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35123_36309 = state_35080__$1;
(statearr_35123_36309[(2)] = inst_35062);

(statearr_35123_36309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_35124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35124[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_35124[(1)] = (1));

return statearr_35124;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_35080){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_35080);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e35125){var ex__33272__auto__ = e35125;
var statearr_35126_36315 = state_35080;
(statearr_35126_36315[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_35080[(4)]))){
var statearr_35127_36316 = state_35080;
(statearr_35127_36316[(1)] = cljs.core.first((state_35080[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36317 = state_35080;
state_35080 = G__36317;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_35080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_35080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_35128 = f__33433__auto__();
(statearr_35128[(6)] = c__33432__auto___36290);

return statearr_35128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35131 = arguments.length;
switch (G__35131) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33432__auto___36321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_35170){
var state_val_35171 = (state_35170[(1)]);
if((state_val_35171 === (7))){
var inst_35148 = (state_35170[(7)]);
var inst_35147 = (state_35170[(8)]);
var inst_35147__$1 = (state_35170[(2)]);
var inst_35148__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35147__$1,(0),null);
var inst_35149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35147__$1,(1),null);
var inst_35150 = (inst_35148__$1 == null);
var state_35170__$1 = (function (){var statearr_35172 = state_35170;
(statearr_35172[(9)] = inst_35149);

(statearr_35172[(7)] = inst_35148__$1);

(statearr_35172[(8)] = inst_35147__$1);

return statearr_35172;
})();
if(cljs.core.truth_(inst_35150)){
var statearr_35173_36322 = state_35170__$1;
(statearr_35173_36322[(1)] = (8));

} else {
var statearr_35174_36323 = state_35170__$1;
(statearr_35174_36323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (1))){
var inst_35137 = cljs.core.vec(chs);
var inst_35138 = inst_35137;
var state_35170__$1 = (function (){var statearr_35176 = state_35170;
(statearr_35176[(10)] = inst_35138);

return statearr_35176;
})();
var statearr_35177_36324 = state_35170__$1;
(statearr_35177_36324[(2)] = null);

(statearr_35177_36324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (4))){
var inst_35138 = (state_35170[(10)]);
var state_35170__$1 = state_35170;
return cljs.core.async.ioc_alts_BANG_(state_35170__$1,(7),inst_35138);
} else {
if((state_val_35171 === (6))){
var inst_35164 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
var statearr_35182_36325 = state_35170__$1;
(statearr_35182_36325[(2)] = inst_35164);

(statearr_35182_36325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (3))){
var inst_35166 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35170__$1,inst_35166);
} else {
if((state_val_35171 === (2))){
var inst_35138 = (state_35170[(10)]);
var inst_35140 = cljs.core.count(inst_35138);
var inst_35141 = (inst_35140 > (0));
var state_35170__$1 = state_35170;
if(cljs.core.truth_(inst_35141)){
var statearr_35184_36326 = state_35170__$1;
(statearr_35184_36326[(1)] = (4));

} else {
var statearr_35185_36327 = state_35170__$1;
(statearr_35185_36327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (11))){
var inst_35138 = (state_35170[(10)]);
var inst_35157 = (state_35170[(2)]);
var tmp35183 = inst_35138;
var inst_35138__$1 = tmp35183;
var state_35170__$1 = (function (){var statearr_35186 = state_35170;
(statearr_35186[(11)] = inst_35157);

(statearr_35186[(10)] = inst_35138__$1);

return statearr_35186;
})();
var statearr_35187_36328 = state_35170__$1;
(statearr_35187_36328[(2)] = null);

(statearr_35187_36328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (9))){
var inst_35148 = (state_35170[(7)]);
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35170__$1,(11),out,inst_35148);
} else {
if((state_val_35171 === (5))){
var inst_35162 = cljs.core.async.close_BANG_(out);
var state_35170__$1 = state_35170;
var statearr_35188_36329 = state_35170__$1;
(statearr_35188_36329[(2)] = inst_35162);

(statearr_35188_36329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (10))){
var inst_35160 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
var statearr_35193_36330 = state_35170__$1;
(statearr_35193_36330[(2)] = inst_35160);

(statearr_35193_36330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (8))){
var inst_35149 = (state_35170[(9)]);
var inst_35138 = (state_35170[(10)]);
var inst_35148 = (state_35170[(7)]);
var inst_35147 = (state_35170[(8)]);
var inst_35152 = (function (){var cs = inst_35138;
var vec__35143 = inst_35147;
var v = inst_35148;
var c = inst_35149;
return (function (p1__35129_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35129_SHARP_);
});
})();
var inst_35153 = cljs.core.filterv(inst_35152,inst_35138);
var inst_35138__$1 = inst_35153;
var state_35170__$1 = (function (){var statearr_35194 = state_35170;
(statearr_35194[(10)] = inst_35138__$1);

return statearr_35194;
})();
var statearr_35195_36331 = state_35170__$1;
(statearr_35195_36331[(2)] = null);

(statearr_35195_36331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_35196 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35196[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_35196[(1)] = (1));

return statearr_35196;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_35170){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_35170);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e35197){var ex__33272__auto__ = e35197;
var statearr_35198_36332 = state_35170;
(statearr_35198_36332[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_35170[(4)]))){
var statearr_35199_36333 = state_35170;
(statearr_35199_36333[(1)] = cljs.core.first((state_35170[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36334 = state_35170;
state_35170 = G__36334;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_35170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_35170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_35204 = f__33433__auto__();
(statearr_35204[(6)] = c__33432__auto___36321);

return statearr_35204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35206 = arguments.length;
switch (G__35206) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33432__auto___36336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_35231){
var state_val_35232 = (state_35231[(1)]);
if((state_val_35232 === (7))){
var inst_35212 = (state_35231[(7)]);
var inst_35212__$1 = (state_35231[(2)]);
var inst_35213 = (inst_35212__$1 == null);
var inst_35214 = cljs.core.not(inst_35213);
var state_35231__$1 = (function (){var statearr_35234 = state_35231;
(statearr_35234[(7)] = inst_35212__$1);

return statearr_35234;
})();
if(inst_35214){
var statearr_35235_36337 = state_35231__$1;
(statearr_35235_36337[(1)] = (8));

} else {
var statearr_35236_36338 = state_35231__$1;
(statearr_35236_36338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (1))){
var inst_35207 = (0);
var state_35231__$1 = (function (){var statearr_35237 = state_35231;
(statearr_35237[(8)] = inst_35207);

return statearr_35237;
})();
var statearr_35238_36339 = state_35231__$1;
(statearr_35238_36339[(2)] = null);

(statearr_35238_36339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (4))){
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35231__$1,(7),ch);
} else {
if((state_val_35232 === (6))){
var inst_35225 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35242_36340 = state_35231__$1;
(statearr_35242_36340[(2)] = inst_35225);

(statearr_35242_36340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (3))){
var inst_35227 = (state_35231[(2)]);
var inst_35228 = cljs.core.async.close_BANG_(out);
var state_35231__$1 = (function (){var statearr_35243 = state_35231;
(statearr_35243[(9)] = inst_35227);

return statearr_35243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35231__$1,inst_35228);
} else {
if((state_val_35232 === (2))){
var inst_35207 = (state_35231[(8)]);
var inst_35209 = (inst_35207 < n);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35209)){
var statearr_35244_36341 = state_35231__$1;
(statearr_35244_36341[(1)] = (4));

} else {
var statearr_35245_36342 = state_35231__$1;
(statearr_35245_36342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (11))){
var inst_35207 = (state_35231[(8)]);
var inst_35217 = (state_35231[(2)]);
var inst_35218 = (inst_35207 + (1));
var inst_35207__$1 = inst_35218;
var state_35231__$1 = (function (){var statearr_35246 = state_35231;
(statearr_35246[(8)] = inst_35207__$1);

(statearr_35246[(10)] = inst_35217);

return statearr_35246;
})();
var statearr_35247_36343 = state_35231__$1;
(statearr_35247_36343[(2)] = null);

(statearr_35247_36343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (9))){
var state_35231__$1 = state_35231;
var statearr_35248_36344 = state_35231__$1;
(statearr_35248_36344[(2)] = null);

(statearr_35248_36344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (5))){
var state_35231__$1 = state_35231;
var statearr_35249_36345 = state_35231__$1;
(statearr_35249_36345[(2)] = null);

(statearr_35249_36345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (10))){
var inst_35222 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35250_36346 = state_35231__$1;
(statearr_35250_36346[(2)] = inst_35222);

(statearr_35250_36346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (8))){
var inst_35212 = (state_35231[(7)]);
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35231__$1,(11),out,inst_35212);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_35251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35251[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_35251[(1)] = (1));

return statearr_35251;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_35231){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_35231);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e35252){var ex__33272__auto__ = e35252;
var statearr_35253_36347 = state_35231;
(statearr_35253_36347[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_35231[(4)]))){
var statearr_35254_36348 = state_35231;
(statearr_35254_36348[(1)] = cljs.core.first((state_35231[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36349 = state_35231;
state_35231 = G__36349;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_35231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_35231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_35255 = f__33433__auto__();
(statearr_35255[(6)] = c__33432__auto___36336);

return statearr_35255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35260 = (function (f,ch,meta35258,_,fn1,meta35261){
this.f = f;
this.ch = ch;
this.meta35258 = meta35258;
this._ = _;
this.fn1 = fn1;
this.meta35261 = meta35261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35262,meta35261__$1){
var self__ = this;
var _35262__$1 = this;
return (new cljs.core.async.t_cljs$core$async35260(self__.f,self__.ch,self__.meta35258,self__._,self__.fn1,meta35261__$1));
}));

(cljs.core.async.t_cljs$core$async35260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35262){
var self__ = this;
var _35262__$1 = this;
return self__.meta35261;
}));

(cljs.core.async.t_cljs$core$async35260.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35256_SHARP_){
var G__35263 = (((p1__35256_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35256_SHARP_) : self__.f.call(null,p1__35256_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35263) : f1.call(null,G__35263));
});
}));

(cljs.core.async.t_cljs$core$async35260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35258","meta35258",437329394,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35257","cljs.core.async/t_cljs$core$async35257",-1577947278,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35261","meta35261",115400980,null)], null);
}));

(cljs.core.async.t_cljs$core$async35260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35260");

(cljs.core.async.t_cljs$core$async35260.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35260.
 */
cljs.core.async.__GT_t_cljs$core$async35260 = (function cljs$core$async$__GT_t_cljs$core$async35260(f,ch,meta35258,_,fn1,meta35261){
return (new cljs.core.async.t_cljs$core$async35260(f,ch,meta35258,_,fn1,meta35261));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35257 = (function (f,ch,meta35258){
this.f = f;
this.ch = ch;
this.meta35258 = meta35258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35259,meta35258__$1){
var self__ = this;
var _35259__$1 = this;
return (new cljs.core.async.t_cljs$core$async35257(self__.f,self__.ch,meta35258__$1));
}));

(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35259){
var self__ = this;
var _35259__$1 = this;
return self__.meta35258;
}));

(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35260(self__.f,self__.ch,self__.meta35258,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35264 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35264) : self__.f.call(null,G__35264));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35258","meta35258",437329394,null)], null);
}));

(cljs.core.async.t_cljs$core$async35257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35257");

(cljs.core.async.t_cljs$core$async35257.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35257.
 */
cljs.core.async.__GT_t_cljs$core$async35257 = (function cljs$core$async$__GT_t_cljs$core$async35257(f,ch,meta35258){
return (new cljs.core.async.t_cljs$core$async35257(f,ch,meta35258));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35257(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35266 = (function (f,ch,meta35267){
this.f = f;
this.ch = ch;
this.meta35267 = meta35267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35268,meta35267__$1){
var self__ = this;
var _35268__$1 = this;
return (new cljs.core.async.t_cljs$core$async35266(self__.f,self__.ch,meta35267__$1));
}));

(cljs.core.async.t_cljs$core$async35266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35268){
var self__ = this;
var _35268__$1 = this;
return self__.meta35267;
}));

(cljs.core.async.t_cljs$core$async35266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35267","meta35267",1479347821,null)], null);
}));

(cljs.core.async.t_cljs$core$async35266.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35266");

(cljs.core.async.t_cljs$core$async35266.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35266");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35266.
 */
cljs.core.async.__GT_t_cljs$core$async35266 = (function cljs$core$async$__GT_t_cljs$core$async35266(f,ch,meta35267){
return (new cljs.core.async.t_cljs$core$async35266(f,ch,meta35267));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35266(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35272 = (function (p,ch,meta35273){
this.p = p;
this.ch = ch;
this.meta35273 = meta35273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35274,meta35273__$1){
var self__ = this;
var _35274__$1 = this;
return (new cljs.core.async.t_cljs$core$async35272(self__.p,self__.ch,meta35273__$1));
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35274){
var self__ = this;
var _35274__$1 = this;
return self__.meta35273;
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35273","meta35273",392385133,null)], null);
}));

(cljs.core.async.t_cljs$core$async35272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35272");

(cljs.core.async.t_cljs$core$async35272.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35272.
 */
cljs.core.async.__GT_t_cljs$core$async35272 = (function cljs$core$async$__GT_t_cljs$core$async35272(p,ch,meta35273){
return (new cljs.core.async.t_cljs$core$async35272(p,ch,meta35273));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async35272(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35280 = arguments.length;
switch (G__35280) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33432__auto___36353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_35301){
var state_val_35308 = (state_35301[(1)]);
if((state_val_35308 === (7))){
var inst_35297 = (state_35301[(2)]);
var state_35301__$1 = state_35301;
var statearr_35323_36354 = state_35301__$1;
(statearr_35323_36354[(2)] = inst_35297);

(statearr_35323_36354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (1))){
var state_35301__$1 = state_35301;
var statearr_35324_36355 = state_35301__$1;
(statearr_35324_36355[(2)] = null);

(statearr_35324_36355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (4))){
var inst_35283 = (state_35301[(7)]);
var inst_35283__$1 = (state_35301[(2)]);
var inst_35284 = (inst_35283__$1 == null);
var state_35301__$1 = (function (){var statearr_35325 = state_35301;
(statearr_35325[(7)] = inst_35283__$1);

return statearr_35325;
})();
if(cljs.core.truth_(inst_35284)){
var statearr_35326_36356 = state_35301__$1;
(statearr_35326_36356[(1)] = (5));

} else {
var statearr_35327_36357 = state_35301__$1;
(statearr_35327_36357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (6))){
var inst_35283 = (state_35301[(7)]);
var inst_35288 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35283) : p.call(null,inst_35283));
var state_35301__$1 = state_35301;
if(cljs.core.truth_(inst_35288)){
var statearr_35328_36358 = state_35301__$1;
(statearr_35328_36358[(1)] = (8));

} else {
var statearr_35329_36359 = state_35301__$1;
(statearr_35329_36359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (3))){
var inst_35299 = (state_35301[(2)]);
var state_35301__$1 = state_35301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35301__$1,inst_35299);
} else {
if((state_val_35308 === (2))){
var state_35301__$1 = state_35301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35301__$1,(4),ch);
} else {
if((state_val_35308 === (11))){
var inst_35291 = (state_35301[(2)]);
var state_35301__$1 = state_35301;
var statearr_35344_36363 = state_35301__$1;
(statearr_35344_36363[(2)] = inst_35291);

(statearr_35344_36363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (9))){
var state_35301__$1 = state_35301;
var statearr_35345_36364 = state_35301__$1;
(statearr_35345_36364[(2)] = null);

(statearr_35345_36364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (5))){
var inst_35286 = cljs.core.async.close_BANG_(out);
var state_35301__$1 = state_35301;
var statearr_35352_36365 = state_35301__$1;
(statearr_35352_36365[(2)] = inst_35286);

(statearr_35352_36365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (10))){
var inst_35294 = (state_35301[(2)]);
var state_35301__$1 = (function (){var statearr_35353 = state_35301;
(statearr_35353[(8)] = inst_35294);

return statearr_35353;
})();
var statearr_35354_36366 = state_35301__$1;
(statearr_35354_36366[(2)] = null);

(statearr_35354_36366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (8))){
var inst_35283 = (state_35301[(7)]);
var state_35301__$1 = state_35301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35301__$1,(11),out,inst_35283);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_35355 = [null,null,null,null,null,null,null,null,null];
(statearr_35355[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_35355[(1)] = (1));

return statearr_35355;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_35301){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_35301);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e35358){var ex__33272__auto__ = e35358;
var statearr_35359_36371 = state_35301;
(statearr_35359_36371[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_35301[(4)]))){
var statearr_35360_36372 = state_35301;
(statearr_35360_36372[(1)] = cljs.core.first((state_35301[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36374 = state_35301;
state_35301 = G__36374;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_35301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_35301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_35361 = f__33433__auto__();
(statearr_35361[(6)] = c__33432__auto___36353);

return statearr_35361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35364 = arguments.length;
switch (G__35364) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_35437){
var state_val_35438 = (state_35437[(1)]);
if((state_val_35438 === (7))){
var inst_35430 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35442_36381 = state_35437__$1;
(statearr_35442_36381[(2)] = inst_35430);

(statearr_35442_36381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (20))){
var inst_35395 = (state_35437[(7)]);
var inst_35406 = (state_35437[(2)]);
var inst_35407 = cljs.core.next(inst_35395);
var inst_35381 = inst_35407;
var inst_35382 = null;
var inst_35383 = (0);
var inst_35384 = (0);
var state_35437__$1 = (function (){var statearr_35443 = state_35437;
(statearr_35443[(8)] = inst_35383);

(statearr_35443[(9)] = inst_35384);

(statearr_35443[(10)] = inst_35381);

(statearr_35443[(11)] = inst_35382);

(statearr_35443[(12)] = inst_35406);

return statearr_35443;
})();
var statearr_35444_36385 = state_35437__$1;
(statearr_35444_36385[(2)] = null);

(statearr_35444_36385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (1))){
var state_35437__$1 = state_35437;
var statearr_35445_36386 = state_35437__$1;
(statearr_35445_36386[(2)] = null);

(statearr_35445_36386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (4))){
var inst_35370 = (state_35437[(13)]);
var inst_35370__$1 = (state_35437[(2)]);
var inst_35371 = (inst_35370__$1 == null);
var state_35437__$1 = (function (){var statearr_35446 = state_35437;
(statearr_35446[(13)] = inst_35370__$1);

return statearr_35446;
})();
if(cljs.core.truth_(inst_35371)){
var statearr_35447_36387 = state_35437__$1;
(statearr_35447_36387[(1)] = (5));

} else {
var statearr_35448_36388 = state_35437__$1;
(statearr_35448_36388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (15))){
var state_35437__$1 = state_35437;
var statearr_35452_36389 = state_35437__$1;
(statearr_35452_36389[(2)] = null);

(statearr_35452_36389[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (21))){
var state_35437__$1 = state_35437;
var statearr_35453_36390 = state_35437__$1;
(statearr_35453_36390[(2)] = null);

(statearr_35453_36390[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (13))){
var inst_35383 = (state_35437[(8)]);
var inst_35384 = (state_35437[(9)]);
var inst_35381 = (state_35437[(10)]);
var inst_35382 = (state_35437[(11)]);
var inst_35391 = (state_35437[(2)]);
var inst_35392 = (inst_35384 + (1));
var tmp35449 = inst_35383;
var tmp35450 = inst_35381;
var tmp35451 = inst_35382;
var inst_35381__$1 = tmp35450;
var inst_35382__$1 = tmp35451;
var inst_35383__$1 = tmp35449;
var inst_35384__$1 = inst_35392;
var state_35437__$1 = (function (){var statearr_35454 = state_35437;
(statearr_35454[(8)] = inst_35383__$1);

(statearr_35454[(9)] = inst_35384__$1);

(statearr_35454[(14)] = inst_35391);

(statearr_35454[(10)] = inst_35381__$1);

(statearr_35454[(11)] = inst_35382__$1);

return statearr_35454;
})();
var statearr_35455_36391 = state_35437__$1;
(statearr_35455_36391[(2)] = null);

(statearr_35455_36391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (22))){
var state_35437__$1 = state_35437;
var statearr_35456_36392 = state_35437__$1;
(statearr_35456_36392[(2)] = null);

(statearr_35456_36392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (6))){
var inst_35370 = (state_35437[(13)]);
var inst_35379 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35370) : f.call(null,inst_35370));
var inst_35380 = cljs.core.seq(inst_35379);
var inst_35381 = inst_35380;
var inst_35382 = null;
var inst_35383 = (0);
var inst_35384 = (0);
var state_35437__$1 = (function (){var statearr_35457 = state_35437;
(statearr_35457[(8)] = inst_35383);

(statearr_35457[(9)] = inst_35384);

(statearr_35457[(10)] = inst_35381);

(statearr_35457[(11)] = inst_35382);

return statearr_35457;
})();
var statearr_35458_36393 = state_35437__$1;
(statearr_35458_36393[(2)] = null);

(statearr_35458_36393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (17))){
var inst_35395 = (state_35437[(7)]);
var inst_35399 = cljs.core.chunk_first(inst_35395);
var inst_35400 = cljs.core.chunk_rest(inst_35395);
var inst_35401 = cljs.core.count(inst_35399);
var inst_35381 = inst_35400;
var inst_35382 = inst_35399;
var inst_35383 = inst_35401;
var inst_35384 = (0);
var state_35437__$1 = (function (){var statearr_35459 = state_35437;
(statearr_35459[(8)] = inst_35383);

(statearr_35459[(9)] = inst_35384);

(statearr_35459[(10)] = inst_35381);

(statearr_35459[(11)] = inst_35382);

return statearr_35459;
})();
var statearr_35460_36400 = state_35437__$1;
(statearr_35460_36400[(2)] = null);

(statearr_35460_36400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (3))){
var inst_35432 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35437__$1,inst_35432);
} else {
if((state_val_35438 === (12))){
var inst_35415 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35461_36401 = state_35437__$1;
(statearr_35461_36401[(2)] = inst_35415);

(statearr_35461_36401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (2))){
var state_35437__$1 = state_35437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35437__$1,(4),in$);
} else {
if((state_val_35438 === (23))){
var inst_35428 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35468_36402 = state_35437__$1;
(statearr_35468_36402[(2)] = inst_35428);

(statearr_35468_36402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (19))){
var inst_35410 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35469_36403 = state_35437__$1;
(statearr_35469_36403[(2)] = inst_35410);

(statearr_35469_36403[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (11))){
var inst_35395 = (state_35437[(7)]);
var inst_35381 = (state_35437[(10)]);
var inst_35395__$1 = cljs.core.seq(inst_35381);
var state_35437__$1 = (function (){var statearr_35470 = state_35437;
(statearr_35470[(7)] = inst_35395__$1);

return statearr_35470;
})();
if(inst_35395__$1){
var statearr_35471_36404 = state_35437__$1;
(statearr_35471_36404[(1)] = (14));

} else {
var statearr_35473_36405 = state_35437__$1;
(statearr_35473_36405[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (9))){
var inst_35417 = (state_35437[(2)]);
var inst_35421 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35437__$1 = (function (){var statearr_35475 = state_35437;
(statearr_35475[(15)] = inst_35417);

return statearr_35475;
})();
if(cljs.core.truth_(inst_35421)){
var statearr_35476_36406 = state_35437__$1;
(statearr_35476_36406[(1)] = (21));

} else {
var statearr_35477_36407 = state_35437__$1;
(statearr_35477_36407[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (5))){
var inst_35373 = cljs.core.async.close_BANG_(out);
var state_35437__$1 = state_35437;
var statearr_35478_36408 = state_35437__$1;
(statearr_35478_36408[(2)] = inst_35373);

(statearr_35478_36408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (14))){
var inst_35395 = (state_35437[(7)]);
var inst_35397 = cljs.core.chunked_seq_QMARK_(inst_35395);
var state_35437__$1 = state_35437;
if(inst_35397){
var statearr_35479_36409 = state_35437__$1;
(statearr_35479_36409[(1)] = (17));

} else {
var statearr_35480_36410 = state_35437__$1;
(statearr_35480_36410[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (16))){
var inst_35413 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35481_36411 = state_35437__$1;
(statearr_35481_36411[(2)] = inst_35413);

(statearr_35481_36411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35438 === (10))){
var inst_35384 = (state_35437[(9)]);
var inst_35382 = (state_35437[(11)]);
var inst_35389 = cljs.core._nth(inst_35382,inst_35384);
var state_35437__$1 = state_35437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35437__$1,(13),out,inst_35389);
} else {
if((state_val_35438 === (18))){
var inst_35395 = (state_35437[(7)]);
var inst_35404 = cljs.core.first(inst_35395);
var state_35437__$1 = state_35437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35437__$1,(20),out,inst_35404);
} else {
if((state_val_35438 === (8))){
var inst_35383 = (state_35437[(8)]);
var inst_35384 = (state_35437[(9)]);
var inst_35386 = (inst_35384 < inst_35383);
var inst_35387 = inst_35386;
var state_35437__$1 = state_35437;
if(cljs.core.truth_(inst_35387)){
var statearr_35482_36412 = state_35437__$1;
(statearr_35482_36412[(1)] = (10));

} else {
var statearr_35483_36413 = state_35437__$1;
(statearr_35483_36413[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33269__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33269__auto____0 = (function (){
var statearr_35484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35484[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33269__auto__);

(statearr_35484[(1)] = (1));

return statearr_35484;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33269__auto____1 = (function (state_35437){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_35437);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e35485){var ex__33272__auto__ = e35485;
var statearr_35486_36420 = state_35437;
(statearr_35486_36420[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_35437[(4)]))){
var statearr_35487_36421 = state_35437;
(statearr_35487_36421[(1)] = cljs.core.first((state_35437[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36422 = state_35437;
state_35437 = G__36422;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33269__auto__ = function(state_35437){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33269__auto____1.call(this,state_35437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33269__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33269__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_35488 = f__33433__auto__();
(statearr_35488[(6)] = c__33432__auto__);

return statearr_35488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));

return c__33432__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35493 = arguments.length;
switch (G__35493) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35508 = arguments.length;
switch (G__35508) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35520 = arguments.length;
switch (G__35520) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33432__auto___36426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_35563){
var state_val_35564 = (state_35563[(1)]);
if((state_val_35564 === (7))){
var inst_35558 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35565_36427 = state_35563__$1;
(statearr_35565_36427[(2)] = inst_35558);

(statearr_35565_36427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (1))){
var inst_35538 = null;
var state_35563__$1 = (function (){var statearr_35566 = state_35563;
(statearr_35566[(7)] = inst_35538);

return statearr_35566;
})();
var statearr_35567_36428 = state_35563__$1;
(statearr_35567_36428[(2)] = null);

(statearr_35567_36428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (4))){
var inst_35543 = (state_35563[(8)]);
var inst_35543__$1 = (state_35563[(2)]);
var inst_35544 = (inst_35543__$1 == null);
var inst_35545 = cljs.core.not(inst_35544);
var state_35563__$1 = (function (){var statearr_35568 = state_35563;
(statearr_35568[(8)] = inst_35543__$1);

return statearr_35568;
})();
if(inst_35545){
var statearr_35569_36430 = state_35563__$1;
(statearr_35569_36430[(1)] = (5));

} else {
var statearr_35570_36431 = state_35563__$1;
(statearr_35570_36431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (6))){
var state_35563__$1 = state_35563;
var statearr_35571_36432 = state_35563__$1;
(statearr_35571_36432[(2)] = null);

(statearr_35571_36432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (3))){
var inst_35560 = (state_35563[(2)]);
var inst_35561 = cljs.core.async.close_BANG_(out);
var state_35563__$1 = (function (){var statearr_35572 = state_35563;
(statearr_35572[(9)] = inst_35560);

return statearr_35572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35563__$1,inst_35561);
} else {
if((state_val_35564 === (2))){
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35563__$1,(4),ch);
} else {
if((state_val_35564 === (11))){
var inst_35543 = (state_35563[(8)]);
var inst_35552 = (state_35563[(2)]);
var inst_35538 = inst_35543;
var state_35563__$1 = (function (){var statearr_35573 = state_35563;
(statearr_35573[(10)] = inst_35552);

(statearr_35573[(7)] = inst_35538);

return statearr_35573;
})();
var statearr_35574_36434 = state_35563__$1;
(statearr_35574_36434[(2)] = null);

(statearr_35574_36434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (9))){
var inst_35543 = (state_35563[(8)]);
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35563__$1,(11),out,inst_35543);
} else {
if((state_val_35564 === (5))){
var inst_35538 = (state_35563[(7)]);
var inst_35543 = (state_35563[(8)]);
var inst_35547 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35543,inst_35538);
var state_35563__$1 = state_35563;
if(inst_35547){
var statearr_35576_36442 = state_35563__$1;
(statearr_35576_36442[(1)] = (8));

} else {
var statearr_35577_36443 = state_35563__$1;
(statearr_35577_36443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (10))){
var inst_35555 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35578_36444 = state_35563__$1;
(statearr_35578_36444[(2)] = inst_35555);

(statearr_35578_36444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (8))){
var inst_35538 = (state_35563[(7)]);
var tmp35575 = inst_35538;
var inst_35538__$1 = tmp35575;
var state_35563__$1 = (function (){var statearr_35579 = state_35563;
(statearr_35579[(7)] = inst_35538__$1);

return statearr_35579;
})();
var statearr_35580_36445 = state_35563__$1;
(statearr_35580_36445[(2)] = null);

(statearr_35580_36445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_35581 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35581[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_35581[(1)] = (1));

return statearr_35581;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_35563){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_35563);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e35582){var ex__33272__auto__ = e35582;
var statearr_35583_36446 = state_35563;
(statearr_35583_36446[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_35563[(4)]))){
var statearr_35584_36447 = state_35563;
(statearr_35584_36447[(1)] = cljs.core.first((state_35563[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36448 = state_35563;
state_35563 = G__36448;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_35563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_35563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_35585 = f__33433__auto__();
(statearr_35585[(6)] = c__33432__auto___36426);

return statearr_35585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35587 = arguments.length;
switch (G__35587) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33432__auto___36450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_35628){
var state_val_35629 = (state_35628[(1)]);
if((state_val_35629 === (7))){
var inst_35623 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35640_36451 = state_35628__$1;
(statearr_35640_36451[(2)] = inst_35623);

(statearr_35640_36451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (1))){
var inst_35590 = (new Array(n));
var inst_35591 = inst_35590;
var inst_35592 = (0);
var state_35628__$1 = (function (){var statearr_35641 = state_35628;
(statearr_35641[(7)] = inst_35592);

(statearr_35641[(8)] = inst_35591);

return statearr_35641;
})();
var statearr_35642_36452 = state_35628__$1;
(statearr_35642_36452[(2)] = null);

(statearr_35642_36452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (4))){
var inst_35595 = (state_35628[(9)]);
var inst_35595__$1 = (state_35628[(2)]);
var inst_35596 = (inst_35595__$1 == null);
var inst_35597 = cljs.core.not(inst_35596);
var state_35628__$1 = (function (){var statearr_35644 = state_35628;
(statearr_35644[(9)] = inst_35595__$1);

return statearr_35644;
})();
if(inst_35597){
var statearr_35645_36453 = state_35628__$1;
(statearr_35645_36453[(1)] = (5));

} else {
var statearr_35646_36454 = state_35628__$1;
(statearr_35646_36454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (15))){
var inst_35617 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35647_36455 = state_35628__$1;
(statearr_35647_36455[(2)] = inst_35617);

(statearr_35647_36455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (13))){
var state_35628__$1 = state_35628;
var statearr_35648_36456 = state_35628__$1;
(statearr_35648_36456[(2)] = null);

(statearr_35648_36456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (6))){
var inst_35592 = (state_35628[(7)]);
var inst_35613 = (inst_35592 > (0));
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35613)){
var statearr_35649_36457 = state_35628__$1;
(statearr_35649_36457[(1)] = (12));

} else {
var statearr_35650_36458 = state_35628__$1;
(statearr_35650_36458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (3))){
var inst_35625 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35628__$1,inst_35625);
} else {
if((state_val_35629 === (12))){
var inst_35591 = (state_35628[(8)]);
var inst_35615 = cljs.core.vec(inst_35591);
var state_35628__$1 = state_35628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35628__$1,(15),out,inst_35615);
} else {
if((state_val_35629 === (2))){
var state_35628__$1 = state_35628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35628__$1,(4),ch);
} else {
if((state_val_35629 === (11))){
var inst_35607 = (state_35628[(2)]);
var inst_35608 = (new Array(n));
var inst_35591 = inst_35608;
var inst_35592 = (0);
var state_35628__$1 = (function (){var statearr_35652 = state_35628;
(statearr_35652[(7)] = inst_35592);

(statearr_35652[(8)] = inst_35591);

(statearr_35652[(10)] = inst_35607);

return statearr_35652;
})();
var statearr_35653_36459 = state_35628__$1;
(statearr_35653_36459[(2)] = null);

(statearr_35653_36459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (9))){
var inst_35591 = (state_35628[(8)]);
var inst_35605 = cljs.core.vec(inst_35591);
var state_35628__$1 = state_35628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35628__$1,(11),out,inst_35605);
} else {
if((state_val_35629 === (5))){
var inst_35592 = (state_35628[(7)]);
var inst_35600 = (state_35628[(11)]);
var inst_35595 = (state_35628[(9)]);
var inst_35591 = (state_35628[(8)]);
var inst_35599 = (inst_35591[inst_35592] = inst_35595);
var inst_35600__$1 = (inst_35592 + (1));
var inst_35601 = (inst_35600__$1 < n);
var state_35628__$1 = (function (){var statearr_35654 = state_35628;
(statearr_35654[(11)] = inst_35600__$1);

(statearr_35654[(12)] = inst_35599);

return statearr_35654;
})();
if(cljs.core.truth_(inst_35601)){
var statearr_35655_36460 = state_35628__$1;
(statearr_35655_36460[(1)] = (8));

} else {
var statearr_35656_36461 = state_35628__$1;
(statearr_35656_36461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (14))){
var inst_35620 = (state_35628[(2)]);
var inst_35621 = cljs.core.async.close_BANG_(out);
var state_35628__$1 = (function (){var statearr_35658 = state_35628;
(statearr_35658[(13)] = inst_35620);

return statearr_35658;
})();
var statearr_35659_36462 = state_35628__$1;
(statearr_35659_36462[(2)] = inst_35621);

(statearr_35659_36462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (10))){
var inst_35611 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35660_36463 = state_35628__$1;
(statearr_35660_36463[(2)] = inst_35611);

(statearr_35660_36463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (8))){
var inst_35600 = (state_35628[(11)]);
var inst_35591 = (state_35628[(8)]);
var tmp35657 = inst_35591;
var inst_35591__$1 = tmp35657;
var inst_35592 = inst_35600;
var state_35628__$1 = (function (){var statearr_35661 = state_35628;
(statearr_35661[(7)] = inst_35592);

(statearr_35661[(8)] = inst_35591__$1);

return statearr_35661;
})();
var statearr_35662_36464 = state_35628__$1;
(statearr_35662_36464[(2)] = null);

(statearr_35662_36464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_35663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35663[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_35663[(1)] = (1));

return statearr_35663;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_35628){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_35628);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e35664){var ex__33272__auto__ = e35664;
var statearr_35665_36465 = state_35628;
(statearr_35665_36465[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_35628[(4)]))){
var statearr_35666_36466 = state_35628;
(statearr_35666_36466[(1)] = cljs.core.first((state_35628[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36467 = state_35628;
state_35628 = G__36467;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_35628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_35628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_35667 = f__33433__auto__();
(statearr_35667[(6)] = c__33432__auto___36450);

return statearr_35667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35669 = arguments.length;
switch (G__35669) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33432__auto___36469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33433__auto__ = (function (){var switch__33268__auto__ = (function (state_35717){
var state_val_35718 = (state_35717[(1)]);
if((state_val_35718 === (7))){
var inst_35713 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35728_36470 = state_35717__$1;
(statearr_35728_36470[(2)] = inst_35713);

(statearr_35728_36470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (1))){
var inst_35673 = [];
var inst_35674 = inst_35673;
var inst_35675 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35717__$1 = (function (){var statearr_35729 = state_35717;
(statearr_35729[(7)] = inst_35674);

(statearr_35729[(8)] = inst_35675);

return statearr_35729;
})();
var statearr_35730_36471 = state_35717__$1;
(statearr_35730_36471[(2)] = null);

(statearr_35730_36471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (4))){
var inst_35678 = (state_35717[(9)]);
var inst_35678__$1 = (state_35717[(2)]);
var inst_35679 = (inst_35678__$1 == null);
var inst_35680 = cljs.core.not(inst_35679);
var state_35717__$1 = (function (){var statearr_35732 = state_35717;
(statearr_35732[(9)] = inst_35678__$1);

return statearr_35732;
})();
if(inst_35680){
var statearr_35733_36472 = state_35717__$1;
(statearr_35733_36472[(1)] = (5));

} else {
var statearr_35734_36473 = state_35717__$1;
(statearr_35734_36473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (15))){
var inst_35674 = (state_35717[(7)]);
var inst_35705 = cljs.core.vec(inst_35674);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35717__$1,(18),out,inst_35705);
} else {
if((state_val_35718 === (13))){
var inst_35700 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35735_36474 = state_35717__$1;
(statearr_35735_36474[(2)] = inst_35700);

(statearr_35735_36474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (6))){
var inst_35674 = (state_35717[(7)]);
var inst_35702 = inst_35674.length;
var inst_35703 = (inst_35702 > (0));
var state_35717__$1 = state_35717;
if(cljs.core.truth_(inst_35703)){
var statearr_35736_36475 = state_35717__$1;
(statearr_35736_36475[(1)] = (15));

} else {
var statearr_35737_36476 = state_35717__$1;
(statearr_35737_36476[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (17))){
var inst_35710 = (state_35717[(2)]);
var inst_35711 = cljs.core.async.close_BANG_(out);
var state_35717__$1 = (function (){var statearr_35738 = state_35717;
(statearr_35738[(10)] = inst_35710);

return statearr_35738;
})();
var statearr_35739_36477 = state_35717__$1;
(statearr_35739_36477[(2)] = inst_35711);

(statearr_35739_36477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (3))){
var inst_35715 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35717__$1,inst_35715);
} else {
if((state_val_35718 === (12))){
var inst_35674 = (state_35717[(7)]);
var inst_35693 = cljs.core.vec(inst_35674);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35717__$1,(14),out,inst_35693);
} else {
if((state_val_35718 === (2))){
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35717__$1,(4),ch);
} else {
if((state_val_35718 === (11))){
var inst_35682 = (state_35717[(11)]);
var inst_35678 = (state_35717[(9)]);
var inst_35674 = (state_35717[(7)]);
var inst_35690 = inst_35674.push(inst_35678);
var tmp35740 = inst_35674;
var inst_35674__$1 = tmp35740;
var inst_35675 = inst_35682;
var state_35717__$1 = (function (){var statearr_35741 = state_35717;
(statearr_35741[(12)] = inst_35690);

(statearr_35741[(7)] = inst_35674__$1);

(statearr_35741[(8)] = inst_35675);

return statearr_35741;
})();
var statearr_35742_36478 = state_35717__$1;
(statearr_35742_36478[(2)] = null);

(statearr_35742_36478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (9))){
var inst_35675 = (state_35717[(8)]);
var inst_35686 = cljs.core.keyword_identical_QMARK_(inst_35675,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35717__$1 = state_35717;
var statearr_35743_36479 = state_35717__$1;
(statearr_35743_36479[(2)] = inst_35686);

(statearr_35743_36479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (5))){
var inst_35683 = (state_35717[(13)]);
var inst_35682 = (state_35717[(11)]);
var inst_35678 = (state_35717[(9)]);
var inst_35675 = (state_35717[(8)]);
var inst_35682__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35678) : f.call(null,inst_35678));
var inst_35683__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35682__$1,inst_35675);
var state_35717__$1 = (function (){var statearr_35744 = state_35717;
(statearr_35744[(13)] = inst_35683__$1);

(statearr_35744[(11)] = inst_35682__$1);

return statearr_35744;
})();
if(inst_35683__$1){
var statearr_35745_36480 = state_35717__$1;
(statearr_35745_36480[(1)] = (8));

} else {
var statearr_35746_36481 = state_35717__$1;
(statearr_35746_36481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (14))){
var inst_35682 = (state_35717[(11)]);
var inst_35678 = (state_35717[(9)]);
var inst_35695 = (state_35717[(2)]);
var inst_35696 = [];
var inst_35697 = inst_35696.push(inst_35678);
var inst_35674 = inst_35696;
var inst_35675 = inst_35682;
var state_35717__$1 = (function (){var statearr_35747 = state_35717;
(statearr_35747[(14)] = inst_35695);

(statearr_35747[(7)] = inst_35674);

(statearr_35747[(15)] = inst_35697);

(statearr_35747[(8)] = inst_35675);

return statearr_35747;
})();
var statearr_35748_36482 = state_35717__$1;
(statearr_35748_36482[(2)] = null);

(statearr_35748_36482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (16))){
var state_35717__$1 = state_35717;
var statearr_35749_36483 = state_35717__$1;
(statearr_35749_36483[(2)] = null);

(statearr_35749_36483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (10))){
var inst_35688 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
if(cljs.core.truth_(inst_35688)){
var statearr_35750_36484 = state_35717__$1;
(statearr_35750_36484[(1)] = (11));

} else {
var statearr_35751_36485 = state_35717__$1;
(statearr_35751_36485[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (18))){
var inst_35707 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35752_36486 = state_35717__$1;
(statearr_35752_36486[(2)] = inst_35707);

(statearr_35752_36486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (8))){
var inst_35683 = (state_35717[(13)]);
var state_35717__$1 = state_35717;
var statearr_35753_36487 = state_35717__$1;
(statearr_35753_36487[(2)] = inst_35683);

(statearr_35753_36487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33269__auto__ = null;
var cljs$core$async$state_machine__33269__auto____0 = (function (){
var statearr_35756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35756[(0)] = cljs$core$async$state_machine__33269__auto__);

(statearr_35756[(1)] = (1));

return statearr_35756;
});
var cljs$core$async$state_machine__33269__auto____1 = (function (state_35717){
while(true){
var ret_value__33270__auto__ = (function (){try{while(true){
var result__33271__auto__ = switch__33268__auto__(state_35717);
if(cljs.core.keyword_identical_QMARK_(result__33271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33271__auto__;
}
break;
}
}catch (e35757){var ex__33272__auto__ = e35757;
var statearr_35758_36488 = state_35717;
(statearr_35758_36488[(2)] = ex__33272__auto__);


if(cljs.core.seq((state_35717[(4)]))){
var statearr_35759_36489 = state_35717;
(statearr_35759_36489[(1)] = cljs.core.first((state_35717[(4)])));

} else {
throw ex__33272__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36490 = state_35717;
state_35717 = G__36490;
continue;
} else {
return ret_value__33270__auto__;
}
break;
}
});
cljs$core$async$state_machine__33269__auto__ = function(state_35717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33269__auto____1.call(this,state_35717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33269__auto____0;
cljs$core$async$state_machine__33269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33269__auto____1;
return cljs$core$async$state_machine__33269__auto__;
})()
})();
var state__33434__auto__ = (function (){var statearr_35760 = f__33433__auto__();
(statearr_35760[(6)] = c__33432__auto___36469);

return statearr_35760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33434__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

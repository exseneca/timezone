
shadow.cljs.devtools.client.env.module_loaded('app');

try { timezone.home.init(); } catch (e) { console.error("An error occurred when calling (timezone.home/init)"); throw(e); }
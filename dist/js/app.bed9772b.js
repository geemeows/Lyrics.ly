(function(t){function a(a){for(var s,n,o=a[0],i=a[1],l=a[2],f=0,d=[];f<o.length;f++)n=o[f],r[n]&&d.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(a);while(d.length)d.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,a=0;a<c.length;a++){for(var e=c[a],s=!0,o=1;o<e.length;o++){var i=e[o];0!==r[i]&&(s=!1)}s&&(c.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},c=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/<Lyrics.ly>/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var u=i;c.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0782":function(t,a,e){"use strict";var s=e("c366"),r=e.n(s);r.a},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var a=c(t);return e(a)}function c(t){var a=s[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}r.keys=function(){return Object.keys(s)},r.resolve=c,t.exports=r,r.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),r=e("f23d"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout",[e("app-search"),e("router-view"),e("a-layout-footer",{staticStyle:{textAlign:"center"}},[t._v("Made with "),e("a-icon",{attrs:{type:"heart",theme:"filled"}}),t._v(" and "),e("a",{attrs:{href:"#"}},[t._v("Vue.js")])],1)],1)},n=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"search"}},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:e("cf05"),alt:"app_logo",width:"180"}})])],1),s("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[s("a-col",[s("div",{staticClass:"header"},[s("h1",[t._v("+4,000,000 Lyrics Now Available.")]),s("a-input-search",{staticClass:"search-input",attrs:{size:"large",placeholder:"Which track you want?"},on:{search:t.onSearch},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)])],1)],1)},i=[],l=(e("7f7f"),{data:function(){return{search:""}},methods:{onSearch:function(t){this.$store.dispatch("setSearchTracks",t),this.search="","lyrics"==this.$route.name&&this.$router.push("/")}}}),u=l,f=(e("0782"),e("2877")),d=Object(f["a"])(u,o,i,!1,null,null,null),p=d.exports,h={components:{appSearch:p}},m=h,k=Object(f["a"])(m,c,n,!1,null,null,null),j=k.exports,b=(e("202f"),e("8c4f")),g=e("2f62"),y=e("bc3a"),v=e.n(y);s["a"].use(g["a"]);var _=new g["a"].Store({state:{topTenTraks:[],lyrics:"",searchTracks:[]},mutations:{setTopTracks:function(t,a){t.topTenTraks=a},setLyrics:function(t,a){t.lyrics=a},setSearchTracks:function(t,a){t.searchTracks=a}},actions:{setTopTracks:function(t){var a=t.commit;v.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=bff837ad705a5f43d18e5e69c8a98269").then(function(t){for(var e=[],s=t.data.message.body.track_list,r=0;r<s.length;r++)0!=s[r].track.primary_genres.music_genre_list.length?e.push({trackName:s[r].track.track_name,artistName:s[r].track.artist_name,trackID:s[r].track.track_id,genre:s[r].track.primary_genres.music_genre_list[0].music_genre.music_genre_name}):e.push({trackName:s[r].track.track_name,artistName:s[r].track.artist_name,trackID:s[r].track.track_id,genre:"No Genre"});a("setTopTracks",e)}).catch(function(t){return console.log(t)})},findLyrics:function(t,a){var e=t.commit;v.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id="+a+"&apikey=bff837ad705a5f43d18e5e69c8a98269").then(function(t){var a="";a=t.data.message.body.lyrics.lyrics_body,e("setLyrics",a)}).catch(function(t){return console.log(t)})},setSearchTracks:function(t,a){var e=t.commit;v.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track="+a+"&page_size=12&page=1&s_track_rating=desc&apikey=bff837ad705a5f43d18e5e69c8a98269").then(function(t){for(var a=[],s=t.data.message.body.track_list,r=0;r<s.length;r++)0!=s[r].track.primary_genres.music_genre_list.length?a.push({trackName:s[r].track.track_name,artistName:s[r].track.artist_name,trackID:s[r].track.track_id,genre:s[r].track.primary_genres.music_genre_list[0].music_genre.music_genre_name}):a.push({trackName:s[r].track.track_name,artistName:s[r].track.artist_name,trackID:s[r].track.track_id,genre:"No Genre"});e("setSearchTracks",a)}).catch(function(t){return console.log(t)})}},getters:{getTopTracks:function(t){return t.topTenTraks},getLyrics:function(t){return t.lyrics},getSearchTracks:function(t){return t.searchTracks}}}),T=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"margin-bottom":"20px"}},[t._v("\n  "+t._s(t.setTracks())+"\n  "),s("h2",[t._v("TOP 10 SINGLES CHART IN US")]),s("a-row",{staticStyle:{padding:"0 40px"},attrs:{type:"flex",justify:"space-around",align:"middle"}},[s("a-col",{attrs:{xs:{span:24}}},[s("a-row",[s("app-carousel",{attrs:{autoplay:!0,nav:!1,dots:!1,items:4,responsive:{0:{items:1,nav:!1},768:{items:2,nav:!1},1200:{items:4,nav:!1}}}},[s("template",{staticStyle:{display:"block"},slot:"prev"},[s("div",{staticClass:"prev"},[s("a-icon",{staticClass:"arrow-left",attrs:{type:"left"}})],1)]),t._l(10,function(a,r){return s("a-col",{key:r,attrs:{xs:{span:24},lg:{span:6}}},[s("router-link",{attrs:{to:{name:"lyrics",params:{track_id:t.getTopTracks[r].trackID},query:{trackName:t.getTopTracks[r].trackName,artistName:t.getTopTracks[r].artistName}}}},[s("a-card",{staticStyle:{width:"300px"},attrs:{hoverable:""}},[s("img",{attrs:{slot:"cover",alt:"example",src:e("8152")},slot:"cover"}),s("div",{staticClass:"genre"},[t._v(t._s(t.getTopTracks[r].genre))]),s("a-card-meta",{attrs:{title:t.getTopTracks[r].trackName,description:t.getTopTracks[r].artistName}},[s("a-avatar",{staticStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},attrs:{slot:"avatar"},slot:"avatar"},[t._v(t._s(t.getTopTracks[r].artistName.charAt(0)))])],1)],1)],1)],1)}),s("template",{slot:"next"},[s("div",{staticClass:"next"},[s("a-icon",{staticClass:"arrow-right",attrs:{type:"right"}})],1)])],2)],1),0!=t.tracks.length?s("a-row",[s("h2",[t._v("Search Results")]),t._l(12,function(a,r){return s("a-col",{key:r,attrs:{xs:{span:24},lg:{span:6}}},[s("router-link",{attrs:{to:{name:"lyrics",params:{track_id:t.getSearchTracks[r].trackID},query:{trackName:t.getSearchTracks[r].trackName,artistName:t.getSearchTracks[r].artistName}}}},[s("a-card",{staticStyle:{width:"300px","margin-bottom":"15px"},attrs:{hoverable:""}},[s("img",{attrs:{slot:"cover",alt:"example",src:e("8152")},slot:"cover"}),s("div",{staticClass:"genre"},[t._v(t._s(t.getSearchTracks[r].genre))]),s("a-card-meta",{attrs:{title:t.getSearchTracks[r].trackName,description:t.getSearchTracks[r].artistName.substring(0,25)}},[s("a-avatar",{staticStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},attrs:{slot:"avatar"},slot:"avatar"},[t._v(t._s(t.getSearchTracks[r].artistName.charAt(0)))])],1)],1)],1)],1)})],2):t._e()],1)],1)],1)},S=[],w=e("7ec7"),x=e.n(w),N={components:{appCarousel:x.a},data:function(){return{tracks:[]}},computed:{getTopTracks:function(){return this.$store.getters.getTopTracks},getSearchTracks:function(){return this.$store.getters.getSearchTracks}},methods:{setTracks:function(){this.tracks=this.getSearchTracks}}},z=N,O=(e("cccb"),Object(f["a"])(z,T,S,!1,null,null,null)),$=O.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout",{staticStyle:{"margin-top":"25px",padding:"0 40px"}},[e("a-row",{staticStyle:{padding:"0 40px"},attrs:{type:"flex",justify:"space-around"}},[e("a-col",{attrs:{xs:{span:24},lg:{span:16}}},[e("h2",[t._v(t._s(t.trackTitle))]),e("span",{staticClass:"author"},[t._v(t._s(t.author))]),e("p",{staticClass:"lyrics"},[t._v(t._s(t.getLyrics))])]),e("a-col",{attrs:{xs:{span:24},lg:{span:8}}},[e("h3",[t._v("Tracks you may like")]),e("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.getTopTracks},scopedSlots:t._u([{key:"renderItem",fn:function(a,s){return e("a-list-item",{},[e("a-list-item-meta",{attrs:{description:a.artistName}},[e("a",{attrs:{slot:"title",href:"#"},slot:"title"},[t._v(t._s(a.trackName))]),e("a-avatar",{staticStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},attrs:{slot:"avatar"},slot:"avatar"},[t._v(t._s(a.artistName.charAt(0)))])],1)],1)}}])})],1)],1)],1)},L=[],I={data:function(){return{trackID:this.$route.params.track_id,trackTitle:this.$route.query.trackName,author:this.$route.query.artistName}},watch:{$route:function(t,a){this.trackID=t.params.track_id}},created:function(){this.$store.dispatch("findLyrics",this.$route.params.track_id)},computed:{getLyrics:function(){return this.$store.getters.getLyrics},getTopTracks:function(){return this.$store.getters.getTopTracks}}},D=I,E=(e("f29b"),Object(f["a"])(D,C,L,!1,null,"29d3fe8c",null)),q=E.exports;s["a"].use(b["a"]);var P=new b["a"]({mode:"history",base:"/<Lyrics.ly>/",routes:[{path:"/",name:"home",component:$,beforeEnter:function(t,a,e){_.dispatch("setTopTracks"),e()}},{path:"/lyrics/:track_id",name:"lyrics",component:q}]});s["a"].use(r["a"]),s["a"].config.productionTip=!1,new s["a"]({router:P,store:_,render:function(t){return t(j)}}).$mount("#app")},8152:function(t,a,e){t.exports=e.p+"img/card-img.a79ba6fd.png"},c366:function(t,a,e){},cccb:function(t,a,e){"use strict";var s=e("d563"),r=e.n(s);r.a},cf05:function(t,a,e){t.exports=e.p+"img/logo.708faa4b.png"},d563:function(t,a,e){},e532:function(t,a,e){},f29b:function(t,a,e){"use strict";var s=e("e532"),r=e.n(s);r.a}});
//# sourceMappingURL=app.bed9772b.js.map
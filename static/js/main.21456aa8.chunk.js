(this["webpackJsonpsalud-front-end"]=this["webpackJsonpsalud-front-end"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/background.83c1cba7.png"},29:function(e,t,a){e.exports=a.p+"static/media/logo.9f302433.png"},30:function(e,t,a){e.exports=a.p+"static/media/rex.bf899686.jpeg"},31:function(e,t,a){e.exports=a.p+"static/media/suri.8af06777.png"},32:function(e,t,a){e.exports=a.p+"static/media/dorje.d25168a1.JPG"},33:function(e,t,a){e.exports=a.p+"static/media/anastasia.6a397955.png"},34:function(e,t,a){e.exports=a(58)},39:function(e,t,a){},47:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),c=a.n(o),s=(a(39),a(3)),i=a(4),u=a(6),l=a(5),m=a(7),p=a(10),h=a(15),f=a(1),d=a.n(f),v=a(8),g=a(2),k=a.n(g),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("hello world");var e=this.props.cocktail;return r.a.createElement("div",{className:"drink-name"},r.a.createElement("h2",null,e.name),r.a.createElement("img",{src:e.image,alt:""}))}}]),t}(n.Component),y=(a(47),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"drinks"},r.a.createElement(p.b,{className:"vodka",to:"/vodka"},"Vodka"),r.a.createElement(p.b,{className:"gin",to:"/gin"}," Gin"),r.a.createElement(p.b,{className:"tequila",to:"/tequila"}," Tequila "),r.a.createElement(p.b,{className:"scotch",to:"/scotch"}," Scotch"),r.a.createElement(p.b,{className:"whiskey",to:"/whiskey"}," Whiskey "),r.a.createElement(p.b,{className:"rum",to:"/rum"},"Rum"),r.a.createElement(p.b,{className:"popular",to:"/popular"},"Popular Drinks"),r.a.createElement(p.b,{className:"favorites",to:"/favorites"}," Favorites"),r.a.createElement(p.b,{className:"about-us",to:"/about-us"},"About Us"),r.a.createElement(p.b,{className:"home",to:"/"}," Home"))}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[],favorites:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}},"Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/vodka").set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("h2",{className:"vodka-h2"},"Vodka Cocktails "),r.a.createElement("ul",{className:"vodka-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[],favorites:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}},"Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/gin").set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("h2",{className:"gin-h2"},"Gin Cocktails  "),r.a.createElement("ul",{className:"gin-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}},"Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/rum").set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("h2",{className:"rum-h2"},"Rum Cocktails"),r.a.createElement("ul",{className:"rum-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[],favorites:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}},"Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/tequila").set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("h2",{className:"tequila-h2"},"Tequila Cocktails"),r.a.createElement("ul",{className:"tequila-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}},"Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/scotch").set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("h2",{className:"scotch-h2"},"Scotch Cocktails"),r.a.createElement("ul",{className:"scotch-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[],favorites:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}}," Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/whiskey").set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("h2",{className:"whiskey-h2"},"Whiskey Cocktails"),r.a.createElement("ul",{className:"whiskey-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[],favorites:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}},"Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/popular").set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("h2",{className:"popular-h2"},"Popular Cocktails"),r.a.createElement("ul",{className:"popular-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[],favorites:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}},"Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/random").set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",{className:"random-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component);a(53).config();var A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={usernameSignIn:"",usernameSignUp:"",passwordSignIn:"",passwordSignUp:""},a.handleSignIn=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("https://mighty-plateau-34350.herokuapp.com/auth/signin",{email:a.state.usernameSignIn,password:a.state.passwordSignIn}).set("Content-Type","application/x-www-form-urlencoded");case 3:t=e.sent,localStorage.setItem("user",JSON.stringify(t.body)),a.props.history.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.handleSignUp=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.state.usernameSignUp),e.next=3,k.a.post("https://mighty-plateau-34350.herokuapp.com/auth/signup",{email:a.state.usernameSignUp,password:a.state.passwordSignUp}).set("Content-Type","application/x-www-form-urlencoded");case 3:t=e.sent,localStorage.setItem("user",JSON.stringify(t.body)),a.props.history.push("/");case 7:case"end":return e.stop()}}),e)}))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",{className:"login-box"},r.a.createElement("div",{className:"textbox"},r.a.createElement("input",{className:"sign-up",placeholder:"email",value:this.state.usernameSignUp,onChange:function(t){return e.setState({usernameSignUp:t.target.value})}}),r.a.createElement("input",{className:"sign-up-pass",placeholder:"password",value:this.state.passwordSignUp,onChange:function(t){return e.setState({passwordSignUp:t.target.value})}}),r.a.createElement("button",{className:"btn",onClick:this.handleSignUp},"Sign up"),r.a.createElement("br",null),r.a.createElement("input",{className:"sign-in",placeholder:"email",value:this.state.usernameSignIn,onChange:function(t){return e.setState({usernameSignIn:t.target.value})}}),r.a.createElement("input",{className:"sign-in-pass",placeholder:"password",value:this.state.passwordSignIn,onChange:function(t){return e.setState({passwordSignIn:t.target.value})}}),r.a.createElement("button",{className:"btn",onClick:this.handleSignIn},"Sign in")))}}]),t}(n.Component),F=Object(h.g)(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={favorites:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=4,a();case 4:n=e.sent,console.log(n.body),this.setState({favorites:n.body});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),this.state.favorites.map((function(t){return r.a.createElement("div",{className:"fav-list",key:t.id,to:"/id/".concat(t.api_id),onClick:function(){return e.props.history.push("/id/".concat(t.api_id))}},r.a.createElement("h2",null,t.name),r.a.createElement("img",{src:t.image,alt:""}),"/favorites"!==e.props.location.pathname&&e.renderButton(t))})))}}]),t}(n.Component)),I=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"searchbar",onSubmit:this.props.handleSearch},r.a.createElement("input",{value:this.props.searchQuery,onChange:this.props.handleChange}),r.a.createElement("button",{className:"search-btn"},"Find a drink"))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={searchQuery:a.props.match.params.name,cocktails:[],favorites:[]},a.handleSearch=function(){var e=Object(v.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,k.a.get("https://mighty-plateau-34350.herokuapp.com/name/".concat(a.state.searchQuery));case 3:n=e.sent,a.setState({cocktails:n.body}),a.props.history.push("/name/".concat(a.state.searchQuery));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){return a.setState({searchQuery:e.target.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=4,a();case 4:n=e.sent,this.setState({favorites:n.body});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(I,{searchQuery:this.state.searchQuery,handleSearch:this.handleSearch,handleChange:this.handleChange}),r.a.createElement("div",{className:"random"},r.a.createElement(C,this.props)))}}]),t}(n.Component),J=(a(56),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,a=this.props.cocktail,n=(e=a.Ingredients,t=a.Measurement,e.map((function(e,a){if(null!==e)return e+" "+t[a]}))).map((function(e){return r.a.createElement("li",null,e)}));return r.a.createElement("div",{className:"drink-name"},r.a.createElement("h2",null,a.Name),r.a.createElement("img",{className:"detail-image",src:a.Image,alt:""}),r.a.createElement("p",{className:"ing-ptag"},"Ingredients: "),r.a.createElement("ul",{className:"ing"},n),r.a.createElement("p",{className:"instructions-ptag"},"How to make your tasty drink:"),r.a.createElement("p",{className:"instructions"},a.Instructions))}}]),t}(n.Component)),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={id:[],cocktail:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),console.log("componentDidMount"),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/id/".concat(r.props.match.params.myDrink)).set("Authorization",t.token)},e.next=5,a();case 5:n=e.sent,console.log("||",n.body),this.setState({cocktail:n.body});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("|| cocktail",this.state.cocktail),r.a.createElement("div",null,r.a.createElement("h2",null,"Cocktails "),r.a.createElement("ul",{className:"drink-list"},this.state.cocktail.length&&this.state.cocktail.map((function(e){return r.a.createElement(J,{cocktail:e})}))))}}]),t}(n.Component),D=(a(28),a(29)),M=a.n(D),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:[],cocktail:[],favorites:[]},a.makeFavorite=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this works",t),a=JSON.parse(localStorage.getItem("user")),e.next=4,k.a.post("https://mighty-plateau-34350.herokuapp.com/favorites",{name:t.name,image:t.image,api_id:t.id}).set("Authorization",a.token);case 4:n=e.sent,console.log("fave",n.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButton=function(e){return a.state.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\ud83c\udf78"):r.a.createElement("button",{className:"fav-btn",onClick:function(){return a.makeFavorite(e)}},"Add to Favorites\ud83c\udf79")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o,c=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),a=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/name/".concat(c.props.match.params.myCocktail)).set("Authorization",t.token)},n=function(){return k.a.get("https://mighty-plateau-34350.herokuapp.com/favorites").set("Authorization",t.token)},e.next=5,n();case 5:return r=e.sent,e.next=8,a();case 8:o=e.sent,console.log(o.body),this.setState({cocktail:o.body,favorites:r.body});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",{className:"search-h2"}," Cocktails"),r.a.createElement("ul",{className:"search-list"},this.state.cocktail.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,to:"/id/".concat(t.id),onClick:function(){return e.props.history.push("/id/".concat(t.id))}},r.a.createElement(b,{cocktail:t})),e.renderButton(t))}))))}}]),t}(n.Component),_=a(17),q=a.n(_),Q=a(30),T=a.n(Q),G=a(31),R=a.n(G),W=a(32),P=a.n(W),V=a(33),H=a.n(V),K=(a(57),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(y,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"heading"}," Our Team"),r.a.createElement("div",{className:"card-wrapper"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"background",src:q.a,alt:""}),r.a.createElement("img",{className:"profile-img",src:T.a,alt:""}),r.a.createElement("h1",null," Rex Bergeron"),r.a.createElement("p",{className:"job-title"},"Software Developer"),r.a.createElement("p",{className:"about"}," Favorite Cocktail: 69 special "),r.a.createElement("p",{className:"contact"},"Contact")),r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"background",src:q.a,alt:""}),r.a.createElement("img",{className:"profile-img",src:R.a,alt:""}),r.a.createElement("h1",null," Surelis Segarra"),r.a.createElement("p",{className:"job-title"},"Software Developer"),r.a.createElement("p",{className:"about"}," Favorite Cocktail: Gin and Tonic "),r.a.createElement("p",{className:"contact"},"Contact")),"  ",r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"background",src:q.a,alt:""}),r.a.createElement("img",{className:"profile-img",src:P.a,alt:""}),r.a.createElement("h1",null," Dorje Kirsten "),r.a.createElement("p",{className:"job-title"},"Software Developer"),r.a.createElement("p",{className:"about"}," Favorite Cocktail: The Vesper Royale "),r.a.createElement("p",{className:"contact"},"Contact")),r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"background",src:q.a,alt:""}),r.a.createElement("img",{className:"profile-img",src:H.a,alt:""}),r.a.createElement("h1",null," Anastasia Morozova"),r.a.createElement("p",{className:"job-title"},"Software Developer"),r.a.createElement("p",{className:"about"}," Favorite Cocktail: Mezcal Margarita "),r.a.createElement("p",{className:"contact"},"Contact")))))}}]),t}(n.Component)),$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a.setUser=function(e){a.setState({user:e.body})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("img",{className:"home-img",src:M.a,alt:""}),r.a.createElement(p.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/id/:myDrink",component:B}),r.a.createElement(h.b,{exact:!0,path:"/random",component:C}),r.a.createElement(h.b,{exact:!0,path:"/popular",component:x}),r.a.createElement(h.b,{exact:!0,path:"/vodka",component:E}),r.a.createElement(h.b,{exact:!0,path:"/gin",component:O}),r.a.createElement(h.b,{exact:!0,path:"/tequila",component:w}),r.a.createElement(h.b,{exact:!0,path:"/rum",component:j}),r.a.createElement(h.b,{exact:!0,path:"/scotch",component:N}),r.a.createElement(h.b,{exact:!0,path:"/whiskey",component:S}),r.a.createElement(h.b,{exact:!0,path:"/name/:myCocktail",component:U}),r.a.createElement(h.b,{exact:!0,path:"/about-us",component:K}),r.a.createElement(h.b,{exact:!0,path:"/",render:function(e){return JSON.parse(localStorage.getItem("user"))?r.a.createElement(z,e):r.a.createElement(h.a,{to:"login"})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(A,Object.assign({},t,{setUser:e.setUser,user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/favorites",component:F}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.21456aa8.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/junior1.df6b66ae.jpeg"},function(e,a,t){e.exports=t.p+"static/media/junior2.8ef047b9.jpeg"},function(e,a,t){e.exports=t.p+"static/media/junior3.2c534885.jpeg"},function(e,a,t){e.exports=t.p+"static/media/junior4.db207bc4.jpeg"},function(e,a,t){e.exports=t.p+"static/media/junior5.473b6644.jpeg"},function(e,a,t){e.exports=t.p+"static/media/junior6.abe0e140.jpeg"},function(e,a,t){e.exports=t.p+"static/media/junior7.7bd57440.jpeg"},function(e,a,t){e.exports=t.p+"static/media/junior8.8dcba82f.jpeg"},function(e,a,t){e.exports=t.p+"static/media/adult1.0bb070e3.png"},function(e,a,t){e.exports=t.p+"static/media/adult2.93e55a21.png"},function(e,a,t){e.exports=t.p+"static/media/adult3.5e7044b0.jpeg"},function(e,a,t){e.exports=t.p+"static/media/adult4.b7501c18.jpeg"},function(e,a,t){e.exports=t.p+"static/media/adult5.f810ddd6.jpeg"},function(e,a,t){e.exports=t.p+"static/media/adult6.785fd4fd.jpeg"},function(e,a,t){e.exports=t(30)},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),i=(t(28),t(1)),s=t(2),m=t(4),o=t(3),u=t(5),d=t(6),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).handleMenuBar=function(){var e=document.getElementsByClassName("nav-right")[0];t.state.width<1150&&(t.state.isToggledOn?(e.style.display="block",t.setState({isToggledOn:!1})):(e.style.display="none",t.setState({isToggledOn:!0})))},t.setWrapperRef=t.setWrapperRef.bind(Object(d.a)(Object(d.a)(t))),t.handleClickOutside=t.handleClickOutside.bind(Object(d.a)(Object(d.a)(t))),t.updateWindowDimensions=t.updateWindowDimensions.bind(Object(d.a)(Object(d.a)(t))),t.handleScroll=t.handleScroll.bind(Object(d.a)(Object(d.a)(t))),t.state={isToggledOn:!0,width:0,height:0,addClass:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside),this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside),window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("scroll",this.handleScroll)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){var a=document.getElementsByClassName("nav-right")[0];this.state.width<1150&&"block"===a.style.display&&(this.state.isToggledOn||!this.wrapperRef||this.wrapperRef.contains(e.target)?(a.style.display="block",this.setState({isToggledOn:!1})):(a.style.display="none",this.setState({isToggledOn:!0})))}},{key:"handleScroll",value:function(){window.scrollY>550?this.setState({addClass:!0}):window.screenY<550&&this.setState({addClass:!1})}},{key:"render",value:function(){var e=["nav-container"],a=[],t=["nav-item"];return this.state.addClass?(e.push("colored"),a.push("colored-span"),t.push("colored-li")):(e.slice("colored"),a.slice("colored-span"),t.slice("colored-li")),l.a.createElement("header",{className:e.join(" ")},l.a.createElement("nav",{className:"nav-container-wrapper"},l.a.createElement("div",{className:"nav-left"},l.a.createElement("a",{href:"#main-image"},l.a.createElement("div",{className:"nav-title-wrapper"},l.a.createElement("span",null,"Move Your Heart"),l.a.createElement("span",{className:a.join(" ")},"\ubb34\ube0c\uc720\uc5b4\ud558\ud2b8 \uc608\uc220\uc2ec\ub9ac\uce58\uc720\uc13c\ud130"))),l.a.createElement("div",{className:"nav-menu-bar",onClick:this.handleMenuBar},l.a.createElement("i",{className:"fas fa-bars"}))),l.a.createElement("div",{className:"nav-right",ref:this.setWrapperRef},l.a.createElement("ul",{className:"nav-wrapper"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#main-image",className:t.join(" "),onClick:this.handleMenuBar},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#main-container",className:t.join(" "),onClick:this.handleMenuBar},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#main-ourservice",className:t.join(" "),onClick:this.handleMenuBar},"What We Do")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#main-service-section",className:t.join(" "),onClick:this.handleMenuBar},"Service")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#partner-container",className:t.join(" "),onClick:this.handleMenuBar},"Partner"))))))}}]),a}(n.Component),p=function(){return l.a.createElement("div",null)},v=function(e){var a=e.image,t={backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"};return l.a.createElement("div",{className:"slide",style:t})},h=function(e){return l.a.createElement("div",{className:"leftArrow",onClick:e.goToPrevSlide},l.a.createElement("i",{className:"fas fa-angle-left fa-2x","aria-hidden":"true"}))},f=function(e){return l.a.createElement("div",{className:"rightArrow",onClick:e.goToNextSlide},l.a.createElement("i",{className:"fas fa-angle-right fa-2x","aria-hidden":"true"}))},g=t(9),N=t.n(g),b=t(10),j=t.n(b),w=t(11),O=t.n(w),k=t(12),y=t.n(k),x=t(13),S=t.n(x),C=t(14),W=t.n(C),T=t(15),I=t.n(T),V=t(16),R=t.n(V),M=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).goToPrevSlide=function(){t.state.currentIndex>=1&&t.setState(function(e){return{currentIndex:e.currentIndex-1,translateValue:e.translateValue+t.slideWidth()}})},t.goToNextSlide=function(){if(t.state.currentIndex===t.state.images.length-1)return t.setState({currentIndex:0,translateValue:0});t.setState(function(e){return{currentIndex:e.currentIndex+1,translateValue:e.translateValue+-t.slideWidth()}})},t.slideWidth=function(){return document.querySelector(".slide").clientWidth},t.state={images:[N.a,j.a,O.a,y.a,S.a,W.a,I.a,R.a],currentIndex:0,translateValue:0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(e){return l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.images.map(function(e,a){return l.a.createElement(v,{key:a,image:e,alt:"\uc5b4\ub9b0\uc774, \uccad\uc18c\ub144 \ud65c\ub3d9 \uc0ac\uc9c4"})})),l.a.createElement(h,{goToPrevSlide:this.goToPrevSlide}),l.a.createElement(f,{goToNextSlide:this.goToNextSlide}))}}]),a}(n.Component),P=t(17),B=t.n(P),D=t(18),L=t.n(D),A=t(19),H=t.n(A),Y=t(20),q=t.n(Y),U=t(21),z=t.n(U),J=t(22),X=t.n(J),F=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).goToPrevSlide=function(){t.state.currentIndex>=1&&t.setState(function(e){return{currentIndex:e.currentIndex-1,translateValue:e.translateValue+t.slideWidth()}})},t.goToNextSlide=function(){if(t.state.currentIndex===t.state.images.length-1)return t.setState({currentIndex:0,translateValue:0});t.setState(function(e){return{currentIndex:e.currentIndex+1,translateValue:e.translateValue+-t.slideWidth()}}),console.log(t.state.currentIndex)},t.slideWidth=function(){return document.querySelector(".slide").clientWidth},t.state={images:[B.a,L.a,H.a,q.a,z.a,X.a],currentIndex:0,translateValue:0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(e){return l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.images.map(function(e,a){return l.a.createElement(v,{key:a,image:e,alt:"\uc77c\ubc18\uc778 \ud65c\ub3d9 \uc0ac\uc9c4"})})),l.a.createElement(h,{goToPrevSlide:this.goToPrevSlide}),l.a.createElement(f,{goToNextSlide:this.goToNextSlide}))}}]),a}(n.Component),G=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={junior:!1,general:!1,senior:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"main-service-section"},l.a.createElement("div",{className:"main-service-container"},l.a.createElement("div",{className:"main-service-title"},"Main Service"),l.a.createElement("div",{className:"main-service-wrapper"},l.a.createElement("div",{className:"main-service-desc"},l.a.createElement("div",{className:"service-target"},l.a.createElement("h2",null,"\uc544\ub3d9 \ubc0f \uccad\uc18c\ub144 \uc608\uc220\uc2ec\ub9ac \uce58\ub8cc / \uce58\uc720")),l.a.createElement("div",{className:"service-content-wrapper"},l.a.createElement("div",{className:"service-content"},l.a.createElement("h2",null,"\ud504\ub85c\uadf8\ub7a8 \ub0b4\uc6a9"),l.a.createElement("ul",null,l.a.createElement("li",null,"2~5\ud68c\uae30 \ud559\uae09 \ub2e8\uc704 \ud790\ub9c1\ud504\ub85c\uadf8\ub7a8"),l.a.createElement("li",null,"10~12\ud68c\uae30 \uc9d1\ub2e8\uc608\uc220\uce58\ub8cc / \uce58\uc720 \ud504\ub85c\uadf8\ub7a8"),l.a.createElement("li",null,"\uac1c\uc778 \uc0c1\ub2f4 / \uce58\ub8cc"),l.a.createElement("li",null,"\ubb34\uc6a9\ub3d9\uc791\uc2ec\ub9ac \uad00\ub828 \uac15\uc758"))),l.a.createElement("div",{className:"service-program"},l.a.createElement("h2",null,"\uc8fc\uc694 \ub300\uc0c1"),l.a.createElement("ul",null,l.a.createElement("li",null,"\ud559\uad50 \ubd80\uc801\uc751 \uc544\ub3d9 \ubc0f \uccad\uc18c\ub144"),l.a.createElement("li",null,"\uc608\uc220\ub9e4\uccb4\ub97c \ud1b5\ud55c \ud790\ub9c1\uc774 \ud544\uc694\ud55c \ud559\uae09"))))),l.a.createElement(M,null)),l.a.createElement("div",{className:"main-service-wrapper"},l.a.createElement("div",{className:"main-service-desc"},l.a.createElement("div",{className:"service-target"},l.a.createElement("h2",null,"\uc131\uc778 \ub300\uc0c1 \ub3d9\uc791\uc911\uc2ec \uc2ec\ub9ac\uc6cc\ud06c\uc0f5")),l.a.createElement("div",{className:"service-content-wrapper"},l.a.createElement("div",{className:"service-content"},l.a.createElement("h2",null,"\ud504\ub85c\uadf8\ub7a8 \ub0b4\uc6a9"),l.a.createElement("ul",null,l.a.createElement("li",null,"\uae30\uc5c5 \uc870\uc9c1\uc5ed\ub791 \uac15\ud654 \uc6cc\ud06c\uc0f5"),l.a.createElement("li",null,"\uc608\uc220 / \uc2ec\ub9ac\ub97c \ud1b5\ud55c  \ud790\ub9c1 \uc6d0\ub370\uc774 \ud074\ub798\uc2a4"),l.a.createElement("li",null,"\uae30\uc5c5 \ubc0f \uad50\uc9c1\uc6d0 \uac15\uc758"),l.a.createElement("li",null,"\uac1c\uc778 \uc0c1\ub2f4 / \uce58\ub8cc"))),l.a.createElement("div",{className:"service-program"},l.a.createElement("h2",null,"\uc8fc\uc694 \ub300\uc0c1"),l.a.createElement("ul",null,l.a.createElement("li",null,"\uc9c1\uc6d0\uc758 \uac74\uac15\ud55c \uc18c\ud1b5\uacfc \uc131\uc7a5\uc5d0 \uad00\uc2ec\uc788\ub294 \uae30\uc5c5, \ub2e8\uccb4"),l.a.createElement("li",null,"\uc608\uc220 \ub9e4\uccb4\ub97c \ud1b5\ud55c \ub9c8\uc74c\uc758 \uce58\uc720\uac00 \ud544\uc694\ud55c \uac1c\uc778"))))),l.a.createElement(F,null))))}}]),a}(n.Component),K=function(){return l.a.createElement("section",{id:"partner-container"},l.a.createElement("div",{className:"partner-container-wrapper"},l.a.createElement("div",{className:"partner-title"},l.a.createElement("p",null,"Partner")),l.a.createElement("ul",{className:"partner-list"},l.a.createElement("li",{className:"partner-item-1",alt:"\uc9c0\uc5d0\uc2a4\uce7c\ud14d\uc2a4"}),l.a.createElement("li",{className:"partner-item-2",alt:"\uad7f\ub124\uc774\ubc84\uc2a4"}),l.a.createElement("li",{className:"partner-item-3",alt:"\uc11c\uc6b8\ubb38\ud654\uc7ac\ub2e8"}),l.a.createElement("li",{className:"partner-item-4",alt:"\uac15\ub0a8\uad6c\uccad\uc18c\ub144\uc0c1\ub2f4\ubb38\ud654\uc13c\ud130"}),l.a.createElement("li",{className:"partner-item-5",alt:"\uace0\ub824\ub300\ud559\uad50\uad6c\ub85c\ubcd1\uc6d0"}),l.a.createElement("li",{className:"partner-item-6",alt:"\uacbd\ud76c\ub300\ud559\uad50\ubcd1\uc6d0"}),l.a.createElement("li",{className:"partner-item-7",alt:"\uc21c\ucc9c\ud5a5\ub300\ud559\uad50"}),l.a.createElement("li",{className:"partner-item-8",alt:"\uc9c0\uc74c\uc2ec\ub9ac\uce58\ub8cc\uc13c\ud130"}))))},Q=function(){return l.a.createElement("section",{id:"main-ourservice"},l.a.createElement("div",{className:"ourservice-title"},"What We do"),l.a.createElement("ul",{className:"service-list"},l.a.createElement("li",{className:"service-item"},l.a.createElement("div",{className:"service-image-1",alt:"\uc6c0\uc9c1\uc784 \uc911\uc2ec \uc0ac\uc9c4"}),l.a.createElement("div",{className:"service-wrapper"},l.a.createElement("span",null,"\uc6c0\uc9c1\uc784 \uc911\uc2ec\uc758 \uc2ec\ub9ac\uce58\ub8cc"),l.a.createElement("ul",{className:"service-items"},l.a.createElement("li",null,"- \uc790\uc874\uac10 \ud68c\ubcf5"),l.a.createElement("li",null,"- \ub300\uc778\uad00\uacc4 \uac08\ub4f1 \ud574\uc18c"),l.a.createElement("li",null,"- \uae0d\uc815\uc801\uc778 \uc790\uae30 \ubc1c\uacac"),l.a.createElement("li",null,"- \uc5b5\uc555\ub41c \uac10\uc815 \uc870\uc808\ud558\uae30")))),l.a.createElement("li",{className:"service-item"},l.a.createElement("div",{className:"service-image-2",alt:"\uc608\uc220\ub9e4\uccb4 \uc0ac\uc9c4"}),l.a.createElement("div",{className:"service-wrapper"},l.a.createElement("span",null,"\ub2e4\uc591\ud55c \uc608\uc220\ub9e4\uccb4\ub97c \uc774\uc6a9\ud55c \ud504\ub85c\uadf8\ub7a8"),l.a.createElement("ul",null,l.a.createElement("li",null,"- \ubb34\uc6a9, \ubbf8\uc220 \ub4f1 \uc608\uc220\ub9e4\uccb4\uc758 \ud1b5\ud569\uc801 \uc0ac\uc6a9"),l.a.createElement("li",null,"- \uac74\uac15\ud55c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc744 \ub3d5\ub294 \ub3d9\uc791\uc2ec\ub9ac\uc6cc\ud06c\uc0f5"),l.a.createElement("li",null,"- \ucde8\ud5a5\uc5d0 \ub9de\ub294 \ub2e4\uc591\ud55c \uc608\uc220 / \uc2ec\ub9ac \uc6d0\ub370\uc774 \ud074\ub798\uc2a4")))),l.a.createElement("li",{className:"service-item"},l.a.createElement("div",{className:"service-image-3",alt:"\ucf54\uce6d \ubc0f \uc0c1\ub2f4 \uc0ac\uc9c4"}),l.a.createElement("div",{className:"service-wrapper"},l.a.createElement("span",null,"1:1 \uac1c\uc778 \ucf54\uce6d \ubc0f \uc0c1\ub2f4"),l.a.createElement("ul",null,l.a.createElement("li",null," - \uc790\uc874\uac10, \ub300\uc778 \uad00\uacc4 \uc2ec\ub9ac \uc0c1\ub2f4"),l.a.createElement("li",null," - \ub0b4\uc801 \uc131\uc7a5\uc744 \ub3d5\ub294 1:1 \uac1c\uc778 \ucf54\uce6d"))))))},Z=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("section",{id:"main-image",alt:"main image"},l.a.createElement("div",{className:"main-image-title"},"Movement Psychotherapy?"),l.a.createElement("span",{className:"main-image-sub"},"\u201cIt is not about the Dance, but about using movement as a tool of communication.",l.a.createElement("br",null),"It is about connecting movement to psychological process.\u201d")),l.a.createElement("section",{id:"main-container"},l.a.createElement("div",{className:"main-container-wrapper"},l.a.createElement("div",{className:"main-title"},"About Us"),l.a.createElement("div",{className:"main-introduce"},l.a.createElement("div",{className:"introduce-image-container"},l.a.createElement("div",{className:"introduce-image",alt:"introduce image"}),l.a.createElement("span",{className:"introduce"},"\ubb34\ube0c\uc720\uc5b4\ud558\ud2b8 \uc608\uc220\uc2ec\ub9ac\uce58\uc720\uc13c\ud130\ub294 \ub2e4\uc591\ud55c \uc2ec\ub9ac\uc801 \ubb38\uc81c \ud574\uacb0 \ud639\uc740 \ub354 \ub098\uc740 \uc790\uc2e0\uc744 \ub9cc\ub098\uace0\uc790 \ud558\ub294 \ubd84\ub4e4\uc744 \uc704\ud55c \uc2ec\ub9ac\uce58\uc720 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",l.a.createElement("br",null),"\ud2b9\ud788 \uc6b0\ub9ac\uc758 \uc2e0\uccb4\uc640 \uc6c0\uc9c1\uc784\uc5d0 \ub2f4\uae34 \ub9c8\uc74c\uc744 \ubc1c\uacac\ud558\uace0 \uac74\uac15\ud558\uac8c \ud45c\ud604\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4"))))),l.a.createElement(Q,null),l.a.createElement(G,null),l.a.createElement(K,null),l.a.createElement(p,null))}}]),a}(n.Component),$=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer-container"},l.a.createElement("div",{className:"main-contact-wrapper"},l.a.createElement("div",{className:"contact-wrapper"},l.a.createElement("p",null,"\ubb34\ube0c\uc720\uc5b4\ud558\ud2b8 : \ub300\ud45c \ucd5c\uc601\uc11d"),l.a.createElement("ul",{className:"contact"},l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-map-marker-alt"})," \uc11c\uc6b8, \uacbd\uae30, \uc778\ucc9c"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-mobile-alt"})," 010-3086-9311"),l.a.createElement("li",null,l.a.createElement("i",{className:"far fa-envelope"})," 6647show@naver.com"),l.a.createElement("li",null,l.a.createElement("div",{className:"kakao-image"}),"Youngseokcc"))),l.a.createElement("div",{className:"contact-sns-wrapper"},l.a.createElement("ul",{className:"contact-sns"},l.a.createElement("li",null,l.a.createElement("a",{href:""})),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/chesonghaeyo/"},l.a.createElement("i",{className:"fab fa-instagram"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/youngseok.bao"},l.a.createElement("i",{className:"fab fa-facebook-square"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/youngbao"},l.a.createElement("i",{className:"fab fa-twitter-square"})))),l.a.createElement("p",null,"2018 MOVE YOUR HEART. ALL RIGHTS RESERVED."))))}}]),a}(n.Component),_=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(E,null),l.a.createElement(Z,null),l.a.createElement($,null))}}]),a}(n.Component);c.a.render(l.a.createElement(_,null),document.getElementById("main"))}],[[23,2,1]]]);
//# sourceMappingURL=main.2faad750.chunk.js.map
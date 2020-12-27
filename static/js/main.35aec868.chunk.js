(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__9bdhS",text:"ImageGallery_text__1COWe"}},12:function(e,t,a){e.exports={app:"App_app__3A07g"}},13:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1X3xd",image:"ImageGalleryItem_image__DtBfa"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__3lmyA",modal:"Modal_modal__AAdpN"}},16:function(e,t,a){e.exports={button:"Button_button__2zh08"}},17:function(e,t,a){e.exports={loader:"Loader_loader__ZDRAm"}},47:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),o=a.n(n),c=a(3),s=a.n(c),i=(a(24),a(4)),l=a(5),m=a(7),u=a(6),h=a(12),g=a.n(h),d=a(15),p=a(16),b=a.n(p);function j(e){var t=e.onClick;return Object(r.jsx)("button",{className:b.a.button,type:"button",onClick:t,children:"Load more"})}var f=a(8);function v(e){var t=e.message;return f.b.error("hello".concat(t))}var O=a(17),y=a.n(O),x=a(10),_=a.n(x),N=a(18),S=a.n(N),k=a(13),C=a.n(k);function w(e){var t=e.webformatURL,a=void 0===t?"https://picsum.photos/600/400":t,n=e.largeImageURL,o=void 0===n?"https://picsum.photos/600/400":n,c=e.tags,s=e.imageClick;return Object(r.jsx)("li",{className:C.a.imageGalleryItem,children:Object(r.jsx)("img",{src:a,"data-sourse":o,alt:c,className:C.a.image,onClick:s})})}function I(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{className:y.a.loader,type:"Circles",color:"#3ccf9e",height:100,width:100}),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("ul",{className:_.a.imageGallery,children:Array(12).fill().map((function(e,t){return Object(r.jsx)(w,{},t)}))})})]})}var L="18773643-f1542c573d467a3c4fb890edb";var G={fetchGallery:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(L,"&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(e)))}))}},U="idle",R="pending",A="resolved",M="rejected",F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={page:1,total:null,hits:[],error:null,status:U},e.onLoadMore=function(){var t=e.props,a=t.page,r=t.imageName;G.fetchGallery(r,a).then((function(t){t.page;e.setState((function(e){return{page:e.page+1}}))}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.imageName,n=this.props.imageName;r===n&&e.page===this.props.page||(this.setState({status:R}),console.log("prevState",t.hits),console.log("hits",this.state.hits),G.fetchGallery(n).then((function(e){var r=e.hits,n=e.total;e.page;return a.setState({hits:[].concat(Object(d.a)(t.hits),Object(d.a)(r)),total:n,status:A})})).catch((function(e){return a.setState({error:e,status:M})})))}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.total,n=e.error,o=e.status,c=this.props.largeURL;return"idle"===o?Object(r.jsx)("div",{className:_.a.text,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"}):"pending"===o?Object(r.jsx)(I,{}):"rejected"===o?Object(r.jsx)(v,{message:n.message}):"resolved"===o?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("ul",{className:_.a.imageGallery,children:t.map((function(e,t){return Object(r.jsx)(w,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,imageClick:c},t)}))}),a>11&&Object(r.jsx)(j,{onClick:this.onLoadMore})]}):void 0}}]),a}(n.Component),D=a(9),E=a.n(D),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.target.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):f.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:E.a.searchbar,children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:E.a.searchForm,children:[Object(r.jsx)("button",{type:"submit",className:E.a.button,children:Object(r.jsx)("span",{className:E.a.label,children:"Search"})}),Object(r.jsx)("input",{value:this.state.imageName,onChange:this.handleNameChange,className:E.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),z=(a(46),a(14)),K=a.n(z),q=document.querySelector("#modal-root"),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(c.createPortal)(Object(r.jsx)("div",{className:K.a.overlay,onClick:this.handleBackdropClick,children:Object(r.jsx)("div",{className:K.a.modal,children:e})}),q)}}]),a}(n.Component),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={imageName:"",largeImageURL:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e.toggleModal=function(){e.setState({largeImageURL:""})},e.largeImgModal=function(t){var a=t.target;if("IMG"===a.nodeName){var r=a.dataset.sourse;e.setState((function(e){e.largeImageURL;return{largeImageURL:r}}))}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.largeImageURL,a=e.imageName;return Object(r.jsxs)("div",{className:g.a.app,children:[Object(r.jsx)(B,{onSubmit:this.handleFormSubmit}),t&&Object(r.jsx)(J,{onClose:this.toggleModal,children:Object(r.jsx)("img",{src:t,alt:a})}),Object(r.jsx)(F,{imageName:a,largeURL:this.largeImgModal}),Object(r.jsx)(f.a,{autoClose:3e3})]})}}]),a}(n.Component);s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__LTx6x",searchForm:"Searchbar_searchForm__37edr",button:"Searchbar_button__1kIEH",label:"Searchbar_label__22Yjz",input:"Searchbar_input__20GzX"}}},[[47,1,2]]]);
//# sourceMappingURL=main.35aec868.chunk.js.map
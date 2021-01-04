(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__9bdhS"}},12:function(e,t,a){e.exports={app:"App_app__3A07g",text:"App_text__1kJ8n"}},13:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1X3xd",image:"ImageGalleryItem_image__DtBfa"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__3lmyA",modal:"Modal_modal__AAdpN"}},16:function(e,t,a){e.exports={loader:"Loader_loader__ZDRAm"}},18:function(e,t,a){e.exports={button:"Button_button__2zh08"}},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(3),s=a.n(c),i=(a(24),a(15)),l=a(5),m=a(6),u=a(8),g=a(7),h=a(4),d=(a(25),a(12)),p=a.n(d),b=a(10),j=a.n(b),f=a(13),v=a.n(f);function y(e){var t=e.webformatURL,a=void 0===t?"https://picsum.photos/600/400":t,r=e.largeImageURL,o=void 0===r?"https://picsum.photos/600/400":r,c=e.tags,s=e.imageClick;return Object(n.jsx)("li",{className:v.a.imageGalleryItem,children:Object(n.jsx)("img",{src:a,"data-sourse":o,alt:c,className:v.a.image,onClick:s})})}var x=function(e){var t=e.images,a=e.largeURL;return Object(n.jsx)("ul",{className:j.a.imageGallery,children:t.map((function(e,t){return Object(n.jsx)(y,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,imageClick:a},t)}))})},O=a(9),_=a.n(O),N=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.target.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""!==e.state.imageName.trim()){var a=e.state.imageName;e.props.onSubmit(a),e.setState({imageName:""})}else h.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:_.a.searchbar,children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:_.a.searchForm,children:[Object(n.jsx)("button",{type:"submit",className:_.a.button,children:Object(n.jsx)("span",{className:_.a.label,children:"Search"})}),Object(n.jsx)("input",{value:this.state.imageName,onChange:this.handleNameChange,className:_.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),L=a(16),S=a.n(L),k=a(17),w=a.n(k),C=a.p+"static/media/pending.d3fe10c8.png";function I(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{className:S.a.loader,type:"Circles",color:"#3ccf9e",height:30,width:30}),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("ul",{className:j.a.imageGallery,children:Array(12).fill().map((function(e,t){return Object(n.jsx)(y,{webformatURL:C,largeImageURL:C},t)}))})})]})}var G=a(14),U=a.n(G),R=document.querySelector("#modal-root"),A=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(c.createPortal)(Object(n.jsx)("div",{className:U.a.overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:U.a.modal,children:e})}),R)}}]),a}(r.Component);function M(e){var t=e.message;return h.b.error("".concat(t))}var D=a(18),F=a.n(D);function E(e){var t=e.onClick;return Object(n.jsx)("button",{className:F.a.button,type:"button",onClick:t,children:"Load more"})}var P={page:1,fetchGallery:function(e){var t=this,a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(this.page,"&key=").concat("18773643-f1542c573d467a3c4fb890edb","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(a){return t.page+=1,console.log(a),a.ok?a.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(e)))}))},resetPage:function(){this.page=1}},B="idle",z="pending",T="resolved",J="rejected",K=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:"",largeImageURL:"",images:[],total:null,page:1,error:null,status:B,isLoading:!1},e.handleFormSubmit=function(t){P.resetPage(),e.setState({imageName:t})},e.toggleModal=function(){e.setState({largeImageURL:""})},e.largeImgModal=function(t){var a=t.target;if("IMG"===a.nodeName){var n=a.dataset.sourse;e.setState((function(e){e.largeImageURL;return{largeImageURL:n}}))}},e.fetchApiGallery=function(){var t=e.state.page,a=e.state.imageName;setTimeout((function(){P.fetchGallery(a,t).then((function(t){var a=t.hits,n=t.total;0===a.length&&h.b.error("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435\u0442 \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430!"),e.setState({images:[].concat(Object(i.a)(e.state.images),Object(i.a)(a)),total:n,isLoading:!1,status:T}),e.scrollPage()})).catch((function(t){return e.setState({error:t,status:J})}))}),5e3)},e.scrollPage=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onLoadMore=function(){e.setState({isLoading:!0}),e.fetchApiGallery()},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.imageName!==this.state.imageName&&(this.setState({status:z,images:[],page:1}),this.fetchApiGallery())}},{key:"render",value:function(){var e=this.state,t=e.largeImageURL,a=e.imageName,r=e.images,o=e.error,c=e.status,s=e.total;return Object(n.jsxs)("div",{className:p.a.app,children:[Object(n.jsx)(N,{onSubmit:this.handleFormSubmit}),"idle"===c&&Object(n.jsx)("div",{className:p.a.text,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"}),"pending"===c&&Object(n.jsx)(I,{}),"rejected"===c&&Object(n.jsx)(M,{message:o.message}),s>1&&"resolved"===c&&Object(n.jsx)(x,{images:r,largeURL:this.largeImgModal}),t&&Object(n.jsx)(A,{onClose:this.toggleModal,children:Object(n.jsx)("img",{src:t,alt:a})}),this.state.isLoading&&Object(n.jsx)(I,{}),s>r.length&&!this.state.isLoading&&Object(n.jsx)(E,{onClick:this.onLoadMore}),Object(n.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(K,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__LTx6x",searchForm:"Searchbar_searchForm__37edr",button:"Searchbar_button__1kIEH",label:"Searchbar_label__22Yjz",input:"Searchbar_input__20GzX"}}},[[47,1,2]]]);
//# sourceMappingURL=main.d625090d.chunk.js.map
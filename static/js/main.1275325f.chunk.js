(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"modal_Overlay__2PQZK",Modal:"modal_Modal__3qVwQ"}},22:function(e,a,t){e.exports={App:"app_App__1VE84"}},24:function(e,a,t){e.exports={ImageGallery:"imageGallery_ImageGallery__3Wt07"}},26:function(e,a,t){e.exports={Button:"button_Button__l6X__"}},28:function(e,a,t){e.exports=t(73)},3:function(e,a,t){e.exports={Searchbar:"searchbar_Searchbar__3VK8i",SearchForm:"searchbar_SearchForm__pn92P",SearchFormButton:"searchbar_SearchFormButton__1EFLt",SearchFormButtonLabel:"searchbar_SearchFormButtonLabel__Jj-ZB",SearchFormInput:"searchbar_SearchFormInput__2L7V0"}},73:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(21),c=t.n(r),l=t(27),i=t(11),s=t(4),m=t(5),u=t(7),h=t(6),p=t(8),d=t(22),g=t.n(d),b=t(23),f=t.n(b),v=function(e,a){var t="?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(a,"&per_page=12&key=");return f.a.get("https://pixabay.com/api/"+t+"14472028-808bc64ad5a80955cde6e6aeb")},_=t(9),y=t.n(_),I=function(e){var a=e.src,t=e.onOpen,n=e.id;return o.a.createElement("li",{className:y.a.ImageGalleryItem},o.a.createElement("img",{src:a,alt:"",className:y.a.ImageGalleryItemImage,onClick:t,id:n}))},S=t(24),E=t.n(S),O=t(10),j=t.n(O),C=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).handleKeyPress=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){Number(e.target.id)!==Number(t.props.object.id)&&t.props.onClose()},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,a=e.object,t=e.id;return o.a.createElement("div",{className:j.a.Overlay,onClick:this.handleBackdropClick},o.a.createElement("div",{className:j.a.Modal},o.a.createElement("img",{src:a.largeImageURL,alt:"",id:t,width:"800",height:"600"})))}}]),a}(n.Component),L=function(e){var a=e.images,t=e.onOpen,n=e.onClose,r=e.isModalOpen,c=e.id,l=e.object;return o.a.createElement("ul",{className:E.a.ImageGallery},r&&o.a.createElement(C,{id:c,object:l,onClose:n}),a.map((function(e){return o.a.createElement(I,{id:e.id,onOpen:t,src:e.webformatURL,key:e.id})})))},k=t(25),w=t.n(k),N=(t(72),t(3)),F=t.n(N),M=function(e){var a=e.value,t=e.handleChange,n=e.onSubmit;return o.a.createElement("header",{className:F.a.Searchbar},o.a.createElement("form",{onSubmit:n,className:F.a.SearchForm},o.a.createElement("button",{type:"submit",className:F.a.SearchFormButton},o.a.createElement("span",{className:F.a.SearchFormButtonLabel},"Search")),o.a.createElement("input",{value:a,onChange:t,className:F.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))},B=t(26),G=t.n(B),x=function(e){var a=e.onLoad;return o.a.createElement("button",{className:G.a.Button,onClick:a},"Load more")},K=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).state={images:[],page:1,isLoading:!1,isModalOpen:!1,value:"",id:null,object:{}},t.fetchImages=function(e){t.setState({isLoading:!0}),v(e,t.state.page).then((function(e){var a=e.data;t.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(a.hits)),page:e.page+1}}))})).catch((function(e){return console.log(e)})).finally((function(){t.setState({isLoading:!1})}))},t.handleChange=function(e){t.setState({value:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.fetchImages(t.state.value)},t.openModal=function(e){var a=t.state.images.filter((function(a){return a.id===Number(e.target.id)})),n=Object(l.a)(a,1)[0];t.setState({isModalOpen:!0,id:e.target.id,object:n})},t.closeModal=function(){t.setState({isModalOpen:!1})},t.onLoad=function(){t.fetchImages(t.state.value,t.state.page)},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,a){a.value===this.state.value&&a.page===this.state.page||a.value!==this.state.value&&this.setState({images:[],page:1}),this.state.page>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.isModalOpen,r=e.id,c=e.value,l=e.object;return o.a.createElement("div",{className:g.a.App},o.a.createElement(M,{value:c,onSubmit:this.handleSubmit,handleChange:this.handleChange}),t?o.a.createElement(w.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80,timeout:3e3}):o.a.createElement(L,{object:l,images:a,onOpen:this.openModal,onClose:this.closeModal,isModalOpen:n,id:r}),a.length>0&&o.a.createElement(x,{onLoad:this.onLoad}))}}]),a}(n.Component);c.a.render(o.a.createElement(K,null),document.getElementById("root"))},9:function(e,a,t){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__2nKCI",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__1cGqL"}}},[[28,1,2]]]);
//# sourceMappingURL=main.1275325f.chunk.js.map
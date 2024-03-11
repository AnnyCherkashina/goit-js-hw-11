import{S as f,i as l}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=new f(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery");function p({webformatURL:o,largeImageURL:t,tags:n,likes:s,views:e,comments:r,downloads:i}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img class="gallery-image" src="${o}" alt="${n}" />
      <div class="wrap">
        <p><b>Likes:</b> </br>${s}</p>
        <p><b>Views:</b> </br>${e}</p>
        <p><b>Coments:</b> </br>${r}</p>
        <p><b>Downloads:</b> </br>${i}</p>
      </div>
    </a>
  </li>`}function d(o){return o.map(p).join("")}function g(o,t){m.insertAdjacentHTML("beforeend",d(t))}function h(){u.refresh()}const y="https://pixabay.com/api/",b="42803538-255c2e80da4c06c2048b9f703";function L(o){const t=new URLSearchParams({key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${y}/?${t}`;return fetch(n).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const S=document.querySelector(".search-form"),a=document.querySelector(".loader"),c=document.querySelector(".gallery");S.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="";const t=o.target.elements.search.value.trim();if(t===""){l.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}w(),L(t).then(n=>{if(n.hits.length===0)return l.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});g(c,n.hits),h()}).catch(n=>{console.log(n)}).finally(()=>{$()}),o.target.reset()});function w(){a&&(a.style.display="block")}function $(){a&&(a.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map

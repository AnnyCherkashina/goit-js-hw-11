import{S as u,i as a}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=new u(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery");function p({webformatURL:t,largeImageURL:o,tags:n,likes:s,views:e,comments:r,downloads:i}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${t}" alt="${n}" />
      <div class="wrap">
        <p><b>Likes:</b> </br>${s}</p>
        <p><b>Views:</b> </br>${e}</p>
        <p><b>Coments:</b> </br>${r}</p>
        <p><b>Downloads:</b> </br>${i}</p>
      </div>
    </a>
  </li>`}function g(t){return t.map(p).join("")}function h(t,o){m.insertAdjacentHTML("beforeend",g(o))}function y(){d.refresh()}const b="https://pixabay.com/api/",L="42803538-255c2e80da4c06c2048b9f703";function S(t){const o=new URLSearchParams({key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${b}/?${o}`;return fetch(n).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const w=document.querySelector(".search-form"),l=document.querySelector(".loader"),c=document.querySelector(".gallery");w.addEventListener("submit",t=>{t.preventDefault(),c.innerHTML="";const o=t.target.elements.search.value.trim();if(o===""){a.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}E(),S(o).then(n=>{if(n.hits.length===0)return a.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});h(c,n.hits),y()}).catch(n=>{console.log(n)}).finally(()=>{f()}),t.target.reset()});function E(){l&&(l.style.display="block")}function f(){const t=document.querySelector(".loader");t&&(t.style.display="none")}document.addEventListener("DOMContentLoaded",f);
//# sourceMappingURL=commonHelpers.js.map
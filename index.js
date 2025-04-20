import{a as h,S as p,i as n}from"./assets/vendor-B-D547pe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="https://pixabay.com/api/",y="49633368-6da3d74b0c3b6468a6c14afef";async function g(s){try{return(await h.get(m,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),new Error("Failed to fetch images")}}let v=new p(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery");function L(s){const t=s.map(r=>`
      <li class="gallery-item">
            <a class="gallery-link" href = '${r.largeImageURL}'>
                <img class="gallery-image" src = '${r.webformatURL}' alt = '${r.tags}' width = '360'>
            </a>
            <div class = 'info'>
                <div class='descr'><h3>Likes</h3><p>${r.likes}</p></div>
                <div class='descr'><h3>Views</h3><p>${r.views}</p></div>
                <div class='descr'><h3>Comments</h3><p> ${r.comments}</p></div>
                <div class='descr'><h3>Downloads</h3><p>${r.downloads}</p></div>
            </div>
       </li>`).join("");c.innerHTML=t,v.refresh()}function l(){c.innerHTML=""}const d=document.querySelector(".loader");function w(){d.classList.remove("hidden")}function u(){d.classList.add("hidden")}u();const f=document.querySelector(".form"),b=f.querySelector("input");l();f.addEventListener("submit",async s=>{s.preventDefault(),l();const t=b.value.trim();if(t){w();try{const r=await g(t);r.hits.length?L(r.hits):n.show({message:"Sorry, there are no images matching your search query. Please try again! ",position:"center",color:"red"})}catch{n.show({message:"Failed to fetch images. Please try again later.",position:"center",color:"red"})}u()}});
//# sourceMappingURL=index.js.map

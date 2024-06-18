import{i as l,s as d}from"./assets/vendor-5c957d73.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=a(r);fetch(r.href,e)}})();const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=";function f(s){const t="https://pixabay.com",a="/api/",o=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",key:"44388717-c7f861c042cec84afe94caebd"}),r=`${t}${a}?${o}`;return fetch(r).then(e=>{if(!e)throw new Error("Response is not ok");return e.json()}).then(e=>(e.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"322px",iconUrl:n,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",theme:"dark"}),e)).catch(e=>{l.error({message:"Sorry, there was an error fetching images. Please try again later!",maxWidth:"322px",iconUrl:n,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",theme:"dark"})})}const c={formElem:document.querySelector("form"),galleryElem:document.querySelector(".gallery"),loader:document.querySelector(".loader")};c.loader.className="loader";function p(){c.loader.classList.remove("hidden")}function m(){c.loader.classList.add("hidden")}function g({largeImageURL:s,webformatURL:t,tags:a,likes:o,views:r,comments:e,downloads:i}){return`<li class="gallery-item">
          <a
            class="gallery-link"
            href="${s}"
          >
            <img
              class="gallery-image"
              src="${t}"
              data-source="${s}"
              alt="${a}"
            />
          </a>
          <div class="desc">
          <p class="desc-item"><span class="desc-item-style">Likes</span><br> ${o}</p>
          <p class="desc-item"><span class="desc-item-style">Views</span><br> ${r}</p>
          <p class="desc-item"><span class="desc-item-style">Comments</span><br> ${e}</p>
          <p class="desc-item"><span class="desc-item-style">Downloads</span><br> ${i}</p>
          </div>
          
        </li>
  `}function u(s){return s.hits.map(t=>g(t)).join(`
`)}m();const A=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.formElem.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.query.value.trim();p(),c.galleryElem.innerHTML="",f(t).then(a=>{const o=u(a);c.galleryElem.innerHTML=o,A.refresh()}).catch(a=>{l.error({message:"Sorry, there was an error fetching images. Please try again later!",maxWidth:"322px",iconUrl:closeImageURL,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",theme:"dark"})}).finally(()=>{m()})});
//# sourceMappingURL=commonHelpers.js.map

import{i as l,s as m}from"./assets/vendor-5c957d73.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(s){if(s.ep)return;s.ep=!0;const e=o(s);fetch(s.href,e)}})();const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=";function p(r){const t="https://pixabay.com",o="/api/",a=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",key:"44388717-c7f861c042cec84afe94caebd"}),s=`${t}${o}?${a}`;return fetch(s).then(e=>{if(!e)throw new Error("Response is not ok");return e.json()}).then(e=>(e.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"322px",iconUrl:d,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",theme:"dark"}),e)).catch(e=>console.log(e))}const c={formElem:document.querySelector("form"),galleryElem:document.querySelector(".gallery"),loader:document.querySelector(".loader")};c.loader.className="loader";function u(){c.loader.classList.remove("hidden")}function i(){c.loader.classList.add("hidden")}function f({largeImageURL:r,webformatURL:t,tags:o,likes:a,views:s,comments:e,downloads:n}){return`<li class="gallery-item">
          <a
            class="gallery-link"
            href="${r}"
          >
            <img
              class="gallery-image"
              src="${t}"
              data-source="${r}"
              alt="${o}"
            />
          </a>
          <div class="desc">
          <p class="desc-item"><span class="desc-item-style">Likes</span><br> ${a}</p>
          <p class="desc-item"><span class="desc-item-style">Views</span><br> ${s}</p>
          <p class="desc-item"><span class="desc-item-style">Comments</span><br> ${e}</p>
          <p class="desc-item"><span class="desc-item-style">Downloads</span><br> ${n}</p>
          </div>
          
        </li>
  `}function A(r){return r.hits.map(t=>f(t)).join(`
`)}i();const g=new m(".gallery a",{captionsData:"alt",captionDelay:250});c.formElem.addEventListener("submit",r=>{r.preventDefault();const t=r.target.elements.query.value.trim();u(),c.galleryElem.innerHTML="",p(t).then(o=>{const a=A(o);c.galleryElem.innerHTML=a,g.refresh()}).catch(o=>{console.log(o)}).finally(()=>{i()})});
//# sourceMappingURL=commonHelpers.js.map

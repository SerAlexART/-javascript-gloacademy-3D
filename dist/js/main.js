(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds"),c=()=>{let e=(()=>{let e=(new Date("2 february 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining>=0&&(t.textContent=e.days<10?"0"+e.days:e.days,n.textContent=e.hours<10?"0"+e.hours:e.hours,o.textContent=e.minutes<10?"0"+e.minutes:e.minutes,s.textContent=e.seconds<10?"0"+e.seconds:e.seconds)};c(),setInterval(c,1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector(".menu"),n=e.querySelector(".close-btn"),o=e.querySelectorAll("ul > li > a"),s=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",s),n.addEventListener("click",s),o.forEach((e=>{e.addEventListener("click",s)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=document.documentElement.clientWidth;console.log(o);let s=0;const c=()=>{s++,console.log(s),e.style.opacity=`${s}%`,s<100?setTimeout(c,5):s=0};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",o>=768&&c()}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})()})();
var t=document.querySelectorAll(".population"),e=[],r=!0,n=!1,o=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done);r=!0){var u=l.value;e.push(Number(u.textContent.replace(/,/g,"")))}}catch(t){n=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}var c=e.reduce(function(t,e){return t+e},0),i=c/e.length,p=document.querySelector(".total-population"),y=document.querySelector(".average-population");p.textContent=c.toLocaleString("en-US"),y.textContent=Math.round(i).toLocaleString("en-US");
//# sourceMappingURL=index.30a4999b.js.map

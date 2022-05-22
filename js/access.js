function validateprevious(href) {
    if(href.includes("contactsucess.html")) {
        if(!document.referrer.includes("contact.html")){
            window.location.replace("contact.html");
        }
    }
    else if(href.includes("reservationsucces.html")) {
        if(!document.referrer.includes("reservation.html")){
            window.location.replace("reservation.html");
        }
    }
}
  
window.onload = validateprevious(window.location.href);
var url = new URL(window.location.href);
var scrollTo = url.searchParams.get("scrollTo");
document.getElementById(scrollTo).scrollIntoView({behavior: 'smooth'}); 
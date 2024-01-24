let moreIconForMobile = document.querySelector(".moreIconForMobile");
let navbarMainDiv =  document.querySelector(".navbarMainDiv");
let moreClick =  document.querySelector(".moreClick");
let closeICON =  document.querySelector(".closeICON");
let moreTextHidenDiv = document.querySelector(".moreTextHidenDiv");
let CommunicationMaps = document.querySelector(".CommunicationMaps");
let iframeMaps = document.querySelector(".iframeMaps");
let closeMaps =  document.querySelector(".closeMaps");



moreClick.addEventListener("click",function(){
    navbarMainDiv.style.marginLeft = "0%";
    moreClick.style.display = "none";
    closeICON.style.display = "block";
    moreIconForMobile.style.marginLeft = "30%"
    moreTextHidenDiv.style.display = "none";
    AboutMainDiv.style.zIndex = "-1";
    gallerymainDiv.style.zIndex = "-1";
    contactMAinDiv.style.zIndex = "-1";
    departmentmainDiv.style.zIndex = "-1";

})
closeICON.addEventListener("click",function(){
    navbarMainDiv.style.marginLeft = "-73%";
    closeICON.style.display = "none";
    moreClick.style.display = "block";
    moreIconForMobile.style.marginLeft = "1%"
    moreTextHidenDiv.style.display = "block";
    moreTextHidenDiv.style.display = "flex";
    moreTextHidenDiv.style.marginTop = "-3rem";


})

// maps click event 


































let navItemsDiv1 = document.querySelector(".navItemsDiv1");
let navItemsDiv2 = document.querySelector(".navItemsDiv2");
let navItemsDiv3 = document.querySelector(".navItemsDiv3");
let navItemsDiv4 = document.querySelector(".navItemsDiv4");
let navItemsDiv5 = document.querySelector(".navItemsDiv5");
let navItemsDiv6 = document.querySelector(".navItemsDiv6");





//meadi quarey in js click on side navbar

let AboutMainDiv = document.querySelector(".AboutMainDiv");
let navItemsDivAbout = document.querySelector(".navItemsDiv2");
let closeDivClick = document.querySelector(".closeDivClick");
/* department start from here  */
let departmentmainDiv = document.querySelector(".department_mainDiv");
let closeDivClick2department = document.querySelector(".closeDivClick2_department");
let navItemDivDepartment = document.querySelector(".navItemsDiv3");
// Gallery div 
let gallerymainDiv = document.querySelector(".gallery_mainDiv");
let closeGallery = document.querySelector(".closeGallery");

// contact div
let contactMAinDiv = document.querySelector(".contact_MAinDiv");
let closeContact = document.querySelector(".closeContact");

//  admin pannel acces div 
let moreiconnav1 = document.querySelector(".moreicon_nav1");
let moreiconnav2 = document.querySelector(".moreicon_nav2");
let adminDivmainDiv = document.querySelector(".adminDiv_mainDiv");
let adminlogindiv = document.querySelector(".admin_login_div");
let navItemMainDIv =document.querySelector(".navItemMainDIv");
let moreiconMain_div = document.querySelector(".moreiconMain_div");
let forbpiIconDiv = document.querySelector(".forbpiIconDiv");



let x = window.matchMedia("(max-width: 40rem)");
if (x.matches) { 
    // If media query matches
    //about click on mobile view 
    // about div click function statrt
    navItemsDivAbout.addEventListener("click",function(){
        AboutMainDiv.style.zIndex = "1";
        navbarMainDiv.style.marginLeft = "-73%";
        moreIconForMobile.style.marginLeft = "1%"
        closeICON.style.display = "none";
        moreClick.style.display = "block";       
    })
   
    // click close button 
    closeDivClick.addEventListener("click",function(){
        AboutMainDiv.style.zIndex = "-1";
        
        
    })

    // technolohy div click start 
    navItemDivDepartment.addEventListener("click",function(){
        departmentmainDiv.style.zIndex = "1";
        navbarMainDiv.style.marginLeft = "-73%";
        moreIconForMobile.style.marginLeft = "1%"
        closeICON.style.display = "none";
        moreClick.style.display = "block"; 
        
    })
    closeDivClick2department.addEventListener("click",function(){
        departmentmainDiv.style.zIndex = "-1";    
    })

    // gallery div click
    navItemsDiv5.addEventListener("click",function(){
        gallerymainDiv.style.zIndex = "1";
        navbarMainDiv.style.marginLeft = "-73%";
        moreIconForMobile.style.marginLeft = "1%"
        closeICON.style.display = "none";
        moreClick.style.display = "block"; 
    })
    closeGallery.addEventListener("click",function(){
        gallerymainDiv.style.zIndex = "-1";
    })
    

    // contact  div statr
    navItemsDiv6.addEventListener("click",function(){
        contactMAinDiv.style.zIndex = "1";
        navbarMainDiv.style.marginLeft = "-73%";
        moreIconForMobile.style.marginLeft = "1%"
        closeICON.style.display = "none";
        moreClick.style.display = "block"; 
    })
    closeContact.addEventListener("click",function(){
        contactMAinDiv.style.zIndex = "-1";
    })

    //admin panel not working for mobile device
    

    moreiconnav2.addEventListener("click",function(){
        alert("Admin Pannel is only for dekstop version");
        adminDivmainDiv.style.zIndex = "-20";
    })

    
  }else{
    
    //about hover on dekstop view 
    navItemsDivAbout.addEventListener("mouseover",function(){
        AboutMainDiv.style.zIndex = "1";
       
    })
    navItemsDivAbout.addEventListener("mouseout",function(){
        AboutMainDiv.style.zIndex = "-1";
    })
    //about items over on true 
    AboutMainDiv.addEventListener("mouseover",function(){
        AboutMainDiv.style.zIndex = "1";;
        
    })  
    AboutMainDiv.addEventListener("mouseout",function(){
        AboutMainDiv.style.zIndex = "-1";
    })
    // department div hover
    navItemsDiv3.addEventListener("mouseover",function(){
        departmentmainDiv.style.zIndex = "1";    
    })
    navItemsDiv3.addEventListener("mouseout",function(){
        departmentmainDiv.style.zIndex = "-1";    
    })
    departmentmainDiv.addEventListener("mouseover",function(){
        departmentmainDiv.style.zIndex = "1";
        
    })
    departmentmainDiv.addEventListener("mouseout",function(){
        departmentmainDiv.style.zIndex = "-1";

    })
    // Gallery div hover 
    navItemsDiv5.addEventListener("mouseover",function(){
        gallerymainDiv.style.zIndex = "1";
    })
    navItemsDiv5.addEventListener("mouseout",function(){
        gallerymainDiv.style.zIndex = "-1";
    })
    gallerymainDiv.addEventListener("mouseover",function(){
        gallerymainDiv.style.zIndex = "1";

    })
    gallerymainDiv.addEventListener("mouseout",function(){
        gallerymainDiv.style.zIndex = "-1";

    })
    
    // contact div 
    navItemsDiv6.addEventListener("mouseover",function(){
        contactMAinDiv.style.zIndex = "1";
    })
    navItemsDiv6.addEventListener("mouseout",function(){
        contactMAinDiv.style.zIndex = "-1";
    })
    contactMAinDiv.addEventListener("mouseover",function(){
        contactMAinDiv.style.zIndex = "1";
        gallerymainDiv.style.zIndex = "-1";

    })
    contactMAinDiv.addEventListener("mouseout",function(){
        contactMAinDiv.style.zIndex = "-1";

    })


    // admin icon click
    moreiconnav2.addEventListener("click",function(){
        moreiconnav1.style.display = "block";
        moreiconnav2.style.display = "none";
        adminDivmainDiv.style.zIndex = "20";       
        adminlogindiv.style.width = "100%";
        adminlogindiv.style.height = "100%";
        navItemMainDIv.style.display = "none";
        moreiconMain_div.style.marginLeft = "94%";
        forbpiIconDiv.style.display = "none";
        
        
    })
    moreiconnav1.addEventListener("click",function(){
        moreiconnav2.style.display = "block";
        moreiconnav1.style.display = "none";
        adminDivmainDiv.style.zIndex = "-20";       
        adminlogindiv.style.width = "1%";
        adminlogindiv.style.height = "1%";
        navItemMainDIv.style.display = "block";
        navItemMainDIv.style.display = "flex";
        forbpiIconDiv.style.display = "block";
        moreiconMain_div.style.marginLeft = "0%";

    })

        
  }




















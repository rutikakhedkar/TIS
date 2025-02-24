export function addHeader() {
    document.body.insertAdjacentHTML("afterbegin", `
 <header class="site-header header-style-1">
 <div class="pbmit-header-overlay">
     <div class="pbmit-main-header-area">
         <div class="container-fluid">
             <div class="pbmit-header-content d-flex justify-content-between align-items-center">
                 <div class="pbmit-logo-button-area d-flex justify-content-between align-items-center">
                     <div class="site-branding">
                         <h1 class="site-title">
                             <a href="index.html">
                                 <img class="logo-img" src="images/logo.png" alt="The Interior Suite">
                             </a>
                         </h1>
                         <div class="pbmit-sticky-corner  pbmit-top-right-corner">
                             <svg width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 20V0C20 16 16 20 0 20H20Z" fill="red"></path>
                             </svg>
                         </div>
                         <div class="pbmit-sticky-corner pbmit-bottom-left-corner">
                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 20V0C20 12 12 20 0 20H20Z" fill="red"></path>
                             </svg>
                         </div>
                     </div>
                     <div class="pbmit-button-box">
                         <div class="pbmit-header-button">
                             <a href="tel:+91  92842 14009">
                                 <span class="pbmit-header-button-text-1">+91  92842 14009</span>			
                                 <span class="pbmit-header-button-text-2">tel:</span>		
                             </a>
                         </div>
                     </div>
                 </div>
                 <div class="site-navigation">
                     <nav class="main-menu navbar-expand-xl navbar-light">
                         <div class="navbar-header">
                             <!-- Toggle Button --> 
                             <button class="navbar-toggler" type="button">
                                 <i class="pbmit-base-icon-menu-1"></i>
                             </button>
                         </div>
                         <div class="pbmit-mobile-menu-bg"></div>
                         <div class="collapse navbar-collapse clearfix show" id="pbmit-menu">
                             <div class="pbmit-menu-wrap">
                                 <span class="closepanel">
                                     <svg class="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
                                         <rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
                                         <rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
                                     </svg>
                                 </span>
                                 <ul class="navigation clearfix">
                                     <li class="dropdown active">
                                         <a href="index.html">Home</a>
                                     </li>
                                    
                                         <li class="dropdown">
                                         <a href="about-us.html">About us</a>
                                         </li>
                                        
                                         
                                         
                                     
                                     
                                    
                                
                                     <li><a href="contact-us.html">Contact Us</a></li>
                                 </ul>
                             </div>
                         </div>
                     </nav>
                 </div>
                 <div class="pbmit-right-box d-flex align-items-center">
                     <div class="pbmit-header-search-btn">
                         <a href="#" title="Search">
                             <i class="pbmit-base-icon-search-1"></i>
                         </a>
                     </div>
                     <div class="pbmit-button-box-second">
                         <a class="pbmit-btn" href="contact-us.html">
                             <span class="pbmit-button-content-wrapper">
                                 <span class="pbmit-button-text">Transform your space</span>
                             </span>
                         </a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 

</header>`);
}

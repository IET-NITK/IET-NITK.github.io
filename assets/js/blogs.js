all_blogs = document.getElementById("all_blogs")
all_blogs.innerHTML=""
var blogs = [
 
    `<div class="row featurette" style="margin-top: 1rem;">
    <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/ion-thrusters/1.webp"/>
      </div>
    <div class="col-md-7" style="margin-top: 1rem;">
      <h3 class="featurette-heading fw-normal lh-1">Ion Thrusters</h3> <br>
      <h5 style="color:grey"><b>BY  VADLA AKSHITHA</b></h5>
      <h5 style="color:grey"><b>OCTOBER 9TH, 2022</b></h5> <br><br>
      <p>All about ION-THRUSTERS</p> <br>
     <a href="/blog/ion-thrusters" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
    </div>


  </div>`,
  `<div class="row featurette" style="margin-top: 3em;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/ietnitk_intro/1.webp"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>What We Do</b></h3> <br>
    <h5 style="color:grey"><b>BY  VISHWA MOHAN TIWARI AND LAKSH SADHWANI</b></h5>
    <h5 style="color:grey"><b>OCTOBER 7TH, 2022</b></h5> <br><br>
    <p>An introduction to all SIGs in IET NITK</p> <br>
   <a href="/blog/ietnitk_intro" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`,
  `<div class="row featurette" style="margin-top: 3em;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/space/1.webp"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>Warp Drive: Key To Faster Than Light Travel</b></h3> <br>
    <h5 style="color:grey"><b>BY  AMRITH RAJ</b></h5>
    <h5 style="color:grey"><b>AUGUST 2ND, 2022</b></h5> <br><br>
    <p>Human's Curiosity and Exploration</p> <br>
   <a href="/blog/space" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`,
  `	<div class="row featurette" style="margin-top: 3em;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/aicybersecurity/1.webp"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>Ai For Cybersecurity</b></h3> <br>
    <h5 style="color:grey"><b>BY  SOMESH KARTIKEYA</b></h5>
    <h5 style="color:grey"><b>JULY 30TH, 2022</b></h5> <br><br>
    <p>Ai For Cybersecurity</p> <br>
   <a href="/blog/aicybersecurity" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`,
  `<div class="row featurette" style="margin-top: 3em;margin-bottom: 1rem;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/computing/1.webp"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>The Future Of Processors And Computing</b></h3> <br>
    <h5 style="color:grey"><b>BY  REHAN NASAR</b></h5>
    <h5 style="color:grey"><b>JULY 24TH, 2022</b></h5> <br><br>
    <p>The future of Processors and Computing</p> <br>
   <a href="/blog/computing" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`,
  `<div class="row featurette" style="margin-top: 3em;margin-bottom: 1rem;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/razor-blade/1.png"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>Razor And Blade Business Model</b></h3> <br>
    <h5 style="color:grey"><b>BY  NITHIN L N AND ADITYA SANJIV JOSHI</b></h5>
    <h5 style="color:grey"><b>JULY 19TH, 2022</b></h5> <br><br>
    <p>Razor and Blade Business Model</p> <br>
   <a href="/blog/razor-blade" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`,
  `<div class="row featurette" style="margin-top: 3em;margin-bottom: 1rem;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/aerodynamics/1.webp"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>Insane Engineering Of Sr71</b></h3> <br>
    <h5 style="color:grey"><b>BY  ROHIT BEHERA</b></h5>
    <h5 style="color:grey"><b>JULY 13TH, 2022</b></h5> <br><br>
    <p>Interesting facts and engineering behind the designing of SR71, aka, Blackbird</p> <br>
   <a href="/blog/aerodynamics" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`,
  `<div class="row featurette" style="margin-top: 3em;margin-bottom: 1rem;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/crypto-currency/1.webp"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>The Bit By Bit Rise Of Cryptocurrency</b></h3> <br>
    <h5 style="color:grey"><b>BY  AASHISH PRATEEK</b></h5>
    <h5 style="color:grey"><b>JULY 9TH, 2022</b></h5> <br><br>
    <p>Imagine a world where banks aren’t involved as third parties in transactions.....</p> <br>
   <a href="/blog/crypto-currency" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`,
  `<div class="row featurette" style="margin-top: 3em;margin-bottom: 1rem;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/dabbawalas/1.webp"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>Mumbai Dabbawalas</b></h3> <br>
    <h5 style="color:grey"><b>BY  SUHAS REDDY AND RAJ RAUSHAN SINGH</b></h5>
    <h5 style="color:grey"><b>MARCH 30TH, 2022</b></h5> <br><br>
    <p>125 years old system that feeds Mumbai</p> <br>
   <a href="/blog/dabbawalas" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`,
  `<div class="row featurette" style="margin-top: 3em;margin-bottom: 1rem;">
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550" src="../assets/images/blog/metaverse/1.webp"/>
    </div>
  <div class="col-md-7" style="margin-top: 15px;">
    <h3 class="featurette-heading fw-normal lh-1"><b>Entry To The Metaverse: A Virtual World</b></h3> <br>
    <h5 style="color:grey"><b>BY  VIGHNESH KOTHALIKAR AND VAISHNAVI PRAKASH KALGUTKAR</b></h5>
    <h5 style="color:grey"><b>MARCH 13TH, 2022</b></h5> <br><br>
    <p>Entry to the Metaverse: A Virtual Worldi</p> <br>
   <a href="/blog/metaverse" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More ></button> </a>
  </div>

  </div>`

]
no_of_pages = Math.ceil(blogs.length/5)
pagination_pages = document.getElementById("pagination_pages")
for(let i=0;i<no_of_pages;i++){
  if(i==0)
  {

    pagination_pages.innerHTML+=`<li class="page-item active" id="pagination_li_${i}"><a class="page-link" onclick="render_blogs(${i})">${i+1}</a></li>`
  }
  else
  {

    pagination_pages.innerHTML+=`<li class="page-item" id="pagination_li_${i}"><a class="page-link" onclick="render_blogs(${i})">${i+1}</a></li>`
  }
  
}
function render_blogs(page_index){
  for(let i=0;i<no_of_pages;i++){
    document.getElementById(`pagination_li_${i}`).classList.remove("active")
  }
  document.getElementById(`pagination_li_${page_index}`).classList.add("active")
window.scrollTo({top: 0, behavior: 'smooth'});
all_blogs.innerHTML=""
required_blogs = blogs.slice(page_index*5,((page_index+1)*5))
for(let j=0;j<required_blogs.length;j++){
  all_blogs.innerHTML+=required_blogs[j]
}
}
render_blogs(0)
// console.log(Math.ceil(blogs.length/5))


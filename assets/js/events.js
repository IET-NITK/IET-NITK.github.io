all_events = document.getElementById("all_events")
all_events.innerHTML=""
var events = [
    `	<div class="row featurette ">
    <div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
      <h3 class="featurette-heading fw-normal lh-1"><b>CREATE THE FUTURE - YPCSA CONNECT</b></h3> <br>
      <h5 style="color:grey"><b>NOVEMBER 2ND, 2022</b></h5> <br>
      <p style="max-width:50rem;font-size: 16px;color: grey;">Learn how to make it purposeful, profitable and patentable by this workshop from Lokesh Venkatswamy, CEO and Managing Director of Innomantra Consulting and Private Ltd.</p> <br>
     <a href="/event/create-future" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More</button> </a>
    </div>


  </div>`,
  `	<div class="row featurette" style="margin-top: 3em;">
  <div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
    <h3 class="featurette-heading fw-normal lh-1"><b>What We Do</b></h3> <br>

    <h5 style="color:grey"><b>OCTOBER 7TH, 2022</b></h5> <br>
    <p style="max-width:50rem;font-size: 16px;color: grey;">Our Trivia Gameshow. Grab your seat for the most fun-filled event that magnifies your mind relaxation😌</p> <br>
   <a href="/event/lego-gambit" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More</button> </a>
  </div>

</div>`,
`
<div class="row featurette" style="margin-top: 3em;">
    <div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
      <h3 class="featurette-heading fw-normal lh-1"><b>INNERVE 2022 is here!</b></h3> <br>

      <h5 style="color:grey"><b>FEBRUARY 16TH, 2022</b></h5> <br>
      <p style="max-width:50rem;font-size: 16px;color: grey;">Our yearly cross-domain college-wide series of events!</p> <br>
     <a href="/event/innerve-21" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More</button> </a>
    </div>

  </div>`,
  `<div class="row featurette" style="margin-top: 3em;">
  <div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
    <h3 class="featurette-heading fw-normal lh-1"><b>INKFIESTA</b></h3> <br>

    <h5 style="color:grey"><b>JANUARY 28TH, 2022</b></h5> <br>
    <p style="max-width:50rem;font-size: 16px;color: grey;">An amazing three-day event with three different fun activities for all the folks which are sure to give you some respite from this new norm!</p> <br>
   <a href="/event/inkfiesta" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More</button> </a>
  </div>

</div>`,
`<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>DARE TO DESIGN</b></h3> <br>

  <h5 style="color:grey"><b>JANUARY 14TH, 2022</b></h5> <br>
  <p style="max-width:50rem;font-size: 16px;color: grey;">Knowledge exchange program on basics of electronics(R,L,C) followed by competition on the same</p> <br>
 <a href="/event/daretodesign" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read More</button> </a>
</div>

</div>`
]
no_of_pages = Math.ceil(events.length/5)
pagination_pages = document.getElementById("pagination_pages")
for(let i=0;i<no_of_pages;i++){
  if(i==0)
  {

    pagination_pages.innerHTML+=`<li class="page-item active" id="pagination_li_${i}" ><a class="page-link" onclick="render_events(${i})">${i+1}</a></li>`
  }
  else
  {

    pagination_pages.innerHTML+=`<li class="page-item" id="pagination_li_${i}" ><a class="page-link" onclick="render_events(${i})">${i+1}</a></li>`
  }
  
}
function render_events(page_index){
  for(let i=0;i<no_of_pages;i++){
    document.getElementById(`pagination_li_${i}`).classList.remove("active")
  }
  document.getElementById(`pagination_li_${page_index}`).classList.add("active")
window.scrollTo({top: 0, behavior: 'smooth'});
all_events.innerHTML=""
required_events = events.slice(page_index*5,((page_index+1)*5))
for(let j=0;j<required_events.length;j++){
    all_events.innerHTML+=required_events[j]
}
}
render_events(0)
// console.log(Math.ceil(blogs.length/5))
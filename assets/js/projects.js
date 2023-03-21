all_projects = document.getElementById("all_projects")
all_projects.innerHTML=""
var projects = [
   `<div class="row featurette ">
   <div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
     <h3 class="featurette-heading fw-normal lh-1"><b>Equation Solver</b></h3> <br>
     <h5 style="color:grey"><b>CIPHER</b></h5> <br>
     <p style="max-width:50rem;font-size: 16px;color: grey;">Train a deep learning model to recognise handwritten equations from images and then give the result after solving the equations.</p> <br>
     <p style="max-width:50rem;font-size: 16px;color: grey;">Built by Rachana P J, Dolly Gupta, M B Sai Aditya and Lalit Nagar</p> <br>
    <div class="row-md-12">
       <a href="https://github.com/IET-NITK/HandwrittenEquationSolver" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
       <a href="/project/equationsolver" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
    </div>
   </div>


 </div>`,
 `	<div class="row featurette" style="margin-top: 3em;">
 <div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
   <h3 class="featurette-heading fw-normal lh-1"><b>YouTube Transcript Summarizer</b></h3> <br>

   <h5 style="color:grey"><b>CIPHER</b></h5> <br>
   <p style="max-width:50rem;font-size: 16px;color: grey;">Built by Suyash Satish Chintawar, Feyaz Baker, Venkat Rohit Merugu, Naveen Kumar, Gaurav Kumar and Sahana</p> <br>
   <div class="row-md-12">
     <a href="https://github.com/IET-NITK/YT-Transcript-Summarizer" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
     <a href="/project/youtubetranscriptsummarizer" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
  </div>
 </div>

</div>`,
`<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Audio Fingerprinting</b></h3> <br>

  <h5 style="color:grey"><b>CIPHER</b></h5> <br>
  <p style="max-width:50rem;font-size: 16px;color: grey;">An Audio fingerprint is a collection of the hash tags, or signatures, of a song's samples. They measure which frequencies in each sample are the strongest frequencies in each sample. These audio fingerprint helps to identify the song from the database.
    </p> <br>
  <p style="max-width:50rem;font-size: 16px;color: grey;">Built by Attada Ramprasad, Pooja Gayathri Kanala, Sharuf Baig and K Snehith Bhagavan
    </p> <br>
  <div class="row-md-12">
    <a href="https://github.com/IET-NITK/AudioFingerprinting" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="/project/audiofingerprinting" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>

</div>`,
`<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Audio To Sign Language Translator</b></h3> <br>

  <h5 style="color:grey"><b>CIPHER</b></h5> <br>
  <p style="max-width:50rem;font-size: 16px;color: grey;">We build an ML based tool that converts audio to sign language. Conversion of audio to ISL helps the common folks to interact with people with such disabilities without the language barrier, enriching both of their lives.
    </p> <br>
  <p style="max-width:50rem;font-size: 16px;color: grey;">Built by Jagan Babu Korra, Vaishnavi Prakash Kalgutkar, K Sriram, Kowshic V and Ansh Bindlish
    </p> <br>
  <div class="row-md-12">
    <a href="https://github.com/IET-NITK/A2SL-Translator" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="/project/audiotosignlanguagetranslator" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>

</div>`,
`<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Sudoku Solver</b></h3> <br>

  <h5 style="color:grey"><b>CIPHER</b></h5> <br>
  <p style="max-width:50rem;font-size: 16px;color: grey;">Built by Monika Agarwal, Verupaka Yashwanth Reddy, Adith Shekhar Gatty, Raunak Somani and Pragya Kiran
    </p> <br>
  <div class="row-md-12">
    <a href="https://github.com/IET-NITK/SudokuSolver" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="/project/sudokusolver" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>

</div>`
]
no_of_pages = Math.ceil(projects.length/5)
pagination_pages = document.getElementById("pagination_pages")
for(let i=0;i<no_of_pages;i++){
  if(i==0)
  {

    pagination_pages.innerHTML+=`<li class="page-item active" id="pagination_li_${i}" ><a class="page-link" onclick="render_projects(${i})">${i+1}</a></li>`
  }
  else
  {

    pagination_pages.innerHTML+=`<li class="page-item" id="pagination_li_${i}" ><a class="page-link" onclick="render_projects(${i})">${i+1}</a></li>`
  }
  
}
function render_projects(page_index){
  for(let i=0;i<no_of_pages;i++){
    document.getElementById(`pagination_li_${i}`).classList.remove("active")
  }
  document.getElementById(`pagination_li_${page_index}`).classList.add("active")
window.scrollTo({top: 0, behavior: 'smooth'});
all_projects.innerHTML=""
required_projects = projects.slice(page_index*5,((page_index+1)*5))
for(let j=0;j<required_projects.length;j++){
    all_projects.innerHTML+=required_projects[j]
}
}
render_projects(0)
// console.log(Math.ceil(blogs.length/5))
all_projects = document.getElementById("all_projects")
all_projects.innerHTML=""
var projects = [
   `<div class="row featurette ">
   <div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
     <h3 class="featurette-heading fw-normal lh-1"><b>Image Deblurring using CNNs
     </b></h3> <br>
     <h5 style="color:grey"><b>CIPHER</b></h5> <br>
     <p style="max-width:100rem;font-size: 16px;color: grey;">Train a deep learning model to recognise handwritten equations from images and then give the result after solving the equations.</p> <br>
     <p style="max-width:100rem;font-size: 16px;color: grey;">Built by KOWSHIC V, Dinesh Achalaram Choudhari, Vidit Shahand,Avinash Kandala and Jaheer khan</p> <br>
    <div class="row-md-12">
       <a href="https://docs.google.com/presentation/d/1OQJzGcLVpXzgvENTZr3omkS-SKWTAjCyVAMy7_TDY38/edit?usp=sharing" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
    </div>
   </div>
 </div>`,
 `	<div class="row featurette" style="margin-top: 3em;">
 <div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
   <h3 class="featurette-heading fw-normal lh-1"><b>Autonomous Driving using Machine Learning</b></h3> <br>

   <h5 style="color:grey"><b>CIPHER</b></h5>  <br>
   <p style="max-width:100rem;font-size: 16px;color: grey;">The abstract describes an end-to-end approach of mapping raw pixels from a camera to steering commands using a convolutional neural network (CNN). The system learns to drive in traffic on local roads, highways, and even in areas with unclear visual guidance with only the human steering angle as the training signal. The internal components of the system self-optimize to maximize overall performance, resulting in better performance and smaller systems. Additionally, the abstract mentions the use of RestNet 50 in this approach.</p> <br>
   <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Sasank, Druvika Nuthalapati, Rakshith Jain, Chinmay Sharma T and Attada Ramprasad</p> <br>
   <div class="row-md-12">
     <a href="https://github.com/Ramprasad106/SelfDrivingCar" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
     <a href="https://docs.google.com/presentation/d/1QS5lfy3ltQ4v3iPgcBidXkUOYy8ky9luCWpYCsqy71w/edit#slide=id.p" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
  </div>
 </div>

</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Lyrics Generation Using ML
  </b></h3> <br>

  <h5 style="color:grey"><b>CIPHER</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">This projects aims to generate lyrics using the Computer Science Technologies and explore the logic behind the same. The model is first trained on a large dataset and then using machine learning techniques it generates lyrics. Before Passing the dataset to the model directly, first it is preprocessed so that model can understand easily with more accuracy.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Lavanya Mudupu, Manasa N S, Ekank Chhaparwal, Renukasakshi v patil and Raunak Somani </p> <br>
  <div class="row-md-12">
    <a href="https://colab.research.google.com/drive/1gh8gmmlFLQg48bmmejuIbllkesoTHXb3?usp=sharing" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="https://nitkeduin-my.sharepoint.com/:p:/g/personal/raunaknsomani_201it148_nitk_edu_in/EVa7A-9VL5BMlhD4on6D8PwBeIaikRIJSd3lttB74vtS1A?e=mIevav" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>

</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Transparent and Genuine Charity Applications based on Blockchain
  </b></h3> <br>

  <h5 style="color:grey"><b>CIPHER</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Transparency and Genuine Charity Application Based on Blockchain is an application that utilizes the power of blockchain technology to ensure that charity donations are used in the most efficient and transparent manner. The application is designed to track donations from donors to ensure that funds are allocated to the intended recipients and cannot be diverted to other entities or individuals.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Reetesh Deshmukh, Kush Anchalia, Vaishnavi Dange, Vismay P and Jangalgi vijaykumar kallappa.</p> <br>
  <div class="row-md-12">
    <a href="https://github.com/REETESHDESHMUKH/IET-BLOCKCHAIN" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="https://www.overleaf.com/read/nsdsnpgrsxdv" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>

</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Automated Malware Analysis Tool
  </b></h3> <br>
  <h5 style="color:grey"><b>CIPHER</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">A tool to analyze malicious PE files  and trace there API calls and analyse their network traffic even with encryption. Used static analysis to classify the behaviourof these files. Frontend implementation using Flask
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Rehan Nasar, Manjunath Harale, Eshan Kharya and M Shree Harsha Bhat.</p> <br>
</div>

</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Air-driven Engine
  </b></h3> <br>
  <h5 style="color:grey"><b>TORSION</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Now-a-days, automobiles consume a large number of fossil fuels. However, the consumption of fossil fuels has brought many serious environmental problems,  to avoid such situations, a compressed air engine of a renewable energy vehicle is introduced. A compressed air engine is a type of motor which does mechanical work by expanding compressed air. Compressed air engine reduces the cost of vehicle production, because there is no need to build a cooling system.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Bijeta, Vachana, Sai Priya, Amrith Raj and Satish Kumar.</p> <br>
</div>

</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Pressure-swing Distillation Columns
  </b></h3> <br>
  <h5 style="color:grey"><b>TORSION</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Pressure-Swing Distillation of the azeotrope of ethyl acetate-ethanol-water. The separation process is simulated by DWSIM and the effects of stages, reflux ratio, feed stage are observed and thus optimized.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Yash Jangid, Adithi Lavanya, Amresh Prajapathi, Sharan Vinod Kumar and Rohit Singh.</p> <br>
</div>

</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Arduino Fire-fighting Robot
  </b></h3> <br>
  <h5 style="color:grey"><b>TORSION</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Pressure-Swing Distillation of the azeotrope of ethyl acetate-ethanol-water. The separation process is simulated by DWSIM and the effects of stages, reflux ratio, feed stage are observed and thus optimized.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Sreehari P, Vadla Akshitha, Akshat Kumar, Shresta Bhavani, Utkarsh and Kenneth R</p> <br>
  <div class="row-md-12">
  <a href="https://drive.google.com/file/d/1r02ItLhJCWk4Xu_jG2ArB6dYVu5yG1tr/view?usp=drivesdk" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Project Report</button> </a>
</div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Seismic Analysis of Multistorey Building using Etabs
  </b></h3> <br>
  <h5 style="color:grey"><b>TORSION</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Our present work deals with the analysis of multistorey building subjected to seismic condition.In addition to the dead load and live load, the seismic loads and wind loads are applied and analysis is carried out.The building model is analyzed using IS1893-2002 .
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Impana, Partheesh, Chaitanya Lakshmi, Sakshi, Manasa and Monu Kumar</p> <br>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Arduino-based IoT Attendance System using RFID Technology
  </b></h3> <br>
  <h5 style="color:grey"><b>ROVISP</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">This project aims to provide an efficient and secure way to record attendance in organizations, colleges, and schools using RFID technology. The traditional paper-based attendance system can be prone to errors and proxy attendance, but an RFID-based system can help eliminate these issues.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Kartik Rajendra Rodagi, Mohammed Moin Abubakar and Mrudula U.V</p> <br>
  <div class="row-md-12">
    <a href="https://github.com/kartik5106/Arduino-RFID-Attendance" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="https://docs.google.com/presentation/d/1G9lH09CNre_odTSEqmOhFoZEwFIF3qFRLP7sejUXm1U/edit#slide=id.g17e9cac382a_0_29" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Demonstration of Edge-detection Imaging algorithms using FPGAs
  </b></h3> <br>
  <h5 style="color:grey"><b>ROVISP</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Sanganabasu M Herur, Sirisha Sanapathi, Mudavath puja chowhan and Rehan Nasar.</p> <br>
  <div class="row-md-12">
  <a href="https://github.com/sirisha0203/Edge-Detection-FPGA" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
  <a href="https://docs.google.com/presentation/d/1azUiVzSB0COboOwb5h6xcYP45GNOUsKD/edit?usp=sharing&ouid=105112715258768792553&rtpof=true&sd=true" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
</div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>American Sign Language using Deep learning features
  </b></h3> <br>
  <h5 style="color:grey"><b>ROVISP</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">In this project, we propose to investigate the use of deep learning features for ASL detection. Specifically, we aim to train a deep neural network to recognize and classify ASL gestures based on their visual features. We will explore different types of deep learning architectures, such as Convolutional Neural Networks (CNNs), to find the most effective approach for ASL detection.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Vamsi Krishna Mandem, Brahmadevara Vivek Krishna, Aryaman Surya and Shreya Jindrali.</p> <br>
  <div class="row-md-12">
    <a href="https://github.com/Vamsi1223/ASL-Deep-Learning" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="https://docs.google.com/presentation/d/1z3mls6NVrjQHEE3hDfvtlgLRUNfR8EmR/edit?usp=share_link&ouid=105294389856721456083&rtpof=true&sd=true" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Text summarizer machine using Machine learning features by NLP
  </b></h3> <br>
  <h5 style="color:grey"><b>ROVISP</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">The project aims to develop a text summarizer using natural language processing techniques with an extractive approach. The summarizer will analyze a given text and identify the most important sentences based on their relevance to the overall content.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Rajashri Varadaraj, Snehankitha Bhukya, Dinesh Achalaram Choudhari, A . Shishir and Rishi Diwaker.</p> <br>
  <div class="row-md-12">
    <a href="https://github.com/Rjshri/Text-Summariser-NLP" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="https://docs.google.com/presentation/d/1nik6eoNbNyA1aZiWkHYcblArUqOdW4EE/edit#slide=id.p7" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Demonstration of a Low Noise Amplifier (LNA) using source degeneration and cascading techniques
  </b></h3> <br>
  <h5 style="color:grey"><b>ROVISP</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">The project aims to design of a MOS Low noise amplifier(LNA) using source degeneration and applying the underlying theory of MOSFETS and Amplifiers (in cascade). It also involves the use of the ADS simulation software to visualise the outputs of the amplifiers and examine the theory involved behind it to gain a deeper understanding.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by A. Shishir, Priyanshu Soni and Sanganabasu M Herur.</p> <br>
  <div class="row-md-12">
    <a href="https://github.com/pri1712/Low-Noise-Amplifier-UWB" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="https://docs.google.com/presentation/d/1wWgjSN8XkrzCou4vJ8bATRKsF2FgGf_o/edit?usp=sharing&ouid=115727304764686554117&rtpof=true&sd=true" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Design of a 3-bit SPI protocol for ASIC Applications
  </b></h3> <br>
  <h5 style="color:grey"><b>ROVISP</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">This project represents a 3-wire SPI protocol (48-bit data) chip design for application-specific integrated circuit (ASIC) and its implementation with a constraint of clock frequency less than 1MHz. To accomplish compact, stable and reliable data transmission, the SPI is designed with Verilog HDL language and synthesized using the Genus tool in Cadence virtuoso software.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Kandula Sai Charan and Mohammed Moin Abubakar.</p> <br>
  <div class="row-md-12">
    <a href="https://github.com/Saicharan004/SPI-Protocol" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="https://docs.google.com/presentation/d/1X6Jw-WswdcCMtSELPl1RIvacb3rgo4bk/edit?usp=drivesdk&ouid=104887731417085141792&rtpof=true&sd=true" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Emotion & Heartbeat Detection using Image Processing.
  </b></h3> <br>
  <h5 style="color:grey"><b>ROVISP</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">In this project, we have two compnents: For emotion detection, we've built an Emotion Detection System using image processing which can be used to detect the different facial expression by any human.These expressions can be derived from the live feed via system's camera or any pre-existing image available in the memory. For heartrate measurement, we propose a non-contact heartrate measurement system through photo-plethysmography (PPG), which measures variations in blood volume by detecting changes in light reflectance or transmission throughout the cardiovascular pulse cycle.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Md Shadab Alam, Srijan Chandgothia and Aditya shanker.</p> <br>
  <div class="row-md-12">
    <a href="https://github.com/shadabalam78698/Emotion_And_HeartRate_Detection" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
    <a href="https://docs.google.com/presentation/d/1wytnPQc6e1VnVBvJ3ckNHOIcUcU4kOOA/edit?usp=drivesdk&ouid=105172567515130502691&rtpof=true&sd=true" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Market Scan
  </b></h3> <br>
  <h5 style="color:grey"><b>VENTURE</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">We collected data on a range of products from each industry, including groceries, electronics, and fashion products. We used a combination of web scraping and manual data collection to collect data from a variety of sources, including online retailers such as Amazon, flipkart and offline stores such as Croma and Reliance digital.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Naman, Renukasakshi v patil and Durgesh Nishad.</p> <br>
  <div class="row-md-12">
    <a href="https://www.canva.com/design/DAFeyXEWrAc/fjFVbW8dV8YgyLFws6A1CA/view?utm_content=DAFeyXEWrAc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
 </div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Adoption of Vending Machines in India
  </b></h3> <br>
  <h5 style="color:grey"><b>VENTURE</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">The project is based on the adoption of Vending Machines in our country through trends of vending machines globally and a real-life case.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Shreya, Ayush Kumar, Srijan Chandgothia and Nihar Damera.</p> <br>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Startup Consulting
  </b></h3> <br>
  <h5 style="color:grey"><b>VENTURE</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">The fashion industry is a dynamic and fast-paced industry that constantly changes with the times. In recent years, there has been a surge in demand for consultancy services within the industry, as businesses look for ways to adapt to changing consumer preferences, technology advancements, and sustainability goals. This projecty is about the findings of a survey conducted on the fashion industry and the insights gained from it.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Sasank Mohan Pentela, Ansh, Vaidaant Thakur, Jaheer khan and aditya shanker.</p> <br>
  <div class="row-md-12">
  <a href="https://docs.google.com/presentation/d/1nJL7B_2C2g6MeihzKEUX9K8eUsZcsUt7o6WlNuuu2io/edit#slide=id.g226823977ac_0_10" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
</div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Virtual Startup
  </b></h3> <br>
  <h5 style="color:grey"><b>VENTURE</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Travel Partner : It is a service that helps you find the local travel guide that are trustable and knows the place well. They will help you with all your queries and guide you so you can have the best experience while traveling.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Yash nirmal, Aditya Prajapati, Rakshit Jain, Royal Simpson Pinto, Mohamed Moin and Utkarsh kumar awasthi.</p> <br>
  <div class="row-md-12">
  <a href="https://docs.google.com/presentation/d/1U1cP30DsSZPlwkAfF0A-rcU95eEdHL2H7sKpObhMv2I/edit?usp=sharing" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
</div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Blockchain-Based Project
  </b></h3> <br>
  <h5 style="color:grey"><b>VENTURE</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Srijan Chandgothia, Utkarsh Kumar Awasthi and Md shadab Alam.</p> <br>
  <div class="row-md-12">
  <a href="https://drive.google.com/drive/folders/1w-BFYz9oa27cP_EX1X5DcvxBp9ys7D-I?usp=share_link" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
</div>
</div>
</div>`,
	`<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Financial Statement Analysis
  </b></h3> <br>
  <h5 style="color:grey"><b>VENTURE</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Financial statement analysis is a process of evaluating the financial health and performance of a company using its financial statements. In the case of Paytm, we  analyzed its financial statements to gain insights into its profitability, liquidity, and solvency.we compared Paytm with Mobikwik.
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by Aman Pal, Mukund Prasad Sah, Khushi Suresh Muddi, Aditya Shanker, Manas Mishra, Niraj and Aryaman Surya.</p> <br>
  <div class="row-md-12">
  <a href="https://docs.google.com/presentation/d/14emf8skxZQcEI1ijxfGQy8Grj_-zoeTpNyKaX2SbDPg/edit?usp=sharing" style="text-decoration: none;color:white"> <button class="btn" style="background-color: purple;color:white">Read in Detail</button> </a>
</div>
</div>
</div>`,
`	<div class="row featurette" style="margin-top: 3em;">
<div class="col-md-12" style="margin-top: 1rem;margin-left: 2rem;">
  <h3 class="featurette-heading fw-normal lh-1"><b>Money Tracker App
  </b></h3> <br>
  <h5 style="color:grey"><b>VENTURE</b></h5>  <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Money tracker  flask app  with user authentication is an application that allows users to track their expenses, income and savings. The app features a secure user authentication system to ensure that only authorized users can access the application. It includes the latest business and finance news to keep users informed of the current market trends and updates.

  The app allows users to categorize their expenses based on their needs such as food, transportation, entertainment, bills, and more. Users can add new categories, edit or delete the existing ones. The app provides a graph to visualize the category wise expenses, which helps users understand where their money is being spent.
  
  The latest business and finance news feature in the app provides users with up-to-date information on the financial market, stock prices, economic trends, and more.
  
  In conclusion, the money tracker app with user authentication is a powerful tool for managing personal finances. The app's secure authentication system, latest business and finance news feature, and category-wise expense graph help users track their expenses, save money, and make informed financial decisions.  
  </p> <br>
  <p style="max-width:100rem;font-size: 16px;color: grey;">Built by CHARAN Ravikumar, Shagun Kumar and Ekank Chhaparwal.</p> <br>
  <div class="row-md-12">
  <a href="https://github.com/ekankchhaparwal/Money-Tracker" style="text-decoration: none;color:white"> <button class="btn" style="background-color: black;color:white">Repository URL</button> </a>
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
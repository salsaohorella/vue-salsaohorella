<template >
  <div class="hello" >
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"> PORTOFOLIO Web </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Home">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#AboutMe">About Me</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   <!--Home-->
   <section class="jumbotron text-center pt-n1" style="background-color: Gray" id="Home">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
   <center> <img src="Swafoto.png" class="rounded-circle" alt="Cinque Terre"><br/>
    <h2>Salsa Darmayani Ohorella</h2>
    <p1>Mahasiswa Jurusan Informatika</p1>
   </center>
    </div>
    </div>
    </div><br/><br/>
   </section> 

  <!--About-->
 <section id="AboutMe" style="background-color: LightGray">
   <div class="row">
    <div class="col">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
    <button
       type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1">
      </button>
   </div>
   <div class="carousel-inner">
   <div class="carousel-item active" data-bs-interval="10000">
  <article style="text-align: center;">
  <h3 style="background-color:Black;">About Me</h3>  
  <p>   
  <img src="sw1.png" style="float:left;width:500px;height:400px;"/>
   </p>
   <br/><br/><br/>
  <p1>
  Hello,<br/>
  Saya Mahasiswa Jurusan Informatika, Fakultas Ilmu Komputer dan Rekayasa , Universitas MDP.<br/>
  Saat ini saya sedang  belajar membuat portofolio.
  <br/><br/><br/>
  </p1>
  <h5>“Change hurts. It makes people insecure, confused, and angry.<br/>
  People want things to be the same as they’ve always been,<br/> because that makes life easier” 
  <br/>- Richard Marcinko
  </h5> 
  </article>
  </div>
  </div>
  </div>
  </div>
  </div>
  <br/>
 </section>

<!--Concant-->
<section id="Contact" style="background-color:Gray;">
  <div class="container">
  <div class="row text-center">
  <div class="col">
    <br/><br/>
    <h3 style="text-align: center; background-color:Black;" >Contact</h3><br/>
  </div>
  </div> 
   <center> 
     <br/><br/>
    <a class="social-media-icon" href="https://web.facebook.com/drmnyyyyy/">
    <i class="fab fa-facebook"></i></a>
    <a class="social-media-icon twitter" href="https://twitter.com/salsadarmayani1">
    <i class="fab fa-twitter"></i></a>    
    <a class="social-media-icon" href="https://www.instagram.com/salsaohorella/">
    <i class="fab fa-instagram"></i></a>
    </center><br/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
     <br/><br/><br/>
</div>
</section>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 2px 0 0;
  font-family : Times New Roman , Times, serif;
  font-size: 35px;
  color:rgb(248, 248, 248);
  white-space: normal;
  font-weight: bold;
  background : transparent;
}
img{
  width: 250px;
  height: auto;
  border : 0;
}
h2{ 
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
  font-weight: bold;
}
h3{
  color: rgb(253, 253, 253);
  font: inherit;
  font-weight: bold;
  font-size: 30px;
	line-height: 1.5;
}
p1{

  font-size: 18px;
  line-height: 1.5;
}
#Skill {
  background-color: #e2edff;
}
.pt-n1 {
  padding-top: 6rem !important;
}
a{
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
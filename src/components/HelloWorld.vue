<template >
  <div class="hello" style="background-color:Gray;">
    <h1 style="background-color: LightGray;">{{ msg }}</h1>
     
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active"><br/>
   <center> <img src="Swafoto.png" class="rounded-circle" alt="Cinque Terre"><br/><br/>
    <h2>Salsa Darmayani Ohorella</h2>
    <p1>Mahasiswa Jurusan Informatika</p1>
   </center>
    </div>
    </div>
    </div>
     <hr/>
  <article style="text-align: center;">
  <h3 style="background-color:LightGray;">About Me</h3>
  <p> Hello,<br/>
    Saya Mahasiswa Jurusan Informatika, Fakultas Ilmu Komputer dan Rekayasa , Universitas MDP.<br/>
    Saat ini saya sedang membuat tugas mata kuliah Pemrograman Web 1 yaitu belajar membuat portofolio.
  </p><br/>
  <h5>“Change hurts. It makes people insecure, confused, and angry.<br/>
  People want things to be the same as they’ve always been, because that makes life easier” 
  <br/>- Richard Marcinko
  </h5> 
  </article>
  <hr/>
  <div>
    <h3 style="text-align: center; background-color:LightGray;" >Media Sosial</h3><br/>
   <center> 
    <a class="social-media-icon" href="https://web.facebook.com/drmnyyyyy/">
    <i class="fab fa-facebook"></i>
    </a>
    <a class="social-media-icon twitter" href="https://twitter.com/salsadarmayani1">
    <i class="fab fa-twitter"></i>
    </a>    
    <a class="social-media-icon" href="https://www.instagram.com/salsaohorella/">
    <i class="fab fa-instagram"></i>
    </a>
   </center><br/>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
  </div>

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
  color:rgb(19, 23, 80);
  white-space: normal;
  font-weight: bold;
  background : transparent;
}
img{
  max-width: 100%;
  height: auto;
  border : 0;
}
h2{ 
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 35px;
  font-weight: bold;
}
h3{
  color: rgb(19, 23, 80);
  font: inherit;
  font-weight: bold;
  font-size: 30px;
	line-height: 1.5;
}
p{
  font-size: 20px;
  line-height: 1.5;
}

</style>
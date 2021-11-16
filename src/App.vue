<template>
  <HelloWorld msg=" ➢ PORTOFOLIO Web"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style type="text/css">
.social-media-icon {
        padding: 10px 30px 10px 30px;
        background: #222;
        color: #fff;
        margin: 10px;
        border-radius: 5px;
    }
   /* a.social-media-icon:hover{
        background: #fff!important;
        color: #222!important;
    }
    */
    .facebook{
        background:  #244485!important;
    }
     
    .twitter{
        background: #1da1f2!important;
    }
    .instagram{
        background: #ff5387!important;;
   }
.hello {
  margin: 0 0 0 0;
  background: #ffffff;
	border: 1px solid #cccccc;
	max-width: 100%;
	padding: 8px 15px;
}
/*.bg{
  background: url("./assets/img.jpg");
  background-size: 100%;
}*/
</style>

( function (){
 	var names = [ "Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim" ]
     //console.log(names.length);
     
     for(var i=0; i<names.length; i++){
 	  if(names[i].charAt(0)=="J"||names[i].charAt(0)=="j"){
 		 byeSpeaker.speak(names[i]);
 	  }
 	  else{
 	  	helloSpeaker.speak(names[i]);
 	  }
	
 }
 })();



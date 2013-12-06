// Overview: (i) Helper (ii) Parameters (iii) Control Flow

// ***WHAT'S BEEN DONE SO FAR***
// DISPLAY: ignorance implicature for Elmo

// ---------------- HELPER ------------------

function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#"+id).show(); //jquery - element with given id - show
}

//array shuffle function
shuffle = function (o) { //v1.0
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); //anything you want to randomize
    return o;
}

// ---------------- PARAMETERS ------------------
// *** Maker getter function***
// substitution for picking a random cond for now:
var condList = [1, 2]
var shuffled_condList = shuffle(condList)
var cond = shuffled_condList[0]

// get condition values (0=simple; 1= complex)
if (cond == 1) {
    targ = 0;
    condName = 'item = 1'
} else if (cond == 2) {
    targ = 1;
   	condName = 'item = 2'
}

// --IMAGES--
var allcontainers = [["R", "G", "B"]]
var shuffled_allcontainers = shuffle(allcontainers)
var container_list = shuffled_allcontainers[0]
var shuffled_container_list = shuffle(container_list)
var container = shuffled_container_list

var numItem_list = [1, 2, 3]
var shuffled_numItem_list = shuffle(numItem_list)
var numItem = shuffled_numItem_list

// --WORDS--
var allwords = [[["lunchbox", "lunchboxes"], ["an orange", "an apple"]]] // later we can add more words to this
var shuffled_allwords = shuffle(allwords)
var container_word = shuffled_allwords[0][0][0]
var container_plural = shuffled_allwords[0][0][1]
var item_word_list = allwords[0][1]
var item_word = []

if(targ == 0) {
  item_word = item_word_list[0]
} else if(targ == 1) {
  item_word = item_word_list[1]
}

// ***var answer = 'intial' (?) ***

// ---------------- CONTROL FLOW ------------------
//PRE-LOAD IMAGES
// By creating image object and setting source, images preload
var images = new Array() 
for (i=0;i<2;i++) {//loop through images you want to use
    images[i] = new Image()
    images[i].src =  "objects/" + container[i] + numItem[i] + ".png"
    images[i] = new Image()
    images[i].src =  "objects/" + container[i] + numItem[i] + "_closed.png"

} 
showSlide("instructions");

// MAIN EXPERIMENT
var experiment = { // end, next, select
    crit: [],
  // INITIAL1 function
  initial1:function() {
    showSlide('initial1')
    
     // Sentential description 1 to scaffold
      var description1_html = '<p align="center">Look at these ' + container_plural '! I wonder what these ' + container_plural + ' have inside.</p>' 
      $("#description1").html(description1_html);
            
      // Create the image table (tr=table row; td= table data)
    	var image1_html = '<table align="center" cellspacing="40"><tr>'
  		image1_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td>'
    	image1_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td>'
      image1_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td></tr>'
      for (i=0;i<3;i++){
			  name = "objects/" + container[i] + numItem[i] + ".png"
			  image1_html += '<td align="center"><img  src="' + name +  '"alt="' + name +
				'" id="objImage" height=2% /></td>'
			}
			image1_html += '</tr></table>'
			$("#image1").html(image1_html); //insert dynamically-built html code into html file; 
    
  },
  
    // INITIAL2 function
  initial2:function() {
    showSlide('initial2')
      // Create the image table (tr=table row; td= table data)
      var image2_html = '<table align="center" cellspacing="40"><tr>'
  		image2_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td>'
    	image2_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td>'
      image2_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td></tr>'
      for (i=0;i<3;i++) {
        if(targ == 0) {
          if(numItem[i] == 1) {
            name = "objects/" + container[i] + numItem[i] + "_closed.png"
  		      image2_html += '<td align="center"><img  src="' + name +  '"alt="' + name + '" id="objImage" height=2% /></td>'
          } else {
            name = "objects/" + container[i] + numItem[i] + ".png"
    	  image2_html += '<td align="center"><img  src="' + name +  '"alt="' + name +
				'" id="objImage" height=2% /></td>' 
          }
    	    } else if (targ == 1) {
            if(numItem[i] == 2) {
            name = "objects/" + container[i] + numItem[i] + "_closed.png"
    	      image2_html += '<td align="center"><img  src="' + name +  '"alt="' + name + '" id="objImage" height=2% /></td>'
          } else {
            name = "objects/" + container[i] + numItem[i] + ".png"
    	  image2_html += '<td align="center"><img  src="' + name +  '"alt="' + name +
				'" id="objImage" height=2% /></td>' 
          }
    	    }}
			image2_html += '</tr></table>'
			$("#image2").html(image2_html); //insert dynamically-built html code into html file; 
    
  },
      
  // INITIAL3 function
  initial3:function() {
    showSlide('initial3')
      // Create the image table (tr=table row; td= table data)
      var image3_html = '<table align="center" cellspacing="40"><tr>'
    	image3_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td>'
    	image3_html += '<td align = "center"><img src="objects/elmo.png" id="elmo" height=35% /></td>'
      image3_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td></tr>'
      for (i=0;i<3;i++) {
        if(targ == 0) {
          if(numItem[i] == 1) {
            name = "objects/" + container[i] + numItem[i] + "_closed.png"
  		      image3_html += '<td align="center"><img  src="' + name +  '"alt="' + name + '" id="objImage" height=2% /></td>'
          } else {
            name = "objects/" + container[i] + numItem[i] + ".png"
    	  image3_html += '<td align="center"><img  src="' + name +  '"alt="' + name +
				'" id="objImage" height=2% /></td>' 
          }
    	    } else if (targ == 1) {
            if(numItem[i] == 2) {
            name = "objects/" + container[i] + numItem[i] + "_closed.png"
    	      image3_html += '<td align="center"><img  src="' + name +  '"alt="' + name + '" id="objImage" height=2% /></td>'
          } else {
            name = "objects/" + container[i] + numItem[i] + ".png"
    	  image3_html += '<td align="center"><img  src="' + name +  '"alt="' + name +
				'" id="objImage" height=2% /></td>' 
          }
    	    }}
			image3_html += '</tr></table>'
			$("#image3").html(image3_html); //insert dynamically-built html code into html file; 
    
  },
      
   //NEXT function
   next: function() {
    showSlide("stage") //display slide "stage"

    // Show sentence
     var label_html = '<p align = "center">Elmo says <b> "I want the ' + container_word + ' with ' + item_word + '</b>."</p>'
      label_html += ' <p align = "center">Which ' + container_word + ' do you think Elmo wants? </p>'
    	label_html += ' <p align = "center">Choose an object by clicking the button below it.</p>'
    	 $("#labelInst").html(label_html); //maybe here include an if function about the stage of the progression through pictures?
       
      // Create the image table (tr=table row; td= table data)
  		var image_html = '<table align="center" cellspacing="40"><tr>'
  		image_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td>'
    	image_html += '<td align = "center"><img src="objects/elmo.png" id="elmo" height=35% /></td>'
      image_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=35% /></td></tr>'
      for (i=0;i<3;i++){
			  name = "objects/" + container[i] + numItem[i] + "_closed.png"
			  image_html += '<td align="center"><img  src="' + name +  '"alt="' + name +
				'" id="objImage" height=2% /></td>'
			}
			image_html += '</tr><tr>'
			image_html += '<td align="center"><input type="radio" name="thing" id="item_0"></input></td>'
			image_html += '<td align="center"><input type="radio" name="thing" id="item_1"></input></td>'
      image_html += '<td align="center"><input type="radio" name="thing" id="item_2"></input></td>'
			image_html += '</tr></table>'
			$("#image").html(image_html); //insert dynamically-built html code into html file; 

  	var message_html = '<table cellspacing="2" align="center"><tr> <td id="messagesum"></td></tr></table>'
		 $("#message").html(message_html) 
   // *** FOR SOME REASON THE MESSAGE FUNCTION DOES NOT WORK...***
   },
    
   // SELECT function
   select: function() {
// *** Add function getting whether the answers are privileged, shared, or incorrect ***
      var left
      var center
      var right
      
  	if (document.getElementById('item_0').checked) {
			 left = 1
		} else if(document.getElementById('item_1').checked) {
		    center = 1
		} else if(document.getElementById('item_2').checked) {
		    right = 1		    
		}
    
      	if(left == 1) {
			    if(numItem[0] == 1) {
				    if(targ == 0) {
					    answer = 'privileged'
				    } else if (targ == 1) {
					    answer = 'incorrect'}
			    } else if(numItem[0] == 2) {
				    if(targ == 0) {
					    answer = 'incorrect'
				    } else if (targ == 1) {
					    answer = 'privileged'}
			    } else if(numItem[0] == 3) {
				    if(targ == 0) {
					    answer = 'shared'
				  } else if (targ == 1) {
					    answer = 'shared'}
				}	
      	} else if (center == 1) {
  		    if(numItem[1] == 1) {
				    if(targ == 0) {
					    answer = 'privileged'
				    } else if (targ == 1) {
					    answer = 'incorrect'}
			    } else if(numItem[1] == 2) {
				    if(targ == 0) {
					    answer = 'incorrect'
				    } else if (targ == 1) {
					    answer = 'privileged'}
			    } else if(numItem[1] == 3) {
				    if(targ == 0) {
					    answer = 'shared'
				  } else if (targ == 1) {
					    answer = 'shared'}
				}	
      	} else if (right == 1) {
  		    if(numItem[2] == 1) {
				    if(targ == 0) {
					    answer = 'privileged'
				    } else if (targ == 1) {
					    answer = 'incorrect'}
			    } else if(numItem[2] == 2) {
				    if(targ == 0) {
					    answer = 'incorrect'
				    } else if (targ == 1) {
					    answer = 'privileged'}
			    } else if(numItem[2] == 3) {
				    if(targ == 0) {
					    answer = 'shared'
				  } else if (targ == 1) {
					    answer = 'shared'}
				}	
      	}
   
    experiment.crit = answer
   
    if (document.getElementById('item_0').checked || document.getElementById('item_1').checked || document.getElementById('item_2').checked) {    
    showSlide("finished");
    var vars_html = '<p> answer =' + experiment.crit + ' </p>'
    $("#vars").html(vars_html);
   } else {
     $("#messagesum").html('<font color="red">Please select an object!</font>');
   }
    }
}

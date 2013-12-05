// Overview: (i) Helper (ii) Parameters (iii) Control Flow

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
// ****PUT MAKER GETTER FUNCTION HEREE***

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
var allwords = [[["lunchbox"], ["an apple", "an orange"]]] // later we can add more words to this
var shuffled_allwords = shuffle(allwords)
var container_word = shuffled_allwords[0][0][0]
var item_word_list = allwords[0][1]
var shuffled_item_word_list = shuffle(item_word_list)
var item_word = shuffled_item_word_list[0]

// ***var answer = 'intial'***

// ---------------- CONTROL FLOW ------------------
// **** ADD PRELOAD IMAGES FUNCTION **** //

showSlide("instructions");

// MAIN EXPERIMENT
var experiment = { // end, next, select

   //NEXT function
   next: function() {
    showSlide("stage") //display slide "stage"

    // Show sentence
     var label_html = '<p align = "center">Elmo says <b> "I want the ' + container_word + ' with ' + item_word + '</b>."</p>'
      label_html += ' <p align = "center">Which ' + container_word + ' do you think Elmo wants? </p>'
    	label_html += ' <p align = "center">Choose an object by clicking the button below it.</p>'
    	 $("#labelInst").html(label_html); 
       
      // Create the image table (tr=table row; td= table data)
  		var image_html = '<table align="center" cellspacing="40"><tr>'
  		image_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=50% /></td>'
    	image_html += '<td align = "center"><img src="objects/elmo.png" id="elmo" height=50% /></td>'
      image_html += '<td align = "center"><img src="objects/no_elmo.png" id="no_elmo" height=50% /></td></tr>'
      for (i=0;i<3;i++){
			  name = "objects/" + container[i] + numItem[i] + ".png"
			  image_html += '<td align="center"><img  src="' + name +  '"alt="' + name +
				'" id="objImage" height=50% /></td>'
			}
			image_html += '</tr><tr>'
			image_html += '<td align="center"><input type="radio" name="thing" id="item_0"></input></td>'
			image_html += '<td align="center"><input type="radio" name="thing" id="item_1"></input></td>'
      image_html += '<td align="center"><input type="radio" name="thing" id="item_2"></input></td>'
			image_html += '</tr></table>'
			$("#image").html(image_html); //insert dynamically-built html code into html file; 

  	var message_html = '<table cellspacing="2" align="center"><tr> <td id="messagesum"></td></tr></table>'
		 $("#message").html(message_html) 

   },
    
   // SELECT function
   select: function() {
// *** Add gfunction etting whether the answers are privileged, shared, or incorrect ***

    if (document.getElementById('item_0').checked || document.getElementById('item_1').checked || document.getElementById('item_2').checked) {
     showSlide('finished')
   } else {
     $("#messagesum").html('<font color="red">Please select an object!</font>');
   }
    }
}

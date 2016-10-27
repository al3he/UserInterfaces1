
function turnRed() {
    document.getElementById("likeBtn").style.backgroundColor = "red";
}

function turnRed2() {
    document.getElementById("likeBtn2").style.backgroundColor = "red";
}

function turnRed3() {
    document.getElementById("likeBtn3").style.backgroundColor = "red";
}

function turnRed4() {
    document.getElementById("likeBtn4").style.backgroundColor = "red";
}

function turnRed5() {
    document.getElementById("likeBtn5").style.backgroundColor = "red";
}

function turnRed6() {
    document.getElementById("likeBtn6").style.backgroundColor = "red";
}

function turnRed7() {
    document.getElementById("likeBtn7").style.backgroundColor = "red";
}

function turnRed8() {
    document.getElementById("likeBtn8").style.backgroundColor = "red";
}

function turnRed9() {
    document.getElementById("likeBtn9").style.backgroundColor = "red";
}

function shared() {
	alert("This artist has already been shared on social media");
}
 

$(document).ready(function(){
	$("#comBtn").click(function(){
		 $("#panel").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#comBtn2").click(function(){
		 $("#panel2").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#comBtn3").click(function(){
		 $("#panel3").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#comBtn4").click(function(){
		 $("#panel4").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#comBtn5").click(function(){
		 $("#panel5").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#comBtn6").click(function(){
		 $("#panel6").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#comBtn7").click(function(){
		 $("#panel7").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#comBtn8").click(function(){
		 $("#panel8").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#comBtn9").click(function(){
		 $("#panel9").slideToggle("slow");
	});
});

$(document).ready(function(){
$("#submitBtn").click(function() {
  $("#comTable").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});

$("#submitBtn2").click(function() {
  $("#comTable2").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank2').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});

$("#submitBtn3").click(function() {
  $("#comTable3").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank3').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});

$("#submitBtn4").click(function() {
  $("#comTable4").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank4').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});

$("#submitBtn5").click(function() {
  $("#comTable5").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank5').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});

$("#submitBtn6").click(function() {
  $("#comTable6").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank6').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});

$("#submitBtn7").click(function() {
  $("#comTable7").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank7').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});

$("#submitBtn8").click(function() {
  $("#comTable8").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank8').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});

$("#submitBtn9").click(function() {
  $("#comTable9").each(function() {
    var tds = '<tr>';
    jQuery.each($('tr:last td', this), function() {
      tds += '<td>' + $(this).html() + '</td>';
    });
    tds += '</tr>';
    if ($('tbody', this).length > 0) {
      $('tbody', this).append('<div>' + $('#blank9').val() + '</div>');
    } else {
      $(this).append(tds);
    }

  });
});
});

// When the user clicks the button, open the modal
function displayModal() {
    var modal = document.getElementById('myModal');
	modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function displayReg() {
	var regForm = document.getElementById("myReg");
	regForm.style.display = "block";
}



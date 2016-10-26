function turnRed() {
    document.getElementById("likeBtn").style.backgroundColor = "red";
}

function shared() {
	alert("This artist has already been shared on social media");
}
 
$(document).ready(function(){
	$("#comBtn").click(function(){
		 $("#panel").slideToggle("slow");
	});
});

var count = 1;

function publishCom() {
	var com = document.getElementById("blank").value; //grabs entered text
	var table = document.getElementById("comGrid"); //grabs table
	var row=table.insertRow(table.rows.length); //inserts new row; row = <tr>
	var c1=row.insertCell(); //inserts cell into row; c1 = <td>

	var line1=createELement("li"); //line1 = <li>
		line1.id = "c1row"+count; //sets <li id=c1row1>
	c1.appendChild(line1); //<td><li id=c1row1>
	document.getElementById("comGrid").innerHTML = com;
	count++;
}






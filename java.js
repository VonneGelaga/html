alert("Hyello");

var list = [];
var ct = 0;

do{
	var i=prompt("new,quit,view,delete");
	
	if(i=="new"){
		newObj(list);
		entMov(list, ct);
		ct++;
	}else if(i=="view"){
		var size = list.length;
		
		for(var c=0;c<size;c++){
			console.log("index[%d]",c);
			console.log("Movie name: %s",list[c].name);
			console.log("Rating: %s",list[c].rating);
			console.log("Watched?: %s",list[c].watched);
			
			document.write("<i>index [</i>",c);
			document.write("<i>]</i>");
			document.write("<br><b>Movie name:</b> ",list[c].name);
			document.write("<br><b>Rating:</b> ",list[c].rating,);
			document.write("<br><b>Watched?:</b> ",list[c].watched);
			document.write("<br><br>");
		}
	}else if(i=="delete"){
		deleteObj(list);
		ct--;
	}
}while(i!="quit");






function newObj(list)
{
list.push({name:"",rating:"",watched:""});
	
	return list;
}

function entMov(list, ct)
{
	list[ct].name = prompt("What's the title?");
	list[ct].rating = prompt("How much do you rate it? 0-10");
	list[ct].watched = prompt("Have you watched it? Y/N");
	if(list[ct].watched == "y"){
		list[ct].watched = "You have already watched this movie.";
	}else if(list[ct].watched == "n"){
		list[ct].watched = "You have not watched this movie."
	}
	
	return list;
}

function deleteObj(list){
	list.pop(list[ct]);
}
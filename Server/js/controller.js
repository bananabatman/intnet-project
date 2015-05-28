//Spindeln i nätet, manipulerar model

//Funktionaliteten av allt som syns utförs av java

//Laddar inloggningssida
//Laddar Startskärm

var getServerData = function () {
	//tar in array med server valuet samt resterande data som ska 
	//Skickas med requesten
	
}

var validate = function() {
	//Verifies user information
	//checks with database
	var requestParameters = [];
	var username = document.getElementById("username").value;
	var password = document.getElementById("pwrd").value;
	Cookies.set("server", "login");
	Cookies.set("uname",username);
	Cookies.set("password",password);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "login.html", true);
	xmlhttp.send();
	//window.location.reload();
	window.location.href="startview.html";
	var uname = Cookies.get("uname");
	var pwrd = Cookies.get("password");
	console.log("u "+uname);	
	console.log("p "+pwrd);

	if(username==uname && password==pwrd) {
		window.location.href="startview.html";
	} else {
		alert("User "+uname+" does not exist");
	}

}

var newUser = function() {
	//creates new user a.k.a. inserts new user info into database
	//and then continues in as specified user
	var username = document.getElementById("username").value;
	var password = document.getElementById("pwrd").value;
	console.log(username);
	if(username=="" || username=="Username") {
		alert("You must enter name and password");
		return false;
	} else {
		Cookies.set("server", "newuser");
		Cookies.set("uname", username);
		Cookies.set("password", password);
		window.location.href="startview.html";
		console.log("get "+Cookies.get("uname"));
		console.log("after");
		return true;
	}
}

function request() {
	Cookies.set("listcomp", "");
	Cookies.set("server", "listcomp");
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "startview.html", true);
	xmlhttp.send()
	console.log("request");

	populateTable();
}

function setCurrentUser() {
	//sets current user in statusfield
	//implement as logout option?
	document.getElementById("currUser").innerHTML=Cookies.get("uname");
}

var goBack = function () {
	//Go back button	
	window.history.back();
}

var loadCompPage = function (companyname) {
	//when company in list or searchresult tapped
	//gets company info  and inserts it into page companyview.html
	//then loads that page
	//Cookies.set("server", "viewcomp");
	//Cookies.set("cname", companyName.innerHTML);
	console.log("compname "+ companyname.innerHTML);
	window.location.href="companyview.html";
	console.log("COMPANY JAO");
}

var loadCompInfo = function () {
	document.getElementById("compName").innerHTML=Cookies.get("cname");
}

var getFavorites = function () {
	//might be redundant, could use 
	//Populate table instead
	//get list of favs from server
	Cookies.set("")
	//populateTable(fav);

}

var getSearchResult = function () {
	//Sends cookie to database
	//gets companies that matches
	//and puts result in a table
	//populateTable(search);
}
function clickHandler()
{
    alert(this.textContent);
}
var populateTable = function () {
	//takes flag OR array of data as input
	//flag determines whether to update
	//Searchresult, bookmarks, company list
	//OR it simply updates with the input

	//click on tablerow leads to company view 
	//where cid determines page content
	//database should sort the content desc
	//request();
	var companies = Cookies.get("listcomp"); 	//.split(",");
	console.log(companies);
	var table = document.getElementById("table");
	//var serverData = ["Digpro", "WSP", "ÅF", "Metrolit"];
	document.getElementById("skyline").style.display = "none";
	for(i=0; i<companies.length; i++) {
		var cname=companies.split(":")[0];
		table.insertRow(i).insertCell(0).innerHTML="<p onclick='loadCompPage(this)'>"+cname+"</p>";
	}

	return false;
	

}

var setFavorite = function () {
	//when bookmark icon clicked in companyview.html
	//inserts company information into favorites database

	var favIcon = document.getElementById("favCompView");

	if(favIcon.src.search("fav.png") != -1) {
		favIcon.src="css/images/favok.png";
		console.log("not fav.png")

		//add favorite
	} else {
		//remove favorite
			favIcon.src="css/images/fav.png";
	}
	
	
	//alert("FAV SET JAO");

}


	//Sök företag
		//Vid klick laddas ny view
		//Sidan innehåller: Tillbakaknapp, filteralternativ, 
		//rensa filter
		//Searchbar
		//laddar resultat i form av en tabell
		//Inserta till tabellen med ajax?
	//Bokmärken
		//Vid klick laddas ny view
		//Sidan innehåller: Tillbakaknapp, lista med favoriter
		//Vid klick på favorit tas man till companyview
			//COmpanyview innehåller tillbakaknapp och favoritikon
			//möjlighet att ta lägga till/ta bort favorit
	//Företagslista
		//Vid klick laddas ny view
		//Innehåller: tillbakaknapp samt scrollbar lista med företag
		//Vid klick på favorit tas man till companyview
			//COmpanyview innehåller tillbakaknapp och favoritikon
			//möjlighet att ta lägga till/ta bort favorit
	//Karta
		//Vid klick laddas layoutkarta
		//Implementera som dummy?

	//Logga ut
	



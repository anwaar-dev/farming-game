let login = document.querySelector("#login");
let register = document.querySelector("#register");
let loginButton = document.querySelector(".button1");
let registerButton = document.querySelector(".button2");
let loginLink = document.querySelector("#loginlink");
let registerLink = document.querySelector("#registerlink");
let link = document.querySelector("a");
let Name1 = document.querySelector("#n1");
let Name2 = document.querySelector("#n2");

let name1,name2,jsonData,dt,data;

let Data = {
	Money:100,
	TimeMins:0,
	TimeHours:0,
	DateDays:1,
	DateMonths:1,
	Carrot:0,
	Corn:0,
	Tomato:0,
field1Obj:{
	Crop:"none",
	Watered:false,
	Seeded:false,
	Dirty:false,
	Growth:0
},
field2Obj:{
	Crop:"none",
	Watered:false,
	Seeded:false,
	Dirty:false,
	Growth:0
},
field3Obj:{
	Crop:"none",
	Watered:false,
	Seeded:false,
	Dirty:false,
	Growth:0
},
field4Obj:{
	Crop:"none",
	Watered:false,
	Seeded:false,
	Dirty:false,
	Growth:0
},
field5Obj:{
	Crop:"none",
	Watered:false,
	Seeded:false,
	Dirty:false,
	Growth:0
},
field6Obj:{
	Crop:"none",
	Watered:false,
	Seeded:false,
	Dirty:false,
	Growth:0
},
};

function loginlinkClick() {
	login.style.display="block";
	register.style.display="none";
}
function registerlinkClick() {
	login.style.display="none";
	register.style.display="block";
}
function Login() {
	name1 = Name1.value;
	if (localStorage.getItem(name1)==undefined){alert("No Account found !")}
	else{
	let acc = name1;
	localStorage.setItem("acc",acc)
	window.open("html/index.html");
	window.close(this);
	}
}
function Register() {
	name2 =Name2.value;
	if (name2==""){alert("Please Entre A Name For Your Account.")}
	else {
	jsonData = JSON.stringify(Data);
	localStorage.setItem(name2, jsonData);
	loginlinkClick();
}	
}
document.addEventListener("DOMContentLoaded",()=>{
let btn=document.getElementById('menu');
//init
function getSelector(){
	let cible=document.querySelector('.pictures');
	let image=document.getElementsByTagName('img')[0];
	

	let options=document.querySelector('select');
	//init local

	//condition 
	if(!options.value){
		alert("faites votre choix!!!");

	}
	else if(options.value=="france"){
		alert('Hello la France');
		/*cible.style.display="block";
		image.setAttribute('src','image/b.png');*/


	}
	else{
		alert(options.value);

	}

	
}

	btn.addEventListener('change',getSelector);
	/* autres test Objet */
	const createUser = (nom, age, ...skills)=>{
		return {
				user: `Name: ${nom},
				age: ${age}`,
				skills: skills
			};
		}
	const newUser = createUser("Alan",57, "Data", true, 12.67)
	console.table(newUser.skills)
	
})

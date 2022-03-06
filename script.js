/*------------------------------------------------------*/
const dishes = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup',
'Salmon'];
dishes.food = "I am hungry";
for (let i in dishes) {
	console.log(i);
}

for (let i of dishes) {
	console.log(i);
}
/*-----------------------------------------------------*/
const btn = document.querySelector('#btn');
btn.onclick = () => console.log('Javascript test');

function clickPlease() {
var seltheme = document.getElementById("selcolor").value;
   var elem = document.getElementById("pict");
   if(seltheme == "Maroon") {
   elem.style.backgroundColor = 'red';
   }
   else  if(seltheme == "Green") {
   elem.style.backgroundColor = 'green';
   }
};
/*---------------------------------*/

const myResult = fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(data => data.data)
.then(users => users.map(user => user.first_name))
.then(names => [names[0], names[1], names[2]])
.then(threeNames => console.log(threeNames))

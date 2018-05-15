
agecheck = document.querySelector('.over');
var over18 =prompt('how old are you? ');
if(over18 >= 18){
	agecheck.src='beer.jpg';
	document.querySelector('.message').textContent ="you're over 18 here is your beer"
}
else
{
	agecheck.src='juice.jpg'
	document.querySelector('.message').textContent ="you not over 18 here is your juice"

}
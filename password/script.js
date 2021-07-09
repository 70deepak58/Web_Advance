let password=document.getElementById('password');
let visibility=document.getElementById('visibility');

let is_show=true;
visibility.addEventListener('click',function(){
	if(is_show){
		password.setAttribute('type','text');
		visibility.innerHTML='visibility';
	}else{
		password.setAttribute('type','password');
		visibility.innerHTML='visibility_off';
	}
	is_show=!is_show;
});
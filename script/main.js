let body = document.getElementsByTagName('body')[0];
let sidebar = document.getElementById('sidebar');

function equalHeight () {
	body.style.height = 'auto';
	sidebar.style.height = 'auto'

	let bodyH = body.offsetHeight;

	sidebar.style.height = bodyH-300 + 'px'
}

equalHeight();

let menuList = document.getElementsByClassName('sidebar-list');
let sidebarMenu = document.getElementById('sidebarMenu');

sidebarMenu.addEventListener('click', menu)

function menu(event){

	for(let i = 0; i < menuList.length; i++){

		menuList[i].classList.remove('enable');

	}

	event.target.classList.add('enable');

}

let langList = document.getElementsByClassName('lang');
let sidebarLang = document.getElementById('sidebarLang');

sidebarLang.addEventListener('click', lang)

function lang(event){

	for(let i = 0; i < langList.length; i++){

		langList[i].classList.remove('active');

	}
	event.target.classList.add('active');
}

let postList = document.getElementsByClassName('postList');
let postMenu = document.getElementById('postMenu');

postMenu.addEventListener('click', post)

function post(event){

	for(let i = 0; i < postList.length; i++){

		postList[i].classList.remove('switch');

	}
	event.target.classList.add('switch');
}
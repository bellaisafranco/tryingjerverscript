tp.addEventListener('click',function(){
	pagetitle.innerHTML = "thoughts &amp; prayers";
	console.log("hello loser");
	document.body.classList.remove("inlist");
	document.body.classList.remove("out");
	document.body.classList.remove("mind");
    document.body.classList.remove('homo');
	document.body.classList.add('tp');
	document.getElementById('banner').src="pain.jpg";
	document.getElementById('banner').alt="a young furry wolf experiences the pain of it's parents failing marriage";
})

inlist.addEventListener('click',function(){
	pagetitle.innerHTML = "thats hot";
	console.log("i dont want to be alive");
	document.body.classList.remove("tp");
	document.body.classList.remove("out");
	document.body.classList.remove("mind");
    document.body.classList.remove('homo');
	document.body.classList.add('inlist');
	document.getElementById('banner').src="the-realest.jpg";
	document.getElementById('banner').alt="chris griffin draingang";
})

out.addEventListener('click',function(){
	pagetitle.innerHTML = "you're out";
	console.log("help me");
	document.body.classList.remove("inlist");
	document.body.classList.remove("tp");
	document.body.classList.remove("mind");
    document.body.classList.remove('homo');
	document.body.classList.add('out');
	document.getElementById('banner').src="lit-af.jpg";
	document.getElementById('banner').alt="brian griffin knows whats up";
})
mind.addEventListener('click',function(){
	pagetitle.innerHTML = "look inside alex's mind";
	console.log("bro what");
	document.body.classList.remove("inlist");
	document.body.classList.remove("out");
	document.body.classList.remove("tp");
    document.body.classList.remove('homo');
	document.body.classList.add('mind');
	document.getElementById('banner').src="mind-core.jpg";
	document.getElementById('banner').alt="sorry for my freakout uwu";
})
homo.addEventListener('click',function(){
	pagetitle.innerHTML = "Alex Loves Cock &amp; Balls";
	console.log("whats going on");
	document.body.classList.remove("tp");
	document.body.classList.remove("out");
	document.body.classList.remove("mind");
    document.body.classList.remove("inlist");
	document.body.classList.add('homo');
	document.getElementById('banner').src="evil-bella.jpg";
	document.getElementById('banner').alt="an ode to hannibal lector";
})

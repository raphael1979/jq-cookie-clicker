$(document).ready(function(){
	//votre code
		var phrases = ["Poussé la carcasse à bord, mais tous les vices.", "Reprends les clefs, après le portefeuille de son mari dans le quartier même où l'air ne fonctionnait pas.", "Celle-là n'est qu'ils ont du cachalot et la lanterne commença de descendre.", "Agité par ces pensées, qui appellent ces oeuvres à la foi de ces paysans l'imprégner de son effluve."]; 

	var i = $('.counter').text();
	$('.cake').click(function(){
		i++
		$('.counter').html(i);
		if((i)%20 == 0){
			alert(phrases[Math.floor(Math.random()*phrases.length)]);
		}
		console.log(i);
	})

});


// selectors

const h1 = $('h1');
h1.css('color', 'red');
console.log(h1);


const favMovies = $('.fav-movies');
$('.fav-movies').last().css('color', 'red');
// console.log(favMovies);

// for(let movies of favMovies){
//     $(movies).css('color', 'lightgreen');
// }


// $('#special').css('border', '2px solid red')

console.log();
$('h1').text('hello!! this is heading');

// $('#special').text('<em>this is special para</em>');

// $('#special').html(`<div class="container">
// <ul>
//     <li class="fav-movies">Fast & Furious</li>
//     <li class="fav-movies">IronMan</li>
//     <li>Sazam</li>
//     <li class="fav-movies">kuch bhi</li>
//     <li>Sazam 2</li>
// </ul>
// </div>`);

// as setter
$('h1').attr('class', 'heading');
// as getter
console.log($('ol li a:first-child').attr('href'));



$('.para').first().addClass('paragraph');
$('.para').removeClass('para');

// console.log($('li').parent());
// console.log($('ol li').siblings());
// console.log($('li:first-child').next());
// console.log($('li:last-child').prev());


// const h2 = $('<h2>');
// h2.text('this is h2 heading')

$('h1').after($('<h2>').text('this is h2 heading'));
$('h1').before($('<h2>').text('this is h2 heading'));
 

$('ol').append($('<li>').text('kuch bhi part 2'));

// $('ul li:nth-child(4)').remove();

$('input[type="text"]').on('keydown', (e)=>{
    if(e.which === 13){ 
        console.log(e);
        console.log('You pressed Enter!');
    }
})

import Article from './Article.min.js';

const urlStart = 'https://api.nytimes.com/svc/topstories/v2/';
const urlEnd = '.json?api-key=UjLlKw2z0c4neE3VRLpDc60FHI981TfF';


$('select').on('change', function(event) {
    let option = event.target.value;

    $('main').addClass('after-click-main');
    $('img').addClass('after-click-image');
    $('.sections').addClass('after-click-sections');
    $('footer').addClass('after-click-footer');

    $('ul').removeClass('after-click-articles');

    $.ajax({
            method: 'GET',
            url: urlStart + option + urlEnd,
        })
        .done(function(data) {
            $('ul').addClass('after-click-articles');

            $('.articles').html('');
            console.log(data.results.filter((result) => result.multimedia.length < 5));
            let articles = [];

            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].multimedia.length >= 5) {
                    articles.push(new Article(data.results[i].url, data.results[i].multimedia[4].url, data.results[i].abstract));
                }
            }
            for (let i = 0; i < articles.length; i++) {
                if (i <= 12) {
                    articles[i].render();
                } else {
                    break;
                }
            }
        })
})
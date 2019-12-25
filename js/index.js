import Article from './Article.min.js';

const urlStart = 'https://api.nytimes.com/svc/topstories/v2/';
const urlEnd = '.json?api-keyE3VRLpDc60FHI981TfF';

$('.loader').hide();

$('select').on('change', function (event) {
    $('.loader').show();
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
        .done(function (data) {
            $('ul').addClass('after-click-articles');
            $('.articles').html('');

            let articles = [],
                i = 0,
                j = 0;
            while (i < 12) {
                if (data.results[j].multimedia.length >= 5) {
                    // append the articles
                    articles.push(new Article(data.results[j].url, data.results[j].multimedia[4].url, data.results[j].abstract));
                    // display the articles
                    articles[i].render();
                    i++;
                }
                j++;
            }
            $('.loader').hide();
        })
        .fail(function () {
            $('.articles').append(`
                <li class = "error">
                    <h1>Fail to load news... Try again!</h1>
                </li>
            `);
            $('.loader').hide();
        });
})
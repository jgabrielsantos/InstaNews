import Article from './Article.min.js';

const urlStart = 'https://api.nytimes.com/svc/topstories/v2/';
const urlEnd = '.json?api-key=UjLlKw2z0c4neE3VRLpDc60FHI981TfF';


$('select').on('change', function(event) {
    let option = event.target.value;

    $.ajax({
            method: 'GET',
            url: urlStart + option + urlEnd,
        })
        .done(function(data) {
            console.log(data);
            $('.articles').html('');
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
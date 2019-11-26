import Article from './Article.min.js';

const urlStart = 'https://api.nytimes.com/svc/topstories/v2/';
const urlEnd = '.json?api-key=UjLlKw2z0c4neE3VRLpDc60FHI981TfF';
console.log('tefsd');
$('select').on('change', function(event) {
    let option = event.target.value;

    $.ajax({
            method: 'GET',
            url: urlStart + option + urlEnd,
        })
        .done(function(data) {
            for (let i = 0; i < 5; i++) {
                let newArticle = new Article(data.results[i].url, data.results[i].multimedia[4].url, data.results[i].abstract);
                newArticle.render();
            }
        })
})
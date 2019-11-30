export default class Article {
    constructor(link, image, description) {
        this.link = link;
        this.image = image;
        this.description = description;
    }


    render() {
        const articles = $('.articles');
        articles.append('<li class="article"> <a href=' + this.link + '"target="_blank> <img src="' + this.image + '" alt=""> </a> <figcaption>' + this.description + '</figcaption> </li>');
    }
}
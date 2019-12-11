export default class Article {
    constructor(link, image, description) {
        this.link = link;
        this.image = image;
        this.description = description;
    }


    render() {
        const articles = $('.articles');
        articles.append(`
            <li class="article">
                <a href="${this.link}" target="_blank" style="background-image: url('${this.image}')">
                    <figcaption>${this.description}</figcaption>
                </a>
            </li>
        `);
    }
}
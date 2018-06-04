const article = {
    title: 'Aprendendo Template Strings',
    intro: 'Uma breve explicação de como se utilizar template strings do ES6 em seu código hoje!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, officia, perspiciatis? Architecto, molestias autem. Repellat, laborum deserunt soluta necessitatibus. Tenetur illo, id magnam numquam neque illum temporibus, in qui eos.',
    tags: ['es6', 'js', 'template-literal'],
    author: 'Erandir Junior'
};

function renderAuthor(name) {
        return (name) ? name : 'unknown';
    }
    
const markup = ` 
    <article>
        <header>
            <h1>${article.title}</h1>
        </header>
        <section>
            <p>${article.intro}</p>
        </section>
        <footer>
            <ul>
                ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
            <p>Author: ${renderAuthor(article.author)}</p>
        </footer>
    </article>
`;
document.body.innerHTML = markup;
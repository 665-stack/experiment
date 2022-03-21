const books = [
    'A smater way to learn JavaScript',
    'The defination guide for JS',
    'The principles of object-oriented JavaScript',
    'The good parts of JS',
    'Interactive front-end web development',
    'Secret of javaScript ninja',
    'JavaScript for Begginers'
];
const search = 'JavaScript';
const searchResult = [];
for (const book of books) {
    if (book.toLowerCase().indexOf(search.toLocaleLowerCase()) != -1) {
        searchResult.push(book);
    }
}
console.log('search result -- ', searchResult)
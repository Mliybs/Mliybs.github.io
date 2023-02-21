var words;

fetch('https://mliybs.github.io/words/words.js')
    .then(res => {
        return res.json();
    })
    .then(get => {
        words = get;
        console.log(words);
        console.log(typeof(words));
    })
    .catch(err => {
        console.log(err);
    })
var words;

fetch('https://mliybs.github.io/words/words.json')
    .then(res => {
        console.log(res);
        words = res.json();
        return words;
    })
    .catch(err => {
        console.log(err);
    })

setTimeout(console.log(words), 3000);
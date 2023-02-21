var words;

oprate = (callback) => {
    console.log(callback);
}

fetch('https://mliybs.github.io/words/words.json')
    .then(res => {
        console.log(res);
        words = res.json();
        return words;
    })
    .then(oprate(callback))
    .catch(err => {
        console.log(err);
    })
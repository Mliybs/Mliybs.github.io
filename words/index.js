const words = fetch('https://mliybs.github.io/words/words.json')
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(returned => {
        console.log(returned);
    })
    .catch(err => {
        console.log(err);
    })

console.log(typeof(words))
console.log(words);
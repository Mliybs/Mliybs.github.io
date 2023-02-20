const words = fetch('https://mliybs.github.io/words/words.json')
    .then(res => {
        console.log(res);
        return res.json();
    })
    .catch(err => {
        console.log(err);
    })

setTimeout(console.log(words),4000)
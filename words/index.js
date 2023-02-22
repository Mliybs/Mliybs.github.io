var words;

fetch('https://mliybs.github.io/words/words.json')
    .then(res => {
        return res.json();
    })
    .then(get => {
        words = get;
        oprate(words);
    })
    .catch(err => {
        console.log(err);
        alert('泥嚎，获取JSON文件失败了，刷个新好不好');
    })

oprate = (input) => {
    console.log(input);
    console.log(typeof(input));
}
const macro = document.querySelector('.macro');
const learn = document.querySelector('.learn');

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
    // 对获取到的JSON文件进行更改
    delete input.extra;
}

getinlearn = () => {
    learn.remove();
    macro.appendChild(document.createElement('span').setAttribute('class','left'));
    macro.appendChild(document.createElement('span').setAttribute('class','center'));
    macro.appendChild(document.createElement('span').setAttribute('class','right'));
}

learn.onclick = getinlearn;
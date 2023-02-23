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
    let newspan = document.createElement('span');
    newspan.setAttribute('class','left');
    newspan.innerText = words.root[Math.random() * words.root.length | 0].name;
    macro.appendChild(newspan);
    newspan.setAttribute('class','center');
    newspan.innerText = words.root[Math.random() * words.root.length | 0].name;
    macro.appendChild(newspan);
    newspan.setAttribute('class','right');
    newspan.innerText = words.root[Math.random() * words.root.length | 0].name;
    macro.appendChild(newspan);
}

learn.onclick = getinlearn;
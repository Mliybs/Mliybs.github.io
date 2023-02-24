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
    macro.appendChild(newspan);
    macro.lastElementChild.innerText = words.root[Math.random() * words.root.length | 0].name;
    newspan.setAttribute('class','center');
    macro.appendChild(newspan);
    macro.lastElementChild.innerText = words.root[Math.random() * words.root.length | 0].name;
    newspan.setAttribute('class','right');
    macro.appendChild(newspan);
    macro.lastElementChild.innerText = words.root[Math.random() * words.root.length | 0].name;
}

learn.onclick = getinlearn;
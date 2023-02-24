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
    let leftspan = document.createElement('span');
    let middlespan = document.createElement('span');
    let rightspan = document.createElement('span');
    leftspan.setAttribute('class','left');
    middlespan.setAttribute('class','center');
    rightspan.setAttribute('class','right');
    leftspan.innerText = words.root[Math.random() * words.root.length | 0].name;
    middlespan.innerText = words.root[Math.random() * words.root.length | 0].name;
    rightspan.innerText = words.root[Math.random() * words.root.length | 0].name;
    macro.appendChild(leftspan);
    macro.appendChild(middlespan);
    macro.appendChild(rightspan);
}

learn.onclick = getinlearn;
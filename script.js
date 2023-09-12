const generateBtn = document.querySelector('#generateBtn'); // 1
const gridContainer = document.querySelector('#gridContainer'); // 2

generateBtn.addEventListener('click', () => { //3
    const randomNumber = Math.floor(Math.random() * 1000) +1; //4
    const imgUrl = `https://picsum.photos/500?random=${randomNumber}`; //5

    const img = document.createElement('img'); // 6
    //img.src = imgUrl; //7 -> 4+5 결합된 코드 
    img.src = `https://picsum.photos/500?random=${Math.floor(Math.random() * 1000) +1}`
    console.log(Math.floor(Math.random() * 1000) +1);
    // ${} -> 어떤 문자열 안에 동적인 값을 넣을떄 쓰는 문법 
    gridContainer.appendChild(img); //8
});
const content = document.getElementById('container');
console.log(content)

const firstParagraph = document.querySelector('.title');
console.log(firstParagraph.textContent)

const allParagraphs = document.querySelectorAll('.title')
console.log(allParagraphs)


const button = document.getElementById('changeTitle');


button.addEventListener('click', () => {
  firstParagraph.textContent = 'Holaaaaaaa';
  firstParagraph.style.color = 'red';
  firstParagraph.style.fontSize = '25px';
})


firstParagraph.addEventListener('mouseover', () => {
  firstParagraph.style.backgroundColor = 'red';
})

firstParagraph.addEventListener('mouseout', () => {
  firstParagraph.style.backgroundColor = 'white';
})
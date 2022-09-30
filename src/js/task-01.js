
const items = document.querySelectorAll('.item');
console.log('Number of categories:', items.length);
console.log(' ');
items.forEach(item => {
    const a = item.querySelector('h2');
    console.log('Category:', a.textContent);
    const b = item.querySelectorAll('li');
    console.log('Elements:', b.length);
    console.log(' ');
})

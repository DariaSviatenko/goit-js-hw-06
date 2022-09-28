// const listWithId = document.querySelector('#categories');
// console.log(listWithId);

// const listWithClass = document.querySelector('.categories');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("h2").length;
// console.log(`Number of categories: ${menuItemsByTagName}`);

// const categoriesItemsByClass = document.querySelectorAll(".categories-items-h2");
// console.log(categoriesItemsByClass);

// const firstCategoriesItem = document.querySelector(".categories-h2");
// console.log(firstCategoriesItem);
const categories = document.querySelectorAll('.item');
console.log(' ');
console.log(`Number of categories: ${categories.length}`);
console.log(' ');
categories.forEach(category => {
    const group = [...category.children];
    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Category: ${element.textContent}`);
        }
    });
    group.forEach(element => {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log(' ');
});
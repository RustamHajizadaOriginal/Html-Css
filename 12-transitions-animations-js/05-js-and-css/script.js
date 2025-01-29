const button = document.querySelector('button');
const heading = document.querySelector('h1');
// console.log('JS is working!');
// var firstName = "John";
// console.log(button);

button.addEventListener('click', function () {
    // console.log('button clicked')
    // console.log (document.body)
    document.body.classList.toggle('dark');
    heading.classList.toggle('red');
});
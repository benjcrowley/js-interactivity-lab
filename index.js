console.log('Hello, world')

let message = document.querySelector('#message')



//create a new function called addMovie that takes in an event as a parameter.
function addMovie (event) {
    event.preventDefault()
    
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    message.textContent = inputField.value + ' added'
    inputField.value = ''
    revealMessage()

    
   
}
function deleteMovie (event){
    event.target.parentNode.remove()
    message.textContent = event.target.parentNode.textContent + " deleted"
    revealMessage()
}

document.querySelector('form').addEventListener('submit', addMovie)

function crossOffMovie (event) {
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked')){

        message.textContent = event.target.textContent + " watched"
    } else {
        message.textContent = event.target.textContent + " unWatched"
    }
    revealMessage()
}

function revealMessage () {
    message.classList.remove('hide')
    setTimeout(() => {message.classList.add('hide')}, 1000)
}
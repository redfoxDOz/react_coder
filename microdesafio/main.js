const createButton = () =>{
    const root= document.querySelector('#root')

    const button = document.createElement ('button')
    button.textContent = 'click me'

    root.append (button)
}
createButton()
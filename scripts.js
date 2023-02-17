const form = document.getElementById('form-contact')
const imageContact = '<img src="./imagens/contato.png" alt="conato" />'
const contacts = []
const contactNumbers = []

let lines = ''


form.addEventListener('submit', function(e){
    e.preventDefault()

    addLines()
})

function addLines(){
    const inputContact = document.getElementById('contact-name')
    const inputNumber = document.getElementById('contact-number')

    if (contacts.includes(inputContact.value)){
        alert(`O contato ${inputContact.value} já foi inserido`)
    } else {
    contacts.push(inputContact.value)
    contactNumbers.push(inputNumber.value)

    let line = '<tr>'
    line += `<td>${imageContact}</td>`
    line += `<td>${inputContact.value}</td>`
    line += `<td>${inputNumber.value}</td>`
    line += '</tr>'

    lines += line

    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = lines
    }
    inputContact.value = ''
    inputNumber.value = ''
}

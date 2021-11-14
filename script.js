const q = element => document.querySelector(element)
const qAll = elements => document.querySelectorAll(elements)


function getAddress(event) {
    event.preventDefault()
    
    let cep = q('input[name="cep"]').value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then( (result) => result.json() )
    .then( (result) => {
        q('input[name="cep"]').value = result.cep
        q('input[name="address"]').value = result.logradouro
        q('input[name="address"]').setAttribute('disabled', 'disabled')
        q('input[name="neighborhood"]').value = result.bairro
        q('input[name="neighborhood"]').setAttribute('disabled', 'disabled')
        q('input[name="city"]').value = result.localidade
        q('input[name="state"]').value = result.uf
        q('input[name="state"]').setAttribute('disabled', 'disabled')

        console.log(result)
    })
    .catch( () => alert('Revise os campos e tente novamente.') )
}

q('input[name="cep"]').addEventListener('focusout', getAddress)
const q = element => document.querySelector(element)
const qAll = elements => document.querySelectorAll(elements)


async function getAddress(event) {
    event.preventDefault()

    let cep = q('input[name="cep"]').value
    let req = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let json = await req.json()

    q('input[name="cep"]').value = json.cep
    q('input[name="address"]').value = json.logradouro
    q('input[name="address"]').setAttribute('disabled', 'disabled')
    q('input[name="neighborhood"]').value = json.bairro
    q('input[name="neighborhood"]').setAttribute('disabled', 'disabled')
    q('input[name="city"]').value = json.localidade
    q('input[name="city"]').setAttribute('disabled', 'disabled')
    q('input[name="state"]').value = json.uf
    q('input[name="state"]').setAttribute('disabled', 'disabled')
}

q('input[name="cep"]').addEventListener('focusout', getAddress)
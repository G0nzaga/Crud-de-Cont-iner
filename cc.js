const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sCliente = document.querySelector('#m-cliente')
const sNc = document.querySelector('#m-numero')
const sTipo = document.querySelector('#m-tipo')
const sStatus = document.querySelector('#m-status')
const sCategoria = document.querySelector('#m-categoria')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sCliente.value = itens[index].cliente
    sNc.value = itens[index].numero
    sTipo.value = itens[index].tipo
    sStatus.value = itens[index].status
    sCategoria.value = itens[index].sCategoria
    id = index
  } else {
    sCliente.value = ''
    sNc.value = ''
    sTipo.value = ''
    sStatus.value = ''
    sCategoria.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.cliente}</td>
    <td>  ${item.numero}</td>
    <td>${item.tipo}</td>
    <td>${item.status}</td>
    <td>${item.categoria}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sCliente.value == '' || sNc.value == '' || sTipo.value == '' || sStatus.value == '' || sCategoria.value == ''   ) {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].cliente = sCliente.value
    itens[id].numero = sNc.value
    itens[id].tipo = sTipo.value
    itens[id].status = sStatus.value
    itens[id].categoria = sCategoria.value
  } else {
    itens.push({'cliente': sCliente.value,
                'numero': sNc.value,
                'tipo': sTipo.value,
                'status': sStatus.value,
                'categoria': sCategoria.value,
            
            
            })
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()



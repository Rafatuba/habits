const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-BR').slice(0, -5);
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists) {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Seu dia já foi adicionado',
      showConfirmButton: false,
      timer: 2000
    })
    return;
  }
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Dia adicionado com sucesso',
    showConfirmButton: false,
    timer: 2000
  })
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("Habitos@salvos", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("Habitos@salvos")) || {}
nlwSetup.setData(data)
nlwSetup.load()

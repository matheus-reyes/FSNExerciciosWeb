const tarefas = [
    {
        id: 1,
        prioridade: 1,
        texto: "Desenvolver HTML",
        feita: true
    },
    {
        id: 2,
        prioridade: 2,
        texto: "Criar Javascript",
        feita: true
    },
    {
        id: 3,
        prioridade: 1,
        texto: "Linkar Javascript no HTML",
        feita: true
    },
    {
        id: 4,
        prioridade: 3,
        texto: "Criar Funções no Javascript",
        feita: false
    },
    {
        id: 5,
        prioridade: 2,
        texto: "Testar Funções",
        feita: false
    }
]

const table = document.getElementById("table");

function mostrarTarefa(t){
    // criando uma linha
    let tr = document.createElement('tr');

    // Se a tarefa tiver feita como true adiciona a classe done
    tr.className = t.feita?'done':'';

    // Criar um input checkbox
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");

    // Marcar o input checkbox caso necessário
    checkbox.checked = t.feita;

    // Adicionando Listener para marcar a tarefa
    checkbox.addEventListener('click', (evt) => {
        t.feita = !t.feita;
        let tr = checkbox.parentNode.parentNode;
        tr.classList.toggle("done");
    });

    // Criar uma célula 
    let tdCheckbox = document.createElement('td');

    // Adicionar o input à célula criada 
    tdCheckbox.appendChild(checkbox);

    // Criar a célula de texto (td) e adicionar a ela o texto
    let tdTexto = document.createElement("td");
    let strPrioridade = ["baixa", "média", "alta"][t.prioridade - 1];
    tdTexto.innerText = "["+ strPrioridade +"]" + t.texto;

    // Criar uma tag "i" da classe "material-icons" contendo o texto delete
    let i = document.createElement('i');
    i.className = "material-icons";
    i.innerText = "delete";

    i.addEventListener('click',(evt) => {

        // Verificando confirmação do usuário
        if(!confirm("Tem certeza que deseja remover essa tarefa?")){
            return;
        }

        // Remove do array de tarefas
        removeTarefaPeloId(t.id);

        //Captura a linha referente a tarefa a ser removida
        let tr = evt.target.parentNode.parentNode;

        // Removendo da DOM
        tr.remove()

        // Mostrar mensagem de sucesso
        let sucesso = document.querySelector(".sucesso");
        sucesso.style.opacity = 1;

        setTimeout(()=>{
            sucesso.style.opacity = 0;
        }, 3000);


    });

    // Criar uma célula
    let tdDelete = document.createElement('td');

    // Adicionar à célula criada o elemento i
    tdDelete.appendChild(i);

    // Adicionar as três células criadas a linha criada
    tr.appendChild(tdCheckbox);
    tr.appendChild(tdTexto);
    tr.appendChild(tdDelete);
    table.appendChild(tr);
}

function mostrarTarefas(tarefas){
    // Limpar a tabela
    table.innerText = "";

    for(const t of tarefas){
        mostrarTarefa(t);
    }
}

function removeTarefaPeloId(id){
    let pos = tarefas.findIndex(t => t.id == id);
    tarefas.splice(pos, 1);
}

function mudaStatusTarefaPeloId(id){
    let t = tarefas.find(t => t.id == id);
    t.feita = !t.feita;
}

function adicionarTarefa(texto){
    let regExp = /^#[1-3]\ /;

    let desc;
    let prioridade;

    if(regExp.test(texto)){
        prioridade = Number(texto.charAt(1));
        desc = texto.substr(3);
    }else{
        prioriadade = 1;
        desc = texto;
    }

    let id = tarefas.length == 0 ? 1 : tarefas[tarefas.length - 1].id + 1; 

    let t = {
        id,
        texto: desc,
        prioridade: prioridade,
        feita: false
    }

    tarefas.push(t);

    mostrarTarefa(t);
}

const form = document.getElementById("form");
form.addEventListener('submit', (evt)=> {
    evt.preventDefault();
    let input = document.getElementById("tf_2do");
    let texto = input.value;
    adicionarTarefa(texto);
    input.value = "";
});

mostrarTarefas(tarefas)
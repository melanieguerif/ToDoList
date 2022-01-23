var input = document.getElementById('task');
var addLiBtn = document.getElementById('button')

// Function + Li && delete li && donne li'
function addLi(task){
    //On creer une LI 
    var newLi = document.createElement("li");
    var taskContent = document.createTextNode(task);
    newLi.appendChild(taskContent);        
    //On créer un button
    var liBtn = document.createElement("button");
    liBtn.appendChild(document.createTextNode("X"));
    newLi.appendChild(liBtn);
    //On créer l'élément UL puis on insère l'élement LI à l'interieur de Ul 
    var currentUl = document.getElementById('ul');
    currentUl.appendChild(newLi);
    //on suprime le li si on clique si le LiBtn
    liBtn.addEventListener('click', function(){
        newLi.style.display = 'none';
    })
    //on raye la tache finit 
    newLi.addEventListener('click', function(){
        newLi.classList.toggle('done')
    })
}

function listentLengthTask(){
    //On récupère la valeur de l'imnut
    var task = input.value;
    //Si la longueur et entre 1 et 49
    if(task.length > 0 && task.length < 50){
        addLi(task);
        //On "clear" l'input
        document.getElementById('task').value = "";
        // on affiche un message d'erreur
    } else{
        document.getElementById('task').value = "";
        alert('Vous ne pouvez pas ajouter de têche vide');
    }
};
//Au click sur le bouton on ajoute un LI
addLiBtn.addEventListener('click', function(){
    listentLengthTask();
});

task.addEventListener('keypress', function(e){
    console.log(e)
    
    if(e.code === 'Enter'){
        listentLengthTask();
    }
});



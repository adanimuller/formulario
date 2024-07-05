function Cadastrar(){
let nomeUsuario=document.getElementById('nome').value
let emailUsuario=document.getElementById('email').value
let datanascimentoUsuario=document.getElementById('data de nascimento').value
let estadocivilUsuario=document.getElementById('estado civil').value
let messageUsuario= document.getElementById('mensagem').value
let sexousuario=document.querySelector("input[name='sexo']:checked").value

alert('Seu nomé: '+ nomeUsuario+'\n'
+'Seu emai é: '+ emailUsuario + '\n'
+' Sua data de nascimento é: ' + datanascimentoUsuario+ '\n'
+'Seu estdo civil é:' + estadocivilUsuario +'\n'
+' Sua mensagem foi:' + messageUsuario +'\n'
+' Seu sexo é:' + sexousuario +'\n'
)
}


$(document).ready(function(){
    
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); 

   
    function generarContrasena(longitud) {
        var mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var minusculas = 'abcdefghijklmnopqrstuvwxyz';
        var numeros = '0123456789';
        var caracteresEspeciales = '!@#$%^&*()_+[]{}|;:,.<>?';

        
        let contrasena = '';
        contrasena += mayusculas.charAt(Math.floor(Math.random() * mayusculas.length));
        contrasena += minusculas.charAt(Math.floor(Math.random() * minusculas.length));
        contrasena += numeros.charAt(Math.floor(Math.random() * numeros.length));
        contrasena += caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length));

       
        const todosLosCaracteres = mayusculas + minusculas + numeros + caracteresEspeciales;
        for (let i = contrasena.length; i < longitud; i++) {
            const indice = Math.floor(Math.random() * todosLosCaracteres.length);
            contrasena += todosLosCaracteres.charAt(indice);
        }
        contrasena = contrasena.split('').sort(() => 0.5 - Math.random()).join('');
        return contrasena;
    }

    const contrasenaGenerada = generarContrasena(10);

 
    document.getElementById('new').value = contrasenaGenerada;
    document.getElementById('new').setAttribute('disabled', true);
 
});
    
    
    
    $("#old").on("input",function(){

      
        var contraseña=$(this).val()
        var longitud= contraseña.length>=10
        var mayuscula= /[A-Z]/.test(contraseña)
        var minuscula=/[a-z]/.test(contraseña)
        var numero=/[0-9]/.test(contraseña)
        var especiales= /[!@#$%^&*()_+\[\]{}|;:,.<>?']/ .test(contraseña);
        contador=0
        /*  console.log(contraseña)
         console.log(longitud)
         console.log(mayuscula)
         console.log(numero)
         console.log(especiales) */


        if (longitud){

            contador++
        }
        if (mayuscula){
            

            contador++
        } if (minuscula){
            

            contador++
        } if (numero){

            contador++
        }
        if (especiales){
            contador++
        }
        
        

        console.log(contador)



        if (contraseña==""){
            document.getElementById("alerta").innerHTML="<div></div>"
        }
        if (contraseña!=""){

            if(contador==5){
                document.getElementById("alerta").innerHTML="<div class='alert alert-success' role='alert'>Seguridad Fuerte</div>"
            }
            else if(contador>=3 & contador<5){
                document.getElementById("alerta").innerHTML="<div class='alert alert-warning' role='alert'>Seguridad Mediana</div>"


            }
            else{
                document.getElementById("alerta").innerHTML="<div class='alert alert-danger' role='alert'>Seguridad Debil</div>"


            }
        

        }

    })})
    

        
    
        
    
        




















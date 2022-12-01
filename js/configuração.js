
        var  firebaseConfig = {
        apiKey: "AIzaSyAlyKAt0Eg57cb8GZDalCaEwIALPWPAEds",
        authDomain: "painel-loguin.firebaseapp.com",
        projectId: "painel-loguin",
        storageBucket: "painel-loguin.appspot.com",
        messagingSenderId: "24549930727",
        appId: "1:24549930727:web:98a17c160e55172c4bd442"
      };
        firebase.initializeApp(firebaseConfig);

        const storage = firebase.storage();
        const db = firebase.firestore();
        const auth = firebase.auth();

        const provider = new firebase.auth.GoogleAuthProvider();
        const caixaList = document.querySelector('[data-js="container-caixa"]')


        /***********************************************************************************/


        // REMOVER DOCUMENTOS  //

        db.collection('caixa').get()
        .then(snapshot => {
            const caixaLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                                         <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
                <li  data-id="${doc.id}"  >${descricao}</li>
                </ul> 

       <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div> `


               
             return acc
            },'')


            caixaList.innerHTML = caixaLis
        })
        .catch(err => {
            console.log(err.message)
    })


        caixaList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('caixa').doc(removeButtonId).delete()
                .then(() =>{

                alert('Caixa removido com sucesso!')

                 const caixa = document.querySelector(`[data-id="${removeButtonId}"]`)
              caixa.remove()

                    console.log('Caixa removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover a caixa', e.message)
                })

           }
        })


       



         /***********************************************************************************/


        const formCliente1 = document.querySelector('#form-cliente1');
        formCliente1.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante1]').value;
            let arquivo = document.querySelector('[name=arquivo1]').files[0];

            const uploadTask1 = storage.ref('variedades/' + arquivo.name).put(arquivo);

            uploadTask1.on('state_changed', (snapshot) => {
                const progress1 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress1);
            },
                function (error) {

                },
                function () {
                    storage.ref('variedades/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('variedades').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })


/***********************************************************************************/


        const formCliente2 = document.querySelector('#form-cliente2');
        formCliente2.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante2]').value;
            let arquivo = document.querySelector('[name=arquivo2]').files[0];

            const uploadTask2 = storage.ref('caixa/' + arquivo.name).put(arquivo);

            uploadTask2.on('state_changed', (snapshot) => {
                const progress2 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress2);
            },
                function (error) {

                },
                function () {
                    storage.ref('caixa/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('caixa').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })


/***************************************************************************/

        const formCliente3 = document.querySelector('#form-cliente3');
        formCliente3.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante3]').value;
            let arquivo = document.querySelector('[name=arquivo3]').files[0];

            const uploadTask3 = storage.ref('carregador/' + arquivo.name).put(arquivo);

            uploadTask3.on('state_changed', (snapshot) => {
                const progress3 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress3);
            },
                function (error) {

                },
                function () {
                    storage.ref('carregador/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('carregador').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })




/***************************************************************************/

        const formCliente4 = document.querySelector('#form-cliente4');
        formCliente4.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante4]').value;
            let arquivo = document.querySelector('[name=arquivo4]').files[0];

            const uploadTask4 = storage.ref('fone/' + arquivo.name).put(arquivo);

            uploadTask4.on('state_changed', (snapshot) => {
                const progress4 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress4);
            },
                function (error) {

                },
                function () {
                    storage.ref('fone/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('fone').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/****************************************************************************/



const formCliente5 = document.querySelector('#form-cliente5');
        formCliente5.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante5]').value;
            let arquivo = document.querySelector('[name=arquivo5]').files[0];

            const uploadTask5 = storage.ref('leds/' + arquivo.name).put(arquivo);

            uploadTask5.on('state_changed', (snapshot) => {
                const progress5 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress5);
            },
                function (error) {

                },
                function () {
                    storage.ref('leds/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('leds').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

 /****************************************************************************/

const formCliente6 = document.querySelector('#form-cliente6');
        formCliente6.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante6]').value;
            let arquivo = document.querySelector('[name=arquivo6]').files[0];

            const uploadTask6 = storage.ref('cabo/' + arquivo.name).put(arquivo);

            uploadTask6.on('state_changed', (snapshot) => {
                const progress6 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress6);
            },
                function (error) {

                },
                function () {
                    storage.ref('cabo/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('cabo').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************/

        const formTitulo11 = document.querySelector('#form-Titulo11');
        formTitulo11.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante11]').value;
           

            const uploadTask11 = storage.ref('titulo1/' + name).put(name);

            uploadTask11.on('state_changed', (snapshot) => {
                const progress11 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress3);
            },
                function (error) {

                },
                function () {
                    storage.ref('titulo1/' + name).getDownloadURL().then((url) => {
                        db.collection('titulo1').add({
                            descricao: comprovanteText,
                           
                        })
                        alert("Titulo1 Cadastrado!");
                    })
                }
            )
        })

/****************************************************************************/

/***************************************************************************/

        const formTitulo22 = document.querySelector('#form-Titulo22');
        formTitulo22.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante22]').value;
           

            const uploadTask22 = storage.ref('titulo2/' + name).put(name);

            uploadTask22.on('state_changed', (snapshot) => {
                const progress22 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress22);
            },
                function (error) {

                },
                function () {
                    storage.ref('titulo2/' + name).getDownloadURL().then((url) => {
                        db.collection('titulo2').add({
                            descricao: comprovanteText,
                           
                        })
                        alert("Titulo2 Cadastrado!");
                    })
                }
            )
        })

/****************************************************************************/


const formTitulo33 = document.querySelector('#form-Titulo33');
        formTitulo33.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante33]').value;
           

            const uploadTask33 = storage.ref('titulo3/' + name).put(name);

            uploadTask33.on('state_changed', (snapshot) => {
                const progress33 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress33);
            },
                function (error) {

                },
                function () {
                    storage.ref('titulo3/' + name).getDownloadURL().then((url) => {
                        db.collection('titulo3').add({
                            descricao: comprovanteText,
                           
                        })
                        alert("Titulo3 Cadastrado!");
                    })
                }
            )
        })

/****************************************************************************/


const formTitulo44 = document.querySelector('#form-Titulo44');
        formTitulo44.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante44]').value;
           

            const uploadTask44 = storage.ref('titulo4/' + name).put(name);

            uploadTask44.on('state_changed', (snapshot) => {
                const progress44 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress44);
            },
                function (error) {

                },
                function () {
                    storage.ref('titulo4/' + name).getDownloadURL().then((url) => {
                        db.collection('titulo4').add({
                            descricao: comprovanteText,
                           
                        })
                        alert("Titulo4 Cadastrado!");
                    })
                }
            )
        })

/****************************************************************************/


const formTitulo55 = document.querySelector('#form-Titulo55');
        formTitulo55.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante55]').value;
           

            const uploadTask55 = storage.ref('titulo5/' + name).put(name);

            uploadTask55.on('state_changed', (snapshot) => {
                const progress55 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress55);
            },
                function (error) {

                },
                function () {
                    storage.ref('titulo5/' + name).getDownloadURL().then((url) => {
                        db.collection('titulo5').add({
                            descricao: comprovanteText,
                           
                        })
                        alert("Titulo5 Cadastrado!");
                    })
                }
            )
        })

/****************************************************************************/


const formTitulo66 = document.querySelector('#form-Titulo66');
        formTitulo66.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante66]').value;
           

            const uploadTask66 = storage.ref('titulo6/' + name).put(name);

            uploadTask66.on('state_changed', (snapshot) => {
                const progress66 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress66);
            },
                function (error) {

                },
                function () {
                    storage.ref('titulo6/' + name).getDownloadURL().then((url) => {
                        db.collection('titulo6').add({
                            descricao: comprovanteText,
                           
                        })
                        alert("Titulo6 Cadastrado!");
                    })
                }
            )
        })

/****************************************************************************/


        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('admin');

        if (myParam != null) {
            //Eu quero entrar na parte administrativa.
            const adminArea = document.querySelector('.admin');
            adminArea.style.display = "block";
            console.log("Área do administrador");

            auth.onAuthStateChanged((val) => {
                if (val.email == "edilson.aria@gmail.com") {
                    loginBtn.style.display = "none";
                    document.querySelector('.listar-formularios').style.display = "block";
                    alert('Você está logado, admin!');
                    console.log("Logado como admin.");
                } else {
                    alert('Este email não é autorizado!');
                    console.log("Usuário não logado como admin.");
                }
            })

        } else {
            //Eu sou usuário.
            const clientArea = document.querySelector('.cliente');
            clientArea.style.display = "block";
            console.log("Área do usuário");
        }
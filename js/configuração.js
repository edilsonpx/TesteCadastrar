
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


        /***********************************************************************************/



        /***********************************************************************************/


        // REMOVER DOCUMENTOS  //
        const variedadesList = document.querySelector('[data-js="container-variedades"]')
        db.collection('variedades').get()
        .then(snapshot => {
            const variedadesLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            variedadesList.innerHTML = variedadesLis
        })
        .catch(err => {
            console.log(err.message)
    })

        variedadesList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('variedades').doc(removeButtonId).delete()
                .then(() =>{

                alert('Variedades removido com sucesso!')

                 const variedade = document.querySelector(`[data-id="${removeButtonId}"]`)
              variedade.remove()

                    console.log('Variedades removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover a Variedades', e.message)
                })

           }
        })


  /***********************************************************************************/

        // REMOVER DOCUMENTOS  //
        const caixaList = document.querySelector('[data-js="container-caixa"]')
        db.collection('caixa').get()
        .then(snapshot => {
            const caixaLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
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



                 // REMOVER DOCUMENTOS  //
        const carregadorList = document.querySelector('[data-js="container-carregador"]')
        db.collection('carregador').get()
        .then(snapshot => {
            const carregadorLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            carregadorList.innerHTML = carregadorLis
        })
        .catch(err => {
            console.log(err.message)
    })

        carregadorList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('carregador').doc(removeButtonId).delete()
                .then(() =>{

                alert('carregador removido com sucesso!')

                 const carregadors = document.querySelector(`[data-id="${removeButtonId}"]`)
              carregadors.remove()

                    console.log('carregador removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover a carregador', e.message)
                })

           }
        })


         /***********************************************************************************/



     // REMOVER DOCUMENTOS  //
        const foneList = document.querySelector('[data-js="container-fone"]')
        db.collection('fone').get()
        .then(snapshot => {
            const foneLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            foneList.innerHTML = foneLis
        })
        .catch(err => {
            console.log(err.message)
    })

        foneList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('fone').doc(removeButtonId).delete()
                .then(() =>{

                alert('fone removido com sucesso!')

                 const fones = document.querySelector(`[data-id="${removeButtonId}"]`)
              fones.remove()

                    console.log('fone removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover a fone', e.message)
                })

           }
        })


         /***********************************************************************************/


         // REMOVER DOCUMENTOS  //
        const ledList = document.querySelector('[data-js="container-led"]')
        db.collection('leds').get()
        .then(snapshot => {
            const ledLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            ledList.innerHTML = ledLis
        })
        .catch(err => {
            console.log(err.message)
    })

        ledList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('leds').doc(removeButtonId).delete()
                .then(() =>{

                alert('Leds removido com sucesso!')

                 const cabos = document.querySelector(`[data-id="${removeButtonId}"]`)
              cabos.remove()

                    console.log('Leds removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover a Leds', e.message)
                })

           }
        })


         /***********************************************************************************/


          // REMOVER DOCUMENTOS  //
        const caboList = document.querySelector('[data-js="container-cabo"]')
        db.collection('cabo').get()
        .then(snapshot => {
            const caboLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            caboList.innerHTML = caboLis
        })
        .catch(err => {
            console.log(err.message)
    })

        caboList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('cabo').doc(removeButtonId).delete()
                .then(() =>{

                alert('Cabo removido com sucesso!')

                 const cabos = document.querySelector(`[data-id="${removeButtonId}"]`)
              cabos.remove()

                    console.log('Cabo removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover a Cabo', e.message)
                })

           }
        })


         /***********************************************************************************/



         // REMOVER DOCUMENTOS  //
        const cartãoList = document.querySelector('[data-js="container-cartão"]')
        db.collection('cartão').get()
        .then(snapshot => {
            const cartãoLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            cartãoList.innerHTML = cartãoLis
        })
        .catch(err => {
            console.log(err.message)
    })

        cartãoList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('cartão').doc(removeButtonId).delete()
                .then(() =>{

                alert('cartão removido com sucesso!')

                 const cartãos = document.querySelector(`[data-id="${removeButtonId}"]`)
              cartãos.remove()

                    console.log('cartão removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover a cartão', e.message)
                })

           }
        })


         /***********************************************************************************/



         /***********************************************************************************/



         // REMOVER DOCUMENTOS  //
        const somCarroList = document.querySelector('[data-js="container-som-carro"]')
        db.collection('SomCarro').get()
        .then(snapshot => {
            const somCarroLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            somCarroList.innerHTML = somCarroLis
        })
        .catch(err => {
            console.log(err.message)
    })

        somCarroList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('SomCarro').doc(removeButtonId).delete()
                .then(() =>{

                alert('Som de carro removido com sucesso!')

                 const somcarro = document.querySelector(`[data-id="${removeButtonId}"]`)
              somcarro.remove()

                    console.log('Som de carro removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover a som de carro!', e.message)
                })

           }
        })


         /***********************************************************************************/


         // REMOVER DOCUMENTOS  //
        const mochilaList = document.querySelector('[data-js="container-mochila"]')
        db.collection('mochila').get()
        .then(snapshot => {
            const mochilaLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            mochilaList.innerHTML = mochilaLis
        })
        .catch(err => {
            console.log(err.message)
    })

        mochilaList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('mochila').doc(removeButtonId).delete()
                .then(() =>{

                alert('mochila removido com sucesso!')

                 const mochilas = document.querySelector(`[data-id="${removeButtonId}"]`)
              mochilas.remove()

                    console.log('mochila removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover mochila!', e.message)
                })

           }
        })


         /***********************************************************************************/


         // REMOVER DOCUMENTOS  //
        const facaList = document.querySelector('[data-js="container-faca"]')
        db.collection('faca').get()
        .then(snapshot => {
            const facaLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            facaList.innerHTML = facaLis
        })
        .catch(err => {
            console.log(err.message)
    })

        facaList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('faca').doc(removeButtonId).delete()
                .then(() =>{

                alert('faca removido com sucesso!')

                 const facas = document.querySelector(`[data-id="${removeButtonId}"]`)
              facas.remove()

                    console.log('faca removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover faca!', e.message)
                })

           }
        })


         /***********************************************************************************/



         // REMOVER DOCUMENTOS  //
        const capaList = document.querySelector('[data-js="container-capa"]')
        db.collection('capa').get()
        .then(snapshot => {
            const capaLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            capaList.innerHTML = capaLis
        })
        .catch(err => {
            console.log(err.message)
    })

        capaList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('capa').doc(removeButtonId).delete()
                .then(() =>{

                alert('capa removido com sucesso!')

                 const capas = document.querySelector(`[data-id="${removeButtonId}"]`)
              capas.remove()

                    console.log('capa removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover capa!', e.message)
                })

           }
        })


         /***********************************************************************************/


         // REMOVER DOCUMENTOS  //
        const calculadoraList = document.querySelector('[data-js="container-calculadora"]')
        db.collection('calculadora').get()
        .then(snapshot => {
            const calculadoraLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            calculadoraList.innerHTML = calculadoraLis
        })
        .catch(err => {
            console.log(err.message)
    })

        calculadoraList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('calculadora').doc(removeButtonId).delete()
                .then(() =>{

                alert('calculadora removido com sucesso!')

                 const calculadoras = document.querySelector(`[data-id="${removeButtonId}"]`)
              calculadoras.remove()

                    console.log('calculadora removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover calculadora!', e.message)
                })

           }
        })


         /***********************************************************************************/


          // REMOVER DOCUMENTOS  //
        const suporteList = document.querySelector('[data-js="container-suporte"]')
        db.collection('suporte').get()
        .then(snapshot => {
            const suporteLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            suporteList.innerHTML = suporteLis
        })
        .catch(err => {
            console.log(err.message)
    })

        suporteList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('suporte').doc(removeButtonId).delete()
                .then(() =>{

                alert('suporte removido com sucesso!')

                 const suportes = document.querySelector(`[data-id="${removeButtonId}"]`)
              suportes.remove()

                    console.log('suporte removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover suporte!', e.message)
                })

           }
        })


         /***********************************************************************************/



         // REMOVER DOCUMENTOS  //
        const tecladoList = document.querySelector('[data-js="container-teclado"]')
        db.collection('teclado').get()
        .then(snapshot => {
            const tecladoLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            tecladoList.innerHTML = tecladoLis
        })
        .catch(err => {
            console.log(err.message)
    })

        tecladoList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('teclado').doc(removeButtonId).delete()
                .then(() =>{

                alert('teclado removido com sucesso!')

                 const teclados = document.querySelector(`[data-id="${removeButtonId}"]`)
              teclados.remove()

                    console.log('teclado removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover teclado!', e.message)
                })

           }
        })


         /***********************************************************************************/





// REMOVER DOCUMENTOS  //
        const mouseList = document.querySelector('[data-js="container-mouse"]')
        db.collection('mouse').get()
        .then(snapshot => {
            const mouseLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao, arquivoURL} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card">
            <img  data-id="${doc.id}"  id="foto" src ="${arquivoURL}"</div>
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            mouseList.innerHTML = mouseLis
        })
        .catch(err => {
            console.log(err.message)
    })

        mouseList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('mouse').doc(removeButtonId).delete()
                .then(() =>{

                alert('mouse removido com sucesso!')

                 const mouses = document.querySelector(`[data-id="${removeButtonId}"]`)
              mouses.remove()

                    console.log('mouse removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover mouse!', e.message)
                })

           }
        })


         /***********************************************************************************/



         // REMOVER DOCUMENTOS  //
        const tituloList = document.querySelector('[data-js="container-titulo"]')
        db.collection('titulo10').get()
        .then(snapshot => {
            const tituloLis = snapshot.docs.reduce((acc, doc) => {

                const { descricao} = doc.data()
                acc +=` 

<div id="central-ID" class="central">
    <div id="container-pedidos-ID" class="container">
        <div id="card-ID" class="card-titulo">
            
             <li  id="descriçao" data-id="${doc.id}"  >${descricao}</li>
               <button id="descriçao-remover" data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
               </div>
               </div>
               </div>
                ` 
             return acc
            },'')

            tituloList.innerHTML = tituloLis
        })
        .catch(err => {
            console.log(err.message)
    })

        tituloList.addEventListener('click', e =>{
            const removeButtonId = e.target.dataset.remove

             if (removeButtonId){

                db.collection('titulo10').doc(removeButtonId).delete()
                .then(() =>{

                alert('titulo removido com sucesso!')

                 const titulos = document.querySelector(`[data-id="${removeButtonId}"]`)
              titulos.remove()

                    console.log('titulo removido com sucesso!')
                })
                .catch(e => {
                    console.log('Erro ao remover titulo!', e.message)
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


const formCliente7 = document.querySelector('#form-cliente7');
        formCliente7.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante7]').value;
            let arquivo = document.querySelector('[name=arquivo7]').files[0];

            const uploadTask7 = storage.ref('cartão/' + arquivo.name).put(arquivo);

            uploadTask7.on('state_changed', (snapshot) => {
                const progress7 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress7);
            },
                function (error) {

                },
                function () {
                    storage.ref('cartão/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('cartão').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/


const formCliente8 = document.querySelector('#form-cliente8');
        formCliente8.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante8]').value;
            let arquivo = document.querySelector('[name=arquivo8]').files[0];

            const uploadTask8 = storage.ref('SomCarro/' + arquivo.name).put(arquivo);

            uploadTask8.on('state_changed', (snapshot) => {
                const progress8 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress8);
            },
                function (error) {

                },
                function () {
                    storage.ref('SomCarro/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('SomCarro').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/


const formCliente9 = document.querySelector('#form-cliente9');
        formCliente9.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante9]').value;
            let arquivo = document.querySelector('[name=arquivo9]').files[0];

            const uploadTask9 = storage.ref('mochila/' + arquivo.name).put(arquivo);

            uploadTask9.on('state_changed', (snapshot) => {
                const progress9 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress9);
            },
                function (error) {

                },
                function () {
                    storage.ref('mochila/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('mochila').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/

const formCliente10 = document.querySelector('#form-cliente10');
        formCliente10.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante10]').value;
            let arquivo = document.querySelector('[name=arquivo10]').files[0];

            const uploadTask10 = storage.ref('faca/' + arquivo.name).put(arquivo);

            uploadTask10.on('state_changed', (snapshot) => {
                const progress10 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress10);
            },
                function (error) {

                },
                function () {
                    storage.ref('faca/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('faca').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/


const formCliente11 = document.querySelector('#form-cliente11');
        formCliente11.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante11]').value;
            let arquivo = document.querySelector('[name=arquivo11]').files[0];

            const uploadTask11 = storage.ref('capa/' + arquivo.name).put(arquivo);

            uploadTask11.on('state_changed', (snapshot) => {
                const progress11 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress11);
            },
                function (error) {

                },
                function () {
                    storage.ref('capa/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('capa').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/


const formCliente12 = document.querySelector('#form-cliente12');
        formCliente12.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante12]').value;
            let arquivo = document.querySelector('[name=arquivo12]').files[0];

            const uploadTask12 = storage.ref('calculadora/' + arquivo.name).put(arquivo);

            uploadTask12.on('state_changed', (snapshot) => {
                const progress12 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress12);
            },
                function (error) {

                },
                function () {
                    storage.ref('calculadora/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('calculadora').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/


const formCliente13 = document.querySelector('#form-cliente13');
        formCliente13.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante13]').value;
            let arquivo = document.querySelector('[name=arquivo13]').files[0];

            const uploadTask13 = storage.ref('suporte/' + arquivo.name).put(arquivo);

            uploadTask13.on('state_changed', (snapshot) => {
                const progress13 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress13);
            },
                function (error) {

                },
                function () {
                    storage.ref('suporte/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('suporte').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/


const formCliente14 = document.querySelector('#form-cliente14');
        formCliente14.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante14]').value;
            let arquivo = document.querySelector('[name=arquivo14]').files[0];

            const uploadTask14 = storage.ref('teclado/' + arquivo.name).put(arquivo);

            uploadTask14.on('state_changed', (snapshot) => {
                const progress14 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress14);
            },
                function (error) {

                },
                function () {
                    storage.ref('teclado/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('teclado').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/


const formCliente15 = document.querySelector('#form-cliente15');
        formCliente15.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante15]').value;
            let arquivo = document.querySelector('[name=arquivo15]').files[0];

            const uploadTask15 = storage.ref('mouse/' + arquivo.name).put(arquivo);

            uploadTask15.on('state_changed', (snapshot) => {
                const progress15 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress15);
            },
                function (error) {

                },
                function () {
                    storage.ref('mouse/' + arquivo.name).getDownloadURL().then((url) => {
                        db.collection('mouse').add({
                            descricao: comprovanteText,
                            arquivoURL: url
                        })
                        alert("Cadastro Enviado com sucesso!");
                    })
                }
            )
        })

/***************************************************************************************************/



 const formTitulo11 = document.querySelector('#form-Titulo11');
        formTitulo11.addEventListener('submit', (e) => {
            e.preventDefault();
            let comprovanteText = document.querySelector('[name=comprovante11]').value;
           

            const uploadTask11 = storage.ref('titulo10/' + name).put(name);

            uploadTask11.on('state_changed', (snapshot) => {
                const progress11 = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                console.log(progress3);
            },
                function (error) {

                },
                function () {
                    storage.ref('titulo10/' + name).getDownloadURL().then((url) => {
                        db.collection('titulo10').add({
                            descricao: comprovanteText,
                           
                        })
                        alert("Titulo Cadastrado!");
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

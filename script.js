var enviar = document.querySelector('input[type=submit]')
var lista_produto = document.querySelector('section.lista-produto')
var total = document.querySelector('section.total h1')
var reset = document.querySelector('.total button')
var produtos = []



enviar.addEventListener('click',()=>{
    var name_produto = document.querySelector('input[name=name_produto]').value
    var preco_produto = document.querySelector('input[name=preco_produto]').value
    
    if(name_produto == '' || preco_produto == ''){
        alert("preencha todos os campos!")
    }else{
        preco_produto = parseFloat(preco_produto.replace(',','.'))
        if (preco_produto == NaN){
            alert("Dados inválidos")
        }
        produtos.push({
            nome : name_produto,
            preco: preco_produto
        })
        var total_produto =  ()=>{
            x = 0.0
            for(item of produtos){
                x += item.preco 
            }
            return x
        }
        
       lista_produto.innerHTML += `
            <div class="lista-produto-single">
                <h3>`+ name_produto +`</h3>
                <span>R$ `+ preco_produto +`</span>
            </div>
        `
        total.innerHTML = 'Total: R$ '+ total_produto()
        document.querySelector('input[name=preco_produto]').value = ''
        document.querySelector('input[name=name_produto]').value = ''
    }

    console.log(produtos)
})

reset.addEventListener('click',()=>{
    produtos = []
    lista_produto.innerHTML = ''
    total.innerHTML = 'Total: R$ 0,00'
})
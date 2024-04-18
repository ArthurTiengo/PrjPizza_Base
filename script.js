let modalQtd;
pizzaJson.map((item,index)=>{
//clonado o pizza-item
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
//append = cria um elemento dentro do local especificado sempre na ultima posição,ou seja,não substitui os elementos que ja estavam dentro
    document.querySelector('.pizza-area').append(pizzaItem);
    pizzaItem.setAttribute('data-key',index)

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click',(event)=>{
        event.preventDefault(); 

        modalQtd = 1

        let key = event.target.closest('.pizza-item').getAttribute('data-key');

        document.querySelector('.pizzaBig img').src = pizzaJson[key].img;

        document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
        document.querySelector('.pizzaWindowArea').style.display = 'flex';

        document.querySelectorAll('.pizzaInfo--size').forEach((size,sizeIndex)=>{
            if(sizeIndex ==2){
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        document.querySelector('.pizzaInfo--qt').innerHTML = modalQtd

        document.querySelector('.pizzaWindowArea').style.display = 'flex'

        document.querySelector('.pizzaWindowArea').style.opacity = 0;

        document.querySelector('.pizzaWindowArea').style.display = 'flex'

        setTimeout(()=>{
            document.querySelector('.pizzaWindowArea').style.opacity = 1;
        }, 250)
    })
})
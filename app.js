const images = 56

    function template(index) {
        return `
        <div class="con-star">
            <i class='bx bx-star'></i>
        </div>
        <div class="con-image">
            <img class="img" src="photo.jpg" alt="">

        </div>

        <div class="con-text">
            <h3>
                Training shoes
            </h3>
            <p>
                Get this item before it goes out of stock!!
            </p>
        </div>

        <div class="con-price">
            Rs. 1200
        </div>

        <div class="con-btn">
            <Button onclick="handleAdd(event)" class="add">
                Add to cart
            </Button>

            <div class="con-input-btns">
                <Button onclick="plusLess(event, 'less')" class="less">
                    -
                </Button>
                <input value="1" type="text">
                <Button onclick="plusLess(event, 'plus')" class="plus">
                    +
                </Button>
            </div>
        </div>
        `
    }

    for (let index = 1; index < 6; index++) {
        const element = document.createElement('div');
        element.classList.add('card')
        element.innerHTML = template(index)
        document.querySelector('.con-cards-1').appendChild(element)
    }

    
        
    function handleAdd(event) {
        const card = event.target.closest('.card')
        card.classList.add('add-active')
        console.log(card)
    }

    function plusLess(event, type) {
        const card = event.target.closest('.card')
        const input = card.querySelector('input')
        let oldVal = Number(input.value)
        if (type == 'less') {
            if (oldVal == 1) {
                card.classList.remove('add-active')
                return
            }
            input.value = oldVal -= 1
        } else {
            input.value = oldVal += 1
        }
    }
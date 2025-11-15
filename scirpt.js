const Products = {
    crazy: {
        id: 1,
        name: "Crazy",
        price: 31000,
        amount: 0,
        img: "./images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        id: 2,
        name: "Light",
        price: 26000,
        amount: 0,
        img: "./images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        id: 3,
        name: "CheeseBurger",
        price: 29000,
        amount: 0,
        img: "./images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    dburger: {
        id: 4,
        name: "dBurger",
        price: 29000,
        amount: 0,
        img: "./images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop'),
    shop = document.querySelector('.shop'),
    basket = document.querySelector('.basket'),
    basketClose = document.querySelector('.basket__close'),
    shopItem = document.querySelector('.shop__item ');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = btn.closest('.card'),
            parentId = parent.getAttribute('id')
        Products[parentId].amount++
        basketInfo()
    })
})
function basketInfo() {
    const productsArr = []
    for (const key in Products) {
        const pk = Products[key]
        const span = document.querySelector(`#${key} .card__item`)
        if (pk.amount) {
            productsArr.push(pk)
            span.classList.add('active')
            span.innerHTML = pk.amount
        }
    }
    shopItem.classList.add('active')
    let allAmount = 0
    for (let i = 0; i < productsArr.length; i++) {
        allAmount += productsArr[i].amount
    }
    shopItem.innerHTML = allAmount
    shopItem.innerHTML >= 10 
    ? shopItem.style = `width:25px;height:25px` 
    : shopItem.style = `width:20px;height:20px`;
}

shop.onclick = () => {
    basket.classList.add('active')
}

basketClose.onclick = () => {
    basket.classList.remove('active')
}



let level = 0;
let speed = 80; 
let levelText = document.getElementById("level-text");

function updateLevel() {
    if (level > 100) return;

    levelText.textContent = level + " LVL";

    
    if (level < 20) {
        levelText.style.color = "#ffffff";  
        speed = 80;
    } else if (level < 40) {
        levelText.style.color = "#00e1ff"; 
        speed = 60;
    } else if (level < 60) {
        levelText.style.color = "#00ff73"; 
        speed = 45;
    } else if (level < 80) {
        levelText.style.color = "#ffee00"; 
        speed = 30;
    } else if (level < 100) {
        levelText.style.color = "#ff4d4d";  
        speed = 20;
    } else {
       
        levelText.style.color = "#000000";  
    }

    level++;
    setTimeout(updateLevel, speed);
}


window.onload = updateLevel;






 
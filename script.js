const mainImg = document.getElementById('main-img');
const productThumbnails = document.querySelectorAll('.product-thumbnails');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const itemQuantity = document.getElementById('item-quantity');
const cartAmount = document.getElementById('cart-amount');
const AddToCart = document.getElementById('add-to-cart-btn');
const cartContainer = document.getElementById('cart-container');
const cart = document.getElementById('cart-logo');
const innerCart = document.querySelector('.inner-cart-container');
const lightBox = document.getElementById('lightbox');
const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnails');
const mainLightImg = document.getElementById('main-lightbox-img');
const preBtn = document.getElementById('pre-btn');
const nextBtn = document.getElementById('next-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeSidebar = document.getElementById('sidebar-close');
const sidebar = document.getElementById('sidebar');
const sideOverlay = document.getElementById('sidebar-overlay');
const mbNextBtn = document.getElementById('mb-pre-btn');
const mbPreBtn = document.getElementById('mb-next-btn');

productThumbnails.forEach((thumbnails) => {
  thumbnails.addEventListener('click', () => {
    const thbId = thumbnails.dataset.value;
    productThumbnails.forEach((thb) => thb.classList.remove('active'))
    thumbnails.classList.add('active');
    mainImg.src = `images/image-product-${thbId}.jpg`;
  })
});

lightboxThumbnails.forEach((thumbnails) => {
  thumbnails.addEventListener('click', () => {
    const thbId = thumbnails.dataset.value;
    lightboxThumbnails.forEach((tbn) => {tbn.classList.remove('light-active')});
    thumbnails.classList.add('light-active');
    mainLightImg.src = `images/image-product-${thbId}.jpg`;
  })
})

closeBtn.addEventListener('click', () => {
  lightBox.classList.remove('show-lightbox');
})

mainImg.addEventListener('click', () => {
  lightBox.classList.add('show-lightbox');
})

let imgNum = 1;

mbPreBtn.addEventListener('click', () => {
  previousFun();
  mainImg.src = `images/image-product-${imgNum}.jpg`;
})

mbNextBtn.addEventListener('click', () => {
  increaseFun();
  mainImg.src = `images/image-product-${imgNum}.jpg`;
})

preBtn.addEventListener('click', () => {
  previousFun();
  mainLightImg.src = `images/image-product-${imgNum}.jpg`;
});

nextBtn.addEventListener('click', () => {
  increaseFun();
  mainLightImg.src = `images/image-product-${imgNum}.jpg`;
})

function previousFun() {
  if (imgNum === 1) {
    imgNum = 4;
  } else {
    imgNum--;
  }
}

function increaseFun() {
  if (imgNum === 4) {
    imgNum = 1;
  } else {
    imgNum++;
  }
}

let amount = 0;

plusBtn.addEventListener('click', () => {
  increase();
})

minusBtn.addEventListener('click', () => {
  decrease();
})

function increase() {
  if (amount === 10) {
    amount = 10;
  } else {
    amount++;
    itemQuantity.textContent = amount;
  }
}

function decrease() {
  if (amount === 0) {
    itemQuantity.textContent = amount;
  } else {
    amount--;
    itemQuantity.textContent = amount;
  }
}

function updateCartAmount() {
  if (amount === 0) {
    cartAmount.style.display = "none";
  } else {
    cartAmount.style.display = "block";
    cartAmount.innerHTML = itemQuantity.textContent;
  }
}

AddToCart.addEventListener('click', () => {
  updateCartAmount()
  fillCartContainer();
});

cart.addEventListener('click', () => {
  cartContainer.classList.toggle('show-cart');
});

innerCart.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-icon')) {
    amount = 0;
    itemQuantity.textContent = 0;
    fillCartContainer();
    updateCartAmount();
  }
})

function fillCartContainer() {
  if (amount > 0) {
    innerCart.innerHTML = `
      <div class="selected-item-container">
        <img
          class="selected-img"
          src="images/image-product-1-thumbnail.jpg"
        />
        <div class="selected-item-info">
          <p class="name">Fall Limited Edition Sneakers</p>
          <div class="selected-item-price-container">
            <p class="item-price">$125.00</p>
            <p class="item-amount">x ${amount}</p>
            <p class="item-total">$${125 * amount}.00</p>
          </div>
        </div>
        <img id="delete-icon" class="delete-icon" src="images/icon-delete.svg" />
      </div>
      <button class="checkout-btn">Checkout</button>
    `;
  } else {
    innerCart.innerHTML = `
      <p class="empty-cart">Your cart is empty</p>
    `
  }
}

mobileMenu.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
  sideOverlay.classList.add('show-overlay');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
  sideOverlay.classList.remove('show-overlay');
});

sideOverlay.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
  sideOverlay.classList.remove('show-overlay');
})
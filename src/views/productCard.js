const productCard = document.querySelector('#product-card');
const cartItems = productCard.querySelectorAll('.card');
cartItems.forEach(item => {
  const removeBtn = item.querySelector('.btn-danger');
  const quantityInput = item.querySelector('#quantity');
  const price = item.querySelector('.card-text').textContent.slice(1);
  const total = item.querySelector('.col-md-2:last-child p');

  removeBtn.addEventListener('click', () => {
    item.remove();
    calculateTotal();
  });

  quantityInput.addEventListener('change', () => {
    const quantity = quantityInput.value;
    const subtotal = (price * quantity).toFixed(2);
    total.textContent = `$${subtotal}`;
    calculateTotal();
  });
});
function calculateTotal() {
  const cartTotal = productCard.querySelector('.card:last-child h5');
  const cartSubtotal = productCard.querySelectorAll('.col-md-2:last-child p');
  let subtotal = 0;

  cartSubtotal.forEach(item => {
    subtotal += Number(item.textContent.slice(1));
  });

  const tax = (subtotal * 0.1).toFixed(2);
  const shipping = 5;
  const total = (subtotal + Number(tax) + shipping).toFixed(2);

  cartSubtotal[0].textContent = `$${subtotal.toFixed(2)}`;
  cartSubtotal[1].textContent = `$${tax}`;
  cartSubtotal[2].textContent = `$${shipping}`;
  cartTotal.textContent = `Total: $${total}`;
}
const checkoutBtn = productCard.querySelector('.btn-success');
checkoutBtn.addEventListener('click', () => {
  alert('Thank you for your purchase!');
});

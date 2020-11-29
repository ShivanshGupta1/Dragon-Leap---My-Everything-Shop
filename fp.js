const cart =document.querySelector('.products');
const itemadded =document.getElementById('itemadded');
console.log(cart)
cart.addEventListener('click',buycourse);

function buycourse(e) {
    if (e.target.classList=='addcard')
    let items = e.target.parentElement.parentElement;
    readitems(items)
}
function readitems(items) {
    const itemlist = {
        image:items.querySelector('img').src, 
        title:items.querySelector('.card-title').textContent,
    }
    insertcart(itemlist)
}
function insertcart(itemlist) {
    const row = document.createElement('tr')
    row.innerHTML=`
    <td>
    <img src="${itemlist.image}" width="100">
</td>
<td>${itemlist.title}</td>
    `
  itemadded.appendChild(row);
}
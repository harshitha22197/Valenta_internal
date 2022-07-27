function togg(e) {
    let id = e.getAttribute('id');
    fun(id);
}

function fun(id){
    const elem = document.getElementsByClassName(id);
    const v_elem = document.getElementsByClassName('cart-menu--shown')
    
    for (let v_el of v_elem){
        v_el.classList.remove("cart-menu--shown");
        v_el.classList.add("cart-menu--hidden");
    }
    for (let el of elem) {
    el.classList.add("cart-menu--shown");
  }
}

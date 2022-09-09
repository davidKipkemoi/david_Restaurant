export default{
  LoadCart(state){
    let cart = localStorage.getItem("blitzCart");
    if (cart){
      state.cart = JSON.parse(cart);
    }
  },
  AddToCart(state,product){
    let itemfound = state.cart.find((p)=>p.product.id==product.id);
    if (!itemfound){
      state.cart.push({
        product,quantity:1
      })
    }
    if(itemfound){
      itemfound.quantity +=1
    }
    localStorage.setItem('blitzCart',JSON.stringify(state.cart) );
    this.$swal({
      toast: true,
      text: "Cart Updated.",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },
  DecreaseItemCount(state,index){
    let item = state.cart[index];
    if(!item) return;
    if (item.quantity==1){
      state.cart.splice(index,1)
    }else {
      item.quantity -=1
    }
    this.$swal({
      toast:true,
      text:'Updating Cart',
      icon:'success',
      timer:40000,
      timerProgressBar: true,
      ShowConfirmButton: false,
      position:'top',
    });
    localStorage.setItem('blitzCart', JSON.stringify(state.cart));
  },
  RemoveCartItem(state,index){
    state.cart.splice(index,1);
    this.$swal({
      toast:true,
      text:'Removing Item',
      icon:'success',
      timer:40000,
      timerProgressBar: true,
      ShowConfirmButton: false,
      position:'top',
    });
    localStorage.setItem('blitzCart',JSON.stringify(state.cart));
  },
  IncreaseItemCount(state,index){
    let item= state.cart[index];
    item.quantity +=1;
    this.$swal({
      toast:true,
      text:'Updating Cart',
      icon:'success',
      timer:40000,
      timerProgressBar: true,
      ShowConfirmButton: false,
      position:'top',
    });
    localStorage.setItem('blitzCart', JSON.stringify(state.cart));
  },
  ClearCart(state){
    state.cart=[],
    localStorage.removeItem('blitzCart')
  }
}

export default function ({store},inject){
  store.commit('cart/LoadCart');
  inject ('formartMoney',(money)=>{
    return new Intl.NumberFormat('en-US',{
      style:'currency',
      currency:'ksh'
    }).format(money);
  });

}

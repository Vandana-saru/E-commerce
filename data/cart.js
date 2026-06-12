export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart)
{
cart=[
    {
        productid:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:1
    },
    {
        productid:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:2
    }
];}
function saveinstorage()
{
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addtocart(productid1)
{
      let productexist;
    cart.forEach((item)=>{
      if(productid1===item.productid)
      {
        productexist=item;
      }
    })
    if(productexist)
    {
      productexist.quantity+=1;
    }
    else
    {
    cart.push({
      productid:productid1,
      quantity:1
    })}
    saveinstorage();
}
export function removefromcart(productid)
{const newcart=[];
    cart.forEach((item)=>
    {
        if(item.productid!==productid)
        {
newcart.push(item);
    }    })
    cart=newcart;
    saveinstorage();
}
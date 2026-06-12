export const cart=[];
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
}
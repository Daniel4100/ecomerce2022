import ProductPurchase from './ProductPurchase'

const PurchasesCard = ({ purchase }) => {

  console.log(purchase)

  return (
    
    
    <article className="w-full max-w-[700px] mx-auto border border-orange-200  mb-10 shadow-lg rounded-xl hover:scale-[1.01] duration-100" >
      <div>
        <div>
          <h3 className="border-b-4 ml-2 mr-2 py-1">{purchase.createdAt}</h3>
        </div>
        <ul className="flex-auto mx-5 my-5">
          {purchase.cart.products.map((product) => (
            <ProductPurchase key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </article>
    
  )
}

export default PurchasesCard

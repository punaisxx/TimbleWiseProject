import Container from "../components/Container";
import Breadcrumbs from "../components/Breadcrumbs"
import ProductList from "./components/ProductList"
import SummaryCart from "./components/SummaryCart"
import Image from "next/image";
import imgTableExample from "../assets/images/table-example.webp"
import { useState } from "react";
import { useRouter } from 'next/navigation'

const CartPage = () => {

  const router = useRouter()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: imgTableExample,
      name: "Asgaard sofa",
      price: 25000,
      qty: 1,
    },
    {
      id: 2,
      image: imgTableExample,
      name: "Asgaard sofa 2",
      price: 25000,
      qty: 1,
    },
    {
      id: 3,
      image: imgTableExample,
      name: "Asgaard sofa 3",
      price: 25000,
      qty: 1,
    }
  ])

  const handleItems = () => {
    // TODO: update items list

  }

  const handlePayment = () => {
    // TODO: payment
    router.push('/cart/payment')
  }
  
  return (
    <>
      <Breadcrumbs />
      <Container>
        <div className="py-4">
          <div className="w-full flex flex-col lg:flex-row border border-[#103E13] gap-10 rounded-xl p-6 pb-16">

            <div className="w-full lg:w-2/3">
              <ProductList 
                items={cartItems}
                handleItems={handleItems}
              /> 
            </div>

            <div className="w-full lg:w-1/3">
              <SummaryCart 
                items={cartItems}
                handlePayment={handlePayment}
              />
            </div>

          </div>
        </div>
      </Container>
    </>
  )
}

export default CartPage;
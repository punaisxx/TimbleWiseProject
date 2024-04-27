import { Icon } from "@iconify/react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Container from "../../components/Container";

const CartComplete = () => {

  return (
    <>
      <Breadcrumbs />
      <Container>
        <div className="w-full flex flex-col items-center bg-[#CCF6CE] rounded-xl p-10 my-10">
          <div className="text-4xl font-bold">
            Completely
          </div> 

          <Icon icon="lets-icons:check-ring-light" width="16rem" height="16rem" />
          <div className="text-2xl font-semibold">
            Thank you for your order
          </div>

          <div className="w-full border-b border-black pt-10 mb-10"></div>

          <div className="w-full flex flex-col items-start gap-2">
            <div className="flex flex-row gap-1 items-center">
              <Icon icon="mdi:location" width="1.5rem" height="1.5rem" />
              <div className="font-semibold">Address</div>
            </div>
            <div className="px-6">
              17/4 Village No.5 Bamroongrat Road, Pibulsongkram Sub-district, Muang District, Bangkok, 10400
              <br />
              To : Pimlapas Chandit  Phone : 012-4568-888
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default CartComplete;
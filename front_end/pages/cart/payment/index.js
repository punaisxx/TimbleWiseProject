import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs"
import PaymentForm from "../components/PaymentForm"
import Container from "@/pages/components/Container";

const CartPayment = () => {
  return (
    <>
      <Breadcrumbs />
      <Container>
        <PaymentForm />
      </Container>
    </>
  )
}

export default CartPayment;
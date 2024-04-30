import { Icon } from "@iconify/react";
import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/Container";

const CartComplete = ({
  username,
  userData
}) => {
  console.log(userData.find(user=>user.username===username));
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
              {userData.find(user=>user.username===username).address}
              <br />
              To : {userData.find(user=>user.username===username).first_name} {userData.find(user=>user.username===username).last_name}  Phone : {userData.find(user=>user.username===username).phone_number}
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default CartComplete;



export async function getServerSideProps({req}) {
  try {
    const token = req.cookies.token; // Retrieve token from request cookies
    var response = await fetch('http://localhost:3001/api/loginByToken', {
      headers: {
        'authorization': token // Pass token in the Authorization header
      }
    });
      
      const username = (await response.json()).username;
      
    response = await fetch('http://localhost:3001/api/getUserData', {
      headers: {
        'authorization': token // Pass token in the Authorization header
      }
    });
      
      const userData=await response.json();
      return {
        props: {
          username,
          userData
        },
      };
  } catch (error) {
      console.error('Error:', error);
      return {
          props: {
              error: 'Error fetching product data',
          },
      };
  }
}
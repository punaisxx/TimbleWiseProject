import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

const ProductList = ({ items, handleItems }) => {

  const [quantity, setQuantity] = useState(items.map(item => item.qty));

  const handleChangeQuantity = (index, value) => {
    const newQuantity = [...quantity];
    newQuantity[index] = parseInt(value);
    setQuantity(newQuantity);

    const updatedItems = items.map((item, i) => ({
      ...item,
      qty: i === index ? parseInt(value) : item.qty
    }));
    handleItems(updatedItems);
  };

  const toCurrency = (value) => {
    return parseFloat(value).toLocaleString('th-TH', {minimumFractionDigits: 0})
  };

  return (
    <div className="w-full flex flex-col">
      <table className="hidden lg:block w-full">
        <thead className="bg-[#CCF6CE] rounded">
          <tr>
            <th scope="col" className="w-1/6 px-6 py-3 text-center text-xs font-medium text-[#103E13] uppercase tracking-wider">
              No
            </th>
            <th scope="col" className="w-2/6 px-6 py-3 text-center text-xs font-medium text-[#103E13] uppercase tracking-wider">
              Product
            </th>
            <th scope="col" className="w-1/6 px-6 py-3 text-end text-xs font-medium text-[#103E13] uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="w-1/6 px-6 py-3 text-end text-xs font-medium text-[#103E13] uppercase tracking-wider">
              Quantity
            </th>
            <th scope="col" className="w-1/6 px-6 py-3 text-end text-xs font-medium text-[#103E13] uppercase tracking-wider">
              Total
            </th>
            <th scope="col" className="w-1/6 px-6 py-3 text-end text-xs font-medium text-[#103E13] uppercase tracking-wider">
              {/* NONE */}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {items.map((item, index) => (
            <tr 
              key={index}
              className="transition-all duration-100 hover:bg-[#CCF6CE50]"
            >
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="w-full flex flex-row items-center gap-3">
                  <div
                    className="relative w-2/5"
                  >
                    <Image 
                      src={item.image}
                      alt=''
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="w-3/5 text-start">
                    {item.name}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end">
                {toCurrency(item.price)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end">
                <input
                  type="number"
                  value={quantity[index]}
                  onChange={(e) => handleChangeQuantity(index, e.target.value)}
                  className="w-12 text-center border border-gray-300 rounded"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end">
                {item.price * item.qty}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div
                  className=""
                >
                  <Icon icon="mdi:bin" width="2rem" height="2rem" style={{color: '#FF0000'}} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex lg:hidden flex-col gap-1">
        <div className="font-semibold">list</div>
        {items.map((item, index) => (
          <div className="w-full flex flex-col border rounded-md gap-2 p-3">

            <div className="w-full flex flex-row items-center gap-6">
              <div
                className="relative w-1/5"
              >
                <Image 
                  src={item.image}
                  alt=''
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="w-4/5 text-start">
                {item.name}
              </div>
            </div>

            <div className="w-full flex flex-row justify-start gap-2">
              // <div>Price</div>
              <div>{toCurrency(item.price)}</div>
              <div>Baht</div>
            </div>


            <div className="w-full flex flex-row justify-between items-center gap-6">
              <div className="w-full flex flex-row gap-2">
                <div>Quantity</div>
                <input
                  type="number"
                  value={quantity[index]}
                  onChange={(e) => handleChangeQuantity(index, e.target.value)}
                  className="w-12 text-center border border-gray-300 rounded"
                />
              </div>

              <div className="w-full flex flex-row justify-end gap-2 font-bold">
                <div>Total</div>
                <div>{toCurrency(item.price * item.qty)}</div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductList;
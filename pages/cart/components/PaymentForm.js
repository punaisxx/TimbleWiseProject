import React, { useState } from 'react';
import imgKBank from "../../assets/images/kbank.webp"
import Image from 'next/image';
import { useRouter } from 'next/router';

const PaymentForm = () => {

  const router = useRouter()
  
  const [formData, setFormData] = useState({
    paymentMethod: 'cod',
    bank_digits: '',
    transfer_date: '',
    transfer_time: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    province: '',
    address: '',
    remark: '',
  });
  const [showTransfer, setShowTransfer] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    
    
    router.push('/cart/payment/complete')
  };

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      paymentMethod: value,
    });
    setShowTransfer(value === 'transfer');
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className='text-xl py-4 font-bold'>
        Payment Methods
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-start gap-3'>
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={formData.paymentMethod === 'cod'}
            onChange={handlePaymentMethodChange}
            className='translate-y-1.5'
          />
          <label for="cod">
            <div className='font-semibold'>
              COD (Cash on delivery)
            </div>
          </label>
        </div>
        <div className='flex flex-row items-start gap-3'>
          <input
            type="radio"
            id="transfer"
            name="paymentMethod"
            value="transfer"
            checked={formData.paymentMethod === 'transfer'}
            onChange={handlePaymentMethodChange}
            className='translate-y-1.5'
          />
          <label for="transfer">
            <div className='flex flex-col'>

              <div className='font-semibold'>
                Please transfer payment to our bank accounts as detail below
              </div>

              <div className='flex flex-row items-center gap-4 py-6'>
                <div
                  className="relative w-24 rounded-full overflow-hidden"
                >
                  <Image
                    src={imgKBank}
                    alt=''
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className='flex flex-col items-start font-semibold'>
                  <div>011-1-11111-1</div>
                  <div>TIMBER COMPANY</div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      {showTransfer && (
        <div className='flex flex-col'>
          <div className='font-semibold'>
            ** "Please enter the last four digits of your bank account and the date and time of the transfer".
          </div>

          <div className='flex flex-row gap-4 py-2 px-10'>
            <input 
              type="text" 
              name="bank_digits" 
              value={formData.bank_digits}
              placeholder='Last four digits xxxx' 
              onChange={handleInputChange}
              maxLength={4}
              className='w-48 border border-black text-center py-1'
            />
            <input 
              type="date" 
              name="transfer_date" 
              value={formData.transfer_date}
              placeholder='Transfer Date' 
              onChange={handleInputChange}
              className='w-48 border border-black text-center py-1'
            />
            <input 
              type="time" 
              name="transfertime" 
              value={formData.transfer_time}
              placeholder='Transfer Time' 
              onChange={handleInputChange}
              className='w-48 border border-black text-center py-1'
            />
          </div>

        </div>
      )}

      <div className='text-xl py-4 font-bold'>
        Shipping Address
      </div>

      <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>

        <div className='w-full lg:w-1/2 gap-4'>

          <div className='w-full flex flex-col lg:flex-row gap-4'>

            <div className='w-full lg:w-1/2 flex flex-col gap-2 pb-4'>
              <div>Firstname</div>
              <input 
                type="text" 
                name="firstname" 
                value={formData.firstname} 
                onChange={handleInputChange} 
                className='border border-slate-200 rounded-md p-2 text-lg'
              />
            </div>

            <div className='w-full lg:w-1/2 flex flex-col gap-2'>
              <div>Lastname</div>
              <input 
                type="text" 
                name="lastname" 
                value={formData.lastname} 
                onChange={handleInputChange} 
                className='border border-slate-200 rounded-md p-2 text-lg'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 pb-4'>
            <div>Email</div>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange}
              className='border border-slate-200 rounded-md p-2 text-lg'
            />
          </div>

          <div className='flex flex-col gap-2 pb-4'>
            <div>Phone</div>
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
              className='border border-slate-200 rounded-md p-2 text-lg'
            />
          </div>

          <div className='flex flex-col gap-2 pb-4'>
            <div>Province</div>
            <select 
              name="province" 
              value={formData.province} 
              onChange={handleInputChange}
              className='border border-slate-200 rounded-md p-2 text-lg'
            >
              <option value="">Select Province</option>
              <option value="province1">Province 1</option>
              <option value="province2">Province 2</option>
              <option value="province3">Province 3</option>
            </select>
          </div>
          
        </div>

        <div className='w-full lg:w-1/2 gap-4'>

          <div className='flex flex-col gap-2 pb-4'>
            <div>Address details</div>
            <textarea 
              name="address" 
              value={formData.address} 
              onChange={handleInputChange} 
              className='border border-slate-200 rounded-md p-2 text-lg'
            />
          </div>

          <div className='flex flex-col gap-2 pb-4'>
            <div>Remark</div>
            <textarea 
              name="remark" 
              value={formData.remark} 
              onChange={handleInputChange} 
              className='border border-slate-200 rounded-md p-2 text-lg'
            />
          </div>

          <div className='w-full flex flex-row justify-center gap-2 py-10'>
            <button 
              type="submit"
              className="px-4 py-2 bg-[#4CAF4F] text-white font-semibold text-xl rounded"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;

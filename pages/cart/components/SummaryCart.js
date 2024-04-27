
const SummaryCart = ({handlePayment}) => {

  const toCurrency = (value) => {
    return parseFloat(value).toLocaleString('th-TH', {minimumFractionDigits: 0})
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#CCF6CE] gap-10 py-6 rounded">

      <div className="text-3xl font-bold">Cart Totals</div>

      <div className="w-2/3 mx-auto flex flex-col gap-3">
        <div className="flex justify-between w-full mt-4">
          <div className="text-lg font-semibold">Subtotal</div>
          <div className="text-lg">{toCurrency(25000)}</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-lg font-semibold">Shipping cost</div>
          <div className="text-lg">{toCurrency(3000)}</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-lg font-semibold">Total</div>
          <div className="text-lg font-semibold">{toCurrency(28000)}</div>
        </div>
      </div>

      <div className="mt-4">
        <button 
          onClick={handlePayment}
          className="px-4 py-2 bg-[#4CAF4F] text-white font-semibold text-xl rounded"
        >
            Payment
          </button>
      </div>
    </div>
  );
};

export default SummaryCart;
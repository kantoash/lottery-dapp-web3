import React from "react";
import { Lottery } from "../typings";
import Countdown from "./Countdown";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import GenerateLuckyNumber from "./modal/GenerateLuckyNumber";
import { buyTicket } from "../services/blockchain";
import { toast } from "react-hot-toast";
import { FaEthereum } from 'react-icons/fa'

interface DrawtimeProps {
  id?: string;
  lottery: Lottery;
  luckyNumbers?: string[];
  purchasedNumbers?: string[];
}
// problem
const Drawtime: React.FC<DrawtimeProps> = ({
  id,
  lottery,
  luckyNumbers,
  purchasedNumbers
}) => {
  const { wallet } = useSelector((state: RootState) => state.counter);
  
  const ticketPurchase = async (luckyNumberId: number, ticketPrice: string) => {
    if (!id) {
      return;
    }

    if (luckyNumbers?.length) {
      return toast('Already Generated')
    }
    
    await buyTicket(id, luckyNumberId, ticketPrice)
      .then(() => {
        toast("ticket bought");
      })
      .catch(() => {
        toast(`ticket bought error`);
      });
  };

  return (
    <div className="py-10 px-5 bg-slate-100">
      <div className="flex flex-col items-center justify-center text-center py-10 space-y-3">
        <h4 className="text-4xl text-slate-700 text-center font-bold pb-3">
          Buy Lottery Tickets Online
        </h4>
        <div className="text-xl text-slate-700 text-center flex items-center space-x-2">   <FaEthereum />
        <h3>Prize {lottery?.prize} Eth</h3>
        </div>
        <p className="text-lg text-gray-600 font-semibold capitalize">
          {lottery?.title}
        </p>
        <p className="text-sm text-gray-500 w-full sm:w-2/3">
          {lottery?.description}
        </p>
        <p className="text-md font-medium text-black w-full sm:w-2/3">
          {lottery?.participants} participants
        </p>
        <p className="text-md font-medium text-black w-full sm:w-2/3">
         owner: {lottery?.owner} 
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 mb-6">
        {/* countdown */}
        {lottery?.expiresAt && (
          <Countdown timestamp={lottery.expiresAt} />
        )}

        {/* lottery btn */}
        <div className="flex justify-center items-center space-x-2">
          {wallet?.toLowerCase() == lottery?.owner.toLocaleLowerCase() &&
            Date.now() < lottery?.expiresAt && <GenerateLuckyNumber />}
          <a
            href={`/results/${lottery.id}/${lottery.title}`}
            className="flex flex-nowrap border py-2 px-4 rounded-full bg-[#0c2856] hover:bg-[#1a396c] cursor-pointe font-semibold text-white"
          >
            Draw Result
          </a>
        </div>
      </div>
      <div className="mt-10 bg-white text-sm overflow-x-auto flex flex-col w-full sm:w-3/4 mx-auto p-5 rounded-md">
        <div className="pb-4 text-center">
          <p className="semibold text-2xl">
            Select Your winning Lottery Numbers
          </p>
        </div>

        <table className="table-auto">
          <thead className="max-h-80 overflow-y-auto block">
            <tr className="flex justify-between text-left">
              <th className="px-4 py-2 ">#</th>
              <th className="px-4 py-2 ">Ticket Price</th>
              <th className="px-4 py-2 ">Draw Date</th>
              <th className="px-4 py-2 ">Ticket Number</th>
              <th className="px-4 py-2 ">Action</th>
            </tr>
          </thead>

          <tbody className="max-h-80 overflow-y-auto block">
            {luckyNumbers &&
              luckyNumbers.map((luckyNumber: string, index: number) => (
                <tr
                  className="flex justify-between border-b text-left"
                  key={index}
                >
                  <td className="px-4 py-2 font-semibold">{index + 1}</td>
                  <td className="px-4 py-2 font-semibold">
                    <div className="flex justify-center items-center space-x-1">
                      <FaEthereum />
                      <span>{lottery?.ticketPrice}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-semibold">
                    {lottery?.drawsAt}
                  </td>
                  <td className="px-4 py-2 font-semibold">{luckyNumber}</td>
                  <td className="px-4 py-2 font-semibold">
                    <button
                      disabled={purchasedNumbers?.includes(luckyNumber)}
                      onClick={() =>
                        ticketPurchase(index, lottery?.ticketPrice)
                      }
                      className={`bg-black ${
                        purchasedNumbers?.includes(luckyNumber)
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-rose-600"
                      } text-white text-sm py-2 px-4 rounded-full`}
                    >
                      BUY NOW
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Drawtime;

import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { Lottery, Participant, LotteryResult } from '../typings';
import Countdown from './Countdown';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { truncate } from '../services/blockchain';
import DrawResult from './modal/DrawResult';
import { useNavigate } from 'react-router';

interface ResultProps {
  lottery?: Lottery;
  participants?: Participant[];
  result?: LotteryResult;
}

const Result: React.FC<ResultProps> = ({
    lottery,
    participants,
    result
}) => {
    const { wallet } = useSelector((state: RootState) => state.counter)
    const navigate = useNavigate();
  return (
    <div className="mx-auto py-16 bg-slate-100 space-y-3">
    <div className="flex flex-col items-center justify-center text-center py-10">
      <h1 className="text-2xl font-bold pb-4">Lottery Result</h1>
      <p className="text-lg text-gray-600 font-semibold capitalize">{lottery?.title}</p>
      <p className="text-sm text-gray-500 w-full sm:w-2/3">{lottery?.description}</p>
      
      <p className="text-sm text-gray-500 w-full sm:w-2/3">
        Result for{' '}
        <span className="font-medium text-green-600">{result?.winners.length} winners</span> out
        of <span className="font-medium text-black">{lottery?.participants} participants</span>{' '}
        <span className="font-medium text-gray-600">
          {result?.winners && result?.winners.length > 0 ? 'Drawn' : 'Not Drawn'}
        </span>
      </p>
      <p className="text-md font-medium text-black mt-5">
         owner: {lottery?.owner} 
        </p>
    </div>

    <div className="flex flex-col justify-center items-center space-y-4">
      {lottery?.expiresAt && <Countdown timestamp={lottery?.expiresAt} /> }

      <div className="flex justify-center items-center space-x-2">
        {wallet.toLowerCase() == lottery?.owner && (
          <DrawResult/>
        )}

        <div
          onClick={()=>navigate(`/jackpots/${lottery?.id}/`)}
          className="flex flex-nowrap border py-2 px-4 rounded-full bg-[#0c2856]
          hover:bg-[#1a396c] cursor-pointer font-semibold text-white"
        >
          Jackpot
        </div>
      </div>
    </div>

    <div className="flex flex-col-reverse sm:flex-row ">
      <div
        className="bg-white flex flex-col w-full sm:w-3/4 mx-auto
      p-5 rounded-md"
      >
        <h4 className="text-2xl font-bold text-slate-700 text-center">Winners & Lossers</h4>

        <div className="space-y-2 max-h-80 overflow-y-auto">
          {participants?.map((participant, i) => (
            <div
              key={i}
              className="flex justify-start items-center border-b border-gray-100 py-2 space-x-2"
            >
              <div className="flex justify-center items-center space-x-2 text-sm">
                <p className="font-semibold text-lg text-slate-500">
                  {truncate(participant.account, 4, 4, 11)}
                </p>
                <p className="text-slate-500">{participant?.lotteryNumber}</p>
                {result?.winners.includes(participant?.lotteryNumber) ? (
                  <p className="text-green-500 flex justify-start items-center">
                    + <FaEthereum /> {result?.sharePerWinner} {' winner'}
                  </p>
                ) : (
                  <p className="text-red-500 flex justify-start items-center">
                    - <FaEthereum /> {lottery?.ticketPrice}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Result
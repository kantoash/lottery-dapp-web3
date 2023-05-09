import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Lottery, LotteryResult, Participant } from '../typings';
import { getLottery, getLotteryResult, getParticipants } from '../services/ssrblockchain';
import SubHeader from '../components/SubHeader';
import Result from '../components/Result';

const ResultPage = () => {
    const { id } = useParams();

  
  const [lottery, setLottery] = useState<Lottery>();
  const [participants, setParticipants] = useState<Participant[]>();
  const [result, setResult] = useState<LotteryResult>();
  
  useEffect(() => {
    const fetchlottery = async () => {
      const Lottery = await getLottery(id!);
      const Participants = await getParticipants(id!);
      const Result = await getLotteryResult(id!);
      
      setLottery(Lottery);
      setParticipants(Participants);
      setResult(Result)
    };
    fetchlottery();
  }, [lottery, participants, result]);

  return (
    <div>
        <SubHeader />
        <Result lottery={lottery} participants={participants} result={result} />
    </div>
  )
}

export default ResultPage
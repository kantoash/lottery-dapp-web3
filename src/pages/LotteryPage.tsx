import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  getLottery,
  getLuckyNumbers,
  getPurchasedNumbers,
} from "../services/ssrblockchain";
import { Lottery } from "../typings";
import SubHeader from "../components/SubHeader";
import Drawtime from "../components/Drawtime";

const LotteryPage = () => {
  const { id } = useParams();
  
  if (!id) {
    return (
      <div>
        null
      </div>
    )
  }

  const [lottery, setLottery] = useState<Lottery>(null!);
  const [luckyNumbers, setLuckyNumbers] = useState<string[]>();
  const [purchasedNumber, setPurchasedNumber] = useState<string[]>();

  useEffect(() => {
    const fetchlottery = async () => {
      const Lottery = await getLottery(id);
      const LuckyNumber = await getLuckyNumbers(id);
      const PurchasedNumber = await getPurchasedNumbers(id);

      setLottery(Lottery);
      setLuckyNumbers(LuckyNumber);
      setPurchasedNumber(PurchasedNumber);
    };
    fetchlottery();
  }, []);  
  
  return (
    <div>
      <SubHeader />
      <Drawtime
        id={id}
        lottery={lottery}
        luckyNumbers={luckyNumbers}
        purchasedNumbers={purchasedNumber}
      />
    </div>
  );
};

export default LotteryPage;

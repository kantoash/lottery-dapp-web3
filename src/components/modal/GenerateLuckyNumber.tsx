import { useSelector } from "react-redux";
import { RootState, store } from "../../store";
import { setGenerateNumberModal } from "../../store/storeSlices";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { exportLuckyNumber } from "../../services/blockchain";
import { useParams } from "react-router";
import { toast } from "react-hot-toast";

const Modal = () => {

  const [generateNumber, setGenerateNumber] = useState('');
  const generateNumbers = (count: number) => {
    const result = []
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
      let string = ''
      for (let j = 0; j < 6; j++) {
        string += characters.charAt(Math.floor(Math.random() * charactersLength))
      }
      result.push(string)
    }
    return result
  }

  const { id } = useParams();
  
  if (!id) {
    return null;
  }
  const ModalOff = () => {
    store.dispatch(setGenerateNumberModal(false));
  };

  const GenerateLuckyNumber = async () => {
    await exportLuckyNumber(id, generateNumbers(Number(generateNumber))).then(() => {
      setGenerateNumber('');
    }).catch(() => {
      toast('Lucky Numbers Generate Error')
    }).finally(() => {
      ModalOff();
    });
  }  
  
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40 flex justify-center items-center">
      <main className="bg-white rounded-2xl p-6 w-2/3 flex flex-col justify-center  ">
        <header className="flex flex-row justify-between items-center ">
          <div onClick={ModalOff}>
            <button>
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div className="flex-grow flex justify-center">
            <h3 className="text-2xl">Generate Lucky Number</h3>
          </div>
        </header>

        <div className="mt-10 flex flex-col space-y-5 justify-center  ">
          <div
            className={`bg-blue-100  border-blue-300 border-2 px-5 py-3 rounded-2xl`}
          >
            <input
              className="w-full outline-none bg-transparent "
              placeholder="Generate Number"
              type="text"
              value={generateNumber}
              onChange={(e) => setGenerateNumber(e.target.value)}
            />
          </div>
          <button className="clickBtn" onClick={GenerateLuckyNumber}>Generate</button>
        </div>
      </main>
    </div>
  );
};
// make karna ha
const GenerateLuckyNumber = () => {
  const ModalOpen = () => {
    store.dispatch(setGenerateNumberModal(true));
  };
  const { GenerateNumberModal } = useSelector(
    (state: RootState) => state.counter
  );
  return (
    <div>
      <button
        onClick={ModalOpen}
        className="clickBtn"
      >
        Generate Lucky Number
      </button>
      {GenerateNumberModal && <Modal />}
    </div>
  );
};

export default GenerateLuckyNumber;

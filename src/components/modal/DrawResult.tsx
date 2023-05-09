import { useSelector } from "react-redux";
import { RootState, store } from "../../store";
import { setDrawResultModal } from "../../store/storeSlices";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { performDraw } from "../../services/blockchain";
import { useParams } from "react-router";
import { toast } from "react-hot-toast";

const Modal = () => {

  const [winnerCounts, setWinnersCounts] = useState('');
 
  const { id } = useParams();
  
  if (!id) {
    return null;
  }
  const ModalOff = () => {
    store.dispatch(setDrawResultModal(false));
  };

  const PerformDrawResult = async () => {
    await performDraw(id, Number(winnerCounts)).then(() => {
     setWinnersCounts('')
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
            <h3 className="text-2xl">Winners Counts</h3>
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
              value={winnerCounts}
              onChange={(e) => setWinnersCounts(e.target.value)}
            />
          </div>
          <button className="clickBtn" onClick={PerformDrawResult}>Generate</button>
        </div>
      </main>
    </div>
  );
};
// make karna ha
const DrawResult = () => {
  const ModalOpen = () => {
    store.dispatch(setDrawResultModal(true));
  };
  const { DrawResultModal } = useSelector(
    (state: RootState) => state.counter
  );
  return (
    <div>
      <button
        onClick={ModalOpen}
        className="clickBtn"
      >
        Draw Result
      </button>
      {DrawResultModal && <Modal />}
    </div>
  );
};

export default DrawResult;

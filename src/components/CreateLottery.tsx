import { useState } from "react";
import { createJackpot } from "../services/blockchain";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import { createJackpotProps } from "../typings";

const CreateLottery = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [prize, setPrize] = useState('')
  const [ticketPrice, setTicketPrice] = useState('')
  const [expiresAt, setExpiresAt] = useState('')
  const navigate = useNavigate();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title || !description || !imageUrl || !prize || !ticketPrice || !expiresAt) return;
    const params: createJackpotProps = {
      title,
      description,
      imageUrl,
      prize,
      ticketPrice,
      expiresAt: new Date(expiresAt).getTime()
    }
    await createJackpot(params).then(() => {
      toast('lottery Created')
      onReset();
      navigate('/')
    }).catch(() => {
      toast('lottery Created Error')
    })    
  }
  const onReset = () => {
    setTitle('')
    setDescription('')
    setImageUrl('')
    setPrize('')
    setTicketPrice('')
    setExpiresAt('')
  }

  return (
    <div className="flex flex-col justify-center items-center mt-20 max-w-2xl mx-auto overflow-hidden">
      <div className=" flex flex-col items-center justify-center my-5">
        <h1 className="text-2xl font-bold text-slate-800 py-5">
          Create Jackpots
        </h1>
        <p className="text-center text-sm text-slate-600">
          We bring a persolan and effective every project we work on. <br />
          which is why our client love why they keep coming back.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="mb-4">
              <input
                className="appearance-none border-2 border-gray-300 rounded w-full py-3 px-6
                text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border-2 border-gray-300 rounded w-full py-3 px-6
                text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline"
                id="imageUrl"
                type="url"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border-2 border-gray-300 rounded w-full py-3 px-6
                text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline"
                id="prize"
                type="number"
                step={0.01}
                min={0.01}
                placeholder="Prize"
                value={prize}
                onChange={(e) => setPrize(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="appearance-none border-2 border-gray-300 rounded w-full py-3 px-6
                text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline"
                id="ticketPrice"
                type="number"
                step={0.01}
                min={0.01}
                placeholder="Ticket price"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="appearance-none border-2 border-gray-300 rounded w-full py-3 px-6
                text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline"
                id="expiresAt"
                type="datetime-local"
                value={expiresAt}
                onChange={(e) => setExpiresAt(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                className="appearance-none border-2 border-gray-300 rounded w-full py-3 px-6
                text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button 
                className="w-full bg-[#0c2856] hover:bg-[#1a396c] text-white font-bold
                py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit Jackpot
              </button>
            </div>
          </form>
    </div>
  );
};

export default CreateLottery;


export interface Lottery {
    id: number,
    title: string,
    description: string,
    image: string,
    prize: string,
    ticketPrice: string,
    participants: number,
    drawn: boolean,
    drawsAt: string,
    owner: string,
    createdAt: string,
    expiresAt: number,
} 


export interface Participant {
    account: string,
    lotteryNumber: string,
    paid: boolean
}

export interface LotteryResult {
    id: number;
    completed: boolean;
    paidout: boolean;
    timestamp: number;
    sharePerWinner: string;
    winners: string[];
}

export interface createJackpotProps {
    title: string,
    description: string,
    imageUrl: string,
    prize: string,
    ticketPrice: string,
    expiresAt: number
  }
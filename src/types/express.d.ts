declare namespace Express {
  export interface Request {
    userId: string;
    cartId: string;
    pagination: {
      realPage: number;
      realTake: number;
    };
  }
}

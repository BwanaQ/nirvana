export class Quote {
  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public submittedBy: string,
    public upVote: number,
    public downVote: number
  ) {}
}

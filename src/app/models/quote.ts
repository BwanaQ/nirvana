export class Quote {
  showDetails: boolean;
  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public submittedBy: string,
    public upVote: number = 0,
    public downVote: number = 0
  ) {
    this.showDetails = false;
  }
}

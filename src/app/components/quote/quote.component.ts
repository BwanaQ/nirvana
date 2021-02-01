import { Quote } from './../../models/quote';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Act as if what you do makes a difference. It does.',
      'William James',
      'Tom Hunja',
      6,
      new Date(2021, 0, 31)
    ),
    new Quote(
      2,
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      'Winston Churchill',
      'Breens Mbaka',
      4,
      new Date(2020, 0, 14)
    ),
    new Quote(
      3,
      'Never bend your head. Always hold it high. Look the world straight in the eye.',
      'Helen Keller',
      'Rose Okoth',
      7,
      new Date(2020, 3, 14)
    ),
    new Quote(
      4,
      'What you get by achieving your goals is not as important as what you become by achieving your goals.',
      'Zig Ziglar',
      'Dawn Ndemo',
      6,
      new Date(2020, 3, 14)
    ),
    new Quote(
      5,
      "Believe you can and you're halfway there.",
      'Theodore Roosevelt',
      'Victor Kigen',
      1,
      new Date(2020, 3, 14)
    ),
  ];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    let today = new Date();
    quote.dateCreated = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    this.quotes.push(quote);
  }
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete the quote \"${this.quotes[index].quote}\"?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  upVoteQuote(isUpVoted: boolean, index: number) {
    if (isUpVoted) {
      this.quotes[index].votes += 1;
      console.log(this.quotes[index].votes);
    }
  }

  downVoteQuote(isDownVoted: boolean, index: number) {
    if (isDownVoted) {
      this.quotes[index].votes -= 1;
    }
  }
  highestVote() {
    let prevNum = 0;
    let lastNum = 0;
    let i = 0;
    for (i = 0; i < this.quotes.length; i++) {
      lastNum = this.quotes[i].votes;
      if (lastNum > prevNum) {
        prevNum = lastNum;
      }
    }
    return prevNum;
  }

  constructor() {}

  ngOnInit(): void {}
}

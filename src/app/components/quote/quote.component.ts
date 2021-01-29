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
      0,
      0
    ),
    new Quote(
      2,
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      'Winston Churchill',
      'Breens Mbaka',
      0,
      0
    ),
    new Quote(
      3,
      'Never bend your head. Always hold it high. Look the world straight in the eye.',
      'Helen Keller',
      'Rose Okoth',
      0,
      0
    ),
    new Quote(
      4,
      'What you get by achieving your goals is not as important as what you become by achieving your goals.',
      'Zig Ziglar',
      'Dawn Ndemo',
      0,
      0
    ),
    new Quote(
      5,
      "Believe you can and you're halfway there.",
      'Theodore Roosevelt',
      'Victor Kigen',
      0,
      0
    ),
  ];
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}

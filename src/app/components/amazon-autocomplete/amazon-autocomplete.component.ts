import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-amazon-autocomplete',
  templateUrl: './amazon-autocomplete.component.html',
  styleUrls: ['./amazon-autocomplete.component.css'],
})
export class AmazonAutocompleteComponent implements AfterViewInit, OnDestroy {
  @ViewChild('text') search!: ElementRef;
  constructor(private http: HttpClient) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.sub = fromEvent(this.search.nativeElement, 'keyup')
      .pipe(debounceTime(500))
      .subscribe(() => {
        if (this.query.length > 0)
          this.http.get(`/amazon/${this.query}`).subscribe((response) => {
            this.suggestions = response;
            [, this.suggestions] = this.suggestions;
          });
        else this.suggestions = [];
      });
  }

  suggestions!: any;
  sub = new Subscription();
  query!: string;
}

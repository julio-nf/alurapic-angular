import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce = new Subject<string>();
  @Output() typing = new EventEmitter<string>();
  @Input() value = '';

  constructor() { }

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.typing.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}

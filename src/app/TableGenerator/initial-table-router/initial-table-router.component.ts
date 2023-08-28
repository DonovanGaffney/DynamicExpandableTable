import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {determineType, ValueType} from "../table-generator-helper";

@Component({
  selector: 'app-initial-table-router',
  templateUrl: './initial-table-router.component.html',
  styleUrls: ['./initial-table-router.component.scss']
})
export class InitialTableRouterComponent implements OnChanges {
  @Input() value: any = [];
  valueType: ValueType = ValueType.Other;

  ValueType = ValueType;

  constructor() { }

  ngOnChanges(changes:SimpleChanges): void {
    this.valueType = determineType(this.value);
  }
}

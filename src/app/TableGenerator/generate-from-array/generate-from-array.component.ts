import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {determineType, ValueType} from "../table-generator-helper";

@Component({
  selector: 'app-generate-from-array',
  templateUrl: './generate-from-array.component.html',
  styleUrls: ['./generate-from-array.component.scss']
})
export class GenerateFromArrayComponent implements OnChanges, OnInit {
  @Input() array: any[] = [];
  @Input() autoExpand: boolean = false;
  keys: string[] = [];
  isExpanded: boolean = false;

  protected readonly determineType = determineType;
  protected readonly ValueType = ValueType;

  constructor() { }

  ngOnInit() {
    this.isExpanded = this.autoExpand;
  }

  ngOnChanges(changes:SimpleChanges): void {
    this.keys = Object.getOwnPropertyNames(this.array);
  }

  onExpandToggle() {
    this.isExpanded = !this.isExpanded;
  }
}

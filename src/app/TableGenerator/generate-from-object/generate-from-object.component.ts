import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {determineType, ValueType} from "../table-generator-helper";

@Component({
  selector: 'app-generate-from-object',
  templateUrl: './generate-from-object.component.html',
  styleUrls: ['./generate-from-object.component.scss']
})
export class GenerateFromObjectComponent implements OnInit,OnChanges {
  @Input() name: string = "Object";
  @Input() object: any = {};
  @Input() autoExpand: boolean = false;

  keys: string[] = [];
  isExpanded: boolean = false;

  protected readonly determineType = determineType;
  protected readonly ValueType = ValueType;

  constructor() {
  }

  ngOnInit() {
    this.isExpanded = this.autoExpand;
  }

  ngOnChanges(changes:SimpleChanges): void {
    this.keys = Object.getOwnPropertyNames(this.object);
  }

  getVal(key: string) {
    return this.object[key];
  }

  onExpandToggle() {
    this.isExpanded = !this.isExpanded;
  }
}

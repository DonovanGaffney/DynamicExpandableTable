import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testTables';

  item = {
    "item1": "value1",
    "obj1": {
      "Name": "donovan",
      "LastName": "Gaffney",
      "obj2": {
        "number":2,
        "number2":3,
        "number3":4,
        "number4":5,
        "array": [1,2,3,4,5],
        "arrayObj": [
          {
            "name": "Jim",
            "age": 22
          },
          {
            "name": "Pete",
            "age": 33
          }
        ]
      }
    }
  }

  item2 = [
    [
      {
        "key1": "val1",
        "key2": "val2"
      },
      {
        "key3": "val1",
        "key4": "val2"
      }
    ],[
      {
        "key1": "val1",
        "key2": "val2"
      },
      {
        "key3": "val1",
        "key4": "val2"
      }
    ]
  ]

  item3 = [
    [
      {
        "key1": "val1",
        "key2": "val2"
      },
      {
        "key3": "val1",
        "key4": "val2"
      }
    ],[
      {
        "key1": "val1",
        "key2": {
          "item1": "value1",
          "obj1": {
            "Name": "donovan",
            "LastName": "Gaffney",
            "obj2": {
              "number":2,
              "number2":3,
              "number3":4,
              "number4":5,
              "array": [1,2,3,4,5],
              "arrayObj": [
                {
                  "name": "Jim",
                  "age": 22
                },
                {
                  "name": "Pete",
                  "age": 33
                }
              ]
            }
          }
        }
      },
      {
        "key3": "val1",
        "key4": "val2"
      }
    ]
  ]

  item4 = {
    "item": [
      1,
      2,
      {
        "obj1": {
          "obj2:": {
            "attr1": "123"
          },
          "age": 100
        }
      }
    ]
  };
}

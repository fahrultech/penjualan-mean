import { Component, OnInit, EventEmitter } from '@angular/core';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  opts: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;

  ngOnInit(): void {
    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
    this.opts = {
      position: "right", // left | right
      barBackground: "#7a868f",
      barOpacity: "0.4", // 0.8
      barWidth: "5", // 10
      barBorderRadius: "10", // 20
      barMargin: "0", // 0
      gridBackground: "#d9d9d9", // #D9D9D9
      gridOpacity: "1", // 1
      gridWidth: "2", // 2
      gridBorderRadius: "20", // 20
      gridMargin: "0", // 0
      alwaysVisible: true, // true
      visibleTimeout: 1000, // 1000
    }
  }
}

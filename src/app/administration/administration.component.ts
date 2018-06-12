import { Component, OnInit , ElementRef} from '@angular/core';
import * as D3 from 'd3';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  ngOnInit() {
    this.buildSVG();
  }

  host;
  svg;

  constructor (private _element : ElementRef) {
    this.host = D3.select(this._element.nativeElement);
  }

  buildSVG() : void {
    this.host.html('');
    this.svg = this.host.append('svg')
         .attr('width','600')
         .attr('height', '400')
         .style('background-color', 'blue');
  }

}

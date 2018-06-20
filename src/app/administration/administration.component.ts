import { Component, OnInit , ElementRef} from '@angular/core';
import {StatsService} from '../stats.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  ngOnInit() {
    this.buildSVG();
    this.statsService.getStatsData()
      .subscribe(
        (response) => console.log(response), 
        (error) => console.log(error)
      )
  }

  host;
  svg;
 
  constructor (private _element : ElementRef, private statsService : StatsService) {
    this.host = d3.select(this._element.nativeElement);
  }

  buildSVG() : void {
    var w = 800;
    var h = 450;
    var data = [132,71,337,93,78,43,20,16,30,8, 17,21];
    var x = d3.scaleLinear().domain([0,d3.max(data)]).range([0,w]);
    var y = d3.scaleLinear().domain([0,data.length])
            .range([0,h]);
    var svg = d3.select("body").append("svg")
              .attr("id", "chart")
              .attr('width',w)
              .attr('height', h) 
    svg.selectAll(".bar")
    .data(data)
    .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x",0)
        .attr("y",function(d,i) {
          return y(i);
        })
        .attr("width", function(d, i) {
          return x(d);
        } )
        
        .attr("height",function(d,i){
          return y(1)-1
        });

    // this.svg = this.host.append('svg')
    // .attr("id","chart")
    
    // this.svg.selectAll(".bar")
    // .data(data)
    // .enter()
    // .append("rect")
    // .attr("class", "bar")
    // .attr("x", 0)
    // .attr("y", function(d,i) {
    //   return d;
    // })
    // .attr("height", 20)

         
        
  }

}

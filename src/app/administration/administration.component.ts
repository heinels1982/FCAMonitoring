import { Component, OnInit , ElementRef} from '@angular/core';
import {StatsService} from '../stats.service';
import * as d3 from 'd3';
import * as $ from 'jquery';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
 

  ngOnInit() {

    this.statsService.getStatsData()
      .subscribe(
        (response) => { 
          var stats = response.json();
          
          this.buildSVG(stats);
        },
        (error) => console.log(error)
      )
  }
 
  host;
  svg;
  
  constructor (private _element : ElementRef, private statsService : StatsService) {
    this.host = d3.select(this._element.nativeElement);
  }

  buildSVG(stats) : void {
    console.log("jQuery" + $.map(stats, function(el) { return el.count }));
  
    var w = 180;
    var h = 145;
    var data = $.map(stats, function(el) { return el.count });
    
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
    .attr("height",function(d,i) {
      return y(1)-1
    });

    svg.selectAll(".bar-label")
    .data(data)
    .enter()
    .append("text")
    .classed("bar-label", true) 
    .attr("x",0)
    .attr("y",function(d,i) {
      return i * 36
    })
    .attr("dy", function(d,i) {
      return y(1)/1.5 - 2
    })
    .text(function(d,i) {
      return d;
    });
  }

}

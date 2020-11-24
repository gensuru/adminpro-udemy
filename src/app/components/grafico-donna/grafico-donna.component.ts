import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-donna',
  templateUrl: './grafico-donna.component.html',
  styles: [
  ]
})
export class GraficoDonnaComponent implements OnInit {

  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  @Input() chartType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

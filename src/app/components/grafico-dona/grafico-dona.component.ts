import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
})
export class GraficoDonaComponent implements OnInit {
 @Input()  public labels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 @Input()  public data:number[] = [350, 450, 100];
 @Input()  public type:string = 'doughnut';
 @Input()  public leyenda:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresarObservable().subscribe( contador => console.log(contador), error => console.log('Error en el obs', error), () => console.log('El observador termino') );
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    console.log('Esta saliendo de la pagina');
    this.subscription.unsubscribe();
  }

  regresarObservable(): Observable<any>{

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;
      
      let intervalo = setInterval( () => {

        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        //if(contador === 3){
        //  clearInterval( intervalo );
        //  observer.complete()
        //}

        //if(contador === 2){
          //clearInterval( intervalo );
          //observer.error();
        //}

      }, 1000);
    }).pipe(
      map( resp => resp.valor ),
      filter( ( valor, index ) => {
        //console.log('filter', valor, index);
        
        if( (valor % 2) === 1 ){
          // Impar
          return true;
        }else{
          // Par
          return false;
        }
      })
    )
    
  }

}

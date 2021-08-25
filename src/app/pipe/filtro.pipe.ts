import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any,arg: any): any {
    const result=[];
    for(const serie of value
       ){
      if(serie.title.indexOf(arg)> -1){
        result.push(serie);
        console.log(result);
      }
    }
    return result;
  }
 
  }

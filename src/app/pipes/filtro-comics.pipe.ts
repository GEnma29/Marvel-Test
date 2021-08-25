import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroComics'
})
export class FiltroComicsPipe implements PipeTransform {

  transform(value: any,arg: any): any {
    const result=[];
    for(const comic of value
       ){
      if(comic.title.indexOf(arg)> -1){
        result.push(comic);
        console.log(result);
      }
    }
    return result;
  }
 
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCreator'
})
export class FiltroCreatorPipe implements PipeTransform {

  transform(value: any,arg: any): any {
    const result=[];
    for(const creator of value
       ){
      if(creator.fullname.indexOf(arg)> -1){
        result.push(creator);
        console.log(result);
      }
    }
    return result;
  }

}

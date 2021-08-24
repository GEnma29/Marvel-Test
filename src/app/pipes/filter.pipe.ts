import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result=[];
    for(const character of value
       ){
      if(character.name.indexOf(arg)> -1){
	result.push(character);
	console.log(result);
      }
    }
    return result;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionNull'
})
export class DescriptionNullPipe implements PipeTransform {

  transform(value: string): string {

    if(value ===""){

      return "the description no are avalible, the people are so lazy man"

    }else return value

  }

}

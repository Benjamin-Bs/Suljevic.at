import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: false
})
export class AgePipe implements PipeTransform {

  transform(birthDate: string | Date): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

}

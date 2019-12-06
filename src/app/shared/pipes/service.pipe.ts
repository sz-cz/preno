import { Pipe, PipeTransform } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {
  constructor(private servicesService : ServicesService) {}

  transform(value: string, ...args: any[]): any {
    let serviceName
    console.log('pipa działa')

    return this.servicesService.getService(value).subscribe(item => item)
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';
import { Service } from '../../shared/models/service.model';
import { map } from 'rxjs/operators'


@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {
  constructor(private servicesService : ServicesService) {}

  transform(value: string, ...args: any[]): any {
    return this.servicesService.getService(value).pipe(map((service : Service) => service ? service.name : null))
  }

}

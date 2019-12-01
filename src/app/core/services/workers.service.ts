import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor() { }

  activeWorkers = [
    {
        id: 0,
        name: 'Adrian',
        description: 'Włosy od dziecka były moją pasją. Najstarszy w zespole, z ponad dziesięcioletnim stażem.',
        image: 'w0.jpg',
        workhours: [null,'08:00-16:00','08:00-16:00','08:00-16:00','08:00-16:00','08:00-16:00', null],
        services: [1, 2, 3],
        
    },{
        id: 1,
        name: 'Jolanta',
        description: 'Certyfikowana fryzjerka przez wiele lat praktykująca w uznanych salonach Wielkiej Brytanii.',
        image: 'w1.jpg',
        workhours: [null,'08:00-16:00','11:00-19:00','08:00-16:00','11:00-19:00','08:00-16:00', null],
        services: [0, 1, 2]
    },{
        id: 2,
        name: 'Olaf',
        description: 'Fryzjerstwo to fryzjerstwo. Jestem po prostu doskonałym rzemieślnikiem. Zetnę Cię doskonale, bez dorabiania niepotrzebnej filozofii.',
        image: 'w2.jpg',
        workhours: [null,null,'11:00-19:00','08:00-16:00','11:00-19:00','08:00-16:00', null],
        services: [1, 2, 3]
    },{
        id: 3,
        name: 'Barbara',
        description: 'Wykładam na Wyższej Szkole Kosmetologii. Specjalizuję się głównie w koloryzacji.',
        image: 'w3.jpg',
        workhours: ['08:00-16:00',null,null,null,null,null,'08:00-16:00'],
        services: [0, 2, 3]
    },{
        id: 4,
        name: 'Paulina',
        description: 'Najmłodsza w zespole, ale szybko się uczę. Staż w Nowym Jorku zakończony z wyróżnieniem gwarantuje jakość moich usług.',
        image: 'w4.jpg',
        workhours: [null,'11:00-19:00','08:00-16:00','11:00-19:00','08:00-16:00', null],
        services: [3]
    },
]

findWorkers = serviceID => {
    let availableWorkers = this.activeWorkers.filter(worker => worker.services.includes(serviceID));
    return availableWorkers
  }

}

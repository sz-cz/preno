import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  activeServices = [
    {
        id: 0,
        name: 'Polerowanie',
        image: 's0.jpg',
        duration: 30,
        available: true,
        availableFrom: '2015-05-05',
        places: [0, 1, 2],
        workers: [1,3]
    },{
        id: 1,
        name: 'Strzyżenie męskie',
        image: 's1.jpg',
        duration: 20,
        available: true,
        availableFrom: '2013-01-15',
        places: [1, 2],
        workers: [0, 1, 2]
    },{
        id: 2,
        name: 'Strzyżenie damskie',
        image: 's2.jpg',
        duration: 35,
        available: true,
        availableFrom: '2011-10-23',
        places: [1, 2, 3, 4],
        workers: [0, 1, 2, 3]
    },{
        id: 3,
        name: 'Farbowanie',
        image: 's3.jpg',
        duration: 40,
        available: true,
        availableFrom: '2018-12-02',
        places: [4],
        workers: [0, 2, 3, 4]
    },
]

}

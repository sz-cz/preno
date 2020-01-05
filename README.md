# Preno

There are three permission levels (details are listed below). For test accounts use the following credentials:
ADMIN - login: admin@admin.pl | password: qwaszx
WORKER - login: worker@worker.pl | password: 654321
USER - login: user@user.pl | password: 123456
Of course, you can create your own accounts and give proper permissions via admin@admin.pl account.

## Preno is a six-step reservation system:
1. Choose a service.
2. Choose a worker that provides the service (sometimes there's one worker to choose, sometimes there are all of them).
3. Choose a day (but some days are days off - different days for different workers).
4. Choose a free hour: if your worker is busy, time slots are red; if duration of your service makes reservation impossible - time slots are orange.
5. Enter your data. If you are logged in, your data will autofill the inputs.
6. Check your reservation data and book your reservation.

## User panel features
To create a user simply use sing up process.
- your data given in the registration process,
- list of bookings that you made.

## Worker panel features
To create a worker you must bind user account with worker profile in admin panel (worker details).
- list of bookings for your services,
- edition of your worker data (services, working hours, name, description etc.)

## Admin panel features
- lists of all workers, reservations, services and user accounts,
- details of every worker, reservaion, service and user,
- edit a worker or a service,
- delete a worker, service, user or a reservation,
- add a worker or a service and bind them to each other,
- make a user an admin,
- make a user a worker (bind user account with worker profile).

## Technologies used in this project
Angular, Angular Material, Angular Firebase, Firebase Firestore, Firebase Auth, SASS

## Development server
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

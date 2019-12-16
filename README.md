# Preno

To see the admin panel use the following credentials:
login: admin@admin.pl
password: qwaszx

To see the client panel create a new account or use the following data:
login: user@user.pl
password: 123456

## Preno is a six-step reservation system:
1. Choose a service.
2. Choose a worker that provides the service (sometimes there's one worker to choose, sometimes there are all of them).
3. Choose a day (but some days are days off - different days for different workers).
4. Choose a free hour: if your worker is busy, time slots are red; if duration of your service makes reservation impossible - time slots are orange.
5. Enter your data. If you are logged in, your data will autofill the inputs.
6. Check your reservation data and book your reservation.

## Admin panel features
- lists of all workers, reservations, services and user accounts,
- details of every worker, reservaion, service and users,
- delete a worker, service or a reservation,
- add a worker or a service and bind them to each other,
- make a user an admin

## User panel features
- see your data

## Technologies used in this project
Angular, Angular Material, Angular Firebase, Firebase Firestore, Firebase Auth, SASS

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

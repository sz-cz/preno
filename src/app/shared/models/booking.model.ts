export interface Booking {
    key?: string;
    worker: string;
    service: string;
    date: (Date | firebase.firestore.Timestamp | any);
    endDate: (Date | firebase.firestore.Timestamp | any);
    customer: CustomerForm
}

export interface CustomerForm {
    name: string;
    email: string;
    phone: string
}
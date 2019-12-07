export interface Booking {
    key: string;
    worker: string;
    service: string;
    date: Date;
    endDate: Date;
    customer: CustomerForm
}

export interface CustomerForm {
    name: string;
    email: string;
    phone: string
}
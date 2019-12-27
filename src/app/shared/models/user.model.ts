export interface User {
    key?: string;
    email: string;
    name: string;
    phone: string;
}

export interface UserRoles {
    isAdmin: boolean;
    isWorker: boolean;
    workerKey: string;
}
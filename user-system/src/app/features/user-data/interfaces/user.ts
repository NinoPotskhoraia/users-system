export interface User {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    roles: string[],
    locked: boolean
}

export interface IUser {
    email: string,
    firstName: string,
    lastName: string,
    roles: string[],
    locked: boolean
}

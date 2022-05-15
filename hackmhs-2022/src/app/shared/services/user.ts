export interface User {
    uid: string;
    orgCode: string;
    email: string;
    displayName: string;
    photoURL: string;
    accountType: string;
    todoList?: Array<String>;
}
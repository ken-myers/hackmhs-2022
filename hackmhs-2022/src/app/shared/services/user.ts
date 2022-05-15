export interface User {
    uid: string;
    teamID: string;
    email: string;
    displayName: string;
    photoURL: string;
    accountType: string;
    todoList: Array<String>;
}
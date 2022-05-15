import {Task} from "../../models/task";

export interface User {
    uid: string;
    orgCode: string;
    email: string;
    displayName: string;
    photoURL: string;
    accountType: string;
    teamName?: string;
    todoList?: Task[];

    subjects?: string[];
    role?: string;
    
}
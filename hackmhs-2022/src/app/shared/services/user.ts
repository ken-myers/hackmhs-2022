import {Task} from "../../models/task";

export interface User {
    id: string;
    org_code: string;
    email: string;
    display_name: string;
    photo_url: string;
    account_type: string;
    teamName?: string;
    todoList?: Task[];

    subjects?: string[];
    role?: string;
    
}
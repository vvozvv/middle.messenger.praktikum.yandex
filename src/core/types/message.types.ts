export type TMessage = {
    chat_id: number;
    content: string;
    file: any;
    id: number;
    is_read: boolean;
    time: string | Date;
    type: string;
    user_id: number;
}
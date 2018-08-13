export class Nickname {
    constructor(private nickname: string) {}
}

export class Message {
    constructor(private from: Nickname, private content: string) {}
}

export class ChatMessage extends Message{
    constructor(from: Nickname, content: string) {
        super(from, content);
    }
}

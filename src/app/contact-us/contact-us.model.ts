export class Contact {
    constructor(
        public firstName = '',
        public lastName = '', 
        public email = '',
        public phone = '',   
        public password = '',
       public subject: string = ''
    ) {}
}

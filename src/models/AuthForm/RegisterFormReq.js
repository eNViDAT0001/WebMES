export class RegisterFormReq{
    constructor({username,password,name,birthday,gender,phone,type}){
        this.username = username;
        this.password = password;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.phone = phone;
        this.type = type;
    }
}
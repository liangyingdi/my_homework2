declare type LoginResponseCode = 0 | 1 | 2;

declare type LoginResponse = {
    code: LoginResponseCode,
    msg?: string,
    jwt?: string,
}

declare type RegisterResponse = {
    code: LoginResponseCode,
    msg?: string,
}


declare type InputType = 'text' | 'password';

declare type resultType = {
    code: number;
    msg?: string;
};

declare type User = {
    id: string;
    username: string;
    password: string;
}
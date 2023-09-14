export class UserResponse {
    declare username: string;
    declare authentication: Authentication;
    declare _id: string;
    declare email: string;
    declare writtenBlogs: string[];
    declare profilePicture: string;
}
export class Authentication {
    declare password: string;
    declare salt: string;
    declare sessionToken: string;
}
export class UserRegister {
    declare email: string;
    declare password: string;
    declare profilePicture: string;
    declare username: string;
}
export class UserLogin {
    declare email: string;
    declare password: string;
}
export class UserFetch {
    declare token: string;
}

export class UserAll {
    declare _id: string;
    declare email: string;
    declare writtenBlogs: string[];
    declare profilePicture: string;
    declare username: string;
}

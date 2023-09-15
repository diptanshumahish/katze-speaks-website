export class PostResponse {
    declare comments: Comment[];
    declare _id: string;
    declare postHeading: string;
    declare miniDescription: string;
    declare postedById: string;
    declare postedByUserName: string;
    declare postContent: string;
    declare tags: string[];
    declare coverImage: string;
    declare optionalImages: string[];
}

export class Comment {
    declare userName: string;
    declare commentBody: string;
    declare commentedAt: string;
    declare imageLink: string;
}

export class CreatePost {
    declare postHeading: string;
    declare coverImage: string;
    declare miniDescription: string;
    declare postedById: string;
    declare postedByUserName: string;
    declare postContent: string;
    declare tags: string[];
    declare optionalImages?: string[];
}

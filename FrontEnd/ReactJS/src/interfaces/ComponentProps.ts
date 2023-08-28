export interface IntroduceItem {
    introduceContent:string,
    introduceMoreContent?:string
    introduceId:string
    introduceStatus?:string
    introduceType?:string
}

export interface User {
    id?:string,
    first_name?:string,
    last_name?:string,
    display_name?:string,
    nickname?:string,
    email?:string,
    avatar_url?: string,
    status?:string,
    slug?:string,
    friendship?:string
}

export interface PostType {
    id?:string,
    user_id?:string,
    content?:string,
    children_post_id?:string,
    reactions_count?:number,
    comments_count?:number,
    status:string,
    score?:number,
    images?:any[],
    author?:any,
    created_at:string,
    updated_at:string
}

export interface CommentType{
    id?:string,
    post_id?:string,
    content?:string,
    parent_slug?:string,
    slug?:string,
    replies_count?:number,
    reactions_count?:number,
    created_at?:string,
    updated_at?:string,
    author?:any
}
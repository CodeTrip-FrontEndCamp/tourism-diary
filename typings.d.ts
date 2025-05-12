declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.webp";
declare module "*.json";
declare module "*.js";

type ArticleComment = {
    userName: string;
    avatarUrl: string;
    message: string;
    dateTime: string;
    location: string;
    favoriteCount: number;
    isFavorite: boolean;
    children?: ArticleComment[];
}

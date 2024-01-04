export interface PoliticalDataItem {
    _id: string;
    name: string;
    description: string;
    country?: string;
    email: string;
    skill_rating: number;
    skill: [string];
    courses: [string];
    experiences: string;
    phone_number: string;
    address: string;
    image_url: string;
    tittle: string;
}
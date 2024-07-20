export enum TrophyType {
    PLATINUM,
    GOLD,
    SILVER,
    BRONZE,
}
interface TrophyModel {
    trophy_name: string;
    game_name: string;
    trophy_image: string;
    trophy_type: TrophyType;
    trophy_description: string;
    trophy_guide: string;
    youtube_link: string;
}
export default TrophyModel;

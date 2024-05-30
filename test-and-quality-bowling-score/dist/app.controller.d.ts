import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    calculateScore(frames: number[]): number;
    calculateScoreWithSpare(frames: number[]): number;
    calculateScoreWithStrike(frames: number[]): number;
    calculateScoreWithBonus(frames: number[]): number;
}

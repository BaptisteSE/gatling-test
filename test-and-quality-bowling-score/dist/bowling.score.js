"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingScore = void 0;
class BowlingScore {
    constructor(frames) {
        this.frames = frames;
    }
    calculateTotalScore() {
        let totalScore = 0;
        for (let i = 0; i < this.frames.length; i++) {
            totalScore += this.frames[i];
        }
        return totalScore;
    }
    calculateTotalScoreWithSpare() {
        let totalScore = 0;
        for (let i = 0; i < this.frames.length; i++) {
            if (i % 2 === 0 && i < this.frames.length - 2 && this.frames[i] + this.frames[i + 1] === 10) {
                totalScore += this.frames[i] + this.frames[i + 2];
            }
            else {
                totalScore += this.frames[i];
            }
        }
        return totalScore;
    }
    calculateTotalScoreWithStrike() {
        let totalScore = 0;
        for (let i = 0; i < this.frames.length; i++) {
            if (i % 2 === 0 && i < this.frames.length - 1 && this.frames[i] === 10) {
                totalScore += this.frames[i] + this.frames[i + 1] + this.frames[i + 2];
            }
            else {
                totalScore += this.frames[i];
            }
        }
        return totalScore;
    }
    calculateTotalScoreWithBonus() {
        let totalScore = 0;
        for (let i = 0; i < this.frames.length; i++) {
            if (i === this.frames.length - 3) {
                totalScore += this.frames[i] + this.frames[i + 1] + this.frames[i + 2];
            }
            else {
                totalScore += this.frames[i];
            }
        }
        return totalScore;
    }
}
exports.BowlingScore = BowlingScore;
//# sourceMappingURL=bowling.score.js.map
import IResult from '../interfaces/IResult';
import detail from './workExperience_detail';

export class WorkExperience implements IResult {

    public getName() {
        return "experience";
    }

    public getTitle(): string {
        return "Work experience";
    }

    public getSubtitle(): string {
        return "What has been going on in the last years";
    }

    public getDescription(): string {
        return "I work at Austrian Lotteries as a Full-stack developer";
    }

    public getDetail() {
        return detail;
    }

    public getBackground() {
        return "blightred";
    }

    public shouldSetActiveViewportListener() {
        return false;
    }
}

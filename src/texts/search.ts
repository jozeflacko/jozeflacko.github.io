import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {
    private searchMessage: string = "Hi, I am Jozef. Welcome to my Web!";

    private animate: boolean;

    getMessage() {
        return this.searchMessage;
    }

    setIsAnimated(animate: boolean) {
        this.animate = animate;
    }

    isAnimated() {
        return this.animate;
    }
}

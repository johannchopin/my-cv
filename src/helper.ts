import * as Crypto from 'crypto';

export default class _Helper {
    public deleteElementFromArray(array, elementIndex: number) {
        const arrayCopy = array.slice();
        arrayCopy.splice(elementIndex, 1);

        return arrayCopy;
    }

    public getArrayWithUpdatedElement(array, elementIndex: number, updatedElement) {
        const arrayCopy = array.slice();
        arrayCopy[elementIndex] = updatedElement;

        return arrayCopy;
    }

    public secondToMilliSeconds(second: number) {
        return second * 1000;
    }

    public minToMilliSeconds(min: number) {
        return min * this.secondToMilliSeconds(60);
    }

    public hourToMilliSeconds(hour: number) {
        return hour * this.minToMilliSeconds(60);
    }

    public timestampToValidFullDate(timestamp) { // valid full-date take the format YYYY-MM-DD
        const date = new Date(timestamp);
        const day = date.getUTCDate();
        const month = date.getMonth() + 1; // januar is month 0
        const year = date.getFullYear();

        return year + '-' + this.normalizeMonthOrDayString(month) + '-' + this.normalizeMonthOrDayString(day);
    }

    public getDateIntervalInTimestamp(dayStart: number, dayEnd: number) { // today is dayStart = 1, tomorrow is dayStart = 2 ...
        const date = new Date();
        const timestamp = date.getTime();
        const ms = date.getMilliseconds();
        const s = date.getSeconds();
        const m = date.getMinutes();
        const h = date.getHours();

        const dayStartInTimestamp = dayStart * (timestamp
            - this.hourToMilliSeconds(h)
            - this.minToMilliSeconds(m)
            - this.secondToMilliSeconds(s)
            - ms);
        const dayEndInTimestamp = dayStartInTimestamp + (dayEnd * this.hourToMilliSeconds(24));

        return [dayStartInTimestamp, dayEndInTimestamp];
    }

    public getTimestamp() {
        return new Date().getTime();
    }

    public getDate() {
        return new Date().getDate();
    }

    public dateToTimestamp(date: string) {
        return new Date(date).getTime();
    }

    public normalizeMonthOrDayString(monthOrDayValue: number) {
        const monthOrDayString = '' + monthOrDayValue;
        if (monthOrDayString.split('').length < 2) {
            return '0' + monthOrDayString;
        }

        return monthOrDayString;
    }

    public setFavicon(img: HTMLImageElement) {
        const link = document.querySelector('link[rel*=\'icon\']') || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = img;
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    public addClassToElement(elmt: string, className: string): void {
        $(elmt).addClass(className);
    }

    public removeClassToElement(elmt: string, className: string): void {
        $(elmt).removeClass(className);
    }

    public showCollapse(collapseId: string): void {
        $(collapseId).collapse('show');
    }

    public isStringEmpty(string: string): boolean {
        return string === '';
    }

    public isEmail(email: string): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email.toLowerCase());
    }

    public isNull(elmt: any): boolean {
        return elmt === null;
    }

    public isUndefined(elmt: any): boolean {
        return elmt === undefined;
    }

    public hashStringMd5(string: string): string {
        const h = Crypto.createHash('md5');
        h.update(string);

        return h.digest('hex');
    }
}

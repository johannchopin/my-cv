export default class Helper {
    public static deleteElementFromArray(array, elementIndex: number) {
        const arrayCopy = array.slice();
        arrayCopy.splice(elementIndex, 1);

        return arrayCopy;
    }

    public static getArrayWithUpdatedElement(array, elementIndex: number, updatedElement) {
        const arrayCopy = array.slice();
        arrayCopy[elementIndex] = updatedElement;

        return arrayCopy;
    }

    public static secondToMilliSeconds(second: number) {
        return second * 1000;
    }

    public static minToMilliSeconds(min: number) {
        return min * this.secondToMilliSeconds(60);
    }

    public static hourToMilliSeconds(hour: number) {
        return hour * this.minToMilliSeconds(60);
    }

    public static timestampToValidFullDate(timestamp) { // valid full-date take the format YYYY-MM-DD
        const date = new Date(timestamp);
        const day = date.getUTCDate();
        const month = date.getMonth() + 1; // januar is month 0
        const year = date.getFullYear();

        return year + '-' + this.normalizeMonthOrDayString(month) + '-' + this.normalizeMonthOrDayString(day);
    }

    public static getDateIntervalInTimestamp(dayStart: number, dayEnd: number) { // today is dayStart = 1, tomorrow is dayStart = 2 ...
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

    public static getTimestamp() {
        return new Date().getTime();
    }

    public static getDate() {
        return new Date().getDate();
    }

    public static dateToTimestamp(date: string) {
        return new Date(date).getTime();
    }

    public static normalizeMonthOrDayString(monthOrDayValue: number) {
        const monthOrDayString = '' + monthOrDayValue;
        if (monthOrDayString.split('').length < 2) {
            return '0' + monthOrDayString;
        }

        return monthOrDayString;
    }

    public static addClassToElement(elmt: string, className: string): void {
        $(elmt).addClass(className);
    }

    public static removeClassToElement(elmt: string, className: string): void {
        $(elmt).removeClass(className);
    }

    public static showCollapse(collapseId: string): void {
        $(collapseId).collapse('show');
    }

    public static isStringEmpty(string: string): boolean {
        return string === '';
    }

    public static isEmail(email: string): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email.toLowerCase());
    }

    public static isNull(elmt: any): boolean {
        return elmt === null;
    }

    public static isUndefined(elmt: any): boolean {
        return elmt === undefined;
    }

    public static isSet(elmt: any): boolean {
        return !this.isUndefined(elmt) && !this.isNull(elmt);
    }

    public static getUserReputation = (rep: number): string => {
        if (rep >= 1_000_000) return `${(Math.round(rep / 100_000) / 10).toFixed(1)}m`
        if (rep >= 100_000) return `${Math.round(rep / 1000)}k`
        if (rep >= 10_000) return `${(Math.round(rep / 100) / 10).toFixed(1)}k`
        if (rep >= 1000) return (rep / 1000).toFixed(3).replace('.', ',')
      
        return rep.toString()
      }
}

export class Screen {
    constructor() {
        this.width = this.GetClientWidth();
        this.height = this.GetClientHeight();
    }

    GetClientWidth() {
        return document.body.clientWidth;
    }

    GetClientHeight() {
        return document.body.clientHeight;
    }
}
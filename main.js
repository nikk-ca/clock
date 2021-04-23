export class Clock {
    _src;
    _m = 0;
    _a = 0;

    constructor(source = Date) {
        this._src = source;
    }

    get rate() {
        return this._m;
    }
    set rate(m) {
        this._a += (this._m - m) * this._src.now();
        this._m = m;
    }

    now() {
        return this._m * this._src.now() + this._a;
    }
}

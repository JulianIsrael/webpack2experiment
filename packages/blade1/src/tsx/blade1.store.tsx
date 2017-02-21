import { observable, action } from 'mobx';

interface Counters {
    count1?: number
    count2?: number
}

export default class Blade1Store {
    @observable counters: Counters;

    constructor(props: Counters = {}) {
        const {count1, count2} = props;
        this.counters = {
            count1: (count1) ? count1 : 0,
            count2: (count2) ? count2 : 0,
        }
    }

    updateState(props: Counters = {}) {
        this._setState(props);
    }

    _setState({count1, count2}: Counters) {
        this.counters.count1 = (count1) ? count1 : 0;
        this.counters.count2 = (count2) ? count2 : 0;
    }

    countUp() {
        this.counters.count1++;
        this.counters.count2++;
    }

    countDown() {
        this.counters.count1--;
        this.counters.count2--;
    }

}
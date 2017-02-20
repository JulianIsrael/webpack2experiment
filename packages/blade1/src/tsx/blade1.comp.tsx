import * as React from 'react';
import { observer } from 'mobx-react';
import Blade1Store from './blade1.store';

interface OwnProps {
    store: Blade1Store
}

@observer
export default class Blade1Comp extends React.Component<OwnProps, any> {
    private store: Blade1Store;

    componentWillMount() {
        this.store = this.props.store;
    }

    render() {
        const {counters: {count1, count2}} = this.store;
        return (
            <div>
                <h1> Blade1 </h1>
                count1: {count1}
                count2: {count2}
                <button onClick={() => this.store.countUp()}> CountUp </button>
                <button onClick={() => this.store.countDown()}> CountDown </button>
            </div>
        );
    }

}

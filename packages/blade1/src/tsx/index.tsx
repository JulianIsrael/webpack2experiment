import * as React from 'react';

import Blade1Store from './blade1.store';
import Blade1Comp from './blade1.comp';

interface OwnState {
    store: Blade1Store
};

export default class Blade1 extends React.Component<any, OwnState>{

    componentWillMount() {
        this.setState({ store: new Blade1Store(this.props) });
    }

    componentWillReceiveProps(nextProps: any) {
        this.state.store.updateState(nextProps);
    }

    render() {
        return (
            <Blade1Comp store={this.state.store} />
        );
    }

}
import React from 'react';
import {
    Button,
    View,
} from 'react-native';

import Analytics from './Analytics';


class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        // console.log(Analytics.sharedInstance.mixpanel);
       // Analytics.sharedInstance.mixpanel.track('Test from new');
    }

    render() {
        return (
            <View>
                <Button title="Test Button" onPress={this.handleClick} />
            </View>
        )
    }

}

export default Test;
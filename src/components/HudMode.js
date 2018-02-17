import React from 'react';
import Condition from './HudMode/Condition';

export default class HudMode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            condition: 100,
            todo: [1,2,3,4,5],
            complete: [1,2,3]
        }
    }

    calculateCondition = () => {
        let newConditon = 0;
        if (this.tasks) {
            const taskCount = this.tasks.count;
            const completeCount = this.complete.count? this.complete.count * .1 : 0;
            newConditon = taskCount * completeCount;
        }


        this.setState(() => ({
            condition: newConditon
        }));
    }


    componentDidMount() {
        try {
            this.calculateCondition();
        } catch (e) {
            // Do nothing at all
        }
    }



    render() {
        return (
            <div>
                <Condition
                condition={this.state.condition}
                calculateCondition={this.calculateCondition}
                 />
            </div>
        );
    }
}
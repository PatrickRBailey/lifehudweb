import React, { Component } from 'react';
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
        if (this.state.todo) {
            console.log('We have todos');
            const taskCount = this.state.todo.length;
            const completeCount = this.state.complete.length? this.state.complete.length : 0;
            newConditon = (completeCount/taskCount) * 100;
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

                 />
            </div>
        );
    }
}
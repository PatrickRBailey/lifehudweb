import React, { Component } from 'react';
import Condition from './HudMode/Condition';
import Tasks from './HudMode/Tasks';

export default class HudMode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            condition: 100,
            todo: ['Shower', 'Coffee', 'Blog Posts', 'Trash Can'],
            complete: ['Feed Fluffy', 'Exercise', 'Sleep']
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
                 <Tasks 
                 todo={this.state.todo}
                 complete={this.state.complete}
                 />
            </div>
        );
    }
}
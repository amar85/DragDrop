import React from 'react'
import Sortable from '../sortable/Sortable';
import Block from './Block'

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        var rows = [];
        var data = [
            {
                temperature: '67 F',
                city: 'San Francisco'
            }, {
                temperature: '78 F',
                city: 'Santa Barbara'
            }, {
                temperature: '80 F',
                city: 'Long Beach'
            }, {
                temperature: '82 F',
                city: 'San Diego'
            }
        ];

        data.forEach(function(key){
            rows.push (<Block key={key.city} city={key.city} temp={key.temperature} />);
        })

        return (
            <div>
                <div>
                    <div>
                        <h3> React Drag and Drop using  React Sortable HOC</h3>
                        <br />
                    </div>
                </div>
                <div >
                    <Sortable items={rows} >{{ rows }} </Sortable>
                </div>
            </div>
        )
    }
}
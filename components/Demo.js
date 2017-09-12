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
            }
            , {
                temperature: '82 F',
                city: 'San Diego'
            }
        ];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {               
                rows.push(<Block key={key} city={JSON.stringify(data[key].city).replace(/"/g, "")} temp={JSON.stringify(data[key].temperature).replace(/"/g, "")} />);
            }
        }
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
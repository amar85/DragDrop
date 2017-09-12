import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => <div>{value}</div>);

const SortableList = SortableContainer(({ items }) => {
  return (

    <div>
      {items.map((value, index) => (
        <SortableItem key={value.key} index={index} value={value} />
      ))}
    </div>
  );
});

export default class SortableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [] };
    this.onSortEnd = this.onSortEnd.bind(this);
  };

  onSortEnd({ oldIndex, newIndex }) {
    var rowsArray = this.props.items;

    Array.prototype.move = function (oldIndex, newIndex) {
      this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);
    };
    rowsArray.move(oldIndex, newIndex)

    this.setState({
      rows: arrayMove(rowsArray, oldIndex, newIndex),
    });
  };

  render() {
    /*
    By default, react-sortable-hoc is triggered immediately on mousedown. If you'd like to prevent this behaviour, there are a number of strategies readily available. 
    You can use the distance prop to set a minimum distance (in pixels) to be dragged before sorting is enabled. 
    https://github.com/clauderic/react-sortable-hoc
    */
    return <SortableList items={this.props.items} onSortEnd={this.onSortEnd} distance={5} />

  }
}
import * as FontAwesome from 'react-fontawesome';
import * as React from 'react';
import './searchBar.css';
import './searchBar_mobile.css';

interface Props {
    message: string;
    animate: boolean;
}

export default class SearchBar extends React.Component<Props> {

    printMessage(nodeInput: any) {
        if (!nodeInput)
            return;

        nodeInput.innerHTML = "";

        const {message, animate} = this.props;

        if (message !== null && nodeInput !== null) {
            if (animate === false) {
                nodeInput.innerHTML = message;
            } else {
                const myArray = message.split('');
                const add = (index: number): void => {
                    nodeInput.innerHTML = nodeInput.innerHTML + myArray[index++];
                    if (index < myArray.length) {
                        setTimeout(() => add(index), 60);
                    }
                };
                setTimeout(() => add(0), 500);

            }
        }
    }

    render() {
        if (!this.props.message) {
            return "Loading...";
        }
        return (
            <div className="search-bar">
                <div className="buttons">
                    <FontAwesome name="search" className="search-magnifier"/>
                </div>
                <div
                    className="search"
                    ref={(el) => this.printMessage(el)}
                />
            </div>
        );
    }
}

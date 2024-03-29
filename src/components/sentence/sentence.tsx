import * as React from 'react';
import './sentence.css';

interface Props {
    image: string,
    startSentence: string,
    endSentences: Array<string>
}

class Sentence extends React.Component<Props> {

    readonly TIMEOUT_SECONDS = 1.7;

    sentenceContainer: any;
    startSentence: any;
    endSentence: any;
    index: number = 0;
    intervalId: NodeJS.Timer;

    componentDidMount() {
        if (this.startSentence && this.endSentence) {
            this.start();
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    start() {
        this.changeWord();
        this.sentenceContainer.style.backgroundImage = 'url(' + this.props.image + ')';
        this.startSentence.innerHTML = this.props.startSentence;
        this.intervalId = setInterval(this.changeWord, this.TIMEOUT_SECONDS * 1000);
    }

    changeWord() {
        if (!this.startSentence || !this.endSentence) {
            return;
        }

        this.index = (this.index < 0 || this.index >= this.props.endSentences.length) ? 0 : this.index;
        this.endSentence.innerHTML = this.props.endSentences[this.index];
        this.index++;
    }

    render() {
        return (
            <div className="sentence-container">
                <div
                    className="sentence"
                    ref={(el) => {
                        this.sentenceContainer = el;
                    }}
                />
                <div className="text-container">
                    <div className="center">
                        <p
                            className="startSentence"
                            ref={(el) => {
                                this.startSentence = el;
                            }}
                        />
                        <p
                            className="endSentence"
                            ref={(el) => {
                                this.endSentence = el;
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sentence;

import React from 'react';
import coverImg from '../../../public/assets/img/thursday.jpg';
import classNames from 'classnames';

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Repeat'
]

class Cover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Thursday',
            selected: 'Thursday'
        }
    }
    handleMouseEnter(day) {
        this.setState({ title: day })
    }
    handleClick(day) {
        this.setState({ selected: day })
    }
    handleMouseLeave() {
        this.setState({ title: this.state.selected })
    }
    renderCubes() {
        let cubes = [];
        days.forEach((day, i) => {
            const cubeClasses = classNames('wk-cover__cube', `wk-cover__cube-${i}`, {
                'wk-cover__cube--selected': this.state.selected === day
            });
            cubes.push(
                <span 
                    className={cubeClasses} 
                    key={`cube-${i}`}
                    onMouseEnter={() => this.handleMouseEnter(day)}
                    onMouseLeave={() => this.handleMouseLeave()}
                    onClick={() => this.handleClick(day)}
                ></span>
            );
        }); 
        return cubes;
    }
    render() {
        return (
            <div className="wk-cover">
                <div className="wk-cover__wrapper">
                    <header className="wk-cover__heading">
                        TheWeeknd
                    </header>
                    <div className="wk-cover__label">
                        {this.renderCubes()}
                        <span className="wk-cover__sub-heading">
                            {this.state.title}
                        </span>
                    </div>
                    <div className="wk-cover__items">
                        1 LONELY STAR 2 LIFE OF THE PARTY 3 THURSDAY 4 THE ZONE 5 THE BIRDS PART ONE 6 THE BIRDS PART TWO 7 GONE 8 ROLLING STONE 9 HEAVEN OR LAS VEGAS
                    </div>
                </div>
                <img className="wk-cover__img" src={coverImg} alt="Thursday girl." />
                <footer className="wk-cover__footer">
                    <div className="wk-cover__footer-cubes">
                        {this.renderCubes().reverse()}
                    </div>
                    <div className="wk-cover__copyright">
                        &copy;records
                    </div>
                </footer>
            </div>
        );
    }
   
};

export default Cover;
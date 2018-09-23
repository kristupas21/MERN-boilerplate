import React from 'react';
import coverImg from '../../../public/assets/img/thursday.jpg';

const Cover = () => {
    const renderCubes = () => {
        let cubes = [];
        for (let i = 0; i < 8; i++) {
            cubes.push(
                <span className={` wk-cover__cube wk-cover__cube-${i}`} key={`cube-${i}`}></span>
            );
        }
        return cubes;
    }

    return (
        <div className="wk-cover">
            <div className="wk-cover__wrapper">
                <header className="wk-cover__heading">
                    TheWeeknd
                </header>
                <div className="wk-cover__label">
                    {renderCubes()}
                    <span className="wk-cover__sub-heading">
                        Thursday
                    </span>
                </div>
                <div className="wk-cover__items">
                    1 LONELY STAR 2 LIFE OF THE PARTY 3 THURSDAY 4 THE ZONE 5 THE BIRDS PART ONE 6 THE BIRDS PART TWO 7 GONE 8 ROLLING STONE 9 HEAVEN OR LAS VEGAS
                </div>
            </div>
            <img className="wk-cover__img" src={coverImg} alt="Thursday girl." />
            <footer className="wk-cover__footer">
                <div className="wk-cover__footer-cubes">
                    {renderCubes().reverse()}
                </div>
                <div className="wk-cover__copyright">
                    &copy;records
                </div>
            </footer>
        </div>
    );
};

export default Cover;
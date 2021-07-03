import React, { useContext } from 'react';
import { UserContext, ThemeContext } from './../../../App';

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    (name) => {
                        return (
                            <ThemeContext.Consumer>
                                {
                                    (theme_color) => {
                                        return <div>Component F {name}, {theme_color}</div>
                                    }
                                }
                            </ThemeContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF;
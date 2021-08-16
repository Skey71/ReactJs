import React from 'react'
import './index.css';

export const Message = ({ text }) => {
    return (
        <div className="Message">
            <p className="Message-text">
                Project: {text}
            </p>
        </div>
    )
}

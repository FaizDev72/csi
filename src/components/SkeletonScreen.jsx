import React from 'react';

const SkeletonScreen = () => {
    return (
        <div className="skeleton-screen">
            <style>
                {`
                    .skeleton-screen {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: white;
                        z-index: 9999;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }
                    .skeleton {
                        background-color: #e0e0e0;
                        border-radius: 4px;
                        animation: pulse 1.5s infinite ease-in-out;
                    }
                    .skeleton-header {
                        height: 40px;
                        width: 80%;
                    }
                    .skeleton-paragraph {
                        height: 20px;
                        width: 100%;
                    }
                    .skeleton-paragraph-short {
                        width: 60%;
                    }
                    @keyframes pulse {
                        0% { opacity: 1; }
                        50% { opacity: 0.5; }
                        100% { opacity: 1; }
                    }
                `}
            </style>
            <div className="skeleton skeleton-header"></div>
            <div className="skeleton skeleton-paragraph"></div>
            <div className="skeleton skeleton-paragraph"></div>
            <div className="skeleton skeleton-paragraph skeleton-paragraph-short"></div>
        </div>
    );
};

export default SkeletonScreen;

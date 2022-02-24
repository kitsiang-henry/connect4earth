import React from 'react';
import Introduction from './Introduction';
import SeaLevelRiseSummary from './SeaLevelRiseSummary';
import DashboardSummary from './DashboardSummary';
import QuizSummary from './QuizSummary';
import InstagramSummary from './InstagramSummary';
import { Steps, Hints } from 'intro.js-react';

function HomeMain() {
    return(
        <div>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" />
            </head>
            <Introduction />
            <SeaLevelRiseSummary />
            <DashboardSummary />
            <QuizSummary />
            <InstagramSummary />
        </div>
    )
}

export default HomeMain;
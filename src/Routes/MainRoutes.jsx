import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { LINKS } from 'utils';
import {
  Faq,
  Home,
  DnaQuestionare,
  HealthQuestionare,
  Booking,
  HealthScore,
  LearnMore,
  OverView,
  Support,
  Private,
  Terms,
} from 'pages';

function MainRoutes() {
  const {
    BOOKING,
    LEARN_MORE,
    OVERVIEW,
    SUPPORT,
    FAQ,
    HOME,
    PRIVATE,
    TERMS,
    HEALTH_SCORE,
    QUESTIONARE,
    DNA_QUESTIONARE,
  } = LINKS;

  return (
    <Router>
      <Switch>
        <Route exact path={DNA_QUESTIONARE} component={DnaQuestionare} />
        <Route exact path={FAQ} component={Faq} />
        <Route exact path={LEARN_MORE} component={LearnMore} />
        <Route exact path={SUPPORT} component={Support} />
        <Route exact path={OVERVIEW} component={OverView} />
        <Route exact path={HOME} component={Home} />
        <Route exact path={PRIVATE} component={Private} />
        <Route exact path={TERMS} component={Terms} />
        <Route exact path={BOOKING} component={Booking} />
        <Route exact path={QUESTIONARE} component={HealthQuestionare} />
        <Route exact path={HEALTH_SCORE} component={HealthScore} />
      </Switch>
    </Router>
  );
}

export default MainRoutes;

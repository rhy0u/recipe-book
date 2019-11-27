import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import NavBar from 'client/components/NavBar'
import styled from '@xstyled/styled-components'
import * as routePaths from 'client/utils/routePaths'
import * as Routes from 'client/routes'

const PageWrapper = styled.div`
  padding: 60px 16px 0 16px;

  .page {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 15px;
    right: 15px;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`

const App = () => {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <Route exact path={routePaths.home()}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Routes.Home />
              </div>
            </CSSTransition>
          )}
        </Route>
        <Route path={routePaths.addRecipe()}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Routes.AddRecipe />
              </div>
            </CSSTransition>
          )}
        </Route>
      </PageWrapper>
    </>
  )
}

export default App

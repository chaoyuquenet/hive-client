import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

import HSection from 'components/HSection';
import LoginForm from 'components/LoginForm';
import LoginAddress from 'components/LoginAddress';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <HSection
      height='300px'
      bgColor='#253338'
      fgColor='#b2b2b5'
    >
      Abbeal
    </HSection>
    <HSection
      height='300px'
      bgColor='#253338'
      fgColor='#b2b2b5'
    >
      <LoginForm/>
    </HSection>
    <HSection
      height='300px'
      bgColor='#253338'
      fgColor='#b2b2b5'
    >
      <LoginAddress title='LA RUCHE PARIS'>
      1 rue du Mail<br/>
      75002 Paris<br/>
      <a href='mailto:contact@abbeal.com'>contact@abbeal.com</a>
      </LoginAddress>

      <LoginAddress title='LA RUCHE LYON'>
      La Cordée Charpennes<br/>
      26 rue Henri Rolland<br/>
      69100 Villeurbanne<br/>
      <a href='mailto:contact@abbeal.com'>contact@abbeal.com</a>
      </LoginAddress>

      <LoginAddress title='RESEAUX SOCIAUX'>
      <a href='https://twitter.com/abbealbzzz'>Twitter</a><br/>
      <a href='https://m.facebook.com/abbealbzzz'>Facebook</a><br/>
      <a href='https://linkedin.com/company-beta/9269820'>Linkedin</a><br/>
      <a href='https://viadeo.com/fr/company/abbeal'>Viadéo</a><br/>
      </LoginAddress>

    </HSection>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {muiTheme} from 'storybook-addon-material-ui';

import Button from './Button';
import Welcome from './Welcome';
import HSection from '../src/components/HSection';
import LoginForm from '../src/components/LoginForm';
import LoginAddress from '../src/components/LoginAddress';
import MainMenu from '../src/components/MainMenu';
import News from '../src/components/News';
import Profil from '../src/components/Profil';
import ProfilCompetences from '../src/components/ProfilCompetences';
import ProfilMissions from '../src/components/ProfilMissions';
import Recherche from '../src/components/Recherche';
import ProfilPhotos from '../src/components/ProfilPhotos';
import Administration from '../src/components/Administration';

const materialAbbealTheme = {
    themeName: 'Abbeal Theme',
    palette: {
        primary1Color: '#7ec34d',
        alternateTextColor: '#fff',
        canvasColor: '#253338',
        textColor: '#fff',
        secondaryTextColor: '#fff',
        disabledColor: '#757575',
        accent1Color: '#607d8b',
    },
};


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('HSection', module)
  .addDecorator(muiTheme([materialAbbealTheme]))
  .add('200px Empty', () =>
    <HSection
      height='200px'
      bgColor='#36474f'
    />)
  .add('300px with Text', () =>
    <HSection
      height='300px'
      bgColor='#253338'
      fgColor='#b2b2b5'
    >
      Abbeal
    </HSection>)
  .add('400px with custom content', () =>
    <HSection
      height='400px'
      bgColor='#253338'
      fgColor='#b2b2b5'
    >
      <img
        src='http://www.abbeal.com/wp-content/themes/abbeal/images/groupe-6.png'
      />
    </HSection>)
  .add('With login form', () =>
    <HSection
      height='400px'
      bgColor='#253338'
      fgColor='#b2b2b5'
    >
      <LoginForm />
    </HSection>)
  .add('With login address', () =>
    <HSection
      height='400px'
      bgColor='#253338'
      fgColor='#b2b2b5'
    >
      <LoginAddress />
    </HSection>)

storiesOf('LoginForm', module)
  .addDecorator(muiTheme([materialAbbealTheme]))
  .add('default', () =>
    <LoginForm/>
);

storiesOf('LoginAddress', module)
  .add('default',() =>
    <LoginAddress title='LA RUCHE PARIS'>
    Hello
    </LoginAddress>
);

storiesOf('LoginWindow', module)
  .addDecorator(muiTheme([materialAbbealTheme]))
  .add('default', () =>
    <div>
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
  );

storiesOf('MainMenu', module)
    .addDecorator(muiTheme([materialAbbealTheme]))
    .add('default', () =>
      <div>
        <MainMenu />
      </div>
);

storiesOf('News', module)
  .addDecorator(muiTheme([materialAbbealTheme]))
  .add('default', () =>
    <div>
      <News title={'Le contrôle Urssaf à la Ruche'} author={'Anthony Guyot'}>
        Contenu de la news
      </News>
    </div>
);

storiesOf('Profil', module)
  .addDecorator(muiTheme([materialAbbealTheme]))
  .add('default', () =>
    <div>
      <Profil />
    </div>
);

storiesOf('ProfilCompetences', module)
  .addDecorator(muiTheme([materialAbbealTheme]))
  .add('default', () =>
    <div>
      <ProfilCompetences />
    </div>
);

storiesOf('ProfilWindow', module)
  .addDecorator(muiTheme([materialAbbealTheme]))
  .add('default', () =>
    <div>
      <HSection
        height='300px'
        bgColor='#253338'
        fgColor='#b2b2b5'
      >
        <h1> Anthony Guyot </h1>
        <p> Développeur Web </p>
      </HSection>
      <HSection
        height='400px'
        bgColor='#253338'
        fgColor='#b2b2b5'
      >
        0677123539<br/>
        <a href='anthony.guyot@abbeal.com'>contact@abbeal.com</a><br/>
        <br/>
        15 résidence de la Gare<br/>
        78125-Gazeran<br/>
      </HSection>

    </div>
);

storiesOf('ProfilMissions', module)
  .addDecorator(muiTheme([materialAbbealTheme]))
  .add('default', () =>
    <div>
      <ProfilMissions />
    </div>
);

storiesOf('Recherche', module)
      .addDecorator(muiTheme([materialAbbealTheme]))
      .add('default', () =>
        <div>
          <Recherche />
        </div>

);

storiesOf('ProfilPhotos', module)
    .addDecorator(muiTheme([materialAbbealTheme]))
    .add('default', () =>
      <div>
        <ProfilPhotos />
      </div>
);

storiesOf('Administration', module)
    .addDecorator(muiTheme([materialAbbealTheme]))
    .add('default', () =>
      <div>
        <Administration />
      </div>
);

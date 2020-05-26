import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButton,
  IonMenuButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { book, person, people, settings, document, briefcase, home, exit } from 'ionicons/icons';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import ClientsList from './pages/clients/ClientsList';
import ClientNew from './pages/clients/ClientNew';
import ClientEdit from './pages/clients/ClientEdit';
import EmployeesList from './pages/employees/EmployeesList';
import Reports from './pages/reports/Reports';
import SchedulingList from './pages/scheduling/SchedulingList';
import SchedulingCreate from './pages/scheduling/SchedulingCreate';
import SchedulingEdit from './pages/scheduling/SchedulingEdit';
import ServicesList from './pages/services/ServicesList';
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './assets/css/App.css';

const App: React.FC = () => (
  <IonApp>
    <IonMenu side="start" content-id="main-content">
      <IonHeader>
        <IonToolbar >
          <IonTitle>Metron</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/home">
            <IonIcon icon={home} slot="start"></IonIcon>
            <IonLabel>Início</IonLabel>
          </IonItem>
          <IonItem routerLink="/schedulinglist">
            <IonIcon icon={book} slot="start"></IonIcon>
            <IonLabel>Agendamentos</IonLabel>
          </IonItem>
          <IonItem routerLink='/clientslist'>
            <IonIcon icon={person} slot="start"></IonIcon>
            <IonLabel>Clientes</IonLabel>
          </IonItem>
          <IonItem routerLink='/employeeslist'>
            <IonIcon icon={people} slot="start"></IonIcon>
            <IonLabel>Funcionários</IonLabel>
          </IonItem>
          <IonItem routerLink="/serviceslist">
            <IonIcon icon={briefcase} slot="start"></IonIcon>
            <IonLabel>Serviços</IonLabel>
          </IonItem>
          <IonItem routerLink="/reports">
            <IonIcon icon={document} slot="start"></IonIcon>
            <IonLabel>Relatórios</IonLabel>
          </IonItem>
          <IonItem routerLink="/settings">
            <IonIcon icon={settings} slot="start"></IonIcon>
            <IonLabel>Configurações</IonLabel>
          </IonItem>
          <IonItem routerLink="/login">
            <IonIcon icon={exit} slot="start"></IonIcon>
            <IonLabel>Sair</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <div id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButton>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonButton expand="block">Open Menu</IonButton>
      </IonContent>
    </div>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} />
        <Route path="/clientslist" component={ClientsList} />
        <Route path="/clients/new" component={ClientNew} />
        <Route path="/clients/edit" component={ClientEdit} />
        <Route path="/employeeslist" component={EmployeesList} />
        <Route path="/reports" component={Reports} />
        <Route path="/serviceslist" component={ServicesList} />
        <Route path="/schedulinglist" component={SchedulingList} />
        <Route path="/schedulingcreate" component={SchedulingCreate} />
        <Route path="/schedulingedit" component={SchedulingEdit} />
        <Route path="/settings" component={Settings} />
        <Route path="/home" component={Home} />
        <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

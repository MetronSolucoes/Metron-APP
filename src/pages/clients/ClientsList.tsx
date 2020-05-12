import React from 'react';
import {
  IonContent,
  IonItem,
  IonPage,
  IonInput,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonMenuButton,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { walk, filter, add } from 'ionicons/icons';
import { Menu } from '../../components/Menu';

const ClientsList: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButton slot="start">
            <IonMenuButton auto-hide="false"></IonMenuButton>
          </IonButton>
          <IonButton slot="primary">
            <IonIcon icon={filter} />
          </IonButton>
          <IonTitle class="text-center">Clientes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonCard>
            <IonRow>
              <IonCol >
                <IonCardHeader>
                  <IonCardTitle>João Silva</IonCardTitle>
                  <IonCardSubtitle>(14) 99999-9999</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>joaosilva@gmail.com</IonCardContent>
              </IonCol>
              <IonCol>
                <IonButton fill="outline">Ver</IonButton>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonFab horizontal="end" vertical="bottom">
            <IonFabButton>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ClientsList
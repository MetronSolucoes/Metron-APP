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

const ServicesList: React.FC = () => {
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
          <IonTitle class="text-center">Serviços</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonCard>
            <IonRow>
              <IonCol >
                <IonCardHeader>
                  <IonCardTitle>Corte de Barba</IonCardTitle>
                  <IonCardSubtitle>30 minutos</IonCardSubtitle>
                </IonCardHeader>
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

export default ServicesList
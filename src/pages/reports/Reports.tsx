import React from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonButtons
} from '@ionic/react';

const Reports: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton auto-hide="false"></IonMenuButton>
          </IonButtons>
          <IonTitle class="text-center">Relatórios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Reports
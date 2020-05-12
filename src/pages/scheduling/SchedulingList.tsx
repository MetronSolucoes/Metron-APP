import React, { useState } from 'react';
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
  IonFabButton,
  IonFab,
  IonActionSheet
} from '@ionic/react';
import { walk, filter, add, trash, create, createOutline, trashOutline } from 'ionicons/icons';
import { Menu } from '../../components/Menu';
import { Script } from 'vm';

const SchedulingList: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
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
          <IonTitle class="text-center">Agendamentos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonCard>
            <IonRow>
              <IonCol >
                <IonCardHeader>   
                  <IonCardTitle>João Silva</IonCardTitle>
                  <IonCardSubtitle>Corte de Barba</IonCardSubtitle>
                  <IonCardSubtitle>(14) 99999-9999</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>joaosilva@gmail.com</IonCardContent>
              </IonCol>
              <IonFab horizontal="end">
                <IonButton onClick={() => setShowActionSheet(true)} expand="block" fill="outline">Ver</IonButton>
                <IonActionSheet
                  isOpen={showActionSheet}
                  onDidDismiss={() => setShowActionSheet(false)}
                  buttons={[
                  {
                    text: 'Excluir',
                    icon: trashOutline
                  }, {
                    text: 'Editar',
                    icon: createOutline   
                  }]}
                >
                </IonActionSheet>
              </IonFab>
            </IonRow>
          </IonCard>

          <IonFab horizontal="end" vertical="bottom">
            <IonFabButton routerLink="/schedulingcreate">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SchedulingList
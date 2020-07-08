import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
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
  IonIcon,
  IonButton,
  IonMenuButton,
  IonFab,
  IonFabButton,
  IonButtons,
  IonActionSheet,
  IonList
} from '@ionic/react';
import { filter, add, ellipsisVertical, trashOutline, createOutline } from 'ionicons/icons';

const ServicesList: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton auto-hide="false"></IonMenuButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon icon={filter} />
            </IonButton>
          </IonButtons>
          <IonTitle class="text-center">Serviços</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonList>
            <IonCard>
              <IonRow>
                <IonCol >
                  <IonCardHeader>
                    <IonCardTitle>Corte de Barba</IonCardTitle>
                    <IonCardSubtitle>30 minutos</IonCardSubtitle>
                  </IonCardHeader>
                </IonCol>
                <IonFab horizontal="end" vertical="top">
                  <IonButtons>
                    <IonButton onClick={() => setShowActionSheet(true)}>
                      <IonIcon icon={ellipsisVertical} />
                    </IonButton>
                  </IonButtons>
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
          </IonList>

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
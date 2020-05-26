import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  IonToast,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonMenuButton,
  IonFabButton,
  IonFab,
  IonActionSheet,
  IonButtons,
  IonList
} from '@ionic/react';
import { filter, add, createOutline, trashOutline, ellipsisVertical } from 'ionicons/icons';

const SchedulingList: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('')
  const [showActionSheet, setShowActionSheet] = useState(false);
  const history = useHistory()

  const edit = () => {
    history.push('/schedulingedit')
  }

  const destroy = () => {
    setToastMessage('Agendamento excluído com sucesso')
    setShowToast(true)
  }

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
          <IonTitle class="text-center">Agendamentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonList>
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
                        icon: trashOutline,
                        handler: () => {
                          destroy()
                        }
                      }, {
                        text: 'Editar',
                        icon: createOutline,
                        handler: () => {
                          edit()
                        }
                      }]}
                  >
                  </IonActionSheet>
                </IonFab>
              </IonRow>
            </IonCard>
          </IonList>
          <IonFab horizontal="end" vertical="bottom">
            <IonFabButton routerLink="/schedulingcreate">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonGrid>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default SchedulingList
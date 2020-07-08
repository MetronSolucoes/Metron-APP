import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonToast,
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
  IonFabButton,
  IonButtons,
  IonActionSheet,
  IonList
} from '@ionic/react';
import { filter, add, ellipsisVertical, trashOutline, createOutline } from 'ionicons/icons';

const EmployeesList: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const history = useHistory()

  const edit = () => {
    history.push('/employes/edit')
  }

  const destroy = () => {
    setToastMessage('Funcionário excluído com sucesso')
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
            <IonButton routerLink="/employeesfilter">
              <IonIcon icon={filter} />
            </IonButton>
          </IonButtons>
          <IonTitle class="text-center">Funcionários</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonList>
            <IonCard>
              <IonRow>
                <IonCol >
                  <IonCardHeader>
                    <IonCardTitle>Luiz Gomes</IonCardTitle>
                    <IonCardSubtitle>arbeiro aprendiz</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>(14) 99999-9999</IonCardContent>
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
            <IonFabButton routerLink="/employes/new">
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

export default EmployeesList
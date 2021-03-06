import React, { useState, useEffect } from 'react';
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

import * as service from '../../service/index'

const SchedulingList: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('')
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [schedulings, setSchedulings] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getSchedulings = async () => {
      let response = await service.metron.scheduling.get({schedulingId: '', page: '1', perPage: '100'})
      setSchedulings(response && response.data && response.data.schedulings)
    }
    
    getSchedulings()
  }, [])

  console.log(schedulings)

  const edit = () => {
    history.push('/schedulingedit')
  }

  const destroy = async (schedulingId: any) => {
    let response = await service.metron.scheduling.destroy({schedulingId: schedulingId})

    if(response.status = 200) {
      setToastMessage('Agendamento excluído com sucesso')
      setShowToast(true)
    } else {
      setToastMessage('Algo de errado aconteceu')
      setShowToast(true)
    }
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
            {schedulings && schedulings.map((scheduling) => (
              <IonCard key={scheduling.id}>
                <IonRow>
                  <IonCol >
                    <IonCardHeader>
                      <IonCardTitle>{scheduling.service.name}</IonCardTitle>
                      <IonCardSubtitle>Cliente:{scheduling.customer.name}</IonCardSubtitle>
                      <IonCardSubtitle>Funcionário:{scheduling.employe.name}</IonCardSubtitle>
                      <IonCardSubtitle>{(new Date(scheduling.start.replace(".000Z", ""))).toLocaleString()} - {(new Date(scheduling.finish.replace(".000Z", ""))).toLocaleString()}</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCol>
                  <IonFab horizontal="end" vertical="top">
                    <IonButtons>
                      <IonButton onClick={() => destroy(scheduling.id)}>
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                    </IonButtons>
                  </IonFab>
                </IonRow>
              </IonCard>
            ))}
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
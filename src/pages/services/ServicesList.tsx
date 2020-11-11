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
  IonFab,
  IonFabButton,
  IonButtons,
  IonActionSheet,
  IonList
} from '@ionic/react';
import { filter, add, ellipsisVertical, trashOutline, createOutline } from 'ionicons/icons';

import * as service from '../../service/index'

const ServicesList: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('')
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getServices = async () => {
      let response = await service.metron.service.get({serviceId: '', page: '1', perPage: '100'})
      setServices(response && response.data && response.data.services)
    }
    
    getServices()
  }, [])

  console.log(services)

  const edit = (service: any) => {
    history.push('/service/edit', service)
  }

   const destroy = async (serviceId: any) => {
    let response = await service.metron.service.destroy({serviceId: serviceId})

    if(response.status == 200) {
      setToastMessage('Serviço excluído com sucesso')
      setShowToast(true)
      history.go(0)
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
          <IonTitle class="text-center">Serviços</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonList>
            {services && services.map((service) => (
              <IonCard key={service.id}>
                <IonRow>
                  <IonCol >
                    <IonCardHeader>
                      <IonCardTitle>{service.name}</IonCardTitle>
                      <IonCardSubtitle>{service.duration} minutos</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCol>
                  <IonFab horizontal="end" vertical="top">
                    <IonButtons>
                      <IonButton onClick={() => destroy(service.id)}>
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                      <IonButton onClick={() => edit(service)}>
                        <IonIcon icon={createOutline} />
                      </IonButton>
                    </IonButtons>
                  </IonFab>
                </IonRow>
              </IonCard>
            ))}
          
          </IonList>

          <IonFab horizontal="end" vertical="bottom">
            <IonFabButton routerLink="/services/new">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ServicesList
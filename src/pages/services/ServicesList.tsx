import React, { useState, useEffect } from 'react';
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

import * as service from '../../service/index'

const ServicesList: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      let response = await service.metron.service.get({serviceId: '', page: '1', perPage: '100'})
      setServices(response && response.data && response.data.services)
    }
    
    getServices()
  }, [])

  console.log(services)


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
            ))}
          
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
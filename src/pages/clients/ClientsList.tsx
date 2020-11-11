import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
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
  IonToast,
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

const ClientsList: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [customers, setCustomers] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getCustomers = async () => {
      let response = await service.metron.customer.get({customerId: '', page: '1', perPage: '100'})
      setCustomers(response && response.data && response.data.customers)
    }
    
    getCustomers()
  }, [])

  console.log(customers)

  const edit = () => {
    history.push('/clients/edit')
  }

  const destroy = async (customerId: any) => {
    let response = await service.metron.customer.destroy({customerId: customerId})

    if(response.status = 200) {
      setToastMessage('Cliente excluído com sucesso')
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
          <IonTitle class="text-center">Clientes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonList>
            {customers && customers.map((customer) => (
              <IonCard key={customer.id}>
                <IonRow>
                  <IonCol >
                    <IonCardHeader>
                      <IonCardTitle>{customer.name} {customer.last_name}</IonCardTitle>
                      <IonCardSubtitle>{customer.phone}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>{customer.email}</IonCardContent>
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
                            destroy(customer.id)
                          }
                        }, {
                          text: 'Editar',
                          handler: () => {
                            edit()
                          },
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
            <IonFabButton routerLink="/clients/new">
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

export default ClientsList
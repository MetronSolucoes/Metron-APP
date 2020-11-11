import React, { useState } from 'react';
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
    IonCardContent,
    IonIcon,
    IonButton,
    IonMenuButton,
    IonFab,
    IonFabButton,
    IonButtons,
    IonActionSheet,
    IonList,
    IonItem,
    IonLabel,
    IonInput
} from '@ionic/react';
import { filter, add, ellipsisVertical, trashOutline, createOutline } from 'ionicons/icons';

import * as service from '../../service/index'

const EmployeesFilter: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const history = useHistory()

  const filtering = async () => {
    let names = name.split(" ")
    let response = await service.metron.employee.get({employeeId: '', page: '1', perPage: '100', name: names[0], last_name: names[1], email: email, phone:phone })

    if(response.status == 200) {
      //ver o que fazer apos o filtro retornar
      
    }
  }

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
          <IonTitle class="text-center">Funcionários</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonCard>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonItem>
                    <IonLabel position="floating">Nome</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      class="pl-2"
                      placeholder="Nome"
                      onIonChange={(e: any) => setName(e.target.value)} />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">E-mail</IonLabel>
                    <IonInput
                      type="email"
                      mode="md"
                      class="pl-2"
                      placeholder="E-mail"
                      onIonChange={(e: any) => setEmail(e.target.value)} />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Telefone</IonLabel>
                    <IonInput
                      type="tel"
                      mode="md"
                      class="pl-2"
                      inputMode="tel"
                      placeholder="(14) 99999-9999"
                      onIonChange={(e: any) => setPhone(e.target.value)} />
                  </IonItem>
                </IonCardHeader>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonFab horizontal="end" vertical="bottom">
            <IonButton shape="round" onClick={filtering}>
              <IonLabel>FILTRAR</IonLabel>
            </IonButton>
          </IonFab>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EmployeesFilter

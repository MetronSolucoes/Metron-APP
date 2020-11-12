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

const UsersList: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('')
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getUsers = async () => {
      let response = await service.metron.user.get({userId: '', page: '1', perPage: '100'})
      setUsers(response && response.data && response.data.users)
    }
    
    getUsers()
  }, [])

  console.log(users)

  const edit = (user: any) => {
    history.push('/user/edit', user)
  }

   const destroy = async (user: any) => {
    let response = await service.metron.user.destroy({userId: user})

    if(response.status == 200) {
      setToastMessage('Usuário excluído com sucesso')
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
          <IonTitle class="text-center">Usuários</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonList>
            {users && users.map((user) => (
              <IonCard key={user.id}>
                <IonRow>
                  <IonCol >
                    <IonCardHeader>
                      <IonCardTitle>{user.name}</IonCardTitle>
                      <IonCardSubtitle>{user.email}</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCol>
                  <IonFab horizontal="end" vertical="top">
                    <IonButtons>
                      <IonButton onClick={() => destroy(user.id)}>
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                      <IonButton onClick={() => edit(user)}>
                        <IonIcon icon={createOutline} />
                      </IonButton>
                    </IonButtons>
                  </IonFab>
                </IonRow>
              </IonCard>
            ))}
          
          </IonList>

          <IonFab horizontal="end" vertical="bottom">
            <IonFabButton routerLink="/users/new">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default UsersList
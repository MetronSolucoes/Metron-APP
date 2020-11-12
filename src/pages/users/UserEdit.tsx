import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  IonContent,
  IonItem,
  IonPage,
  IonInput,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonGrid,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonFab,
  IonRow,
  IonImg,
  IonButton,
  IonCol,
  IonToast
} from '@ionic/react'

import * as service from '../../service/index'

const UserEdit: React.FC = () => {
  var location:any = useLocation()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const history = useHistory()

  useEffect(() => {
    if(location.state) {
      setName(location.state.name)
      setEmail(location.state.email)
    }
  }, [location])

  const edit = async () => {
    if (name.trim() === '' || email.trim() === '') {
      setToastMessage('Preencha todos os campos')
      return setShowToast(true)
    }

    let response = await service.metron.user.put({ userId: location.state.id, name: name, email: email })

    if(response.status == 200){
      setToastMessage('Usuário atualizado com sucesso')
      setShowToast(true)
      history.push('/userslist')
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
              <IonTitle class="text-center">Editar Usuário</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonCard>
            <IonCardHeader>
              <IonRow>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Nome</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      value={name}
                      class="pl-2"
                      placeholder="Corte de cabelo"
                      onIonChange={(e: any) => setName(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">E-mail</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      value={email}
                      class="pl-2"
                      placeholder="Corta o cabelo"
                      onIonChange={(e: any) => setEmail(e.target.value)} />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonCardHeader>
          </IonCard>
         <IonFab horizontal="end" vertical="bottom">
            <IonButton onClick={edit} shape="round">Salvar</IonButton>
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
  )
}

export default UserEdit
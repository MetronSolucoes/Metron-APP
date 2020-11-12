import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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

const UserNew: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const create = async () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      setToastMessage('Preencha todos os campos')
      return setShowToast(true)
    }

    let params = {
      name: name,
      email: email,
      password: password
    }

    try{
      let response = await service.metron.user.post(params)

      setToastMessage('Usuário cadastrado com sucesso')
      setShowToast(true)
      history.push('/userslist')
      history.go(0)
    } catch(e) {
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
          <IonTitle class="text-center">Cadastrar Usuário</IonTitle>
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
                      required={true}
                      class="pl-2"
                      placeholder="João"
                      onIonChange={(e: any) => setName(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">E-mail</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      required={true}
                      class="pl-2"
                      placeholder="joão@gmail.com"
                      onIonChange={(e: any) => setEmail(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Senha</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      required={true}
                      class="pl-2"
                      placeholder=""
                      onIonChange={(e: any) => setPassword(e.target.value)} />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonCardHeader>
          </IonCard>
          <IonFab horizontal="end" vertical="bottom">
            <IonButton onClick={create} shape="round">Cadastrar</IonButton>
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

export default UserNew
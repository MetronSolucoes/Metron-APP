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

const ServiceNew: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')
  const [price, setPrice] = useState('')
  const history = useHistory()

  const create = async () => {
    if (name.trim() === '' || description.trim() === '' || duration.trim() === '', price.trim() == '') {
      setToastMessage('Preencha todos os campos')
      return setShowToast(true)
    }

    if (Number(duration) < 30) {
      setToastMessage('Duração deve ser maior ou igual 30 minutos')
      return setShowToast(true)
    }

    let params = {
      name: name,
      description: description,
      duration: duration,
      price: price.replace(',', '.')
    }

    try {
      let response = await service.metron.service.post(params)

      setToastMessage('Serviço cadastrado com sucesso')
      setShowToast(true)
      history.push('/serviceslist')
      history.go(0)
    } catch (e) {
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
          <IonTitle class="text-center">Cadastrar Serviço</IonTitle>
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
                      placeholder="Corte de cabelo"
                      onIonChange={(e: any) => setName(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Descrição</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      required={true}
                      class="pl-2"
                      placeholder="Corta o cabelo"
                      onIonChange={(e: any) => setDescription(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Duração(em minutos)</IonLabel>
                    <IonInput
                      type="number"
                      mode="md"
                      inputMode="numeric"
                      required={true}
                      class="pl-2"
                      placeholder="30"
                      onIonChange={(e: any) => setDuration(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Valor</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      inputMode="numeric"
                      required={true}
                      class="pl-2"
                      placeholder="10,00"
                      onIonChange={(e: any) => setPrice(e.target.value)} />
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

export default ServiceNew
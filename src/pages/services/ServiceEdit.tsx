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

const ServiceEdit: React.FC = () => {
  var location:any = useLocation()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')
  const history = useHistory()

  useEffect(() => {
    if(location.state) {
      setName(location.state.name)
      setDescription(location.state.description)
      setDuration(location.state.duration)
    }
  }, [location])

  const edit = async () => {
  	console.log(duration)
    if (name.trim() === '' || description.trim() === '' || String(duration).trim() === '') {
      setToastMessage('Preencha todos os campos')
      return setShowToast(true)
    }

    if (Number(duration) < 30) {
      setToastMessage('Duração deve ser maior ou igual 30 minutos')
      return setShowToast(true)
    }

    let response = await service.metron.service.put({ serviceId: location.state.id, name: name, description: description, duration: duration })

    if(response.status == 200){
      setToastMessage('Serviço atualizado com sucesso')
      setShowToast(true)
      history.push('/serviceslist')
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
              <IonTitle class="text-center">Editar Serviço</IonTitle>
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
                    <IonLabel position="floating" class="input-text-color">Descrição</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      value={description}
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
                      value={duration}
                      class="pl-2"
                      placeholder="30"
                      onIonChange={(e: any) => setDuration(e.target.value)} />
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

export default ServiceEdit
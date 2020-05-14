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

const ClientEdit: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [firstName, setFirstName] = useState('João')
  const [lastName, setLastName] = useState('Silva')
  const [phone, setPhone] = useState('(14) 99999-9999')
  const [email, setEmail] = useState('joaosilva@gmail.com')
  const [cpf, setCpf] = useState('47726598704')
  const history = useHistory()

  const edit = () => {
    if (firstName.trim() === '' || lastName.trim() === '' || phone.trim() === '' || email.trim() === '' || cpf.trim() === '') {
      setToastMessage('Preencha todos os campos')
      return setShowToast(true)
    }

    if(cpf.trim().length != 11) {
      setToastMessage('CPF inválido')
      return setShowToast(true)
    }

    if(phone.trim().length < 14 || phone.trim().length > 15) {
      setToastMessage('Telefone inválido')
      return setShowToast(true)
    }

    setToastMessage('Cliente atualizado com sucesso')
    setShowToast(true)
    history.push('/clientslist')
  }

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
              <IonButtons slot="start">
                  <IonMenuButton auto-hide="false"></IonMenuButton>
              </IonButtons>
              <IonTitle class="text-center">Editar Cliente</IonTitle>
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
                      class="pl-2"
                      value={firstName}
                      placeholder="João"
                      onIonChange={(e: any) => setFirstName(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Sobrenome</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      class="pl-2"
                      value={lastName}
                      placeholder="Bueno"
                      onIonChange={(e: any) => setLastName(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">E-mail</IonLabel>
                    <IonInput
                      type="email"
                      mode="md"
                      class="pl-2"
                      value={email}
                      placeholder="joao.bueno@example.com"
                      onIonChange={(e: any) => setEmail(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">CPF(somente os números)</IonLabel>
                    <IonInput
                      type="email"
                      mode="md"
                      class="pl-2"
                      value={cpf}
                      placeholder="47045567814"
                      onIonChange={(e: any) => setCpf(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Telefone</IonLabel>
                    <IonInput
                      type="tel"
                      mode="md"
                      class="pl-2"
                      value={phone}
                      inputMode="tel"
                      placeholder="(14) 99999-9999"
                      onIonChange={(e: any) => setPhone(e.target.value)} />
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

export default ClientEdit
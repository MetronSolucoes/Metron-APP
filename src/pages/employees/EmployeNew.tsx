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

const EmployeNew: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [office, setOffice] = useState('')
  const [email, setEmail] = useState('')
  const history = useHistory()

  const create = () => {
    if (firstName.trim() === '' || lastName.trim() === '' || phone.trim() === '' || email.trim() === '' || office.trim() === '') {
      setToastMessage('Preencha todos os campos')
      return setShowToast(true)
    }

    if (phone.trim().length < 14 || phone.trim().length > 15) {
      setToastMessage('Telefone inválido')
      return setShowToast(true)
    }

    setToastMessage('Funcionário cadastrado com sucesso')
    setShowToast(true)
    history.push('/employeeslist')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton auto-hide="false"></IonMenuButton>
          </IonButtons>
          <IonTitle class="text-center">Cadastrar Funcionário</IonTitle>
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
                      onIonChange={(e: any) => setFirstName(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Sobrenome</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      required={true}
                      class="pl-2"
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
                      required={true}
                      class="pl-2"
                      placeholder="joao.bueno@example.com"
                      onIonChange={(e: any) => setEmail(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Cargo</IonLabel>
                    <IonInput
                      type="text"
                      mode="md"
                      required={true}
                      class="pl-2"
                      placeholder="Barbeiro"
                      onIonChange={(e: any) => setOffice(e.target.value)} />
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" class="input-text-color">Telefone</IonLabel>
                    <IonInput
                      type="tel"
                      mode="md"
                      required={true}
                      class="pl-2"
                      inputMode="tel"
                      placeholder="(14) 99999-9999"
                      onIonChange={(e: any) => setPhone(e.target.value)} />
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

export default EmployeNew
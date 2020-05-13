import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { registerUser } from '../../Firebase'
import {
  IonContent,
  IonItem,
  IonPage,
  IonInput,
  IonLabel,
  IonGrid,
  IonRow,
  IonImg,
  IonButton,
  IonCol,
  IonToast
} from '@ionic/react'

const Register: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const history = useHistory()

  const register = async () => {
    if(email.trim() === '' || password.trim() === '' || cpassword.trim() === '') {
      setToastMessage('Preencha todos os campos')
      return setShowToast(true)
    }

    if (password !== cpassword) {
      setToastMessage('As senhas não coincidem')
      return setShowToast(true)
    }

    if (password.length < 6) {
      setToastMessage('A senha deve possuir no mínimo 6 caracteres')
      return setShowToast(true)
    }

    const res = await registerUser(email, password)

    if (res) {
      setToastMessage('Cadastro realizado com sucesso')
      setShowToast(true)
      history.push("/home");
    } else {
      setToastMessage('Falha ao realizar cadastro')
      return setShowToast(true)
    }
  }

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" class="d-flex justify-content-center">
              <IonImg class="img-size" src="assets/icon/metron.png" />
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating" class="pl-2 input-text-color">E-mail</IonLabel>
                <IonInput
                  type="email"
                  mode="md"
                  class="pl-2"
                  placeholder="email@example.com"
                  onIonChange={(e: any) => setEmail(e.target.value)}
                  inputmode="email" />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating" class="pl-2 input-text-color">Senha</IonLabel>
                <IonInput
                  type="password"
                  minlength={6}
                  mode="md"
                  onIonChange={(e: any) => setPassword(e.target.value)}
                  class="pl-2" />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating" class="pl-2 input-text-color">Confirme a senha</IonLabel>
                <IonInput
                  type="password"
                  minlength={6}
                  mode="md"
                  onIonChange={(e: any) => setCPassword(e.target.value)}
                  class="pl-2" />
              </IonItem>
            </IonCol>
            <IonCol size="12" class="px-3">
              <IonButton color="primary" mode="md" expand="block" onClick={register}>Registrar</IonButton>
            </IonCol>
            <IonCol size="12" class="px-3">
              <p>Já possui uma conta? <Link to="/login">Logar</Link></p>
            </IonCol>
            <IonCol size="12">
              <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={2000}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Register
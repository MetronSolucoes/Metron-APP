import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { loginUser } from '../../Firebase'
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
  IonRouterLink,
  IonToast
} from '@ionic/react'

const Login: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const login = async () => {
    if (email.trim() === '' || password.trim() === '') {
      setToastMessage('Preencha todos os campos')
      return setShowToast(true)
    }

    const res = await loginUser(email, password)

    if (res) {
      setToastMessage('Login realizado com sucesso')
      setShowToast(true)
      history.push('/schedulinglist')
    } else {
      setToastMessage('Falha ao realizar login')
      return setShowToast(true)
    }
  }

  const forgotPassword = async () => {
    setToastMessage('Uma nova senha foi encaminhada para o e-mail inserido.')
    setShowToast(true)
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
                  mode="md"
                  onIonChange={(e: any) => setPassword(e.target.value)}
                  class="pl-2" />
              </IonItem>
            </IonCol>
            <IonCol size="12" class="px-3">
              <IonButton color="primary" mode="md" expand="block" onClick={login}>Entrar</IonButton>
            </IonCol>
            <IonCol size="12" class="px-3">
              <p>É novo aqui? <Link to="/register">Criar conta</Link></p>
            </IonCol>
            <IonCol size="12" class="px-3">
              <IonRouterLink onClick={forgotPassword}>Esqueceu a senha?</IonRouterLink>
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

export default Login
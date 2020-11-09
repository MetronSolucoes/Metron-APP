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
import axios from "axios";

function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const Login: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const history = useHistory();
  const [email, setEmail] = useState<string>("admin@metron.com");
  const [password, setPassword] = useState<string>("mudar123");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogin = () => {
    if (!email) {
        setToastMessage("Please enter a valid email");
        setIserror(true);
        return setShowToast(true)
    }
    if (validateEmail(email) === false) {
        setToastMessage("Your email is invalid");
        setIserror(true);
        return setShowToast(true)
    }

    if (!password || password.length < 6) {
        setToastMessage("Please enter your password");
        setIserror(true);
        return setShowToast(true)
    }

    const loginData = {
        "email": email,
        "password": password
    }

    const api = axios.create({
        baseURL: `https://metron-api.herokuapp.com/api/v1/backoffice/`
    })

    api.post("/authentication", loginData)
        .then(res => {             
            history.push("/schedulinglist/" + email);
         })
         .catch(error=>{
            setToastMessage("Auth failure! Please create an account");
            setIserror(true)
         })
  };

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
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  // mode="md"
                  // class="pl-2"
                  // placeholder="email@example.com"
                  // onIonChange={(e: any) => setEmail(e.target.value)}
                  // inputmode="email" 
                  />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating" class="pl-2 input-text-color">Senha</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  // mode="md"
                  // onIonChange={(e: any) => setPassword(e.target.value)}
                  // class="pl-2" 
                  />
              </IonItem>
            </IonCol>
            <IonCol size="12" class="px-3">
              <IonButton color="primary" mode="md" expand="block" onClick={handleLogin}>Entrar</IonButton>
            </IonCol>
            <IonCol size="12" class="px-3">
              <p>É novo aqui? <Link to="/register">Criar conta</Link></p>
            </IonCol>
            {/* <IonCol size="12" class="px-3">
              <IonRouterLink onClick={forgotPassword}>Esqueceu a senha?</IonRouterLink>
              <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={2000}
              />
            </IonCol> */}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Login
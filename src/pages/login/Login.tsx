import React from 'react';
import { IonContent,
         IonItem,
         IonPage,
         IonInput,
         IonLabel,
         IonGrid,
         IonRow,
         IonImg,
         IonThumbnail,
         IonButton,
         IonText,
         IonCol } from '@ionic/react';


const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" class="d-flex justify-content-center">
              <IonItem>
                <IonImg class="img-size" src="assets/icon/metron.jpg" />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonText class="text-center">
                <h2>Login</h2>
              </IonText>
              <IonItem>
                <IonLabel position="floating" class="pl-2 input-text-color">E-mail</IonLabel>
                <IonInput type="email" mode="md" class="bordered-input pl-2" inputmode="email"></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating" class="pl-2 input-text-color">Senha</IonLabel>
                <IonInput type="password" mode="md" class="bordered-input pl-2"></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size="12" class="px-3">
              <IonButton color="primary" mode="md" expand="block">Entrar</IonButton>
            </IonCol>
            <IonCol size="12" class="px-3">
              <IonButton color="primary" mode="md" expand="block" fill="outline">Esqueceu sua senha?</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login
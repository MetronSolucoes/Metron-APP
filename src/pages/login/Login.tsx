import React, { useState } from 'react';
import {
  IonContent,
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
  IonCol,
  IonItemDivider,
  IonRouterLink,
  IonToast,
  IonFooter,
  IonToolbar,
  IonFab
} from '@ionic/react';


const Login: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
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
                <IonInput type="email" mode="md" class="pl-2" inputmode="email"></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating" class="pl-2 input-text-color">Senha</IonLabel>
                <IonInput type="password" mode="md" class="pl-2"></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size="12" class="px-3">
              <IonButton routerLink='/home' color="primary" mode="md" expand="block">Entrar</IonButton>
            </IonCol>
            <IonCol size="12" class="px-3">
              <IonButton color="success" mode="md" expand="block" fill="outline">Criar conta</IonButton>
            </IonCol>
            <IonCol size="12" class="px-3 d-flex justify-content-center">
              <IonRouterLink onClick={() => setShowToast(true)}>Esqueceu a senha?</IonRouterLink>
              <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Uma nova senha foi encaminhada para o e-mail inserido."
                duration={2000}
              />
              {/* <IonButton color="primary" mode="md" expand="block" fill="outline">Esqueceu sua senha?</IonButton> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login
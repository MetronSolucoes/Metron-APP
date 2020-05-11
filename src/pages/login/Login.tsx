import React from 'react';
import { IonContent,
         IonItem,
         IonPage,
         IonInput,
         IonLabel,
         IonGrid,
         IonRow,
         IonCol } from '@ionic/react';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h4>Login</h4>
              <IonItem>
                <IonLabel position="floating">E-mail</IonLabel>
                <IonInput type="email" mode="md"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login
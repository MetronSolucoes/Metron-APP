import React, { useState } from 'react';
import {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonButton,
    IonMenuButton,
    IonFab,
    IonFabButton,
    IonButtons,
    IonActionSheet,
    IonList,
    IonItem,
    IonLabel,
    IonInput
} from '@ionic/react';
import { filter, add, ellipsisVertical, trashOutline, createOutline } from 'ionicons/icons';

const EmployeesFilter: React.FC = () => {
    const [showActionSheet, setShowActionSheet] = useState(false);
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton auto-hide="false"></IonMenuButton>
                    </IonButtons>
                    <IonButtons slot="primary">
                        <IonButton>
                            <IonIcon icon={filter} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle class="text-center">Funcionários</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                    <IonCard>
                        <IonRow>
                            <IonCol>
                                <IonCardHeader>
                                    <IonItem>
                                        <IonLabel position="floating">Nome</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Cargo</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">CPF</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                </IonCardHeader>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    <IonFab horizontal="end" vertical="bottom">
                        <IonButton shape="round" routerLink="/employeeslist">
                           <IonLabel>FILTRAR</IonLabel>
                        </IonButton>
                    </IonFab>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default EmployeesFilter

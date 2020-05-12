import React from 'react';
import {
    IonContent,
    IonItem,
    IonPage,
    IonInput,
    IonLabel,
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
    IonTabBar,
    IonText,
    IonSelectOption,
    IonSelect,
    IonDatetime,
    IonFab
} from '@ionic/react';
import { walk, filter } from 'ionicons/icons';
import { Menu } from '../../components/Menu';

const SchedulingCreate: React.FC = () => {
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start">
                        <IonMenuButton auto-hide="false"></IonMenuButton>
                    </IonButton>
                    <IonTitle class="text-center">Agendar</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                    <IonCard>
                        <IonRow>
                            <IonCol >
                                <IonCardHeader>
                                    <IonItem>
                                        <IonLabel position="floating">Nome</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Contato</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Serviço</IonLabel>
                                        <IonSelect interface="popover">
                                            <IonSelectOption>Corte de barba</IonSelectOption>
                                            <IonSelectOption>Corte de cabelo</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Funcionário</IonLabel>
                                        <IonSelect interface="popover">
                                            <IonSelectOption>Luiz</IonSelectOption>
                                            <IonSelectOption>José</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Data</IonLabel>
                                        <IonDatetime display-format="DD/MM/YYYY" picker-format="DD/MM/YYYY"></IonDatetime>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Hora</IonLabel>
                                        <IonDatetime display-format="HH:mm" picker-format="HH:mm" ></IonDatetime>
                                    </IonItem>
                                </IonCardHeader>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                    <IonFab horizontal="end" vertical="bottom">
                        <IonButton routerLink="/schedulingList" shape="round">Agendar</IonButton>
                    </IonFab>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default SchedulingCreate
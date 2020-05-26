import React, { useState } from 'react';
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
    IonButton,
    IonMenuButton,
    IonSelectOption,
    IonSelect,
    IonDatetime,
    IonFab,
    IonFooter,
    IonButtons
} from '@ionic/react';

const SchedulingEdit: React.FC = () => {
  const [name, setName] = useState('João Silva')
  const [phone, setPhone] = useState('(14) 99999-9999')
  const [service, setService] = useState('Corte de Barba')
  const [employe, setEmploye] = useState('Luiz')
  const [date, setDate] = useState('2020/12/25')
  const [hour, setHour] = useState('14:22')

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton auto-hide="false"></IonMenuButton>
                    </IonButtons>
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
                                        <IonInput
                                          type="text"
                                          mode="md"
                                          class="pl-2"
                                          value={name}
                                          onIonChange={(e: any) => setName(e.target.value)} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Contato</IonLabel>
                                        <IonInput
                                          type="tel"
                                          mode="md"
                                          class="pl-2"
                                          value={phone} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Serviço</IonLabel>
                                        <IonSelect value={service} onIonChange={e => setService(e.detail.value)} interface="popover">
                                            <IonSelectOption>Corte de Barba</IonSelectOption>
                                            <IonSelectOption>Corte de Cabelo</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Funcionário</IonLabel>
                                        <IonSelect value={employe} onIonChange={e => setEmploye(e.detail.value)} interface="popover">
                                            <IonSelectOption>Luiz</IonSelectOption>
                                            <IonSelectOption>José</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Data</IonLabel>
                                        <IonDatetime display-format="DD/MM/YYYY" value={date} onIonChange={e => setDate(e.detail.value!)} picker-format="DD/MM/YYYY"></IonDatetime>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Hora</IonLabel>
                                        <IonDatetime display-format="HH:mm" value={hour} onIonChange={e => setHour(e.detail.value!)} picker-format="HH:mm" ></IonDatetime>
                                    </IonItem>
                                </IonCardHeader>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    <IonFab horizontal="end" vertical="bottom">
                        <IonButton routerLink="/schedulingList" shape="round">Atualizar Agendamento</IonButton>
                    </IonFab>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default SchedulingEdit
import React, { useState, useEffect } from 'react';
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

import * as service from '../../service/index'

const SchedulingCreate: React.FC = () => {
    const [services, setServices] = useState([])
    const [employes, setEmployes] = useState([])
    const [customers, setCustomers] = useState([])
    const [showEmployeSelect, setShowEmployeSelect] = useState(false)

    useEffect(() => {
        const loadServices = async () => {
            let response = await service.metron.service.get({ serviceId: '', per_page: '100' })
            setServices(response.data.services)
        }

        const loadEmployes = async () => {
            let response = await service.metron.employee.get({ employeeId: '', per_page: '100' })
            setEmployes(response.data.employes)
        }

        const loadCustomers = async () => {
            let response = await service.metron.customer.get({ customerId: '', per_page: '100' })
            setCustomers(response.data.customers)
        }

        loadServices().then(() => {
            loadEmployes().finally(() => {
                loadCustomers()
            })
        })
    }, [])

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
                                        <IonLabel position="floating">Cliente</IonLabel>
                                        <IonSelect interface="popover">
                                            {customers.map((customer) => {
                                                return <IonSelectOption>{customer.name}</IonSelectOption>
                                            })}
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Serviço</IonLabel>
                                        <IonSelect interface="popover">
                                            {services.map((service) => {
                                                return <IonSelectOption>{service.name}</IonSelectOption>
                                            })}
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Funcionário</IonLabel>
                                        <IonSelect interface="popover">
                                            {employes.map((employe) => {
                                                return <IonSelectOption>{employe.name}</IonSelectOption>
                                            })}
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
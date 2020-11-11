import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonToast,
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
  IonList
} from '@ionic/react';
import { filter, add, ellipsisVertical, trashOutline, createOutline } from 'ionicons/icons';

import * as service from '../../service/index'

const EmployeesList: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [employees, setEmployees] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getEmployees = async () => {
      let response = await service.metron.employee.get({employeeId: '', page: '1', perPage: '100'})
      setEmployees(response && response.data && response.data.employes)
    }
    
    getEmployees()
  }, [])

  console.log(employees)

  const edit = (employee: any) => {
    history.push('/employes/edit', employee)
  }

  const destroy = async (employeeId: any) => {
    let response = await service.metron.employee.destroy({employeeId: employeeId})

    if(response.status = 200) {
      setToastMessage('Funcionário excluído com sucesso')
      setShowToast(true)
      history.go(0)
    } else {
      setToastMessage('Algo de errado aconteceu')
      setShowToast(true)
    }
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton auto-hide="false"></IonMenuButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton routerLink="/employeesfilter">
              <IonIcon icon={filter} />
            </IonButton>
          </IonButtons>
          <IonTitle class="text-center">Funcionários</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonList>
            {employees && employees.map((employee) => (
              <IonCard key={employee.id}>
                <IonRow>
                  <IonCol >
                    <IonCardHeader>
                      <IonCardTitle>{employee.name} {employee.last_name}</IonCardTitle>
                      <IonCardSubtitle>{employee.email}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>{employee.phone}</IonCardContent>
                  </IonCol>
                  <IonFab horizontal="end" vertical="top">
                    <IonButtons>
                      <IonButton onClick={() => destroy(employee.id)}>
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                      <IonButton onClick={() => edit(employee)}>
                        <IonIcon icon={createOutline} />
                      </IonButton>
                    </IonButtons>
                  </IonFab>
                </IonRow>
              </IonCard>
            ))}
          </IonList>

          <IonFab horizontal="end" vertical="bottom">
            <IonFabButton routerLink="/employes/new">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>

        </IonGrid>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default EmployeesList
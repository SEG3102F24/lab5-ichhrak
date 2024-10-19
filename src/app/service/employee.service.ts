import { Injectable, inject } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  Firestore,
  collection,
  collectionData,
  addDoc
} from '@angular/fire/firestore';
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);

  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);

  get $(): Observable<readonly Employee[]> {
    // const employees = collection(this.firestore, 'employees');
    // return collectionData(employees) as Observable<Employee[]>;
    return this.employees$;
  }

  getEmployees(): Observable<Employee[]> {
    const employees = collection(this.firestore, 'employees');
    return collectionData(employees, { idField: 'id' }) as Observable<Employee[]>;
  }

  addEmployee(employee: Employee) {
    this.employees$.next([...this.employees$.getValue(), employee]);
    const employees = collection(this.firestore, 'employees');
    // @ts-ignore
    return addDoc(employees, employee);
  }
}

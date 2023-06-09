import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword, authState,createUserWithEmailAndPassword,updateProfile, UserInfo, UserCredential } from '@angular/fire/auth';
import { collection, getDocs, doc,docData, Firestore, getDoc, setDoc, updateDoc, addDoc, deleteDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { AccountUser } from '../models/user.model';
import {from, Observable, switchMap,of} from 'rxjs'
@Injectable({providedIn: 'root'})
export class UsersService{

    
    constructor(private firestore: Firestore, private authService: AuthService){}
    get getCurrentAccountProfile$():Observable<AccountUser | null>{
        return this.authService.currentUser$.pipe(
            switchMap((user)=>{
                if(!user?.uid){
                    return of(null);
                }
                const ref = doc(this.firestore, 'accounts',user?.uid);
                return docData(ref) as Observable<AccountUser>
            })
        )
            }
    addAccount(account: AccountUser): Observable<void>{
        const ref = doc(this.firestore, 'accounts',account.uid);
        return from(setDoc(ref,account));
    }
    updateAccount(account: AccountUser): Observable<void>{
        const ref = doc(this.firestore, 'accounts',account.uid);
        return from(updateDoc(ref,{...account}));
    }
}

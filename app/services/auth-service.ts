import {  Injectable } from "@angular/core";
//import * as firebase from 'firebase';

@Injectable()
export class AuthService{

    token : any;

    /*signup(username, password){
        firebase.auth()
            .createUserWithEmailAndPassword(username, password)
            .then(response=>console.log(response))
            .catch(err=>console.log(err));
    }

    signin(username, password){
        firebase.auth()
            .signInWithEmailAndPassword(username, password)
            .then(response=>{
                console.log(response);
                firebase.auth().currentUser.getIdToken()
                    .then(token=>{
                        console.log(token);
                        this.token= token;
                    })
                    .catch(err=>console.log(err));
            })
            .catch(err=>console.log(err));
    }

    getToken(){
        console.log(firebase.auth().currentUser.refreshToken)
        firebase.auth().currentUser.getIdToken()
            .then(token=>{
                console.log(token);
                this.token= token;
            })
            .catch(err=>console.log(err));
        return this.token;
    }*/
}


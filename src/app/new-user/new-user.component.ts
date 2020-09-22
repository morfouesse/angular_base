import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {//methode reactive, pas de chargement
    this.userForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        drinkPreference: ['',Validators.required],
        hobbies: this.formBuilder.array([])
      }
    );
  }

  onSubmitForm()
  {
    //toute les valeurs du formulaire
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      // formValue peut etre vide donc si il existe on prend la valeur sinon tableau vide
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  //typage strict -> retourne une array en formArray
  getHobbies()
  {
    return this.userForm.get('hobbies') as FormArray;
  }

  // ajoute un hobby 
  onAddHobby()
  {
    const newHobbyControl = this.formBuilder.control('',Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}

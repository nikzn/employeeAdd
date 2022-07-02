import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ServiceService } from '../sevices/service.service';


@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

registerForm=this.fb.group({

  fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  lname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  contact:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]



})


  constructor(private fb:FormBuilder,private api:ServiceService) { }

  ngOnInit(): void {
  }

  empsubmit()
  {
    var fname=this.registerForm.value.fname
    var lname=this.registerForm.value.lname
    var contact=this.registerForm.value.contact
    var email=this.registerForm.value.email
    var password=this.registerForm.value.password
   
      this.api.submit(fname,lname,contact,email,password)
      .subscribe(res=>{
        console.log(res);
        alert("successfully submitted")
        this.registerForm.reset();
      },
      err=>{
        alert("error found")
      }
      )
      
    
  }  

reset()
{

this.registerForm.reset();

}

}

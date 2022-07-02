import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../sevices/service.service';

@Component({
  selector: 'app-empviewall',
  templateUrl: './empviewall.component.html',
  styleUrls: ['./empviewall.component.css']
})
export class EmpviewallComponent implements OnInit {

 empdata:any
 id:any

 registerForm=this.fb.group({

  fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  lname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  contact:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  constructor(private api:ServiceService , private router:Router,private fb:FormBuilder) { 
  this.api.viewAll()
  .subscribe(res=>{
    this.empdata=res;
  })
   }

  ngOnInit(): void {
   
  }

  delete(e:any){
    this.api.delete(e.id)
    .subscribe(res=>
      {
        alert("Deleted Successfully!");
        this.router.navigateByUrl('')
      } 
     
      )
  }
  edit(e:any)
  {
    this.id=e.id;
  this.registerForm.controls['fname'].setValue(e.fname)
  this.registerForm.controls['lname'].setValue(e.lname)
  this.registerForm.controls['contact'].setValue(e.contact)
  this.registerForm.controls['email'].setValue(e.email)
  this.registerForm.controls['password'].setValue(e.password)  
  
}  

reset()
{

this.registerForm.reset();

}

update()
{
  var fname=this.registerForm.value.fname
  var lname=this.registerForm.value.lname
  var contact=this.registerForm.value.contact
  var email=this.registerForm.value.email
  var password=this.registerForm.value.password  
this.api.edit(fname,lname,contact,email,password,this.id)
.subscribe(res=>{
  alert("Updated Successfully")
})

}
}

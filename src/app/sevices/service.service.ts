import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 constructor(private http:  HttpClient) { }


submit(fname:any,lname:any,contact:any,email:any,password:any)
{
  const data =
  {
    fname,
    lname,
    contact,
    email,
    password
  }
  return this.http.post('http://localhost:3000/posts',data)
}

viewAll()
{
 
  return this.http.get('http://localhost:3000/posts')
}


edit(fname:any,lname:any,contact:any,email:any,password:any,id:any)
{
  const data =
  {
    fname,
    lname,
    contact,
    email,
    password
  }
  return this.http.put('http://localhost:3000/posts/'+id,data)
}

delete(id:any)
{
 
  return this.http.delete('http://localhost:3000/posts/'+id)
}

}



import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  show=true;

  list=[
{
    id:1,
    description:"ajith",
    done:false
  },

  {

    id:2,
    description:"kumar",
    done:false

},
{

  id:3,
  description:"krish",
  done:false
},
{

  id:4,
  description:"nishanth",
  done:false
},
{

  id:5,
  description:"gopi",
  done:false
},
{

  id:6,
  description:"sarath",
  done:false
},
{

  id:7,
  description:"raja",
  done:false
},




]
  

value=this.list;

btn(){

  this.show = !this.show;
  if(this.show==false){
this.value= this.list.filter(res=> {
return res.done == false;
  })


}else{
this.value=this.list;  
}

}

save(i,x) {
  this.list[i].done=x.target.checked;
}
}

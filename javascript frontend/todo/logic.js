class ToDo{
    database={
    }
    checkeditem ={
    }
    save(){
        console.log('icside save');
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }
    getData(){
        
        this.database =JSON.parse(localStorage.getItem("database"))
        this.checkeditem =JSON.parse(localStorage.getItem("checkeditem"))

    } 
    Add(){
       // this.getData()

       let text = inputtext.value

       if(text){
        console.log(text);
      let arr = []
      if(this.database.length==0)
        { 
        
       let text1=text.replaceAll(/ /g,"_")
        console.log(text);
        let key2=text1+'1'
        this.database[key2]=text
       console.log(this.database);
        this.save() 
        let lid ='checktext'+key2
        console.log(lid);
        for(let x in this.database){
        result.innerHTML = `<li class="list-group-item">
        <div class=" d-flex justify-content-between">
         <div>
             <input class="form-check-input me-1" type="checkbox"  onchange="obj1.check(value)" value=${x} id=${x}  class="check1"  >
             <label class="form-check-label ms-auto" for=${x} id=${lid}>${this.database[x]}</label>
         </div>
         <div><button type='button' id=${x} onClick="obj1.delete(id)">delete</button></div>
         </div>
         </li>`}
      }
    else{
        let arr = []
        for(let x in this.database){
            console.log(x);
            console.log(document.getElementById(x));
            let s = document.getElementById(x).checked
            if(s){
            arr.push(x)}
            console.log(arr);
        }
        result.innerHTML = ``

     let text1=text.replaceAll(/ /g,"_")
      let key2=text1+'1'
     this.database[key2]=text
     console.log(this.database);
        this.save() 
    let lid ='checktext'+key2
    console.log(lid);


      if(arr.length==0){
        for(let x in this.database)
            { 
                
             console.log(x);
             let lid ='checktext'+x
             let state = false
            result.innerHTML += `<li class="list-group-item">
            <div class=" d-flex justify-content-between">
             <div>
                 <input class="form-check-input me-1" type="checkbox"  onchange="obj1.check(value)" value="${x}" id=${x}  class="check1"  >
                 <label class="form-check-label ms-auto" for=${x} id=${lid}>${this.database[x]}</label>
             </div>
             <div><button type='button' id=${x} onClick="obj1.delete(id)">delete</button></div>
             </div>
             </li>`
            }
     
        }

      else{
       
            for(let x in this.database){
                let state = false
                console.log(x);
                let lid ='checktext'+x
                for(let z of arr)

                {
                    console.log(z);
                    if(z==x){
                    console.log(x);
                    result.innerHTML += `<li class="list-group-item" >
                    <div class=" d-flex justify-content-between">
                         <div>
                             <input class="form-check-input me-1" type="checkbox" onClick="obj1.check(value)" value="${x}" id=${x} class="check1" checked = 'true'>
                             <label style="text-decoration: line-through;"   class="form-check-label ms-auto" for=${x} id=${lid}>${this.database[x]}</label>
                         </div>
                         <div><button type='button' id=${x} onClick="obj1.delete(id)">delete</button></div>
                    </div>
                    </li>`
                    state=true
                }
                }
                if(!state){
                        console.log('inside checked');
                        
                result.innerHTML += `<li class="list-group-item" >
                <div class=" d-flex justify-content-between">
                     <div>
                         <input class="form-check-input me-1" type="checkbox" onClick="obj1.check(value)" value="${x}" id=${x} class="check1" >
                         <label   class="form-check-label ms-auto" for=${x} id=${lid}>${this.database[x]}</label>
                     </div>
                     <div><button type='button' id=${x} onClick="obj1.delete(id)">delete</button></div>
                </div>
                </li>`}
                
                    
                 
               
    
            }

      }
        
        }
    }
        else{
            alert('Please type something')
        }
        inputtext.value=""
    

    }
    check(e){
        console.log('check');
        console.log(e);
        console.log(document.getElementById(e));
        let s = document.getElementById(e).checked
        console.log(s);
        if(s)
        {
            console.log(('inside'));
            const id='checktext'+e
            console.log(id);
          let  l= document.getElementById(id)
            console.log(l);
        l.style.textDecoration="line-through"
        
         this.checkeditem[id]=e;
         console.log(this.checkeditem);
      }
      else{
        console.log(('inside'));
            let id='checktext'+e
            console.log(id);
          let  l= document.getElementById(id)
            console.log(l);
        l.style.textDecoration="none"
      this.checkeditem[id]=""
      }    
    }
    
    dispaly() {
        for(let x in this.database){
        
        let lid ='checktext'+x
        let state = false
       
                
        result.innerHTML += `<li class="list-group-item" >
        <div class=" d-flex justify-content-between">
             <div>
                 <input class="form-check-input me-1" type="checkbox" onClick="obj1.check(value)" value="${x}" id=${x} class="check1" checked = 'true'>
                 <label    class="form-check-label ms-auto" for=${x} id=${lid}>${this.database[x]}</label>
             </div>
             <div><button type='button' id=${x} onClick="obj1.delete(id)">delete</button></div>
        </div>
        </li>`

            }
        }
        

    
    delete(e){
        let arr = []
        for(let x in this.database){
            console.log( document.getElementById(x));
            let s = document.getElementById(x).checked
            if(s){
            arr.push(x)}
        }
        console.log(arr);
        console.log('inside delete');
        delete this.database[e];
        console.log(this.database);
        this.save()
        result.innerHTML = ``
        this.getData();
        console.log('inside diaply');
        if(arr.length>0)
        {
        for(let x in this.database){
            console.log(x);
            let lid ='checktext'+x
            let state = false
            for(let z of arr){           
                if(z==x){
                    console.log('inside checked');
                    
            result.innerHTML += `<li class="list-group-item" >
            <div class=" d-flex justify-content-between">
                 <div>
                     <input class="form-check-input me-1" type="checkbox" onClick="obj1.check(value)" value="${x}" id=${x} class="check1" checked = 'true'>
                     <label style="text-decoration: line-through;"   class="form-check-label ms-auto" for=${x} id=${lid}>${this.database[x]}</label>
                 </div>
                 <div><button type='button' id=${x} onClick="obj1.delete(id)">delete</button></div>
            </div>
            </li>`
            state=true
                }}
                if(!state){
                    result.innerHTML += `<li class="list-group-item" >
                    <div class=" d-flex justify-content-between">
                         <div>
                             <input class="form-check-input me-1" type="checkbox" onClick="obj1.check(value)" value="${x}" id=${x} class="check1" >
                             <label   class="form-check-label ms-auto" for=${x} id=${lid}>${this.database[x]}</label>
                         </div>
                         <div><button type='button' id=${x} onClick="obj1.delete(id)">delete</button></div>
                    </div>
                    </li>`
                }
            }
           

        }
        
     else{
        console.log('inside else');
            for(let x in this.database)
           { 
            console.log(x);
            let lid ='checktext'+x
            let state = false
            result.innerHTML += `<li class="list-group-item" >
            <div class=" d-flex justify-content-between">
                 <div>
                     <input class="form-check-input me-1" type="checkbox" onClick="obj1.check(value)" value="${x}" id=${x} class="check1" >
                     <label   class="form-check-label ms-auto" for=${x} id=${lid}>${this.database[x]}</label>
                 </div>
                 <div><button type='button' id=${x} onClick="obj1.delete(id)">delete</button></div>
            </div>
            </li>`}
        }
        
    }
    arr = []
}

obj1 = new ToDo()

obj1.dispaly()
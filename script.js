function scrollToSection(inName) {
    let section =document.getElementById(inName)
    section.scrollIntoView({behavior:"smooth"})
}
let sum = 0;

    function findId(element) {
        if (sum < 4) {
        let idName =element.id
        setBgColorById(element.id)
        sum++
        document.getElementById("seat-number").innerText=sum
        seatsLeft=stringInNumber("seats-left")
        document.getElementById("seats-left").innerText=seatsLeft - 1

       let  tableBody=document.getElementById("table-body")
       let tr= document.createElement("tr")
       let td1= document.createElement("td")
       let td2= document.createElement("td")
       let td3= document.createElement("td")

       td1.innerText = idName; 
       td2.innerText = "Economoy"
       td3.innerText="550"
        tr.appendChild(td1); 
        tr.appendChild(td2); 
        tr.appendChild(td3); 

        tableBody.appendChild(tr);

       let totalPrice=550*sum
       document.getElementById("total-price").innerText=totalPrice

    //    grend total 
    document.getElementById("grend-total").innerText=totalPrice

 

    }
    }


   
    


    document.getElementById("apply-btn").addEventListener("click", function () {
        let inputValue =document.getElementById("input-field").value
        if (sum>=4) {
            if (inputValue === "NEW15" && sum) {
                let grandPrice=stringInNumber("grend-total")
                let off=(grandPrice*15)/100
                document.getElementById("grend-total").innerText=grandPrice-off
                // let off =document.getElementById("discountPrice").innerText=(sumOfPrice*20)/100
                // document.getElementById("total").innerText=sumOfPrice-off.toFixed(2)
                hiddenElementById("lebel-input")
    
    
            }else if(inputValue === "Couple 20"){
                let grandPrice=stringInNumber("grend-total")
                let off=(grandPrice*20)/100
                document.getElementById("grend-total").innerText=grandPrice-off
                hiddenElementById("lebel-input")

            }else{
                alert("Invalid Cupon")
            }
        }else{
            alert("Bay More For Discount ")
        }
                 
     })

     if (sum>0) {
        
     }
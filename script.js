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


// <tr>
                              
//                               <td>C2</td>
//                               <td>Economoy</td>
//                               <td>550</td>
// </tr>
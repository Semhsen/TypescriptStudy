interface Product{
    id:number;
    name:string;
    unitPrice:number;
}
class Product2{
    id:number;
    name:string;
    unitPrice:number;
}
function save(product:Product){
    console.log(product.name + " kaydedildi.")
}
function save2(product2:Product2){
    console.log(product2.name + " kaydedildi.")
}
save({id:1, name:"semih" ,unitPrice:22})
let mouse=new Product2()
mouse.name="Rampage";   
save2(mouse)

interface PersonService{
    save();

}

class CustomerService implements PersonService{
    save(){
        
    }
}
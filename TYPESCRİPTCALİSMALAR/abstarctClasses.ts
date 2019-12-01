abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{//hepsinde ortak
        console.log("Kaydedildi.")
    }
    abstract hesapla():void;//değişebilir.
}
class TuketiciKredi extends KrediBase{
    
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Tüketici Kredisine Göre Hesap Yapıldı.")
    }
}
class KonutKredi extends KrediBase{
    
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Konut Kredisine Göre Hesap Yapıldı.")
    }
}
let tuketiciKredisi=new TuketiciKredi()
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let konutkredisi=new KonutKredi();
konutkredisi.hesapla();
konutkredisi.kaydet();

let kredi : KrediBase
kredi=new TuketiciKredi()
kredi=new KonutKredi()
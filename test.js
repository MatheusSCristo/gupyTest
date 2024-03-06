
const getSoma = () => {
    const i = 13;
    let soma = 0
    let k = 0
    while (k < i) {
        k++
        soma += k
        console.log(soma)
    }
}



const Fibonacci=(number)=>{
    let previousValue=0;
    let currentValue=1;
    while(previousValue<=number){
        console.log(previousValue)
        if(previousValue === number){
            console.log("O valor informado faz parte da sequencia de fibonacci!")
            return
        }
        
        let temp
        temp=previousValue
        previousValue=currentValue
        currentValue=temp+previousValue       
    }
    console.log('O valor informado não faz parte da sequencia de fibonacci!')
}


const reverseString=(text)=>{
    let newText='';
    for(let i=text.length-1;i>=0 ;i--){
        newText +=text[i]
        
    }
    console.log(newText)
}
getSoma()
Fibonacci(33)
reverseString('Acho que assim funciona tudo tranquilo!')

export default function ConvertIntoNum(str){

    let result= ""
    for(let i=0; i< str.length; i+=1){
        for(let j=0; j< 9; j+=1){
            if(str[i] === j.toString()){
                result+= str[i]
                break
            }
        }
    }
    
    return parseInt(result)
}
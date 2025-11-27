export function timeConverter(num)  {
    
    if(num < 60) return `${num}mins`

    let hour = Math.floor(num / 60);
    let minutes = num % 60;

    return `${hour}h ${minutes}mins`
    
}
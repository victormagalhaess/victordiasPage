export const getBirthday = ()=>{
    const yearDurationInSeconds = 31557600000;
    const birthday = new Date('2000/10/16');
    return Math.floor((Date.now() - birthday) / yearDurationInSeconds);
}
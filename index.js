let xp = 2.048;
let nome = 'TalehFps'

if (xp <= 1.000){
    
    xp = ('Ferro')
    
}else if (xp >= 1.001 && xp <= 2.000){
    
    xp = ('bronze')
    
}else if (xp >= 2.001 && xp < 6.001){
    
    xp = ('Prata')
    
}else if (xp >= 6.001 && xp <= 7.000){
    
    xp = ('Ouro')
    
}else if (xp >= 7.001 && xp <= 8.000){
    
    xp = ('Platina')
    
}else if (xp >= 8.001 && xp <= 9.000){
    
    xp = ('Ascendente')
    
}else if (xp >= 9.001 && xp <= 10.000){
    
    xp = ('imortal')
    
}else {
    
    xp = ('Radiante')
}
console.log(`O Herói de nome ${nome}, está no nível de ${xp}`)

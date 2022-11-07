const characterService = {
  getByCharacterList:(characters)=>{
    characters.map(item=>item.split('/').slice(-1)[0])
  }
}

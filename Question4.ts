function capitalizeFirstLetters(str: string): string {
    
    const words = str.split(/\s+/);
  
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    return capitalizedWords.join(" ");
  }
  
  const inputString = "this is my first typescript assignment";
  const capitalizedString = capitalizeFirstLetters(inputString);
  console.log(capitalizedString);
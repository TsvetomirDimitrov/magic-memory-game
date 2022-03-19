
  // shuffle cards
  export const shuffleCards = (cardImages) => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random()}))

	return shuffledCards
  }


 
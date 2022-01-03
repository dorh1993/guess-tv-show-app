let winCounter: number = 0
let lostCounter: number = 0
let hintCounter: number = 0

export function showNotification(setter: any) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function statistics(counterType: string) {
  switch (counterType) {
    case ('win'):
      winCounter++;
      break;
    case ('lost'):
      lostCounter++;
      break;
    case ('hint'):
      hintCounter++;
      break;
    default:
      break;
  }
}

export function getStatistics() {
  const stat = {
    winCounter,
    lostCounter,
    hintCounter,
  }
  return stat
}


export function checkWin(correct: string, wrong: string[], word: string) {
  let status = 'win';

  // Check for win
  if (correct != word) {
    status = '';
  };

  // Check for lose
  if (wrong.length === 3) status = 'lose';

  return status
}
export function showNotification(setter: any) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
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
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

// Garante que todos começam fechados (inclusive ao dar refresh)
/*document.querySelectorAll('.acordeon').forEach(acordeon => {
  acordeon.classList.remove('open');
});*/


acordeonTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const atual = trigger.closest('.acordeon');

    document.querySelectorAll('.acordeon.open').forEach(aberto => {
      if (aberto !== atual) {
        aberto.classList.remove('open');
      }
    });

    atual.classList.toggle('open');
  });
});

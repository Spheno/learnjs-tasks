if (-1 || 0) alert( 'first' ); // alert выполнится, значение if будет true (-1)
if (-1 && 0) alert( 'second' ); // alert не выполнится, значение if будет false (0)
if (null || -1 && 1) alert( 'third' ); //   alert выполнится, значение if будет true (1)
var weekday = '';
weekday = prompt('Qué dia de la semana es hoy');

switch(weekday)
{
	case "Lunes":
		console.log('Es el comienzo de una semana aburrida');
	break;

	case "Viernes":
		console.log('De Carrete!');
	break;

	default:
		console.log('Es otro dia aburrido....');
	break;
}


import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s atrás',
    s: 'a alguns segundos',
    m: 'a minute',
    mm: '%d minutos',
    h: 'a uma hora',
    hh: '%d horas',
    d: 'a um dia',
    dd: '%d dias',
    M: 'a um mês',
    MM: '%d meses',
    y: 'a year',
    yy: '%d anos'
  }
})

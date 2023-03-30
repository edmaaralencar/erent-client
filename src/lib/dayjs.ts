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
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutos',
    h: 'an hour',
    hh: '%d horas',
    d: 'a day',
    dd: '%d dias',
    M: 'a month',
    MM: '%d meses',
    y: 'a year',
    yy: '%d anos'
  }
})

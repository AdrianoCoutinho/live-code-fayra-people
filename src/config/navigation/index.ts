export interface NavigationType {
  url: string;
  label: string;
}

const navigation: NavigationType[] = [
  { url: '/', label: 'Início' },
  { url: '/searchPeople', label: 'Pessoas' },
  { url: '/contact', label: 'Contato' }
];

export default navigation;

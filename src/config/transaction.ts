import File from "../assets/file-storage.svg";
import Flight from "../assets/flights.svg";
import Sound from "../assets/megaphone.svg";

const TRANSACTION =  [
  {
    title: 'Amazon',
    date: '15 May 2025',
    amount: '1,250',
    type: 'CREDIT',
    icon: 'file',
    color: '#009DFF1A',
    iconComp: File,
  },
  {
    title: 'IndiGo Airlines',
    date: '12 May 2025',
    amount: '6,300',
    type: 'DEBIT',
    icon: 'flight',
    color: '#00D6B51A',
    iconComp: Flight,
  },
  {
    title: 'Spotify Premium',
    date: '10 May 2025',
    amount: '199',
    type: 'DEBIT',
    icon: 'sound',
    color: '#F251951A',
    iconComp: Sound,
  },
  {
    title: 'Google Drive',
    date: '08 May 2025',
    amount: '650',
    type: 'DEBIT',
    icon: 'file',
    color: '#009DFF1A',
    iconComp: File,
  },
];

export default TRANSACTION;
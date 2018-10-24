import ss from '../images/SS (1).jpg';
import glit from '../images/glit.jpg';
import bhangra from '../images/bhangra.jpg';
import groovz from '../images/groovz.jpg';
import tlt from '../images/TLT pfsdt2-min.jpg';

export default [
    {
        id: 1,
        title: 'Star Night',
        titleLine: 'Sukhwinder Singh Live',
        date: '28th October 2018',
        location: 'Main Stage',
        coverPhoto: ss,
        isEvent: false,
        shouldSplit: true,
    },
    {
        id: 2,
        title: 'Pro Night',
        titleLine: 'The Local Train',
        date: '27th October 2018',
        location: 'Main Stage',
        coverPhoto: tlt,
        isEvent: false,
        //poster: '/Images/shows/Farhan.jpg',
        shouldSplit: true,
    },
    {
        id: 3,
        title: 'Groovz Finals',
        titleLine: 'Bollywood Dance',
        date: '26th October 2018',
        location: 'Main Stage',
        coverPhoto: groovz,
        shouldSplit: false,
        isEvent: false,
        //eventId: '/events/119',
    },
    {
        id: 4,
        title: 'Gliterrati Finals',
        titleLine: 'Fashion Night',
        date: '26th October 2018',
        location: 'Main Stage',
        coverPhoto: glit,
        //poster: '/Images/shows/gl.jpg',
        isEvent: false,
        //eventId: '/events/178',
        shouldSplit: false,
    },
    {
        id: 5,
        title: 'Bhangra Theque Finals',
        titleLine: 'Beat the Punjabi Beats',
        date: '26th October 2018',
        location: 'Main Stage',
        coverPhoto: bhangra,
        //poster: '/Images/shows/bhangraT.jpg',
        isEvent: false,
        //eventId: '/events/122',
        shouldSplit: false,
    }
]
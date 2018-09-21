import farhanPicture from '../images/farhan.jpg';
import glit from '../images/glit.jpg';
import bhangra from '../images/bhangra.jpg';
import groovz from '../images/groovz.jpg';

export default [
    {
        id: 1,
        title: 'Star Night Pecfest 2017',
        titleLine: 'Farhan Live',
        date: '',
        location: '',
        coverPhoto: farhanPicture,
        isEvent: false,
        //poster: '/Images/shows/Farhan.jpg',
        shouldSplit: true,
    },
    {
        id: 2,
        title: 'Groovz',
        titleLine: 'Bollywood Dance',
        date: '',
        location: '',
        coverPhoto: groovz,
        shouldSplit: false,
        isEvent: false,
        //eventId: '/events/119',
    },
    {
        id: 3,
        title: 'Gliterrati',
        titleLine: 'Fashion Night',
        date: '',
        location: '',
        coverPhoto: glit,
        //poster: '/Images/shows/gl.jpg',
        isEvent: false,
        //eventId: '/events/178',
        shouldSplit: false,
    },
    {
        id: 4,
        title: 'Bhangra Theque',
        titleLine: 'Beat the Punjabi Beats',
        date: '',
        location: '',
        coverPhoto: bhangra,
        //poster: '/Images/shows/bhangraT.jpg',
        isEvent: false,
        //eventId: '/events/122',
        shouldSplit: false,
    }
]
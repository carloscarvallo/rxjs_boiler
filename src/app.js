import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');
const btn = $('#btn');
const input = $('#input');
const output = $('#output');
const data = $('#data')

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
    function( e ){
        console.log('Clicked');
    },
    function( err ) {
        console.log(err);
    },
    function() {
        console.log('Completed');
    })


const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
    function (e) {
        // console.log('Clicked');
        console.log(e.target.value)
        data.html("<p>"+ e.target.value +"</p>")
    },
    function (err) {
        console.log(err);
    },
    function () {
        console.log('Completed');
    })

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove')

moveStream$.subscribe(
    function (e) {
        output.html('<h1>X:'+e.clientX+' Y: '+e.clientY+'</h1>')
    },
    function (err) {
        console.log(err);
    },
    function () {
        console.log('Completed');
    })

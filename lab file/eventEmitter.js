const EventEmitter=require('events'); //class

const myEmitter=new EventEmitter();  //object creation
//methods
//.on()=listener
myEmitter.on('greet', (name)=>{
    console.log(`hello,${name}! welcome to node js`);
});
myEmitter.on('exit',()=>{
    console.log('Application closed');
});

//.emit()=trigger
myEmitter.emit('greet','Aakriti Agrawal');
myEmitter.emit('exit');
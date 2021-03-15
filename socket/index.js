
export const socketController = (socket, io)=> {
    console.log('ccccccccccc')
    socket.emit('yes','yes');
    socket.on('no', (arg)=>{
        socket.emit('no', 'nofrom server')
    })
    socket.join(socket.handshake.query.roomName, ()=> {
        
    })
}
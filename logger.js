const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg){
        // Call event
        this.emit('message', {
            id: uuid.v4(),
            msg
        })
    }

}
const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener: ${data.id}`))

logger.log('helll ')
logger.log('ooooo ')
logger.log('hahha ')
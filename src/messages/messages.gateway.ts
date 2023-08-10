import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer,ConnectedSocket } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import {Server,Socket} from "socket.io"
import { Message } from './entities/message.entity';
// import {} from "@nestjs/common"

@WebSocketGateway({
  cors:{
    origin:"*"
  }
})
export class MessagesGateway {
  @WebSocketServer()
  server:Server
  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage("on_update")
  updateSeat(@MessageBody("id")id:number,@MessageBody("onHold")onHold:boolean){
    // return this.messagesService.updateSeats(data)
    console.log(id,onHold)
    // return this.messagesService.updateSeats(id,onHold);
    return 
    
  }

  @SubscribeMessage("join")
  joinRoom(@MessageBody("id") id:number,@MessageBody("onHold")onHold:boolean){
    // return this.messagesService.updateOnHold(id,onHold);
    
  }
  @SubscribeMessage("typing")
  async typing(){

  }

  @SubscribeMessage('findOneMessage')
  findOne(@MessageBody("id") id: number,@MessageBody("onHold")onHold:boolean,@ConnectedSocket()client:Socket) {
    console.log(id,onHold)
    let tempSeats =  this.messagesService.findOne(id,onHold);
    client.broadcast.emit("allSeats",tempSeats)
    return tempSeats;
  }


}

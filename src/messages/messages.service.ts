import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {

  seats:Message[] = [ {
    id:1,
    booked:false,
    onHold:false
  },
  {
    id:2,
    booked:false,
    onHold:false
  },
  {
    id:3,
    booked:false,
    onHold:false
  },
  {
    id:4,
    booked:false,
    onHold:false
  },
  {
    id:5,
    booked:false,
    onHold:false
  },
  {
    id:6,
    booked:false,
    onHold:false
  },
  {
    id:7,
    booked:false,
    onHold:false
  },
  {
    id:8,
    booked:false,
    onHold:false
  },
  {
    id:9,
    booked:false,
    onHold:false
  },
  {
    id:10,
    booked:false,
    onHold:false
  },]
  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message';
  }

  findAll() {
    return this.seats;
  }
  findOne(id:number,onHold:boolean) {
    console.log(id,onHold,this.seats[id].onHold)
    this.seats[id-1].onHold = onHold
    // let tempSeats =  this.seats[id-1].onHold = onHold
    return this.seats
  }
  updateOnHold(id:number,onHold:string){
    return this.seats;
  }

  updateSeats(id:number,onHold:boolean) {
    console.log(id,onHold)
    let seats = this.seats[id-1].onHold = onHold
    
    

    return this.seats;

    // this.seats[data.id]
    // return ;
  }


}

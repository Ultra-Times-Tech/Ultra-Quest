import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common'
import {UserService} from './user.service'
import {User} from './user.entity'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id)
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.update(id, user)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id)
  }
}
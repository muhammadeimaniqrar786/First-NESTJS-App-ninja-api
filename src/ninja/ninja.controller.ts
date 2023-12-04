import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjaService } from './ninja.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('ninja')
export class NinjaController {
    constructor(private readonly ninjaService: NinjaService) {}

    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchunks') {
        return this.ninjaService.getNinjas(weapon);
    }

    @Get(':id')
    getNinja(@Param('id') id: string) {
        return this.ninjaService.getNinja(+id);
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {        
        return this.ninjaService.createNinja(createNinjaDto);
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjaService.updateNinja(+id, updateNinjaDto);
    }

    @Delete(':id')
    deleteNinja(@Param('id') id: string) {
        return this.ninjaService.deleteNinja(+id);
    }
}

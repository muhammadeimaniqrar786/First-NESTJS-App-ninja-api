import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjaService {
    private ninjas = [
        {id: 1, name: 'ninja 1', weapon: 'stars'},
        {id: 2, name: 'ninja 2', weapon: 'nunchunks'},
    ];

    getNinjas(weapon?: 'stars' | 'nunchunks') {
        if (weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }

        return this.ninjas;
    }

    getNinja(id: number) {
        const ninja = this.ninjas.find((ninja) => ninja.id === id);

        if (!ninja) {
            throw new Error('Ninja not found.');
        }

        return ninja;
    }

    createNinja(createNinjaDto: CreateNinjaDto) {
        const newNinja = {
            ...createNinjaDto,
            id: Date.now()
        }

        this.ninjas.push(newNinja);

        return newNinja;
    }

    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
        this.ninjas = this.ninjas.map((ninja) => {
            if (ninja.id === id) {
                return { ...ninja, ...updateNinjaDto };
            }

            return ninja;
        })

        return this.getNinja(id);
    }

    deleteNinja(id: number) {
        console.log(id);
        
        const toBeRemoved = this.getNinja(id);

        this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

        return toBeRemoved;
    }
}

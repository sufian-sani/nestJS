import {Controller, Get} from '@nestjs/common';
import {ComputerService} from "./computer.service";

@Controller('computer')
export class ComputerController {
    constructor(private computerService: ComputerService) {}

    @Get()
    getComputerService(){
        return this.computerService.getComputer()
    }
}

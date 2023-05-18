import {DepartmentDto} from "../../departments/dto/department-dto";

export class BrigadeDto {
  brigadeid: number;
  name: string;
  department: DepartmentDto;
}

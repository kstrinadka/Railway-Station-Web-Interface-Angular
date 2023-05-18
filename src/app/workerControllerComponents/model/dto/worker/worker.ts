
export class Worker {
  workerid: string;
  name: string;
  surname: string;
  middlename: string;
  gender: string;
  birthday: string;
  countchildren: string;
  stationstartdate: string;
  salary: string;
  departmentid: number;
  brigadeid: number;
  department: Department;
  brigade: Brigade;
}
export class WorkerFront {
  workerid: string;
  name: string;
  surname: string;
  middlename: string;
  gender: string;
  birthday: string;
  countchildren: string;
  stationstartdate: string;
  salary: string;
  departmentid: number;
  brigadeid: number;
}


export class Department {
  departmentid: number;
  name: string;
}

export class Brigade {
  brigadeid: number;
  name: string;
  department: Department;
}

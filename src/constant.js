export const CREW = {
    COURSE : '',
    FRONTCREWLIST : [],
    BACKCREWLIST : []
}

export const ERROR = {
    CREW_NAME_EMPTY_ERROR : '크루이름은 공백일 수 없습니다.',
    CREW_NAME_LENGTH_ERROR : '크루이름은 5글자를 초과할 수 없습니다.',
    CREW_NAME_DUPLICATE_ERROR : '크루이름은 중복될 수 없습니다.'
}

export class FRONTCREW{
    constructor(name){
        this.name = name;
    }
    
}

export class BACKCREW{
    constructor(name){
        this.name = name;
    }
}
const COLUMN_ID = 0;
const COLUMN_NAME = 1;
const COLUMN_SURNAME = 2;
const COLUMN_NATIONALITY = 3;
const COLUMN_WEIGHT = 4;
const COLUMN_HEIGHT = 5;
const COLUMN_BMI = 6;
const COLUMN_LB_WEIGHT = 7;
const COlUMN_LENGHT_SURNAME = 6;
const WEIGHT_TO_LB = 2.205;

export default class FileSorter {

    constructor(inputData) {
        if (FileSorter.exists) {
            console.log(`Instance is alredy created, use last instance of FileSorter`);
            return FileSorter.instance;
        }

        FileSorter.instance = this;
        FileSorter.exists = true;
        this.inputData = inputData;
    }

    // getFirstRow() {
    //     return this.inputData.shift();
    // }

    filterByNationality(nationality) {
        return this.inputData
            .filter(element => element[COLUMN_NATIONALITY] === nationality);
    }
    
    searchWeightBetween(min, max) {
        return this.inputData
            .filter(element => element[COLUMN_WEIGHT] >= min && element[COLUMN_WEIGHT] <= max);
    }

    searchBeginningName(nameMember) {
        return this.inputData
            .filter(element => element[COLUMN_NAME].includes(nameMember));
    }

    showSurnameLess(lengthSurname) {
        return this.inputData
            .filter(element => element[COLUMN_SURNAME].length < lengthSurname);
    }

    showLengthSurname() {
        this.inputData.forEach(element => {
            const result = element[COLUMN_SURNAME].length;

            element[COlUMN_LENGHT_SURNAME] = result.toFixed();
        })
    }

    showBmiMember() {
        this.inputData.forEach(element => {
            const bmiHeight = Math.pow(element[COLUMN_HEIGHT] / 100, 2);
            const solution = element[COLUMN_WEIGHT] / bmiHeight;
            
            element[COLUMN_BMI] = !isNaN(solution) ? solution.toFixed(2) : 'No data';
        });

        return this.inputData.filter(extraHeaders => extraHeaders[COLUMN_ID] != 'id');
    }

    showWeightLb() {
        this.inputData.forEach(element => {
            const weight = element[COLUMN_WEIGHT];
            const solution = weight * WEIGHT_TO_LB;

            element[COLUMN_LB_WEIGHT] = solution <= 0 ? 'No data' : solution.toFixed(2);
        });
        
        return this.inputData.filter(extraHeaders => extraHeaders[COLUMN_ID] != 'id');
    }
}
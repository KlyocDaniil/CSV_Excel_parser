import xl from 'excel4node'
import FileParser from './FileParser.mjs';

export default class ExcelWriter {

    constructor (sorter) {
        this.sorter = sorter;
        
        this.workBook = new xl.Workbook();
        this.workSheet = this.workBook.addWorksheet('Sheet 1');
        this.file = new FileParser('./input_data.csv');
    }

    filterByNationality(nationality) {
        const path = './src/outputs/Excel1Task.xlsx';

        this.writeHeadersXLSX(path);
    
        const result = this.sorter.filterByNationality(nationality);
        
        this.writeOutputExcel(path, result);
    }

    searchWeightBetween(min, max){
        const path = './src/outputs/Excel2TASK.xlsx';

        this.writeHeadersXLSX(path);
        
        const result = this.sorter.searchWeightBetween(min, max);
        
        this.writeOutputExcel(path, result);
    }

    searchBeginningName(nameMember) {
        const path = './src/outputs/Excel3TASK.xlsx';

        this.writeHeadersXLSX(path);

        const result = this.sorter.searchBeginningName(nameMember);
        
        this.writeOutputExcel(path, result);
    }

    showSurnameLess(lengthSurname) {
        const path = './src/outputs/Excel4TASK.xlsx';

        this.writeHeadersXLSX(path);
        
        const result = this.sorter.showSurnameLess(lengthSurname);
        
        this.writeOutputExcel(path, result);
    }

    showBmiMember() {
        const path = './src/outputs/Excel5TASK.xlsx';

        this.writeHeadersXLSX(path, ['BMI'])

        const result = this.sorter.showBmiMember();
        
        this.writeOutputExcel(path, result);
    }

    writeHeadersXLSX(path, headersToAdd) {
        const headers = this.file.getFirstRow(); // !!!
        const row = 1;
        const nextColumn = 1;
        
        if (headersToAdd === undefined) {
                headers.forEach((header, index) => {
                    this.workSheet.cell(row, index + nextColumn)
                        .string(header);
                })
            
        } else {
            headers.push(headersToAdd);
            headers.forEach((header, index) => {
                this.workSheet.cell(row, index + nextColumn)
                    .string(header);
            })
        }
    
        this.workBook.write(path);
    }

    writeOutputExcel(path, rowsData) {
        let infoPeopleRow = 2;

        rowsData.forEach(person => {
            person.forEach((personInfo, index) => {
                this.workSheet.cell(infoPeopleRow, index + 1)
                    .string(personInfo);
            })
            infoPeopleRow += 1;
        })

        this.workBook.write(path);
    }
}